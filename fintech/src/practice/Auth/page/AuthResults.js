import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../../component/Header'
import queryString from "query-string";
import axios from 'axios';

const AuthResults = () => {
    // 현재 페이지의 url을 가져옴
    const {search} = useLocation();
    // url에서 code만 가져온다. 인증코드만 받아왔지 아직 accesstoken은 못받아옴
    // 인증코드를 받아왔다는 것 => 사용자가 정보 제공을 동의를 했다는 것 
    const {code} = queryString.parse(search);
    const [accessToken, setAccesToken] = useState("토큰 받아오기 전");

    // useEffect : 리액트 컴포넌트가 렌더링 될 때마다 특정 작업 실행하도록 하게 한다
    useEffect(() => {
        getAccessToken();
    }, []);

    const getAccessToken = () => {
        console.log("토큰을 받아옵니다");
        

        // 전달하려는 정보를 객체화
        const sendData = {
            code: code,
            client_id: "",
            client_secret: "",
            redirect_uri: "http://localhost:3000/authResult2",
            grant_type: "authorization_code"
        }

        // 객체를 쿼리스트링형식으로 변경
        const encodedSendData = queryString.stringify(sendData);

        const option = {
            method: "POST",
            url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
            headers: {
                "Content-Type" : "application/x-www-form-urlencoded",
            },
            data: encodedSendData,
        };

        axios(option).then((response) => {
            console.log(response.data.access_token);
            setAccesToken(response.data.access_token);
        })
    }; 
    return (
        <div>
            <Header title="인증결과"></Header>
            <p>인증 코드 : {code} </p>
            <p>AccessToken : {accessToken}</p>
        </div>
    )
}

export default AuthResults

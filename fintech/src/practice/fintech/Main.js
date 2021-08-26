import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../../component/Header';
import Card from './Card';

// 개인 등록 계좌 가져오기
const Main = () => {
    const [accountList, setAccountList] = useState([]);

    useEffect(() => {
        getAccountList();
    }, []);

    const getAccountList = () => {
        // 계정을 가져오기 위해서 접근토큰과 사용자 시퀀스 넘버를 로컬 스토리지에서 가져와야한다.
        const accessToken = localStorage.getItem("accessToken");
        const userSeqNo = localStorage.getItem("userSeqNo");

        const option = {
            method: "GET",
            // 프록시에서 
            url: `/v2.0/user/me`,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                user_seq_no: userSeqNo,
                include_cancel_yn: "Y",
                sort_order: "D"
            },
        };

        axios(option).then(({data}) => {
            console.log(data);
            setAccountList(data.res_list);
        });
    };
    return (
        <div>
            <Header title={"메인"}></Header>
            {accountList.map((account) => {
                return (
                    <Card
                        key= {account.fintech_use_num}
                        bankName={account.bank_name}
                        fintechUseNo={account.fintech_use_num}
                    >
                    </Card>
                )
            })}
        </div>
    )
}

export default Main

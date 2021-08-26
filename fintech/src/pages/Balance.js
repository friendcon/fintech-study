import React , {useEffect, useState}from 'react'
import BalanceCard from '../component/balance/BalanceCard'
import { useLocation } from 'react-router'
import queryString from "query-string"
import axios from 'axios'


import Header from '../component/Header'

const Balance = () => {
    const {search} = useLocation();
    const {fintechUseNo} = queryString.parse(search);
    const [balance, setBalance] = useState();
    console.log(fintechUseNo); 

    const getTransId = () => {
        let countnum = Math.floor(Math.random()*1000000000)+1;
        let transId = "M202113069"+countnum;
        return transId;
    };

    useEffect(() => {
        getBalanceData();
    }, []);


    // 잔액조회 기능 구현 
    const getBalanceData = () => {
        console.log("잔액을 조회합니다");
        const accessToken = localStorage.getItem("accessToken");

        // 요청 메서드, 파라미터설정
        const option = {
            method: "GET",
            url: `/v2.0/account/balance/fin_num`,
            headers: {
                "Authorization" : `Bearer ${accessToken}`,
            },
            params: {
                bank_tran_id: getTransId(),
                fintech_use_num : fintechUseNo,
                tran_dtime: "20210826132500",
            },
        };

        axios(option).then(({data}) => {
            console.log(data);
            setBalance(data);
        });
    }
    return (
        <div>
            <Header title="잔액조회"></Header>
            <BalanceCard bankName={balance.bank_name}
            fintechNo={balance.fin}
            balance={balance.balance_amt}></BalanceCard>
        </div>
    );
};

export default Balance

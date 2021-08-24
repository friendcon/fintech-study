import React from 'react'
import axios from "axios"


const AxiosTest = () => {
    const handleGetData = () => {
        console.log("버튼 이벤트");
        axios.get("https://newsapi.org/v2/everything?q=kpop&from=2021-07-24&sortBy=publishedAt&apiKey=abdb299e4bf14806926c7ea16da6a0ec").then((response) => {
            console.log(response);
        });
    };
    return (
        <div>
            <button onClick={handleGetData}>데이터 가져오기</button>
        </div>
    );
};

export default AxiosTest

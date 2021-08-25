import axios from 'axios';
import React, {useState} from 'react'
import Header from '../Header'
import ItemList from '../ItemList';
import Search from '../Search';

const NewsMain = () => {
    const [searchText, setSearchText] = useState(); // 검색키워드
    const [searchResult, setSearchResult] = useState([]); // 검색결과

    // 검색어 값 렌더링
    const handleSearchTextChange = (e) => {
        const {value} = e.target;
        setSearchText(value);
    };

    // 버튼 클릭시 이벤트 
    const handleSearchButtonClick = () => {
        console.log(searchText);
        axios
            .get(
                `https://newsapi.org/v2/everything?q=${searchText}&from=2021-08-24&sortBy=popularity&apiKey=abdb299e4bf14806926c7ea16da6a0ec&language=ko`
            )
            .then((response) => {
                console.log(response.data.articles);
                setSearchResult(response.data.articles);
            });

    };

    return (
        <div>
            <Header title="뉴스 검색"></Header>
            <Search handleClick={handleSearchButtonClick}
            handleInput={handleSearchTextChange}></Search>
            <ItemList searchResult={searchResult}></ItemList>
        </div>
    )
}

export default NewsMain

import React from 'react'

const Item = ({title, author, content, url, publishedAt }) => {
    return (
        <div>
            <p>제목 : {title}</p>
            <p>작성자 : {author}</p>
            <p>내용 : {content}</p>
            <p>날짜 : {publishedAt}</p>
            <a href={url}>기사로 이동하기</a>
        </div>
    );
};

export default Item

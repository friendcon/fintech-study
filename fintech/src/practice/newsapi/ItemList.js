import React from 'react'
import Item from './Item'

const ItemList = ({searchResult}) => {
    return (
        <div>
            {searchResult.map((news, index) => {
                return (
                    <Item
                        title={news.title}
                        author={news.author}
                        contents={news.content}
                        publishedAt={news.publishedAt}
                        url={news.url}
                        key={index}
                    >
                    </Item>
                );
            })}
        </div>
    );
};

export default ItemList

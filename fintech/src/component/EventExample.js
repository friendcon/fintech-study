import React, {useState} from 'react'

// Hook 내에서 여러가지 변경
const EventExample = () => {
    // let contents = "내용입니다";
    const [contents, setContents] = useState("기본값");
    const handleChange = (e) => {
        // console.log(e.target.value);
        setContents(e.target.value);
        
    };
    const handleClick = () => {
        alert(contents);
    }
    return (
        <div>
            <p>{contents}</p>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>확인</button>
        </div>
    )
}

export default EventExample

// rafce 자동완성
import React from 'react'
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  height: 60px;
  border-bottom: 1px solid #000000;
  text-align: text;
  color: red;
  justify-content: center;
`;

const Header = ({title}) => {
    return (
        <div>
            <HeaderBlock>
                <p>{title}</p>
            </HeaderBlock>
        </div>
    )
}
// 웹으로 내보내겠다는 의미
export default Header

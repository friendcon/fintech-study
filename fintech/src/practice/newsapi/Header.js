import React from 'react';
import styled from 'styled-components';

// style 적용
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

export default Header

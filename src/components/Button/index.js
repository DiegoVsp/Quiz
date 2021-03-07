import styled from 'styled-components';
import React from 'react';

const ButtonPage = styled.a`
  display:block;
  padding:5px 15px;
  background:yellow;
  color:#111;
  cursor: pointer;
  width:100%;
  /* border-radius:4px; */
  outline:none;
  text-align:center;
  font-weight:bold;
  text-transform:uppercase;
  margin-top:5px;
  &:hover{
    background:purple;
  }
`;

export default function Button(props) {
  return (
    <ButtonPage>
      Jogar
    </ButtonPage>
  );
}

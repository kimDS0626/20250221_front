import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import logo_b from "./imgs/logo_b.png";
function FindId() {
  return (
    <FindIdContainer>
      <FindIdSection>
        <FindLogo>
          <img src={logo_b} />
        </FindLogo>

        <Title>
          <h4> 아이디찾기 </h4>
        </Title>
        <FindiIdInput>
          <div>
            <input type="text" placeholder="이름"></input>
            <input type="password" placeholder="전화번호"></input>
          </div>
        </FindiIdInput>

        <CheckBox>
          <button>확인</button>
        </CheckBox>
      </FindIdSection>
    </FindIdContainer>
  );
}

const FindIdContainer = styled.div`
  width: 1920px;
  min-height: 500px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ----------------------------------------------------------------------------------

const FindIdSection = styled.div`
  margin: auto;
  align-items: center;
  margin-top: 130px;
  padding-top: 30px;
  width: 600px;
  min-height: 500px;
  background-color: #f4f4f4;
  margin-bottom: 100px;
`;
const FindLogo = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  width: 600px;
  height: 40px;
  background-color: #f4f4f4;
  margin-bottom: 30px;
  img {
    width: 145px;
    height: 35px;
  }
`;

const Title = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 600px;
  height: 40px;
  margin-bottom: 30px;
  h4 {
    font-size: 36px;
    color: #111111;
    font-weight: bold;
  }
`;

const FindiIdInput = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column; /* 세로로 정렬 */
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
  background-color: #f4f4f4;
  gap: 20px; /* input 사이의 간격을 20px로 설정 */

  div {
    width: 100%;
    height: 150px;
  }
  input:first-child {
    margin-bottom: 5px;
  }
  input {
    outline: none;
    font-weight: 300;
    border: none;
    padding-left: 20px;
    font-size: 20px;
    width: 460px;
    height: 60px;
    display: block;
    margin: 0 auto;
  }
`;
const CheckBox = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 600px;
  height: 60px;
  margin-top: 20px;
  margin-bottom: 20px;
  button {
    font-size: 20px;
    font-weight: 700;
    width: 460px;
    height: 60px;
    background-color: #111111;
    color: #fff;
  }
`;

export default FindId;

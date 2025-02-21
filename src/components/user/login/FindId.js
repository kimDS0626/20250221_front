import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import styled from "styled-components";

const FindIdContainer = styled.div`
  display: block;
  height: 1200px;
  width: 100%;
`;

// ----------------------------------------------------------------------------------

const FindIdSection = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 400px;
  background-color: #f4f4f4;
`;

const FindIdBoxA = styled.div`
  text-align: center;
  width: 400px;
  height: 190px;
  position: relative;
  bottom: 30px;
`;

const Title = styled.div`
  font-size: 24px;
  display: block;
  width: 400px;
  height: 90px;
  color: #111111;
  text-align: center;
  h1 {
    padding-top: 30px;
  }
`;

const LoginInput = styled.div`
  display: block;
  width: 400px;
  height: 100px;
  color: #111111;
  input {
    color: #111111;
    background: transparent;
    width: 250px;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #111111;
    border-radius: 3px;
  }
`;
const LoginBoxB = styled.div`
  text-align: center;
  display: block;
  width: 400px;
  height: 180px;
  position: relative;
  bottom: 35px;
`;

const LoginButton = styled.div`
  position: relative;
  top: 20px;
  float: left;
  width: 400px;
  height: 65px;

  button {
    background: transparent;

    font-size: 26px;
    width: 400px;
    height: 65px;

    color: #111111;
  }
`;
const SignupButton = styled.div`
  position: relative;
  top: 10px;
  float: left;

  width: 400px;
  height: 65px;
  button {
    background: transparent;
    border: none;

    font-size: 18px;
    width: 400px;
    height: 65px;

    color: #111111;
  }
`;

function FindId() {
  return (
    <FindIdContainer>
      <FindIdSection>
        <FindIdBoxA>
          <Title>
            <h4> - 아이디찾기 -</h4>
          </Title>
          <LoginInput>
            <input type="text" placeholder="이름"></input>
            <input type="password" placeholder="전화번호"></input>
          </LoginInput>
        </FindIdBoxA>
        <LoginBoxB>
          <LoginButton>
            <button>확인</button>
          </LoginButton>
          <SignupButton></SignupButton>
        </LoginBoxB>
      </FindIdSection>
    </FindIdContainer>
  );
}

export default FindId;

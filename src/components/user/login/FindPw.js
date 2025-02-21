import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_b from "./imgs/logo_b.png";

function FindPassword() {
  const [email, setEmail] = useState(""); // 이메일 상태
  const [verificationCode, setVerificationCode] = useState(""); // 인증번호 상태
  const [isCodeSent, setIsCodeSent] = useState(false); // 인증번호가 발송되었는지 확인
  const [newPassword, setNewPassword] = useState(""); // 새 비밀번호 상태
  const [confirmPassword, setConfirmPassword] = useState(""); // 새 비밀번호 확인 상태
  const [isEmailValid, setIsEmailValid] = useState(false); // 이메일 유효성 검사

  // 이메일 입력 핸들러
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // 인증 버튼 클릭 핸들러
  const handleSendCode = () => {
    // 여기서 실제 이메일로 인증번호 보내는 로직을 구현
    setIsCodeSent(true); // 인증번호 발송 완료
  };

  // 인증번호 입력 핸들러
  const handleCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  // 인증번호 확인 버튼 클릭 핸들러
  const handleVerifyCode = () => {
    // 실제 인증번호 확인 로직을 여기에 추가
    if (verificationCode === "123456") {
      // 예시 인증번호
      alert("인증번호가 확인되었습니다.");
    } else {
      alert("인증번호가 잘못되었습니다.");
    }
  };

  // 비밀번호 입력 핸들러
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  // 비밀번호 확인 핸들러
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // 전체 확인 버튼 핸들러
  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      alert("비밀번호가 변경되었습니다.");
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <FindPasswordContainer>
      <FindPasswordSection>
        <FindLogo>
          <img src={logo_b} alt="Logo" />
        </FindLogo>

        <Title>
          <h4>비밀번호 찾기</h4>
        </Title>

        <FindInput>
          <div>
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={handleSendCode}>발송</button>
          </div>
        </FindInput>

        {isCodeSent && (
          <VerificationSection>
            <div>
              <input
                type="text"
                placeholder="인증번호"
                value={verificationCode}
                onChange={handleCodeChange}
              />
              <button onClick={handleVerifyCode}>인증번호 확인</button>
            </div>
          </VerificationSection>
        )}

        <PasswordSection>
          <div>
            <input
              type="password"
              placeholder="새 비밀번호"
              value={newPassword}
              onChange={handlePasswordChange}
            />
            <input
              type="password"
              placeholder="새 비밀번호 확인"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </PasswordSection>

        <CheckBox>
          <button onClick={handleSubmit}>전체 확인</button>
        </CheckBox>
      </FindPasswordSection>
    </FindPasswordContainer>
  );
}

const FindPasswordContainer = styled.div`
  width: 1920px;
  min-height: 500px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FindPasswordSection = styled.div`
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

const FindInput = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  justify-content: center;
  background-color: #f4f4f4;
  position: relative;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    outline: none;
    font-weight: 300;
    border: none;
    padding-left: 20px;
    font-size: 20px;
    width: 460px;
    height: 60px;
    margin: 0 auto;
  }
  button {
    right: 90px;
    position: absolute;
    background-color: #f4f4f4;
    color: #111111;
    border: none;
    padding: 10px 10px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const VerificationSection = styled.div`
  width: 600px;
  margin-top: 20px;
  input {
    outline: none;
    font-weight: 300;
    border: none;
    padding-left: 20px;
    font-size: 20px;
    width: 460px;
    height: 60px;
    margin: 0 auto;
  }
  button {
    background-color: #111111;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 20px;
  }
`;

const PasswordSection = styled.div`
  width: 600px;
  margin-top: 20px;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  input {
    outline: none;
    font-weight: 300;
    border: none;
    padding-left: 20px;
    font-size: 20px;
    width: 460px;
    height: 60px;
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

export default FindPassword;

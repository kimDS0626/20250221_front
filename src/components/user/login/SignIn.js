import React, { useState, useEffect, axios, AuthContext } from "react";
import { useContext, HttpHeadersContext } from "react";
import { useNavigate } from "react-router";

import { Link } from "react-router";
import styled from "styled-components";

import logo from "./imgs/logo_b.png";

function SignIn() {
  // const { auth, setAuth } = useContext(AuthContext);
  // const { headers, setHeaders } = useContext(HttpHeadersContext);

  // const navigate = useNavigate();

  // const [id, setId] = useState("");
  // const [pwd, setPwd] = useState("");

  // const changeId = (event) => {
  //   setId(event.target.value);
  // };

  // const changePwd = (event) => {
  //   setPwd(event.target.value);
  // };

  // const login = async () => {
  //   const req = {
  //     email: id,
  //     password: pwd,
  //   };

  //   await axios
  //     .post("", req) // 위치입력 ex) http://localhost:8989/user/login
  //     .then((resp) => {
  //       // 성공 시
  //       console.log("Login OK");
  //       console.log(resp.data);

  //       alert(resp.data.email + "님, 성공적으로 로그인 되었습니다요");

  //       // JWT 토큰 저장 ex)bbs_access_token
  //       localStorage.setItem("토큰토큰", resp.data.token);
  //       localStorage.setItem("id", resp.data.email);

  //       setAuth(resp.data.email);
  //       setHeaders({ Authorization: `Bearer ${resp.data.token}` }); // HttpHeadersContext에 Authorization 헤더 저장

  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.log("Login nono");
  //       console.log(err);

  //       alert("로그인 실패! " + err.response.data);
  //     });
  // };

  return (
    <LoginContainer>
      <LoginSection>
        <img src={logo} />
        <LoginTitle>
          <h1>로그인</h1>
        </LoginTitle>

        <InputBox>
          <input
            type="text"
            placeholder="아이디"
            // value={id}
            // onChange={changeId}
          ></input>
          <input
            type="password"
            placeholder="비밀번호"
            // value={pwd}
            // onChange={changePwd}
          ></input>
          <IdFind>
            <Link to="/findId">
              <h6>아이디찾기</h6>
            </Link>
          </IdFind>
          <PwFind>
            <Link to="/findPw">
              <h6>비밀번호찾기 </h6>
            </Link>
          </PwFind>
          <SignInButton>
            {/* onClick={login} */}
            <Link className="signcolor">로그인</Link>
          </SignInButton>
          <SignupButton>
            <Link className="signcolor" to="/signup">
              회원가입
            </Link>
          </SignupButton>
        </InputBox>
      </LoginSection>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  height: 1040px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ----------------------------------------------------------------------------------

const LoginSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;

  position: relative;
  width: 600px;
  height: 740px;

  text-align: center;
  background: #f4f4f4;
  img {
    margin-top: 30px;
    width: 145px;
    height: 35px;
    margin-bottom: 30px;
  }
`;

const LoginTitle = styled.div`
  width: 600px;
  height: 40px;
  h1 {
    font-weight: bold;
    font-size: 36px;
  }
`;

const InputBox = styled.div`
  text-align: center;
   margin-top: 30px;
    width: 480px;
     height: 370px;
    box-sizing: border-box;

    text-align: center;
    input {
    border:none;
    padding-left:15px;

    width: 460px;
     height: 60px;
      color: #111111;
      background: #f4f4f4
    font-weight: medium ;
      font-size: 20px;

    }
     input:nth-child(2) {
 margin-top: 5px;
        }

  }
`;

const IdFind = styled.div`
  float: left;
  margin: 12px 50px 12px 100px;
  width: 90px;
  height: 16px;
  display: flex;

  a {
    text-decoration: none;
  }
  h6 {
    font-weight: regular;
    font-size: 16px;
    color: #111111;
  }
`;
const PwFind = styled.div`
  margin: 12px 100px 12px 30px;
  float: right;
  width: 110px;
  height: 16px;
  display: flex;
  a {
    text-decoration: none;
  }
  h6 {
    font-weight: regular;
    font-size: 16px;
    color: #111111;
  }
`;
const SignInButton = styled.div`
   float: left;
  margin-top:12px;
  margin-left:10px;
  margin-bottom:30px;
  display: flex;
  align-items: center;
    justify-content: center;
  width: 460px;
    height: 60px;
      background:#111111 ;

        font-weight: medium ;
      font-size: 20px;
    }
  .signcolor{
  color: #ffffff;
  }
`;
const SignupButton = styled.div`
  float: left;
  margin-left: 10px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 460px;
  height: 60px;
  background: #111111;

  font-weight: medium;
  font-size: 20px;
    }
  .signcolor{
  color: #ffffff;
  }
`;

export default SignIn;

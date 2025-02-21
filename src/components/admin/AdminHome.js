import React, { useState } from "react";
import styled from "styled-components";
import AdminUserList from "./user/AdminUserList";
import Notice from "../board/notice/Notice";
import Review from "../board/review/Review";
import AdminReservationList from "./reservation/AdminReservationList";
import OnlineCounsel from "../board/onlinecounsel/OnlineCounsel";
import Review_B from "./button/Review_B";
import NoticeList_B from "./button/NoticeList_B";

const HomeContainer = styled.div`
  margin: auto;
  display: block;
  width: 1280px;
  height: 1000px;
  position: relative;
`;

const Homeva = styled.div`
margin-top: 50px;
  background-color: #f0f0f0;
  float: left;
  width: 150px;
  min-height: 30%; 
  position: absolute;
  ul {
    list-style: none;
    padding: 0; 
  }
  button {
    font-size: 16px;
    border: none;
    background: transparent;
    width: 100%; 
    text-align: left; /
    padding: 10px;
    color: white; 
    cursor: pointer;
  }
`;

const VaTitle = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  height: 30px;
`;

const Vacontent = styled.div`
  li {
    background-color: #555;
  }

  li.active {
    background-color: #003cd2;
  }
`;
// -----------------------------------------------------------------
const HomeSectionA = styled.div`
  top: 50px;
  position: relative;
  float: right;
  margin: auto;
  background-color: #f0f0f0;
  display: block;
  width: 1080px;
  height: 100px;
  text-align: center;
`;

const HomeTitle = styled.div`
  background-color: #f0f0f0;
  color: #003CD2
  padding: 20px;

  display: inline-block;
`;

const HomeSectionB = styled.div`
  top: 50px;
  position: relative;
  float: right;
  margin: auto;

  display: block;
  width: 1080px;
  min-height: 500px;
`;
const HomeSectionC = styled.div`
  top: 50px;
  position: relative;
  float: right;
  margin: auto;

  display: block;
  width: 1080px;
  background-color: #f0f0f0;
`;
function AdminHome() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data = [
    {
      title: "회원 관리",
      content: <AdminUserList />,
    },
    {
      title: "후기 관리",
      content: <Review />,
    },
    {
      title: "온라인상담 관리",
      content: <OnlineCounsel />,
      button: <Review_B />,
    },
    {
      title: "공지사항 관리",
      content: <Notice />,
      button: <NoticeList_B />,
    },
    {
      title: "예약 관리",
      content: <AdminReservationList />,
    },
  ];

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const getHomeTitle = () => {
    return data[selectedIndex].title;
  };

  return (
    <HomeContainer>
      <Homeva>
        <VaTitle>
          <h3>관리자 메뉴</h3>
        </VaTitle>
        <Vacontent>
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                className={selectedIndex === index ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                <button>{item.title}</button>
              </li>
            ))}
          </ul>
        </Vacontent>
      </Homeva>
      <HomeSectionA>
        <HomeTitle>
          <h1>{getHomeTitle()}</h1>
        </HomeTitle>
      </HomeSectionA>
      <HomeSectionB>
        <div>{data[selectedIndex].content}</div>
      </HomeSectionB>
      <HomeSectionC>{data[selectedIndex].button}</HomeSectionC>
    </HomeContainer>
  );
}

export default AdminHome;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import Timeslot from "./Timeslot";

// 전체 컨테이너
const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 내부 콘텐츠 (최대 1280px)
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// 제목 섹션
const Title = styled.div`
  margin-top: 100px;
  width: 100%;
  text-align: left;
`;
// 진료과목 박스
const DepartmentBo = styled.div`
  
`
// 캘린더 박스
const CalendarBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

// 캘린더 스타일
const StyledCalendar = styled(Calendar)`
  border: 1px solid black;
  width: 60%;
  height: 400px;
  border-radius: 15px;
`;

// 예약 시간 박스
const TimeBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  border: 1px solid black;
  border-radius: 15px;
  margin: 20px 0;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

// 반려동물 정보 박스
const AnimalBox = styled.div`
  border: 1px solid black;
  width: 100%;
  max-width: 1280px; /* 📌 테이블이 1280px을 넘지 않도록 설정 */
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 10px;
`;

// 반려동물 정보 테이블
const AnimalTable = styled.table`
  width: 100%;
  max-width: 1280px; /* 📌 테이블 크기를 1280px로 설정 */
  border: 1px solid black;
  border-radius: 15px;
  margin: 20px 0;
  text-align: center;
`;

function UserReserv() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]); // 백엔드에서 받아올 타임슬롯 데이터
  const [loading, setLoading] = useState(false); // 데이터 로딩 상태

  // 날짜 선택 시 백엔드에서 해당 날짜의 타임슬롯 데이터를 가져옴
  useEffect(() => {
    if (selectedDate) {
      setLoading(true);
      const formattedDate = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD 형식 변환

      axios
        .get(`http://백엔드_주소/api/timeslots?date=${formattedDate}`)
        .then((response) => {
          setTimeSlots(response.data); // 받아온 타임슬롯 데이터 저장
        })
        .catch((error) => {
          console.error("타임슬롯 데이터를 불러오는 중 오류 발생:", error);
          setTimeSlots([]); // 에러 시 빈 배열로 설정
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setTimeSlots([]); // 날짜가 선택되지 않았을 때는 빈 배열 유지
    }
  }, [selectedDate]);

  return (
    <Container>
      <ContentWrapper>
        <Title>
          <h1>회원 예약</h1>
        </Title>
        

        <CalendarBox>
          <StyledCalendar
            onChange={setSelectedDate}
            value={selectedDate}
            calendarType="gregory"
            view="month"
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
            locale="ko"
          />
        </CalendarBox>

        {selectedDate && (
          <TimeBox>
            {loading ? (
              <p>예약 시간을 불러오는 중...</p>
            ) : timeSlots.length > 0 ? (
              <Timeslot slots={timeSlots} />
            ) : (
              <p>예약 가능한 시간이 없습니다.</p>
            )}
          </TimeBox>
        )}

        <AnimalBox>
          <AnimalTable>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <th>이름</th>
              </tr>
              <tr>
                <th>종류</th>
              </tr>
              <tr>
                <th>나이</th>
              </tr>
              <tr>
                <th>무게</th>
              </tr>
            </tbody>
          </AnimalTable>
        </AnimalBox>
      </ContentWrapper>
    </Container>
  );
}

export default UserReserv;

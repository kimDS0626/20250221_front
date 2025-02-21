import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



function Review() {
  return (
    <Container>
      <ContentWrapper>
        <Title>
          <h1>후기</h1>
        </Title>

        <TableBox>
          <Table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일자</th>
                <th>조회수</th>
                <th>좋아요</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </TableBox>

        <SearchBox>
          <div>
            <select>
              <option value="title">제목</option>
              <option value="content">내용</option>
              <option value="writer">작성자</option>
            </select>
            <SearchField type="text" placeholder="검색어" />
            <SearchButton>검색</SearchButton>
          </div>

          <WriteBox>
            <WriteButton to="/reviewUpdate">수정</WriteButton>
            <WriteButton to="/reviewWrite">작성</WriteButton>
          </WriteBox>
        </SearchBox>
      </ContentWrapper>
    </Container>
  );
}


// 컨테이너
const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 내부 콘텐츠
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

// 테이블 박스
const TableBox = styled.div`
  width: 100%;
  margin-top: 20px;
`;

// 테이블
const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
`;

//검색 박스
const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

//검색 입력 필드
const SearchField = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

//검색 버튼
const SearchButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

//작성/수정 버튼 박스
const WriteBox = styled.div`
  display: flex;
  gap: 10px;
`;

//작성/수정 버튼 스타일
const WriteButton = styled(Link)`
  padding: 5px 10px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export default Review;

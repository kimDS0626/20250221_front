import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Pagination from "react-js-pagination";
import search from "./imgs/search.png";
import NoticeTable from "./NoticeTable";

function Notice() {
  //BbsList
  const [bbsList, setBbsList] = useState([]);

  //검색용 Hook
  //게시글 조회
  const [choiceVal, setChoiceVal] = useState("");
  const [searchVal, setSearchVal] = useState("");

  //Paging
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCnt, setTotalCnt] = useState(0);

  const getBbsList = async (page) => {
    try {
      const response = await axios.get("http://localhost:8080/board/list", {
        params: { page: page - 1 },
      });

      console.log("[BbsList.js] useEffect() success :D");
      console.log(response.data);

      setBbsList(response.data.content);
      setPageSize(response.data.pageSize);
      setTotalPages(response.data.totalPages);
      setTotalCnt(response.data.totalElements); //★
    } catch (error) {
      console.log("[BbsList.js] useEffect() error :<");
      console.log(error);
    }
  };

  //페이징 보여주기
  const changePage = (page) => {
    setPage(page);
    getBbsList(page);
  };

  return (
    <Container>
      <ContentWrapper>
        <NoticeTitle>
          <h1>공지사항</h1>
        </NoticeTitle>

        <NoticeTable />

        <PaginationBox>
          <Pagination
            className="pagination"
            activePage={page}
            itemsCountPerPage={pageSize}
            totalitemsCount={totalPages}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={changePage}
          />
        </PaginationBox>
      </ContentWrapper>
    </Container>
  );
}

// 컨테이너
const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//  내부 콘텐츠
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//  공지사항 제목
const NoticeTitle = styled.div`
  width: 1280px;
  height: 50px;
  margin-top: 100px;
  text-align: left;
  h1 {
    font-weight: bold;
    font-size: 36px;
    font-family: "Noto Sans KR", serif;
  }
`;

//페이지네이션
const PaginationBox = styled.div`
  padding: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  align-items: center;
  width: 1280px;
  height: 50px;
  background-color: #ffffff;
  flex-direction: row;

  /* Pagination 스타일 */
  .pagination {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .pagination li {
    display: inline-block;
    margin: 0 5px;
  }
`;
export default Notice;

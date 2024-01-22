import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PensionMainPage from './PensionMainPage';
import Mypage from './MyPage';
import PensionList from './PensionList';
import Resevation from './Resevation';
import QnA from './QnA';
import CartList from './CartList';
import EventPage from './EventPage';
import PensionDetailLink from './PensionDetailLink';
import PensionMap from './PensionMap';
import SearchResult from './SearchResult';
import GameLand from './GameLand';
import Chat from './Chat';

function Link() {
  return (
    <Router>
      <Routes>
        {/*메인페이지 링크*/}
        <Route path='/' element={<PensionMainPage />}></Route>
        {/*마이페이지 링크*/}
        <Route path='/Mypage' element={<Mypage />}></Route>
        {/*펜션목록 링크*/}
        <Route path='/PensionList' element={<PensionList />}></Route>
        {/*예약페이지 링크*/}
        <Route path='/Resevation' element={<Resevation />}></Route>
        {/*문의하기 링크*/}
        <Route path='/QnA' element={<QnA />}></Route>
        {/*장바구니 링크*/}
        <Route path='/CartList' element={<CartList />}></Route>
        {/*이벤트 링크*/}
        <Route path='/EventPage' element={<EventPage />}></Route>
        {/*펜션 상세 페이지 링크*/}
        <Route
          path='/PensionDetailLink'
          element={<PensionDetailLink />}
        ></Route>
        {/* 지도 링크 */}
        <Route path='/PesionMap' element={<PensionMap />}></Route>
        {/* 검색 결과 */}
        <Route path='/searchResult' element={<SearchResult />}></Route>
        {/* 게임랜드 링크 */}
        <Route path='/Gameland' element={<GameLand />}></Route>
        {/* 채팅하기 */}
        <Route path='/Chat' element={<Chat />}></Route>
      </Routes>
    </Router>
  );
}
export default Link;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PensionMainPage from '../component/PensionMainPage';
import Mypage from '../component/MyPage';
import PensionList from '../component/PensionList';
import Resevation from '../component/Resevation';
import QnA from '../component/QnA';
import CartList from '../component/CartList';
import EventPage from '../component/EventPage';
import PensionDetailLink from '../component/PensionDetailLink';
import PensionMap from './PensionMap';
import SearchResult from '../component/SearchResult';
import GameLand from './GameLand';

function Link() {
  return (
    <Router>
      <Routes>
        {/*메인페이지 링크*/}
        <Route path='/' element={<PensionMainPage />}></Route>
        {/*마이페이지 링크*/}
        <Route path='/Mypage' element={<Mypage />}></Route>
        {/*펜션목록 링크*/}
        <Route path='/pensionsearch' element={<PensionList />}></Route>
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
      </Routes>
    </Router>
  );
}
export default Link;

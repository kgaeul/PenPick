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

function Link() {
  return (
    <Router>
      <Routes>
        {/*메인페이지 링크*/}
        <Route path='/' element={<PensionMainPage />}></Route>
        {/*마이페이지 링크*/}
        <Route path='/Mypage' element={<Mypage />}></Route>
        {/*펜션목록 링크*/}
        <Route path='/search' element={<PensionList />}></Route>
        {/*예약페이지 링크*/}
        <Route path='/Resevation' element={<Resevation />}></Route>
        {/*문의하기 링크*/}
        <Route path='/QnA' element={<QnA />}></Route>
        {/*장바구니 링크*/}
        <Route path='/CartList' element={<CartList />}></Route>
        {/*이벤트 링크*/}
        <Route path='EventPage' element={<EventPage />}></Route>
        <Route path='PensionDetailLink' element={<PensionDetailLink />}></Route>
      </Routes>
    </Router>
  );
}
export default Link;

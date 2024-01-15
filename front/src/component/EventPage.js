import React from 'react';
import Header from './Header';
import '../css/EventPage.css';
import Calendar from '../img/달력.png';
import UserImg from '../img/사용자.png';

function EventPage() {
  return (
    <div>
      <Header />
      <div id='container'>
        <h1>이벤트페이지입니다.</h1>
      </div>
    </div>
  );
}

export default EventPage;

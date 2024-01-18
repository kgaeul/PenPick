import React from 'react';
import Header from './Header';
import '../css/EventPage.css';
function GameLand() {
  return (
    <div>
      <Header />
      <div id='container'>
        <div className='row'>
          <div className='col-md-3' id='EventCategory'>
            <a href='EventPage'>이벤트</a>
            <br></br>
            <a href='Gameland'>게임랜드</a>
          </div>
          <div className='col-md-9'>
            <h5>게임랜드</h5>
            게임랜드입니다.
          </div>
        </div>
      </div>
    </div>
  );
}
export default GameLand;

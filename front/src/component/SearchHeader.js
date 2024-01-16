import '../css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventImg from '../img/EventImg1.jpg';
import FormImg from '../img/파란집.png';
import React, { useState } from 'react';
import CartImg from '../img/장바구니.png';
import Pagination from 'react-js-pagination';
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Nav,
} from 'react-bootstrap';
import PenPickLogo from '../img/펜픽로고.png';
import Calendar from '../img/달력.png';
import UserImg from '../img/사용자.png';
import SearchButton from '../img/돋보기.png';

function SearchHeader() {
  return (
    <div>
      <div id='HeaderBannerImg'>
        <div id='HeaderLogin_SignUp_Menu'>
          <a id='HeaderCartListLink' href='/CartList'>
            <img id='HeaderCartImg' src={CartImg} alt='장바구니'></img>
          </a>
          <a id='HeaderLogin' href='/Login'>
            로그인
          </a>
          <a id='HeaderSignUp' href='/SignUp'>
            회원가입
          </a>
        </div>
        {/* 메인페이지 카테고리 */}
        <div id='HeaderBannerLink'>
          <a href='/' id='HeaderMainLink'>
            <img id='HeaderPenPickImg' src={PenPickLogo} alt='펜픽로고'></img>
          </a>
          <form id='PensionSearchForm'>
            <input id='PensionInput' type='text' />
            <span id='InputBar'>|</span>
            <img src={Calendar} id='Calendar' alt='Calendar' />
            <input id='PensionInput' type='text' />

            <span id='InputBar'>|</span>
            <img id='UserImg' src={UserImg} alt='사용자' />
            <input id='PensionInputNumber' type='text' />
            <button id='PensionSearchButton' type='submit'>
              <img id='PensionSearchImg' src={SearchButton} alt='돋보기' />
            </button>
          </form>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default SearchHeader;

import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PenPickLogo from './img/PenPickLogo.png';
import EventImg from './img/EventImg1.jpg';
import FormImg from './img/파란집.png';
import React, { useState } from 'react';
import CartImg from './img/장바구니.png';
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

function Header() {
  return (
    <div>
      <div id='HeaderBannerImg'>
        <div id='HeaderLogin_SignUp_Menu'>
          <img id='HeaderCartImg' src={CartImg} alt='장바구니'></img>
          <a id='HeaderLogin' href='/Login'>
            로그인
          </a>
          <a id='HeaderSignUp' href='/SignUp'>
            회원가입
          </a>
        </div>
        {/* 메인페이지 카테고리 */}
        <div id='HeaderBannerLink'>
          <img id='Headerlogo' src={PenPickLogo} alt='머시기' />
          <a href='/' id='HeaderMainLink'>
            <span id='HeaderMainLogo'>PenPick</span>
          </a>
          <a id='HeaderPensionListLink' href='/PensionList'>
            펜션목록
          </a>
          <a id='HeaderMypageLink' href='/Mypage'>
            마이페이지
          </a>
          <a id='HeaderQnALink' href='/QnA'>
            문의게시판
          </a>
          <a id='HeaderCartListLink' href='/CartList'>
            장바구니
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

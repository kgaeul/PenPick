import './PensionMainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PenPickLogo from './img/PenPickLogo.png';
import EventImg from './img/EventImg1.jpg';
import FormImg from './img/파란집.png';
import React, { useState } from 'react';
import CartImg from './img/장바구니.png';
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Nav,
} from 'react-bootstrap';

function PensionMainPage() {
  const [activeTab, setActiveTab] = useState('domestic');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div id='BannerImg'>
        <div id='Login_SignUp_Menu'>
          <img id='CartImg' src={CartImg} alt='장바구니'></img>
          <a id='Login' href='/Login'>
            로그인
          </a>
          <a id='SignUp' href='/SignUp'>
            회원가입
          </a>
        </div>
        {/* 메인페이지 카테고리 */}
        <div id='BannerLink'>
          <img id='logo' src={PenPickLogo} alt='머시기' />
          <a href='/' id='MainLink'>
            <span id='MainLogo'>PenPick</span>
          </a>
          <a id='PensionListLink' href='/PensionList'>
            펜션목록
          </a>
          <a id='MypageLink' href='/Mypage'>
            마이페이지
          </a>
          <a id='QuestionAndAnswerLink' href='/QuestionAndAnswer'>
            문의게시판
          </a>
          <a id='CartListLink' href='/CartList'>
            장바구니
          </a>
        </div>
        {/* 메인 문구 */}
        <div id='MainTitleBox'>
          <h1 id='MainTitle'>
            예약부터 픽업까지
            <br />
            펜픽으로 모두해결
          </h1>
        </div>

        {/* 펜션 검색창 감싼 박스 */}
        <div id='SearchForm'>
          <div id='form_Img_Title'>
            <img id='formImg' src={FormImg} alt='파란집' />
            <span id='formTitle'>펜션</span>
          </div>
          {/* 펜션 검색창 */}
          <form className='row'>
            <div id='SearchFormBar'></div>
            {/* 지역입력칸 */}
            <input
              id='input1'
              className='form-control col-md-3'
              placeholder='지역을 입력하세요'
            />
            {/* 인원입력칸 */}
            <input
              id='input2'
              className='form-control col-md-3'
              placeholder='인원 입력하세요'
            />
            {/* 날짜 검색창 */}
            <input
              id='input3'
              className='form-control col-md-3'
              type='date'
              placeholder='날짜'
            />
            {/* 펜션 검색버튼 */}
            <button id='SearchButton' className='btn  col-md-3'>
              검색하기
            </button>
          </form>
        </div>
      </div>
      {/* 이벤트 배너 */}
      <div id='Event'>
        <a id='EventLink' href='/EventList'>
          <div>
            <img id='EventImg' src={EventImg} alt='이벤트이미지' />
          </div>
        </a>
      </div>

      <Container>
        <Row className='mt-3'>
          <Col>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='여행지나 숙소를 검색해보세요'
                aria-label='여행지나 숙소를 검색해보세요'
                aria-describedby='basic-addon2'
              />
              <Button variant='outline-secondary' id='button-addon2'>
                검색
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <Nav variant='tabs'>
              <Nav.Item>
                <Nav.Link
                  href='#domestic'
                  active={activeTab === 'domestic'}
                  onClick={() => handleTabClick('domestic')}
                >
                  국내 숙소
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href='#overseas'
                  active={activeTab === 'overseas'}
                  onClick={() => handleTabClick('overseas')}
                >
                  해외 숙소
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>

      <nav aria-label='Page navigation example'>
        <ul class='pagination'>
          <li class='page-item disabled'>
            <a class='page-link' href='#' tabindex='-1' aria-disabled='true'>
              Previous
            </a>
          </li>
          <li class='page-item'>
            <a class='page-link' href='/Mypage'>
              1
            </a>
          </li>
          <li class='page-item'>
            <a class='page-link' href='/PensionList'>
              2
            </a>
          </li>
          <li class='page-item'>
            <a class='page-link' href='/CartList'>
              3
            </a>
          </li>
          <li class='page-item disabled'>
            <a class='page-link' href='#' tabindex='+1' aria-disabled='true'>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default PensionMainPage;

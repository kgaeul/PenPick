import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchHeader from './SearchHeader';
import PensionMap from '../component/PensionMap';
import MapImg from '../img/지도.png';
import '../css/PensionList.css';
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
import CartImg from '../img/장바구니.png';
import { useLocation } from 'react-router-dom';

function PensionList({ searchResult }) {
  // 검색어
  const [searchTerm, setSearchTerm] = useState('');
  // 검색결과
  const [searchResult2, setSearchResult2] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/penpick/searchAll`,
        {
          params: {
            term: searchTerm,
          },
        }
      );
      console.log(response.data);

      const responseData = Array.isArray(response.data)
        ? response.data
        : [response.data];

      setSearchResult2(responseData);
    } catch (error) {
      console.error('Error searching users:', error);
      setSearchResult2([]);
    }
  };

  return (
    <div id='AllContain'>
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
            <input
              id='PensionInput'
              type='text'
              placeholder='펜션을 입력하세요'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <span id='InputBar'>|</span>
            <img src={Calendar} id='Calendar' alt='Calendar' />
            <input id='PensionInput' type='text' />

            <span id='InputBar'>|</span>
            <img id='UserImg' src={UserImg} alt='사용자' />
            <input id='PensionInputNumber' type='text' /> */}
            <button
              id='PensionSearchButton'
              type='submit'
              onClick={handleSearch}
            >
              <img id='PensionSearchImg' src={SearchButton} alt='돋보기' />
            </button>
          </form>
        </div>
      </div>
      <hr></hr>
      <div id='container' className='row'>
        <div id='firstBox' className='col-md-4'>
          <h3>검색 목록</h3>
          <a href='PesionMap'>
            <img src={MapImg} alt='지도' id='MapImg'></img>
          </a>
          <div id='filter'>
            <h6 id='filterTitle'>필터</h6>
            <form>
              <div id='asdfasdf'>
                <input id='filterCheckbox' type='checkbox' />
                <span id='filterException'>매진 숙소 제외</span>
              </div>

              <hr id='hrfilter' />
              <span id='filterTitle'>가격</span>
              <span id='filterdescription'>1박 기준</span>

              <input type='range' id='filterRange' />
              <hr id='hrfilter' />
              <div>
                <h6 id='filterTitle'>공용시설</h6>
                <button id='filterButton'>수영장</button>
                <button id='filterButton'>바베큐장</button>
                <button id='filterButton'>공용샤워실</button>
                <br />
                <button id='filterButton'> 노래방</button>
                <button id='filterButton'>운동시설</button>
                <button id='filterButton'>세미나룸</button>
                <br />
                <button id='filterButton'>사우나</button>
                <button id='filterButton'>캠프파이어</button>
              </div>
            </form>
          </div>
        </div>
        <div className='col-md-8' id='PensionSearchList'>
          <ul>
            {searchResult2.map((pension) => (
              <div id='pensionBox' className='row' key={pension.id}>
                <span id='pensionSearchImg' className='col-md-4'>
                  이미지
                </span>
                <div id='pensionDescription' className='col-md-8'>
                  <p id='pensionName'>{pension.name}</p>
                  <p>{pension.address}</p>
                  {pension.check_in} - {pension.check_out}
                </div>
                <hr id='PensionSearchListhr' />
              </div>
            ))}
          </ul>
          <div>
            <p>
              {searchResult.map((pension) => (
                <div key={pension.id}>
                  <p>{pension.name}</p>
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PensionList;

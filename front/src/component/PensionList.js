import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchHeader from './SearchHeader';
import { useParams } from 'react-router-dom';
import PensionMap from '../component/PensionMap';
import MapImg from '../img/지도.png';
import '../css/PensionList.css';

function PensionList() {
  const [pension, setPension] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          'http://localhost:8080/penpick/pensionList'
        );
        console.log(result.data);
        setPension(result.data);
      } catch (error) {
        console.log('데이터를 불러오지 못했습니다', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div id='AllContain'>
      <SearchHeader />
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
          {pension.map((pensions) => (
            <div id='pensionBox' className='row' key={pensions.id}>
              <span id='pensionSearchImg' className='col-md-4'>
                이미지
              </span>
              <div id='pensionDescription' className='col-md-8'>
                <h4 id='pensionName'>{pensions.name}</h4>
                {pensions.address}
                <br />
                {pensions.check_in} - {pensions.check_out}
                <br />
              </div>
              <hr id='PensionSearchListhr' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PensionList;

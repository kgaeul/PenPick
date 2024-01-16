import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchHeader from './SearchHeader';
import { useParams } from 'react-router-dom';
import PensionMap from '../component/PensionMap';

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
    <div>
      <SearchHeader />
      <PensionMap />
      <h1>펜션 목록입니다.</h1>
      {pension.map((pensions) => (
        <p key={pensions.id}>
          이름 : {pensions.name}
          <br />
          위치 : {pensions.address}
          <br />
        </p>
      ))}
    </div>
  );
}
export default PensionList;

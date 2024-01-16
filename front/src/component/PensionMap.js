import React, { useEffect } from 'react';
import Header from './Header';
import '../css/PensionMap.css';

const PensionMap = () => {
  useEffect(() => {
    // 카카오맵 API 스크립트 동적으로 로드
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=5f5613b170ddc98c39f71811791f5fc8&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 지도 중심 좌표 (서울)
          level: 3, // 초기 지도 확대 레벨
        };

        // 지도 생성
        const map = new window.kakao.maps.Map(container, options);

        // 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.978); // 마커 좌표 (서울)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  }, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

  return (
    <div>
      <Header />
      <p id='MapTitle'>지도로 검색하기</p>
      <div
        id='map'
        style={{ width: '80%', height: '700px', margin: 'auto' }}
      ></div>
    </div>
  );
};

export default PensionMap;

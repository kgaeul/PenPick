import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

function KakaoMap() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '';
    document.head.appendChild(script);

    //스크립트 추가했으면 실행
    script.onload = () => {
      window.Kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126, 978),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        //마커추가

        const markerPosition = new window.kakao.maps.Lating(37.5665, 126.978);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
  });
  return <div id='map'></div>;
}

export default KakaoMap;

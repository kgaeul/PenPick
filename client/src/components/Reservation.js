import { Modal, CardImg, Container } from 'react-bootstrap';
import '../css/Reservation.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoverImage from '../img/펜션1.jpg';
import KakaoImage from '../img/kakao.png';
import backSpaceImage from '../img/뒤로가기.jpg';
import CardImage from '../img/체크카드.PNG';
import kakaoPay from '../img/kpay.png';
import naverPay from '../img/npay.jpg';
import kbPay from '../img/kbpay.png';
import paycoPay from '../img/payco.jpg';
import Header from './Header';

function Reservation() {
  const urlParameter = new URLSearchParams(window.location.search);

  const selectedPension = urlParameter.get('pension');

  const [testParam, setTestParam] = useState([]);

  useEffect(() => {
    setTestParam(selectedPension);
  }, [testParam]);

  useEffect(() => {
    if (selectedPension !== null) {
      console.log(selectedPension + '이건 selectedPension');
      console.log(testParam);
    } else {
      console.log('엥;');
    }
  });

  const [reservations, setReservations] = useState([]);
  const [nickname, setNickname] = useState('');
  const [pensionsId, setPensionsId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchases, setPurchases] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8282/reservation/list'
        );
        setReservations(response.data);
      } catch (error) {
        console.log('데이터를 불러오지 못했습니다.', error);
      }
    };
    fetchData();
  }, []);

  const fetchReservations = () => {
    if (!nickname) {
      console.error('닉네임을 입력하세요.');
      return;
    }
    console.log('일치하지 않는 사용자 입니다.', nickname);

    axios
      .get(`http://localhost:8282/penpickUser/${nickname}`)
      .then((response) => setPurchases(response.data))
      .catch((error) => console.error(error));
  };

  const makeReservation = () => {
    if (!nickname || !pensionsId || !quantity) {
      console.error(
        '사용자명, 구매하고자하는 객실, 수를 기입해야 구매가능합니다.'
      );
      return;
    }

    axios
      .post('http://localhost:8282/reservation/makeReservation', {
        nickname: nickname,
        pensionsId: pensionsId,
        quantity: quantity,
      })
      .then(() => {
        fetchReservations();
      })
      .catch((error) => console.error(error));
  };

  // 결제 페이지 이동
  // function payFunction(){
  // window.location.href="/payment";
  // }

  // 펜션 목록으로 돌아가기
  function comebackFunction() {
    window.location.href = '/pensionList';
  }

  // 고객 센터로 가기
  function serviceCenterFunction() {
    window.location.href = '/customerServiceCenterMain';
  }

  // 카카오톡 상담
  function kakaoQuestionFuction() {
    window.location.href = '/';
  }

  // 예약확인
  function reservationCheckFunction() {
    window.location.href = '/reservationCheck';
  }

  // 결제확인
  function paySuccess() {
    alert('결제가 완료 되었습니다.');
  }

  return (
    <div className='reservationDiv'>
      <Header />
      <button className='comebackButton' onClick={comebackFunction}>
        <img
          src={backSpaceImage}
          className='backSpaceImage'
          alt='돌아가기'
        ></img>
        돌아가기
      </button>
      <br />
      <h1 id='reservationId'>예약 및 결제</h1>
      <section className='reservationSection1'>
        <label>닉네임 </label>
        <br />
        <input
          type='text'
          placeholder='펜픽이'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        ></input>{' '}
        <br />
        <label>펜션 번호:</label>
        <br />
        <input
          type='text'
          placeholder='1'
          value={pensionsId}
          onChange={(e) => setPensionsId(e.target.value)}
        ></input>{' '}
        <br />
        <label>객실 수 :</label>
        <br />
        <input
          type='text'
          placeholder='1'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>{' '}
        <br />
        <input type='checkbox'></input>
        <span>픽업여부</span>
        {/* onchange((e) => setModalIsOpen(e.target.value)) */}
        {/* 예약 조회하러 가기 */}
        {/* <button type="submit" id="checkButton" onClick={reservationCheckFunction}>예약 확인</button> */}
      </section>
      <section className='reservationSection2'>
        <div className='reservationCoverImage'>
          <img src={CoverImage} className='CoverImage' alt='커버이미지'></img>
        </div>
        <br />

        {/* <ul>
                    {reservations.map((reservation) => (
                        <li key={reservation.id}>
                            <p>예약 금액 : {reservation.pay}원</p>
                            <p>결제 일 : {reservation.payDate}</p>
                        </li>
                    ))}
                </ul>
                */}
      </section>

      <section className='reservationSection3'>
        <h1>결제 수단</h1>
        <br />
        <br />
        <div className='checkBox'>
          <input type='checkbox'></input>{' '}
          <span>이 결제수단을 다음에도 사용</span>
          <br />
        </div>

        <Modal
          className='Modal'
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel='Example Modal'
          appElement={document.getElementById('root') || undefined}
        >
          <div className='modalDiv'>
            <span>
              결제하기
              <img src={CardImage} id='cardImage' alt='카드이미지'></img>
            </span>
            <br />
            {/* <span>결제 금액 : </span><br /> */}
            {/* <span>체크인 날짜 :</span><br /> */}
            {/* <span>체크아웃 날짜 :</span><br /> */}
            <button id='modalButton' type='submit' onClick={makeReservation}>
              결제하기
            </button>
          </div>
        </Modal>
        <div className='buttonBox'>
          <button id='payButton' onClick={() => setModalIsOpen(true)}>
            신용카드
          </button>
          <button id='payButton' onClick={() => setModalIsOpen(true)}>
            휴대폰 결제
          </button>
          <button id='payButton' onClick={() => setModalIsOpen(true)}>
            <img src={kakaoPay} id='kakaoPay' alt='카카오페이'></img>
          </button>
          <button id='payButton' onClick={() => setModalIsOpen(true)}>
            <img src={naverPay} id='naverPay' alt='네이버 페이'></img>
          </button>{' '}
          <tr />
          <br />
          <button id='payButton' onClick={() => setModalIsOpen(true)}>
            <img src={kbPay} id='kbPay' alt='kb 페이'></img>
          </button>
          <button id='payButton' onClick={() => setModalIsOpen(true)}>
            <img src={paycoPay} id='paycoPay' alt='payco 페이'></img>
          </button>
        </div>
      </section>
      <section className='reservationSection4'>
        <button id='serviceCenterButton' onClick={serviceCenterFunction}>
          고객센터
        </button>
        <br />
        <button id='kakaoQuestionButton' onClick={kakaoQuestionFuction}>
          <img src={KakaoImage} id='kakaoQuestion' alt='카카오 상담'></img>
          카카오톡 상담
        </button>
      </section>
    </div>
  );
}

export default Reservation;

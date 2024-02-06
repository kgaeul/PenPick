import { useEffect, useState } from 'react';
import Header from './Header';
function ReservationCheck() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phoneNumber', phoneNumber);

    //axios
  });
  /* useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('')
                set
                
            }catch(error){

            }
        }
    })*/

  return (
    <div className='reservationCheckDiv'>
      <Header />
      <div>
        <h1>예약 확인</h1>
      </div>
      <div>
        <section className='reservationCheckSection1'>
          <br />
          <br />
          <br />
          <span>예약자 정보</span> <br />
          <br />
          <span>이 름 : </span>
          <br />
          <span>전화번호 : </span>
          <br />
          <span>펜션 이름 : </span>
          <br />
          <span>예약 금액 : </span>
          <br />
          <span>체크인 날짜 : </span>
          <br />
          <span>체크아웃 날짜 : </span>
        </section>
      </div>
    </div>
  );
}
export default ReservationCheck;

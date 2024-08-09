import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

// const YellowBtn = styled.button`
//   background : ${ props => props.bg };
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
//   padding : 10px;
// `
// // 기존 styled 가져올수도 있다!
// const NewBtn = styled.button(YellowBtn);

// const Box = styled.div`
//   background : grey;
//   padding : 20px;
// `

function Detail(props) {
    // 부모단에서 선언한 id값 가져옴
    const {id} = useParams();
    const shoesInfo = props.shoes.find(obj => obj.id == id);
    const [status, setStatus] = useState(true);
    const [textinput, setTextinput] = useState('');

    // status 변수가 변경이 될때 setTimeout 함수를 실행 시킨다.
    useEffect(() => {
      setTimeout(() => { setStatus(false) }, 2000)

      // 클린업 펑션 : useEffect 동작 전에 실행되는 return ()=> {}
      return () => {
        console.log(12);
      }
    });
    
    // 오늘의 숙제 : <input>에 숫자말고 다른거 입력하면 그러지말라고 안내메시지(alert) 띄우기
    useEffect(() => {
      if (isNaN(textinput) === true) {
        alert('그러지마세요');
      }
    }, [textinput]);

    return (
      <div className="container">
        {/* <Box> */}
          {/* <YellowBtn bg='blue'>버튼</YellowBtn>
          <YellowBtn bg='orange'>버튼</YellowBtn> */}
        {/* </Box> */}
        {
          status === true
          ? <div className="alert alert-warning">
              2초이내 구매시 할인
            </div>
          : null
        }
        {/* {count}

        <button onClick={() => { setCount(count+1)} }>버튼</button> */}
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <input onChange={ (e) => setTextinput(e.target.value) } />
            <h4 className="pt-5">{shoesInfo.title}</h4>
            <p>{shoesInfo.content}</p>
            <p>{shoesInfo.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div>
    )
}

export default Detail;
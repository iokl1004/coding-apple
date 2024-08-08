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
    const [status, setStatus] = useState('true');

    useEffect(() => {
      console.log('안녕')
    }, [status])

    setTimeout(() => { setStatus('false') }, 2000)

    const [count, setCount] = useState(0);

    // 부모단에서 선언한 id값 가져옴
    const {id} = useParams();
    const shoesInfo = props.shoes.find(obj => obj.id == id);

    return (
      <div className="container">
        {/* <Box> */}
          {/* <YellowBtn bg='blue'>버튼</YellowBtn>
          <YellowBtn bg='orange'>버튼</YellowBtn> */}
        {/* </Box> */}
        {status === 'false' ? null : <div className="alert alert-warning">
                              2초이내 구매시 할인
                            </div>}


        {count}
        <button onClick={() => { setCount(count+1)} }>버튼</button>
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
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
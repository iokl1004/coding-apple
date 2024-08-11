import { Navbar, Nav, Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import bg from './img/bg.png';   // HTML에서 이미지 추가도 가능!
import { useState } from 'react';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js';
import axios from 'axios'

function App() {

  const [shoes, setShoes] = useState(data);
  const [scount, setScount] = useState(2);  // 응용1. 버튼 2회 누를 때는 7, 8, 9번 상품 가져오려면?
  const navigate =  useNavigate();

  return (
    <div className='App'>
      {/* <Button variant="primary">Primary</Button> */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">POP'SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>상세페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            {/* HTML에서 이미지 추가 하는법 */}
            {/* <div className='main-bg' style={{ backgroundImage : 'url('+bg+')'}}> </div> */}
            <div className='main-bg'> </div>
            <div className='container'>
              <div className='row'>
                {
                  shoes.map((a, i) => {
                    return (
                      <Card shoes={shoes[i]} i={i}/>
                    )
                  })
                }
              </div>
            </div>
            <button onClick={() => {
              // 응용2. 버튼 3회 누를 때는 상품 더 없다고 말해주기
              if(scount < 4 ) {
                // 응용1. 버튼 2회 누를 때는 7, 8, 9번 상품 가져오려면?
                axios.get('https://codingapple1.github.io/shop/data'+[scount]+'.json') // ajax 성공
                // axios.get('asd') // ajax 실패
                // ajax 성공
                .then((결과)=> {
                  console.log(결과.data)
                  const copy = [...shoes, ...결과.data];
                  setShoes(copy);
                  setScount(scount+1);  // 응용1. 버튼 2회 누를 때는 7, 8, 9번 상품 가져오려면?
                  // 로딩중 UI 숨기기~
                }) // 서버에서 가져온 data
                .catch(() => {
                  // 로딩중 UI 숨기기~
                })
              } else {
                // 응용2. 버튼 3회 누를 때는 상품 더 없다고 말해주기
                alert("상품이 더이상 존재하지 않습니다.");
              }
            }}>더보기</button>
          </>
        }/>

        {/* 페이지 여러개 만들고 싳으면 URL 파라미터 써도됨! */}
        <Route path="/detail/:id" element={ <Detail shoes={shoes} /> }/>

        {/* <Route path="/about" element={ <About /> }>
          <Route path="member" element={ <div>멤버임</div>} />
          <Route path="location" element={ <div>위치정보임</div> } />
        </Route>

        <Route path="/event" element={ <EventPage /> }>
          <Route path="one" element={ <p>첫 주문 시 양배추즙 서비스</p>} />
          <Route path="two" element={ <p>생일기념 쿠폰받기</p> } />
        </Route> */}

        {/* 404 페이지 */}
        {/* <Route path="/*" element={ <div>없는페이지입니다.</div> }/> */}
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>

      {/* 구멍이라는 뜻. */}
      <Outlet></Outlet>
    </div>
  )
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>

      {/* 구멍이라는 뜻. */}
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return ( 
      <div className='col-md-4'>
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%"/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
      </div>
  )
}

export default App;
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

function App() {

  const [shoes] = useState(data);
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
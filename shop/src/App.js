import { Navbar, Nav, Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import bg from './img/bg.png';   // HTML에서 이미지 추가도 가능!
import { useState } from 'react';
import './App.css';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  const [shoes] = useState(data);

  return (
    <div className='App'>
      {/* <Button variant="primary">Primary</Button> */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">POP'SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
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
        <Route path="/detail" element={
          <>
            <Detail />
          </>
        }/>
      </Routes>


    </div>
  );
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

function Detail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default App;
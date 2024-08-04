import { useState } from 'react';
import './App.css';

function App() {
  let [logo, setLogo] = useState('ReactBlog');
  // 방법 1
  // let [글제목1, a] = useState('남자 코트 추천');
  // let [글제목2, b] = useState('강남 우동맛집');
  // let [글제목3, c] = useState('파이썬독학');

  // 방법2
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0); // 따봉변경은 state변경용 함수이며 이걸 사용해야 html 재 렌더링이 발생함.

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      <button onClick={ () => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>

      <button onClick={ () => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>수정</button>

      
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
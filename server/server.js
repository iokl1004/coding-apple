// 45. Node+Express 서버와 React 연동하려면
const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, function() {
    console.log('listening on 8080')
})

// DB 데이터 보여주고 싶을경우
app.use(express.json());
var cors = require('cors');
app.use(cors());

// 이것이 있어야 특정 폴더의 파일들 전송가능
app.use(express.static(path.join(__dirname, 'shop/build')));

// 메인페이지 접속 시, react로 만든 index.html을 보여 줄 수 가 있음.
app.get('/', function(요청, 응답) {
    응답.sendFile(path.join(__dirname, 'shop/build/index.html'))
})

// DB 데이터 보여주고 싶을경우
// 1. DB데이터 뽑아서 보내주는 API 작성
// 2. 리액트는 여기로 GET 요청
app.get('/product', function(요청, 응답) {
    응답.json({name : 'black shoes'})
})

// 리액트라우터 사용하는 경우 최하단에 추가해놓는것이 좋음.
app.get('*', function(요청, 응답) {
    응답.sendFile(path.join(__dirname, 'shop/build/index.html'))
})


// nodemon이 설치되어 있을 경우, nodemon server.js
// nodemon이 없을 경우, node server.js
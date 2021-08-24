import logo from './logo.svg';
import './App.css';

// 변수를 태그로 만들어서 가져올 수 있다
const Greeting = <h1>hello, react!</h1>

// Component 생성
const NameTitle = () => {
  // NameTitle이 그려내야할 컴포넌트들
  // 태그 여러개를 사용하기 위해서는 <></> 공백태그로 묶어줘야한다
  return(<>
    <p>안녕하세요 ~ 님 React Program 입니다</p>
  </>)
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          안녕하세요 src/App.js 를 불러왔습니다
        </p>
        {Greeting}
        <NameTitle></NameTitle>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          리액트 배우기
        </a>
      </header>
    </div>
  );
}

export default App;

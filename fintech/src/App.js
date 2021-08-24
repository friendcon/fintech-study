// import logo from './logo.svg';
// import './App.css';
// import Header from './component/Header';
// import EventExample from './component/EventExample';
// import ListComponent from './component/ListComponent';

// 변수를 태그로 만들어서 가져올 수 있다
// const Greeting = <h1>hello, react!</h1>

// Component 생성
// const NameTitle = ({userName}) => {
//   // NameTitle이 그려내야할 컴포넌트들
//   // 태그 여러개를 사용하기 위해서는 <></> 공백태그로 묶어줘야한다
//   return(<>
//     <p>안녕하세요 {userName} 님 React Program 입니다</p>
//   </>)
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Header title="메인화면"></Header>
//         <EventExample></EventExample>
//         <Header title="거래내역조회"></Header>
//         <ListComponent></ListComponent>
//       </header>
//     </div>
//   );
// }

// export default App;
import Header from "./component/Header";
import EventExample from "./component/EventExample";
import ListComponent from "./component/ListComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <Header title="테스트 페이지 1"></Header>
          <EventExample></EventExample>
        </Route>
        <Route path="/test2" exact>
          <Header title="테스트 페이지 2"></Header>
          <ListComponent></ListComponent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

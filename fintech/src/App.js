import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosTest from "./pages/AxiosTest";
import NewsSearch from "./pages/NewsSearch";
import AddUser from "./pages/AddUser";
import AuthResult from "./pages/AuthResult";
import NewsMain from "./practice/newsapi/page/NewsMain";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/axios" exact>
          <AxiosTest></AxiosTest>
        </Route>
        <Route path="/news" exact>
          <NewsSearch></NewsSearch>
        </Route> 
        <Route path="/adduser" exact>
          <AddUser></AddUser>
        </Route>
        <Route path="/authResult" exact>
          <AuthResult></AuthResult>
        </Route>
        <Route path="/mynews" exact>
          <NewsMain></NewsMain>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

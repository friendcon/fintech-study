import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosTest from "./pages/AxiosTest";
import NewsSearch from "./pages/NewsSearch";
import AddUser from "./pages/AddUser";
import AuthResult from "./pages/AuthResult";
import NewsMain from "./practice/newsapi/page/NewsMain";
import AddUsers from "./practice/Auth/page/AddUsers";
import AuthResults from "./practice/Auth/page/AuthResults";
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
          <AuthResults></AuthResults>
        </Route>
        <Route path="/mynews" exact>
          <NewsMain></NewsMain>
        </Route>
        <Route path="/addUser2" exact>
          <AddUsers></AddUsers>
        </Route>
        <Route path="/authResult2" exact>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

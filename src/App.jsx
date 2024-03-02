import Login from "./Login";
import "regenerator-runtime/runtime";
import SignUp from "./Signup";
import Dashboard from "./Dashboard";
import UserInformation from "./UserInformation";
import EditInformation from "./EditInformation";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Interview from "./interview";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/interview" component={Interview} />
          <Route path="/signup" component={SignUp} />
          <Route path="/userinfo" component={UserInformation} />
          <Route path="/editinfo" component={EditInformation} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

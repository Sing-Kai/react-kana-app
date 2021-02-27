import logo from './logo.svg';
import './App.css';
import getQuiz from './quizService/index';
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Quiz from "./components/Quiz";

// const qBank = getQuiz(); 

// console.log(qBank)

function App() {

  return (
    <Router>
      <div className="App">

        {/* {
          qBank.map((questionId) => (<h1>{questionId}</h1>))
        } */}
        
        <Switch>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

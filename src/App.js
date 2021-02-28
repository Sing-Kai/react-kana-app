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
import QuizContent from "./components/Quiz";

// const qBank = getQuiz(); 

// console.log(qBank)

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/quiz">
              <QuizContent />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

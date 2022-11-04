import './App.css';
import MyGitHub from './components/MyGitHub';
import MyCounter from './components/MyCounter';

function App() {
  return (
    <div className="App potato">
      <h1>Hello React</h1>
      <h3>Nicholas C - p86g737</h3>
      <MyCounter incBy={5} startVal={90}/><hr />
      <MyCounter incBy={2} startVal={180}/><hr />
      <MyGitHub/>
    </div>
  );
}

export default App;

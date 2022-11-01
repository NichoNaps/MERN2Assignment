import './App.css';
import MyGitHub from './components/MyGitHub';
import MyCounter from './components/MyCounter';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <h3>Nicholas C - p86g737</h3>
      <MyCounter incBy={5}/><hr />
      <MyCounter incBy={2}/><hr />
      <MyGitHub/>
    </div>
  );
}

export default App;

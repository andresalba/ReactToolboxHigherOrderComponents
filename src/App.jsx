import './App.css'
import ClickCounter from './ClickCounter';
import MouseCounter from './MouseCounter';

function App() {

  return (
    <div className="cont">
      <h1>Higher Order Components</h1>
      <ClickCounter />
      <MouseCounter />
    </div>
  )
}

export default App;

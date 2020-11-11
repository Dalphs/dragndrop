import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="kiosk">
          <Card id="card-1" className="card" draggable="true">
            <p>Card one</p>
          </Card>
          <Card id="card-2" className="card" draggable="true">
            <p>Card two</p>
          </Card>
        </Board>
        <Board id="board-2" className="editor">
        </Board>
      </main>
    </div>
  );
}

export default App;

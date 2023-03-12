import Nav from "./components/Nav";
import "./styles/main.scss";

function App() {
  return (
    <div className="App dark:bg-dark dark:text-white">
      <div className="container">
        <header className="App-header">
          <Nav />
        </header>
      </div>
    </div>
  );
}

export default App;

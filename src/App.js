import "./App.css";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { requestPermission } from './firebase/firebase-messaging-sw';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={requestPermission}>알림설정</button>
      </header>
    </div>
  );
}

export default App;

import Login from './Components/Login/login'
import Token from './Token'
import { Button } from 'react-bootstrap';
import './App.css'

function App() {

  const { token, setToken, delToken } = Token();
  
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Aplication</h1>
      <Button variant="danger" onClick={delToken}>
        Logout
      </Button>
    </div>
  );
}

export default App;

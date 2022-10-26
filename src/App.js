import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Register></Register>
    </div>
  );
}

export default App;

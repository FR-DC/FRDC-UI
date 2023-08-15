
import './App.css'
// import VotingPage from './pages/VotingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import VotingPage from './pages/VotingPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/voting" element={<VotingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

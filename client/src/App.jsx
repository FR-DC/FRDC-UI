
import './App.css'
// import VotingPage from './pages/VotingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import VotingPage from './pages/VotingPage';
import Dashboard from './pages/Dashboard';
import VoteItemPage from './pages/VoteItemPage';
import TestPage from './pages/TestPage';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/voting" element={<VotingPage/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/voting/:uuid" element={<VoteItemPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


import './App.css'
// import VotingPage from './pages/VotingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import VotingPage from './pages/VotingPage';
import Dashboard from './pages/Dashboard';
import VoteItemPage from './pages/VoteItemPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename="FRDC-UI">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/voting" element={<VotingPage/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/voting/:caseId" element={<VoteItemPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

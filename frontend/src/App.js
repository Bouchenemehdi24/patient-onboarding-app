import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import AddPatient from './AddPatient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add-patient" element={<AddPatient />} />
      </Routes>
    </Router>
  );
}

export default App;

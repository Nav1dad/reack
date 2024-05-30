import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [user, setUser] = useState([]);

  const fetchData = () => {
    return axios.get("http://localhost:5000/lapi/dbvivienda")
    .then((response) => setUser(response.data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <h1>Cursos</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
          <li key={userObj._id}>{userObj.representante} {userObj.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

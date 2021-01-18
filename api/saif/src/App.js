import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import axios from 'axios';
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setUsers(res.data))
  },[]);
  return (
    <div className="App">
   {users.map((user)=><UserList user={user}/>)}
    </div>
  );
}

export default App;

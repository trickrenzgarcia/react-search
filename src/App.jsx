import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

// Components
import Table from './components/Table';

function App() {
  const [query, setQuery] = useState('')
  const [datas, setDatas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/users').then(res => setDatas(res.data))
  }, [])

  const keys = ['username', 'email']

  const search = (data) => {
    return data.filter((q) => keys.some(key => q[key].toLowerCase().includes(query.toLowerCase())))
  }

  return (
    <div className="App">
      <input type="text" placeholder='search...' className='search-bar' onChange={(e) => setQuery(e.target.value)} />
      <Table datas={search(datas)}/>
    </div>
  );
}

export default App;

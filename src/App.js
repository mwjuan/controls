import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './App.css';
import axios from 'axios';

const { TextArea } = Input;

function App() {
  const [result, setResult] = useState();

  const getInfo = async () => {
    let response = await axios.get('https://space365.ceibs.edu/campuswebservice/api')
    setResult(response.data);
  }

  return (
    <div className="App">
      <Button onClick={() => getInfo()} type='primary' style={{ width: 120, marginBottom: 10 }}>获取信息</Button>
      <TextArea rows={10} value={result} style={{ width: 700 }} />
    </div>
  );
}

export default App;

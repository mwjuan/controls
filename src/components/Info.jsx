import React, { useState } from 'react';
import { Button, Input } from 'antd';
import axios from 'axios';
import './Info.css';

const { TextArea } = Input;

export default function Info(props) {
  const [result, setResult] = useState();

  const getInfo = async () => {
    console.log(props.url)
    if (!props.url) return;

    let response = await axios.get(props.url)
    setResult(response.data);
  }

  return (
    <div className='container'>
      <Button type='primary' onClick={getInfo} style={{ marginBottom: 10 }}>获取信息</Button>
      <TextArea value={result} rows={10} />
    </div>
  )
}


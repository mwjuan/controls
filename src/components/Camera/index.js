import React from 'react';
import { Button } from "antd"

export default function Camera(props) {
    return (
        <div>
            <h2>Camera: {props.text}</h2>
            <Button onClick={props.onClick}>点击</Button>
        </div>
    )
}
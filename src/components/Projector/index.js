import React from 'react';
import { Button } from "antd"

export default function Projector(props) {
    return (
        <div>
            <h2>Projector: {props.text}</h2>
            <Button onClick={props.onClick}>点击</Button>
        </div>
    )
}
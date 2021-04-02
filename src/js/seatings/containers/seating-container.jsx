import React from 'react';
import {CabineContainers} from "../components/cabine";
import InputList, { InputBlock } from "../components/input-info";
import "../styles/seating.css"
export const SeatingContainer = (props) => {
    
    return(
        <div>
            <InputBlock onSave = {value =>{
                alert(JSON.stringify(value, null, 4))
            }} />
            <InputList />
            <CabineContainers />
        </div>
    )
}
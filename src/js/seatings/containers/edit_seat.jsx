import React from 'react';
import { connect } from "react-redux";
import { dispatcher } from "../actions.js";
import {CabineContainers} from "../components/cabine";
import InputList, { InputBlock } from "../components/input-info";
import "../styles/seating.css"

const SeatingEdition = ({initialValue = null, onSave= null,initUser = null,...props}) => {
    
    React.useEffect(()=>{
        if (initialValue) {
            props.dispatcher({
                type :"init",
                payload : initialValue
            })
        }
        if (initUser) {
            props.dispatcher({
                type :"initUser",
                payload : initUser
            })
        }
    },[])
    const _OnSave = (value)=>{
        if(onSave){
            onSave(value)
        }else{
            console.warn("you must add the saving function...")
        }
    }
    return(
        <div>
            <InputBlock onSave = {value => _OnSave(value) }/>
            <InputList />
            <CabineContainers />
        </div>
    )
}


export default connect(null,{ dispatcher })(SeatingEdition)
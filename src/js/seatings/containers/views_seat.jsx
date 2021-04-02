import React from 'react';
import { connect } from "react-redux";
import { dispatcher } from "../actions.js";
import {CabineContainers} from "../components/cabine";
import "../styles/seating.css"

const SeatingReserve = ({initialValue = null, getValue = null, initUser = null  ,...props}) => {
    
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

    React.useEffect(()=>{
        if(getValue){
            getValue(props.seating)
        }
    },[props.seating, getValue])

    return(
        <div>
            <CabineContainers />
        </div>
    )
}

const  mapStateToProps = state =>({
    seating  : state.seating
})
export default connect(mapStateToProps, {dispatcher} )(SeatingReserve)
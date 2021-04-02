import React from 'react';
import { connect } from "react-redux";
import { dispatcher } from "../actions"
import { isInArray } from "../tools_function";
const Seats = ({isTaken=false,className ="",...props}) => {
    const ref = React.createRef()
    const toggle = () => {
        ref.current.classList.toggle("choice");
    }
    const handlerClick = ()=>{
        if(!isTaken && props.idSeat){
            const isIn = isInArray(props.Reserved,props.idSeat)
            toggle()
            if (!isIn) {
                props.dispatcher({
                    type :"AddReserved",
                    payload : props.idSeat
                })
            }else{
                props.dispatcher({
                    type :"RemoveReserved",
                    payload : props.idSeat
                })
            }
        }    
    }
    const DbClick = (e)=>{
        if(props.isConf && props.idSeat){
            if(!isTaken){
                const isIn = isInArray(props.DefaulReserved,props.idSeat)
                toggle()
                if (!isIn) {
                    props.dispatcher({
                        type :"AddDefaultReserved",
                        payload : props.idSeat
                    })
                }else{
                    props.dispatcher({
                        type :"RemoveDefaultReserved",
                        payload : props.idSeat
                    })
                }
            }    
        }
    }
    return (
        <td 
            ref = {ref} 
            className= {`seats ${className} ${ isTaken ? "prise" : "" }`} 
            onClick = { handlerClick }
            onDoubleClick = { DbClick }
        >
            <div className="coudeleft"></div>
            <div className="couderight"></div>
        </td>
    )
}

const matStateToProps = (state)=>({
    userSession: state.seating.userSession,
    isConf : state.seating.isConf,
    DefaulReserved: state.seating.DefaulReserved,
    Reserved:state.seating.Reserved
})
export default connect(matStateToProps, { dispatcher })(Seats)
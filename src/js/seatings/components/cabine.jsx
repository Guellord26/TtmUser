import React from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Space from "./space"
import Seats from "./seats"
import { dispatcher } from "../actions"
import { InputListMapStateToProps } from "./input-info";
import { isInArray, isUserPlace } from "../tools_function"

const LineSiege = props =>{
    let rows = React.useMemo(()=>{
        let rows = []
        for (let i = 0; i < props.NbrRange; i++) {
            for (let index = 0; index < props.NbrSiegePerRange; index++) {
                if (props.seats.length > 0 ) {
                    const Seat = props.seats.pop()
                    rows.push(Seat)
                }
            }
            rows.push(<Space key= { `c${i}`}/>)
            
        }
        rows.pop()
        return rows
    },[props])
    
    return (<tr className="LineSiege">{ rows }</tr>)
}

const  _CabineLine = (props )=>{

        const NbrSeat           = props.stateParant.TotalSeats
        const NbrRange          = props.stateParant.Range 
        const NbrSiegePerRange  = props.stateParant.SeatsPerRange

        const col = NbrSeat /(NbrRange * NbrSiegePerRange)
        let SeatRow = []
        for (let index = 0 ; index < NbrSeat ; index++){
            const idSeat = {id:index, block : props.idLine, user: props.userSession }
            if(isInArray(props.Reserved,idSeat) || isInArray(props.DefaulReserved,idSeat)){
                SeatRow.push(<Seats className="choice" key = { index } idSeat = { idSeat } />)              
            }else if(isUserPlace(props.Reserved,idSeat) || isUserPlace(props.DefaulReserved,idSeat)){
                SeatRow.push(<Seats isTaken= { true }  key = { index } idSeat = { idSeat } />)
            }else{
                SeatRow.push(<Seats key = { index } idSeat = { idSeat } />)
            }
        }

        let rows = []
        for (let index = 0; index < col ; index++) {
            rows.push(
                <LineSiege 
                    key = {index} 
                    NbrRange = { NbrRange } 
                    NbrSiegePerRange = { NbrSiegePerRange }
                    seats = { SeatRow }
                />
            )  
        }
        
        return (<>{ rows }</>);
}
const CabineLineMapToState = (state)=>({
    DefaulReserved : state.seating.DefaulReserved,
    Reserved       : state.seating.Reserved ,
    userSession    : state.seating.userSession
})
const CabineLine = connect(CabineLineMapToState,null)(_CabineLine)

const CabineContainer = ({BlockList}) => {
    return (
        <Grid container>
            <Grid item xs={2} className="seating-legend">
                <h3 className="title">Legend</h3>
                <table style={{borderSpacing: "15px 5px"}}>
                    <tbody>
                        <tr><Seats className = "choice" /></tr>
                        <tr><td>choisi</td></tr>
                    </tbody>
                </table>
                <table style={{borderSpacing: "15px 5px"}}>
                    <tbody>
                        <tr><Seats isTaken = {true} /></tr>
                        <tr><td>pris</td></tr>
                    </tbody>
                </table>
                <table style={{borderSpacing: "15px 5px"}}>
                    <tbody>
                        <tr><Seats /></tr>
                        <tr><td>disponible</td></tr>
                    </tbody>
                </table>
            </Grid>
            <Grid item xs={10} style={{display:"flex", justifyContent:"center"}}>
                <table className="cabine">
                    <tbody>
                        {BlockList.map(items=>(
                            <CabineLine key = {items.keyBlock} idLine = { items.keyBlock } stateParant = {items} />
                        ))}
                    </tbody>
                </table>
            </Grid>
        </Grid>
    )
}

export const CabineContainers = connect(InputListMapStateToProps , {dispatcher})(CabineContainer)
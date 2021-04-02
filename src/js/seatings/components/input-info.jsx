import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
// import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { dispatcher } from "../actions";
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const InputBlockMapStateToProps = (state)=>({ NumberBlock : state.seating.NumberBlock,isConf : state.seating.isConf , state:state.seating})
export const _InputBlock = ({dispatcher, NumberBlock, isConf, onSave, state }) =>{
    return (
        <div className="input-g">
            <FormGroup row>
                <TextField 
                    id="outlined-basic" 
                    label="Nombre de block" 
                    variant="outlined" 
                    type        = "number" 
                    value = { NumberBlock}
                    name        = "NumberBlock"
                    onChange    = { e => dispatcher({type:"changeNumberBlock",payload: e.target.value})   }
                    size        = "small"
               />
                <FormControlLabel
                    control={
                        <Switch 
                            checked={isConf} 
                            onChange={ event =>{
                                dispatcher({
                                    type :"changeIsConfig",
                                    payload : event.target.checked
                                })
                            }} 
                            name="isConf" 
                        />}
                    label="Configuration"
                />
            </FormGroup>        
            <Button
                variant="contained"
                color="primary"
                size="small"
                // startIcon={<SaveIcon />}
                disableElevation
                onClick = { ()=>{
                    if(onSave){
                        onSave(state)
                    }
                } }
            >
                Save
            </Button>
            
        </div>
    )
}

export const InputBlock = React.memo(connect(InputBlockMapStateToProps,{dispatcher})(_InputBlock))


export const InputInfoSeating = (props) => {
    const  [ state, setState ] = useState(props.initialValue)
    const HandlerChange = e =>{
        if(parseInt(e.target.value) > 0){
            const tmp = { ...state ,[e.target.name]: e.target.value}
            setState(tmp)
            props.provider({type :"onChangeState", payload:tmp})
        }
    }

    return ( 
        <div className="input-g">
            <TextField 
                id="outlined-basic" 
                label="Total de sieage" 
                variant="outlined" 
                type        = "number" 
                value       = { state.TotalSeats }
                name        = "TotalSeats"
                onChange    = { HandlerChange }
                size        = "small"
            />
            <TextField 
                id="outlined-basic" 
                label="siege par ranger" 
                variant="outlined" 
                type        = "number" 
                value       = { state.SeatsPerRange }
                name        = "SeatsPerRange"
                onChange    = { HandlerChange }
                size        = "small"
            />
            <TextField 
                id="outlined-basic" 
                label="Nombre de ranger" 
                variant="outlined" 
                type        = "number" 
                value       = { state.Range }
                name        = "Range"
                onChange    = { HandlerChange }
                size        = "small"
            />
        </div>
    )
}



const InputList = ({BlockList, dispatcher})=>{
    return (
        <div>
            { BlockList.map(item=>(
                <InputInfoSeating 
                    key={item.keyBlock} 
                    initialValue = {item } 
                    provider = { dispatcher } 
                />
            ))}
        </div>
    )
}
export const InputListMapStateToProps = (state)=>({ BlockList : state.seating.BlockList })
export default connect(InputListMapStateToProps,{dispatcher})(InputList)
import React, { createContext , useReducer } from "react";

const ContainerContext = createContext()

const initialState    = {
    keyBlock            : null,
    TotalSeats          : 1,
    SeatsPerRange       : 1,
    Range               : 1,
}

const initialStateReducer = {
    NumberBlock : 0,
    BlockList   : []
}

function reducer(state, action) {
    switch (action.type) {
        case 'changeNumberBlock':
            const nbr = parseInt(action.payload);
            const nbrBlck = parseInt(state.NumberBlock)
            if ( nbrBlck < nbr ) {
                const newConfig = initialState
                newConfig['keyBlock'] = nbr;
                return {
                    ...state, 
                    NumberBlock : nbr, 
                    BlockList : [...state.BlockList, newConfig] 
                };
            } else {
                const tmpData = state.BlockList.filter(( _ ,index )=>index < nbr)
                return {
                    ...state, 
                    NumberBlock : nbr,
                    BlockList : [...tmpData]
                };
            }
        case 'onChangeState':
            const p = action.payload
            
            const tmp = state.BlockList.map(items =>(
                (items.keyBlock === p.keyBlock) ?  p : items )
            )
            return {...state, BlockList : [...tmp]};
        default:
            return state;
    }
}

export const ContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialStateReducer);
    return (
        <ContainerContext.Provider value = { [state , dispatch] }>{
            props.children
        }</ContainerContext.Provider>
    )
}

export default ContainerContext
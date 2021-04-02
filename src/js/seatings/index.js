import { SeatingContainer as SC } from "./containers/seating-container"
import { deepEqual } from "./tools_function";

export const SeatingContainer = SC;

const initialState    = {
    keyBlock            : null,
    TotalSeats          : 1,
    SeatsPerRange       : 1,
    Range               : 1,
}

const initialStateReducer = {
    userSession : null,
    isConf       : true,
    NumberBlock : 0,
    BlockList   : [],
    DefaulReserved : [],
    Reserved : []
}

export const SeatingReducer = (state = initialStateReducer ,  action)=>{
    switch (action.type) {
        case "init":
            return {
                ...state,
                ...action.payload
            }
        case "initUser":
            return {
                ...state,
                userSession : action.payload
            }
        case 'changeNumberBlock':
            const nbr = parseInt(action.payload);
            const nbrBlck = parseInt(state.NumberBlock)
            if (nbr >= 0) {
                if ( nbrBlck < nbr ) {
                    return {
                        ...state, 
                        NumberBlock : nbr, 
                        BlockList : [...state.BlockList, {...initialState, keyBlock:nbr}] 
                    };
                } else {
                    const tmpData = state.BlockList.filter(( _ ,index )=>index < nbr)
                    return {
                        ...state, 
                        NumberBlock : nbr,
                        BlockList : [...tmpData]
                    };
                }
            }
            return 
        case 'onChangeState':
            const p = action.payload
            const tmp = state.BlockList.map(items =>(
                (items.keyBlock === p.keyBlock) ?  p : items )
            )
            return {...state, BlockList : [...tmp]};
        case "AddDefaultReserved":
            return {
                ...state,
                DefaulReserved : [...state.DefaulReserved, action.payload]
            }
        case "RemoveDefaultReserved":
            return {
                ...state,
                DefaulReserved : state.DefaulReserved.filter(items=>!deepEqual(items,action.payload))
            }
        case "AddReserved":
            return {
                ...state,
                Reserved : [...state.Reserved, action.payload]
            }
        case "RemoveReserved":
            return {
                ...state,
                Reserved : state.Reserved.filter(items=> !deepEqual(items,action.payload))
            }
        case "changeIsConfig":
            return {
                ...state,
                isConf : action.payload
            }
        default:
            return state;
    }
}


import { combineReducers } from 'redux'
import { authReducer, statutReducer  } from './authReducer'
import  userReducer, {redirectReducer} from './authReducer'
import { routingReducer, voyageReducer, appareilReducer, deviseReducer, tauxReducer, prixReducer,
        cargoReducer, courrierReducer, classeVoyageReducer, categorieReducer,dossierReducer} from './index'
import { SeatingReducer } from '../seatings'

export default combineReducers({
    seating : SeatingReducer,
    authReducer,
    routingReducer,
    appareilReducer,
    userReducer,
    voyageReducer,
    deviseReducer,
    tauxReducer,
    prixReducer,
    cargoReducer,
    courrierReducer,
    classeVoyageReducer,
    categorieReducer,
    statutReducer,
    dossierReducer,
    redirectReducer
})
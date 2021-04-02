
import {
  FETCH_APPAREIL_SUCCESS,
  FETCH_VOYAGE_SUCCESS,
  ADD_APPAREIL,
  ADD_ROUTING,
  ADD_VOYAGE,
  ADD_DEVISE,
  ADD_TAUX,
  ADD_PRIX,
  ADD_SEATING,
  ADD_CARGO,
  ADD_COURIER,
  ADD_CATEGORIE,
  ADD_CLASSE_VOYAGE,
  ADD_DOSSIER,
  FETCH_DOSSIER_SUCCESS,
  FETCH_CLASSE_VOYAGE_SUCCESS,
  FETCH_CATEGORIE_SUCCESS,
  FETCH_COURIER_SUCCESS,
  FETCH_CARGO_SUCCESS,
  FETCH_PRIX_SUCCESS,
  FETCH_ROUTING_SUCCESS,
  FETCH_DEVISE_SUCCESS,
  FETCH_TAUX_SUCCESS,
  FETCH_PROFIL_SUCCESS,
  FETCH_SEATING_SUCCESS
} from '../constantes/action-type';

const initialStateAppareil = {
  listeAppareil: []
}
const initialStateRoruting = {
  listeRouting: []
}
const initialStateVoyage = {
  listeVoyage: []
};
const initialStateDevise = {
  listeDevise: []
};
const initialStateTaux = {
  listeTaux: []
};
const initialStatePrix = {
  listePrixVoyage: []
}
const initialStateProfil = {
  profil: []
}
const initialStateSeating = {
  listeSeating: []
}
const initialStateCargo = {
  listeCargo: []
}
const initialStateCourrier = {
  listeCourrier: []
}
const initialStateCategorie = {
  listeCategorie: []
}
const initialStateClasseVoyage = {
  listeClasseVoyage: []
}
const initialStateDossier = {
  listeDossier: []
}
// ================  CATEGORIE ================ //
export const dossierReducer = (state = initialStateDossier, action) => {
  switch (action.type) {
    case FETCH_DOSSIER_SUCCESS:
      return {
        ...state,
        listeDossier: action.payload
      }
    case ADD_DOSSIER :
      return {
        ...state,
        listeDossier: [action.payload, ...state.listeDossier]
      }
    default:
      return state
  }

}
// ================  CATEGORIE ================ //
export const categorieReducer = (state = initialStateCategorie, action) => {
  switch (action.type) {
    case FETCH_CATEGORIE_SUCCESS:
      return {
        ...state,
        listeCategorie: action.payload
      }
    case ADD_CATEGORIE :
      return {
        ...state,
        listeCategorie: [action.payload, ...state.listeCategorie]
      }
    default:
      return state
  }

}
// ================  CLASSE VOYAGE ================ //
export const classeVoyageReducer = (state = initialStateClasseVoyage, action) => {
  switch (action.type) {
    case FETCH_CLASSE_VOYAGE_SUCCESS:
      return {
        ...state,
        listeClasseVoyage: action.payload
      }
    case ADD_CLASSE_VOYAGE :
      return {
        ...state,
        listeClasseVoyage: [action.payload, ...state.listeClasseVoyage]
      }
    default:
      return state
  }

}
// ================  COURIER ================ //
export const courrierReducer = (state = initialStateCourrier, action) => {
  switch (action.type) {
    case FETCH_COURIER_SUCCESS:
      return {
        ...state,
        listeCourrier: action.payload
      }
    case ADD_COURIER :
      return {
        ...state,
        listeCourrier: [action.payload, ...state.listeCourrier]
      }
    default:
      return state
  }

}
// ================  CARGO ================ //
export const cargoReducer = (state = initialStateCargo, action) => {
  switch (action.type) {
    case FETCH_CARGO_SUCCESS:
      return {
        ...state,
        listeCargo: action.payload
      }
    case ADD_CARGO :
      return {
        ...state,
        listeCargo: [action.payload, ...state.listeCargo]
      }
    default:
      return state
  }

}
// ================  SEATING ================ //
export const seatingReducer = (state = initialStateSeating, action) => {
  switch (action.type) {
    case FETCH_SEATING_SUCCESS:
      return {
        ...state,
        listeSeating: action.payload
      }
    case ADD_SEATING :
      return {
        ...state,
        listeSeating: [action.payload, ...state.listeSeating]
      }
    default:
      return state
  }

}
// ================  PROFIL ================ //
export const profilReducer = (state = initialStateProfil, action) => {
  switch (action.type) {
    case FETCH_PRIX_SUCCESS:
      return {
        ...state,
        profil: action.payload
      }
  }
}
// ================  PRIX ================ //
export const prixReducer = (state = initialStatePrix, action) => {
  switch (action.type) {
    case FETCH_PRIX_SUCCESS:
      return {
        ...state,
        listePrixVoyage: action.payload
      }
    case ADD_PRIX :
      return {
        ...state,
        listePrixVoyage: [action.payload, ...state.listePrixVoyage]
      }
    default:
      return state
  }

}
// ================ TAUX================ //
export const tauxReducer = (state = initialStateTaux, action) => {
  switch (action.type) {
    case FETCH_TAUX_SUCCESS:
      return {
        ...state,
        listeTaux: action.payload
      }
    case ADD_TAUX:
      return {
        ...state,
        listeTaux: [action.payload, ...state.listeTaux]
      }
    default:
      return state
  }

}
// ================ DEVISE ================ //
export const deviseReducer = (state = initialStateDevise, action) => {
  switch (action.type) {
    case FETCH_DEVISE_SUCCESS:
      return {
        ...state,
        listeDevise: action.payload
      }
    case ADD_DEVISE:
      return {
        ...state,
        listeDevise: [action.payload, ...state.listeDevise]
      }
    default:
      return state
  }

}

// ================== APPAREIL =================== //

export const appareilReducer = (state = initialStateAppareil, action) => {

  switch (action.type) {
    case FETCH_APPAREIL_SUCCESS:
      return {
        ...state,
        listeAppareil: action.payload
      }
    case ADD_APPAREIL:
      return {
        ...state,
        listeAppareil: [action.payload, ...state.listeAppareil]
      }
    default:
      return state
  }
}


// ========================== ROUTING ============================ //

export const routingReducer = (state = initialStateRoruting, action) => {
  switch (action.type) {
    case FETCH_ROUTING_SUCCESS:
      return {
        ...state,
        listeRouting: action.payload
      }
    case ADD_ROUTING:
      return {
        ...state,
        listeRouting: [action.payload, ...state.listeRouting]
      }
    default:
      return state
  }
}

// ========================== VOYAGE ============================ //

export const voyageReducer = (state = initialStateVoyage, action) => {
  switch (action.type) {
    case FETCH_VOYAGE_SUCCESS:
      return {
        ...state,
        listeVoyage: action.payload
      }
    case ADD_VOYAGE:
      return {
        ...state,
        listeVoyage: [action.payload, ...state.listeVoyage]
      }
    default:
      return state
  }
}


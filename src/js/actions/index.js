import {
    ADD_ROUTING,
    FETCH_ROUTING_SUCCESS,
    FETCH_VOYAGE_SUCCESS,
    ADD_VOYAGE, ADD_APPAREIL,
    ADD_DEVISE,ADD_PRIX,
    ADD_TAUX,
    ADD_SEATING,
    ADD_CARGO,
    ADD_COURIER,
    ADD_CATEGORIE,
    ADD_CLASSE_VOYAGE,
    ADD_DOSSIER,
    // UPDATE_DOSSIER,
    // DELETE_DOSSIER,
    FETCH_DOSSIER_SUCCESS,
    FETCH_CLASSE_VOYAGE_SUCCESS,
    FETCH_CATEGORIE_SUCCESS,
    FETCH_COURIER_SUCCESS,
    FETCH_CARGO_SUCCESS,
    FETCH_APPAREIL_SUCCESS,
    FETCH_SEATING_SUCCESS,
    FETCH_STATUT_SUCCESS,
    FETCH_USER_SUCCESS,
    FETCH_DEVISE_SUCCESS,
    FETCH_TAUX_SUCCESS,
    FETCH_PROFIL_SUCCESS,
    FETCH_PRIX_SUCCESS,
    DELETE_USER_SUCCESS,
    UPDATE_USER_SUCCESS,

} from '../constantes/action-type'

// ======================= cette fonction configure le token ================ //

export const getConfig = () => {

    const token = localStorage.getItem('Token')
    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (token) {
        config.headers["Authorization"] = `Token ${token}`
    }
    return config
}

// ======================== POST AND GET UPDATE AND DELETE ======================== //


export const getCurrentDossier = (JsonData) => {
    return {
        type: FETCH_DOSSIER_SUCCESS,
        payload: JsonData
    }
}
export const postCurrentDossier = (JsonData) => {
    return {
        type: ADD_DOSSIER,
        payload: JsonData
    }
}
// export const updateCurrentDossier = (JsonData) => {
//     return {
//         type: UPDATE_DOSSIER,
//         payload: JsonData
//     }
// }
// export const deleteCurrentDossier = (JsonData) => {
//     return {
//         type: DELETE_DOSSIER,
//         payload: JsonData
//     }
// }

// ======================== POST AND GET PRIX ======================== //


export const getCurrentPrix = (JsonData) => {
    return {
        type: FETCH_PRIX_SUCCESS,
        payload: JsonData
    }
}
export const postCurrentPrix = (JsonData) => {
    return {
        type: ADD_PRIX,
        payload: JsonData
    }
}

// ======================== POST AND GET TAUX ======================== //


export const getCurrentTaux = (JsonData) => {
    return {
        type: FETCH_TAUX_SUCCESS,
        payload: JsonData
    }
}
export const postCurrentTaux = (JsonData) => {
    return {
        type: ADD_TAUX,
        payload: JsonData
    }
}
// ======================== POST AND GET DEVISE ======================== //


export const getCurrentDevise = (JsonData) => {
    return {
        type: FETCH_DEVISE_SUCCESS,
        payload: JsonData
    }
}
export const postCurrentDevise = (JsonData) => {
    return {
        type: ADD_DEVISE,
        payload: JsonData
    }
}

// ======================== POST AND GET CLASSE VOYAGE ======================== //

export const getCurrentClasseVoyage = (JsonData) => {
    return {
        type: FETCH_CLASSE_VOYAGE_SUCCESS,
        payload: JsonData
    }
}
export const postCurrentClasseVoyage = (JsonData) => {
    return {
        type: ADD_CLASSE_VOYAGE,
        payload: JsonData
    }
}

// ======================== POST AND GET CATEGORIE ======================== //


export const getCurrentCategorie = (JsonData) => {
    return {
        type: FETCH_CATEGORIE_SUCCESS ,
        payload: JsonData
    }
}
export const postCurrentCategorie = (JsonData) => {
    return {
        type: ADD_CATEGORIE ,
        payload: JsonData
    }
}

// ======================== POST AND GET COURIER ======================== //


export const getCurrentCourier = (JsonData) => {
    return {
        type: FETCH_COURIER_SUCCESS,
        payload: JsonData
    }
}
export const postCurrentCourier = (JsonData) => {
    return {
        type: ADD_COURIER,
        payload: JsonData
    }
}
// ======================== POST AND GET CARGO ======================== //


export const getCurrentCargo = (JsonData) => {
    return {
        type: FETCH_CARGO_SUCCESS,
        payload: JsonData
    }
}
export const postCurrentCargo = (JsonData) => {
    return {
        type: ADD_CARGO,
        payload: JsonData
    }
}

// ======================== POST AND GET SEATING ======================== //
export const getCurrentSeating = (JsonData) => {
    return {
        type: FETCH_SEATING_SUCCESS,
        payload: JsonData
    }
}
export const postCurrentSeating = (JsonData) => {
    return {
        type: ADD_SEATING,
        payload: JsonData
    }
}




// ======================== POST AND GET ROUTINGS ======================== //

export const getCurrentRouting = (JsonData) => {
    return {
        type: FETCH_ROUTING_SUCCESS,
        payload: JsonData
    }
}
export const postCurrentRouting = (JsonData) => {
    return {
        type: ADD_ROUTING,
        payload: JsonData
    }
}


// ======================== POST AND GET VOYAGES ==========================//

export const getCurrentVoyage = (JsonData) => {
    return {
        type: FETCH_VOYAGE_SUCCESS,
        payload: JsonData
    }
}
export const postCurrentVoyage = (JsonData) => {
    return {
        type: ADD_VOYAGE,
        payload: JsonData
    }
}

// ======================== POST AND GET APPAREILS ==========================//

export const getCurrentAppareil = (JsonData) => {
    return {
        type: FETCH_APPAREIL_SUCCESS,
        payload: JsonData
    }
}
export const postCurrentAppareil = (JsonData) => {
    return {
        type: ADD_APPAREIL,
        payload: JsonData
    }
}

// ======================== GET LISTE STATUTS ==========================//

export const getCurrentStatut = (JsonData) => {
    return {
        type: FETCH_STATUT_SUCCESS,
        payload: JsonData
    }
}

// ======================== GET LISTE USERS ==========================//

export const getCurrentUser = (JsonData) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: JsonData
    }
}

// ======================== DELETE USERS ==========================//

export const deletetCurrentUser = (JsonData) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: JsonData
    }
}

// ======================== UPDATE USERS ==========================//

export const updateCurrentUser = (JsonData) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: JsonData
    }
}
// ======================== POST AND GET PROFIL ======================== //


export const getCurrentProfil = (JsonData) => {
    return {
        type: FETCH_PROFIL_SUCCESS,
        payload: JsonData
    }
}







import axios from 'axios'
import { 
        getCurrentRouting, 
        getCurrentStatut, 
        getCurrentVoyage,
        getCurrentAppareil,
        getCurrentUser,
        postCurrentRouting, 
        postCurrentVoyage,
        postCurrentAppareil,
        updateCurrentUser,
        deletetCurrentUser,
        postCurrentDevise,
        getCurrentDevise,
        getCurrentTaux,
        postCurrentTaux,
        getCurrentPrix,
        postCurrentPrix,
        getCurrentProfil,
        postCurrentSeating,
        getCurrentSeating,
        postCurrentCargo,
        getCurrentCargo,
        postCurrentCourier,
        getCurrentCourier,               
        postCurrentCategorie,
        getCurrentCategorie,
        postCurrentClasseVoyage,
        getCurrentClasseVoyage,
        postCurrentDossier,
        getCurrentDossier,
        getConfig
        
} from './index'
import {
    URL_ROOT_POST_SEATING, 
    URL_ROOT_LISTE_SEATING,
    URL_ROOT_POST_ROUTING, 
    URL_ROOT_LISTE_ROUTING,  
    URL_ROOT_LISTE_VOYAGE,
    URL_ROOT_POST_VOYAGE,
    URL_ROOT_LISTE_APPAREIL,
    URL_ROOT_LISTE_STATUT,
    URL_ROOT_LISTE_USERS,
    URL_ROOT_DELETE_USER,
    URL_ROOT_UPDATE_USER,
    URL_ROOT_POST_APPAREIL,    
    URL_ROOT_POST_DEVISE,
    URL_ROOT_LISTE_DEVISE,
    URL_ROOT_LISTE_TAUX,
    URL_ROOT_POST_TAUX,
    URL_ROOT_LISTE_PRIX,
    URL_ROOT_POST_PRIX,
    URL_ROOT_LISTE_CARGO,
    URL_ROOT_POST_CARGO,
    URL_ROOT_LISTE_COURIER,
    URL_ROOT_POST_COURIER,
    URL_ROOT_PROFIL,
    URL_ROOT_POST_CATEGORIE,
    URL_ROOT_LISTE_CATEGORIE,
    URL_ROOT_LISTE_DOSSIER,
    URL_ROOT_POST_DOSSIER,
    URL_ROOT_LISTE_CLASSE_VOYAGE,
    URL_ROOT_POST_CLASSE_VOYAGE

} from '../constantes/action-type'


// ======================== POST AND GET UPDATE AND DELETE DOSSIER ==========================//

export const getListeDossier = () => dispatch => {
    axios.get(URL_ROOT_LISTE_DOSSIER, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getCurrentDossier(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postDossier = (data) => dispatch => {
    
    axios.post(URL_ROOT_POST_DOSSIER, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(postCurrentDossier(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}
export const updateDossier = (data) => dispatch => {
    
    axios.post(URL_ROOT_POST_DOSSIER, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(postCurrentDossier(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}
export const deleteDossier = (data) => dispatch => {
    
    axios.post(URL_ROOT_POST_DOSSIER, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(postCurrentDossier(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}


// ======================== POST AND GET CATEGORIE ==========================//

export const getListeCategorie = () => dispatch => {
    axios.get(URL_ROOT_LISTE_CATEGORIE, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getCurrentCategorie(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postCategorie = (data) => dispatch => {
    
    axios.post(URL_ROOT_POST_CATEGORIE, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(postCurrentCategorie(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}

// ======================== POST AND GET CLASSE VOYAGE ==========================//

export const getListeClasseVoyage = () => dispatch => {
    axios.get(URL_ROOT_LISTE_CLASSE_VOYAGE, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getCurrentClasseVoyage(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postClasseVoyage = (data) => dispatch => {
    
    axios.post(URL_ROOT_POST_CLASSE_VOYAGE, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(postCurrentClasseVoyage(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}
// ======================== POST AND GET CARGO ==========================//

export const getListeCourrier = () => dispatch => {
    axios.get(URL_ROOT_LISTE_COURIER, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getCurrentCourier(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postCourrier = (data) => dispatch => {
    
    axios.post(URL_ROOT_POST_COURIER, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(postCurrentCourier(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}
// ======================== POST AND GET CARGO ==========================//

export const getListeCargo = () => dispatch => {
    axios.get(URL_ROOT_LISTE_CARGO, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getCurrentCargo(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postCargo = (data) => dispatch => {
    
    axios.post(URL_ROOT_POST_CARGO, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(postCurrentCargo(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}
// ======================== POST AND GET PRIX ==========================//

export const getListeSeating = () => dispatch => {
    axios.get(URL_ROOT_LISTE_SEATING, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getCurrentSeating(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postSeating = (data) => dispatch => {
    
    axios.post(URL_ROOT_POST_SEATING, {
        configuration:data
    }, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(postCurrentSeating(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}
// ======================== POST AND GET PRIX ==========================//

export const getListePrix = () => dispatch => {
    axios.get(URL_ROOT_LISTE_PRIX, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getCurrentPrix(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postPrix = (data) => dispatch => {
    
    axios.post(URL_ROOT_POST_PRIX, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(postCurrentPrix(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}

// ======================== POST AND GET TAUX ==========================//

export const getListeTaux = () => dispatch => {
    axios.get(URL_ROOT_LISTE_TAUX, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getCurrentTaux(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postTaux = (data) => dispatch => {
    
    axios.post(URL_ROOT_POST_TAUX, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(postCurrentTaux(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}

// ======================== POST AND GET DEVISE ==========================//

export const getListeDevise = () => dispatch => {
    axios.get(URL_ROOT_LISTE_DEVISE, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getCurrentDevise(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postDevise = (data) => dispatch => {
    
    axios.post(URL_ROOT_POST_DEVISE, data, getConfig())
        .then(res => {

            dispatch(postCurrentDevise(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}               
    

// ======================== POST AND GET ROUTINGS ==========================//

export const getListeRouting = () => dispatch => {
    axios.get(URL_ROOT_LISTE_ROUTING, getConfig())
        .then(res => {

            dispatch(getCurrentRouting(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postRouting = (data) => dispatch => {
    axios.post(URL_ROOT_POST_ROUTING, data, getConfig())
        .then(res => {

            dispatch(postCurrentRouting(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}
// ======================== POST AND GET VOYAGES ==========================//

export const getListeVoyage = () => dispatch => {
    axios.get(URL_ROOT_LISTE_VOYAGE, getConfig())
        .then(res => {

            dispatch(getCurrentVoyage(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postVoyage = (data) => dispatch => {
    axios.post(URL_ROOT_POST_VOYAGE, data, getConfig())
        .then(res => {

            dispatch(postCurrentVoyage(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}
// ======================== POST AND GET APPAREILS ==========================//

export const getListeAppareil = () => dispatch => {
    axios.get(URL_ROOT_LISTE_APPAREIL, getConfig())
        .then(res => {

            dispatch(getCurrentAppareil(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
export const postAppareil = (data) => dispatch => {
    axios.post(URL_ROOT_POST_APPAREIL, data, getConfig())
        .then(res => {
            console.log(res.data) 
            dispatch(postCurrentAppareil(res.data))
        })

        .catch(error => {
            console.log(error.response)
        })

}
// ======================== GET LISTE STATUTS ==========================//

export const getListeStatut = (statut) => dispatch => {
    axios.get(URL_ROOT_LISTE_STATUT, statut, getConfig())
        .then(res => {
            
            dispatch(getCurrentStatut(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
// ======================== GET LISTE USERS ==========================//

export const getListeUser = () => dispatch => {
    axios.get(URL_ROOT_LISTE_USERS, getConfig())
        .then(res => {
            
            dispatch(getCurrentUser(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
// ======================== DELETE USERS ==========================//

export const deleteUser = () => dispatch => {
    axios.get(URL_ROOT_DELETE_USER, getConfig())
        .then(res => {

            dispatch(deletetCurrentUser(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
// ======================== UPDATE USERS ==========================//

export const updateUser = () => dispatch => {
    axios.get(URL_ROOT_UPDATE_USER, getConfig())
        .then(res => {
             console.log(res.data)
            dispatch(updateCurrentUser(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}
// ======================== POST AND GET PRIX ==========================//

export const getListeProfil = () => dispatch => {
    axios.get(URL_ROOT_PROFIL, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getCurrentProfil(res.data))
        })
        .catch(error => {
            console.log(error.response)
        })

}





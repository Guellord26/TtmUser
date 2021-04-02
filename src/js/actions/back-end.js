import axios from 'axios'
import { useHistory } from "react-router-dom";

const URL_ROOT_REGISTER = "https://ttm.jungostudy.com/auth/signin"
const URL_ROOT_LOGIN = "https://ttm.jungostudy.com/auth/login"
const URL_ROOT_LISTE_STATUT = "https://ttm.jungostudy.com/auth/statut/"
const URL_ROOT_LISTE_EPT = "https://ttm.jungostudy.com/auth/compagnie/"
const URL_ROOT_LISTE_USERS = "https://ttm.jungostudy.com/auth/personnels"
const URL_ROOT_UPDATE_USER = "https://ttm.jungostudy.com/auth/personnels"
const URL_ROOT_DELETE_USER = "https://ttm.jungostudy.com/auth/personnels"
const URL_ROOT_LISTE_ROUTING = "https://ttm.jungostudy.com/gtrans/routing"
const URL_ROOT_POST_ROUTING = "https://ttm.jungostudy.com/gtrans/routing"
const URL_ROOT_LISTE_VOYAGE = "https://ttm.jungostudy.com/gtrans/voyage"
const URL_ROOT_POST_VOYAGE = "https://ttm.jungostudy.com/gtrans/voyage"
const URL_ROOT_POST_APPAREIL = "https://ttm.jungostudy.com/gtech/appreil"
const URL_ROOT_LISTE_APPAREIL = "https://ttm.jungostudy.com/gtech/appareil"
const URL_ROOT_LISTE_PPRIX_VOYAGE = "https://ttm.jungostudy.com/"



//======= cette fonction configure le token =========//
const getConfig = ()=>{

    const token = localStorage.getItem('Token')
    var config = {
         headers:{       
            'Content-Type': 'application/json'
         }
     } 
     if (token) {
        config.headers["Authorization"] = `Token ${token}`
     }
     return config
 }

//============ cette methode permet de créer un User =============//

    export const createUser = (data)=>{
        console.log(getConfig())
        return axios.post(URL_ROOT_REGISTER, data, getConfig())
      
    }

//============ cette methode permet de conncter un User =============//

    export const connecterUser = (data) => {
        
        return axios.post(URL_ROOT_LOGIN, data)
    }
    // ===============================================//
  
   
 // =========== cette methode require laliste des PrixVoyage ============= //
 export const getListePrixVoyage = (data) => {
    return axios.get(URL_ROOT_LISTE_PPRIX_VOYAGE, data, getConfig()) 
 }
    
//============ cette methode requiper la liste des entreprise =============//

export const getListeEpt = ()=>{
     console.log(getConfig())   
    return axios.get(URL_ROOT_LISTE_EPT, getConfig())
}
// ==================== USERS =================== //

//============ cette methode requiper la liste des users =============//

export const getListeUser = ()=>{
        
    return axios.get(URL_ROOT_LISTE_USERS, getConfig())
}
// ======================== Routing ========================= //

export const getListeRouting = () =>{
    return axios.get(URL_ROOT_LISTE_ROUTING, getConfig()) 
}
export const postRouting = (data) =>{
    console.log(getConfig())
    return axios.post(URL_ROOT_POST_ROUTING, data, getConfig()) 
}
// ======================== Voyage ========================= //

export const getListeVoyages = () =>{
    return axios.get(URL_ROOT_LISTE_VOYAGE, getConfig()) 
}

export const postVoyages = (data) =>{
    return axios.post(URL_ROOT_POST_VOYAGE, data, getConfig())  
   
}
// ======================== Appareil ========================= //
export const postAppareil = (data) =>{
    return axios.post(URL_ROOT_POST_APPAREIL, data, getConfig()) 
}
export const getAppareil = () =>{                                                                                                                                                                                  
    return axios.get(URL_ROOT_LISTE_APPAREIL, getConfig()) 
}
//============ cette methode modifie un user =============//
export const updateUser = (idUser)=>{
      
    return axios.put(URL_ROOT_UPDATE_USER + idUser, getConfig())
}

//============ cette methode supprime un user =============//

export const deleteUser = (idUser)=>{
     
    return axios.delete(URL_ROOT_DELETE_USER + idUser, getConfig())
}

//============ cette methode requiper la liste des statut =============//
export const getListeStatut = (statut)=>{
    return axios.get(URL_ROOT_LISTE_STATUT + statut, getConfig())
}


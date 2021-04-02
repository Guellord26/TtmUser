import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { getConfig } from './index'
import { AUTHENTICATED, ADD_USER, URL_ROOT_LOGIN, URL_ROOT_REGISTER } from "../constantes/action-type";

//  ================= Login ================= //

export const setCurrentUser = (user) => {

  return {
    type: AUTHENTICATED,
    user
  }

}
export const LOGOUT = "LOGOUT";
export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const setCurrentStatut = (statut) => {

  return {
    type: "PUTSTATUT",
    statut
  }

}

export const REDIRECT = "REDIRECT";

// action creators
export const redirect = link => {
  console.log("=== REDIRECT ACTION DISPATCHED ===");
  return { type: REDIRECT, payload: link };
};

export const loginAction = (data,history) => {

  return dispatch => {

    return axios.post(URL_ROOT_LOGIN, data).then(res => {
      const { user, token } = res.data
      // console.log(res.data)
      const { statut } = user
      // console.log(statut)
      localStorage.setItem("Token", token);
      localStorage.setItem("statut", statut);
      localStorage.setItem("user", JSON.stringify(user));
      // dispatch(setCurrentUser(token))
      dispatch(setCurrentUser(user))
      dispatch(setCurrentStatut(statut))
      dispatch(redirect("/espacePersonnels"))
    

    }).catch(error => {
      console.log(error.response)
    }
    )
  };
}

// =============== LougOut ===============
export const logoutAction = () => {
  return dispatch => {
    localStorage.removeItem("Token");
    localStorage.removeItem("statut");
    localStorage.removeItem("user");
    dispatch(setCurrentUser(null))
    dispatch(setCurrentStatut(null))
    // dispatch(redirect('/'))
   const redirect = ( <Redirect to={'/'} /> )
    
  }
 
}

// ====================== Create User ==================== //
export const createCurrentUser = (user) => {

  return {
    type: ADD_USER,
    payload: user
  }

}
export const createUser = (data) => {

  return dispatch => {

    return axios.post(URL_ROOT_REGISTER, data, getConfig()).then(res => {
      const { user} = res.data
      // console.log(user)    
      dispatch(createCurrentUser(user))           
    }).catch(error => {
      console.log(error.response)
    }
    )
  };
}
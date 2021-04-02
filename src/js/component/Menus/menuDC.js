import React, { Component, useState, lazy, Suspense, useEffect } from 'react';
import {
  MDBContainer, MDBRating,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBLink,
  MDBCard,
  MDBBtn,

} from 'mdbreact';
import SectionContainer from '../sectionContainer';

import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

class MenuDC extends React.Component{
    render(){
  return(
    
          <div className="w3-btn-group w3-center" >

            <NavLink to="/routings" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{ Color: 'green' }}>
              <button className="w3-bar-item w3-text-white w3-deep-purple w3-padding w3-hover-white  w3-hover-white w3-button "
              >ROUTINGS</button>
            </ NavLink>
            <NavLink to="/appareil" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{ color: 'green' }}>
              <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button " >
                APPAREILS
              </button>
            </NavLink>
            <NavLink to="/espacePersonnels" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{ color: 'green' }}>
              <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button ">
                 UTILISATEURS
            </button>
            </NavLink>
            <NavLink to="/dossierClient" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{ color: 'green' }}>
              <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button ">
                DOSSIERS
              </button>
            </NavLink>
            {/* <NavLink to="/seating" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{ color: 'green' }}>
              <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button ">
                SEATING
              </button>
            </NavLink> */}
            <NavLink to="/devise" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{ color: 'green' }}>
              <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button ">
                DEVISES
              </button>
            </NavLink>
            <NavLink to="/cargo" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{ color: 'green' }}>
              <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button ">
                CARGOS
              </button>
            </NavLink>
          </div>
   
)
  }
    }

export default MenuDC;
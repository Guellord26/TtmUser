import React, { Component, useState } from 'react';
import {
 
  MDBBtn,
  MDBRow,
  MDBCol,
 
}
 from 'mdbreact';

import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';

class EspaceEntreprise extends React.Component {
    render() {
      return (
        <div className="">
            <div className="w3-btn-group " style={{width:'1300px'}}>  
                           
               <NavLink to="/espaceEntreprise" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{Color:'green'}}>
                 <button className="w3-bar-item w3-text-white w3-deep-purple w3-padding w3-hover-white  w3-hover-white w3-button "
                  style={{width:'15.3%'}}>ESPACE ENTREPRISE</button>
               </ NavLink>             
               <NavLink to="/espacePersonnels" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{color:'green'}}>
                 <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button " style={{width:'15.3%'}}>
                   ESPACE PERSONNELS
                 </button>
             </NavLink>
             <NavLink to="/espaceVoyages" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{color:'green'}}>
                 <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding w3-button " style={{width:'15.3%'}}>
                 ESPACE VOYAGES
                 </button>
             </NavLink>
           </div>
             
            <MDBRow style={{marginTop:'50px'}}>
                <MDBCol md='4'>
                    <h3>ENTREPRISE</h3>
                    <p>Nom Entreprise :</p>
                    <p>Code Entreprise :</p>
                    <p>Nom du DG :</p>
                </MDBCol>
                <MDBCol md='4'>
                    <h3>CONTRAT</h3>
                    <p>Type : Annuel</p>
                    <Link to="/contrat">Contrat</Link>
                   
                </MDBCol>   
                <MDBCol md='4'>
                <Link to="/gerer">
                    <MDBBtn color='warning' type='submit'>
                        GERER
                    </MDBBtn>
                </Link>
                </MDBCol>
                          
            </MDBRow> 
             
      </div>
        
      );
    }
}
export default EspaceEntreprise; 

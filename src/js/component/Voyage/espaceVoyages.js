import React, { Component, useState } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import CreationVoyages from './creationVoyages'
import ListeVoyages from './listesVoyages'
import EspaceGauche from '../../navigation/espaceGauche';
import EspaceDroit from '../../navigation/espaceDroit';
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';

class EspaceVoyages extends React.Component {
         
      render() {
        
      return (
        <div className="">
            
                <MDBRow>
                    <MDBCol md="3"><EspaceGauche/></MDBCol>
                    <MDBCol md="6"><CreationVoyages/></MDBCol>
                    <MDBCol md="3"><EspaceDroit/></MDBCol>
                </MDBRow>

                {/* =============== */}
                <MDBRow>
                    <MDBCol md="1"></MDBCol>
                    <MDBCol md="10"><ListeVoyages/> </MDBCol>
                    <MDBCol md="1"></MDBCol>
                </MDBRow>    
       
            {/* ========================== */}
      </div>
        
      );
    }
}
export default EspaceVoyages; 

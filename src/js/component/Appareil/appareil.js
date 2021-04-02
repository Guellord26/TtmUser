import React, { Component, useState } from 'react';
import ListeAppareils from './listeAppareil'
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import CreationAppareils from './creationAppareil';
import EspaceGauche from '../../navigation/espaceGauche';
import EspaceDroit from '../../navigation/espaceDroit';
import { MDBRow, MDBCol} from 'mdbreact';

class Appareils extends React.Component {
    

    render() {
            
        return (
            <div className="">
                
                <MDBRow>
                    <MDBCol md="3"><EspaceGauche/></MDBCol>
                    <MDBCol md="6"><CreationAppareils /></MDBCol>
                    <MDBCol md="3"><EspaceDroit/></MDBCol>
                </MDBRow>

                {/* =============== */}
                <MDBRow>
                    <MDBCol md="2"></MDBCol>
                    <MDBCol md="8"><ListeAppareils /></MDBCol>
                    <MDBCol md="2"></MDBCol>
                </MDBRow>
                

            </div>

        );
    }
}
export default Appareils; 

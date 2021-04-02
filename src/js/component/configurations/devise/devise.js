import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import CreationDevise from "./creationDevise"

import ListeDevise from './listeDevise';
import EspaceGauche from '../../../navigation/espaceGauche';
import EspaceDroit from '../../../navigation/espaceDroit';
import { MDBRow, MDBCol } from 'mdbreact';

class Devise extends React.Component {

    render() {

        return (
            <div className="w3-container ">

                <MDBRow>
                    <MDBCol md="3"><EspaceGauche /></MDBCol>
                    <MDBCol style={{ marginTop: '50px' }} md="6">
                        <h4 className="w3-text-deep-purple">
                            <b>
                            <NavLink to="/taux" exact activeStyle={{ color: 'green' }}>Conguration Taux</NavLink>                              
                                <NavLink to="/devise" exact activeStyle={{ color: 'green' }} style={{marginLeft:'20px'}}>Conguration Devise</NavLink>
                                <NavLink to="/prix" exact activeStyle={{ color: 'green' }} style={{marginLeft:'20px'}}>Conguration Prix</NavLink>
                            </b>
                            <hr/>
                        </h4>
                        <CreationDevise />
                        <ListeDevise />
                    </MDBCol>
                    <MDBCol md="3"><EspaceDroit /></MDBCol>
                </MDBRow>

                {/* =============== */}
                <MDBRow>
                    <MDBCol md="2"></MDBCol>
                    <MDBCol md="8"></MDBCol>
                    <MDBCol md="2"></MDBCol>
                </MDBRow>
            </div>
        );
    }
}
export default Devise; 

import React, { Component, useState } from 'react';

import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import CreationRoutings from "./creationRouting"
import ListeRoutings from './listeRoutings';
import EspaceGauche from '../../navigation/espaceGauche';
import EspaceDroit from '../../navigation/espaceDroit';
import { MDBRow, MDBCol} from 'mdbreact';


class Routings extends React.Component {

    render() {

        return (
            <div className="w3-container ">
                    <MDBRow>
                    <MDBCol md="3"><EspaceGauche/></MDBCol>
                    <MDBCol style={{marginTop:'100px'}} md="6">
                    <CreationRoutings />
                    
                    <ListeRoutings/>
                    </MDBCol>
                    <MDBCol md="3"><EspaceDroit/></MDBCol>
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
export default Routings; 

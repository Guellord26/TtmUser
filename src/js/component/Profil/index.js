import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { getProfil} from "../../actions/apisActions"; 

import EspaceGauche from '../../navigation/espaceGauche';
import EspaceDroit from '../../navigation/espaceDroit';
import { MDBRow, MDBCol } from 'mdbreact';

class Profil extends React.Component {

    constructor(props) {
        super(props);

    }
    componentDidMount(){
        this.props.getProfil()
    }

    render() {
        const Profil = this.props.profil
        return (
            <div className="w3-container ">

                <MDBRow>
                    <MDBCol md="3"><EspaceGauche /></MDBCol>
                    <MDBCol style={{ marginTop: '50px' }} md="6">
                       
                        
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
function mapStateToProps(state){
    profil: state.profilReducer.profil
}
export default connnect(mapStateToProps, {getProfil})(Profil);


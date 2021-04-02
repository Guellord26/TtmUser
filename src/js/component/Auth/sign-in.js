import React, { Component, useState } from 'react';
import { connect } from "react-redux";

import { loginAction } from "../../actions/authAction";
import LoginForm from "./loginForm"
import PropTypes from 'prop-types'
import EspaceGauche from '../../navigation/espaceGauche';
import EspaceDroit from '../../navigation/espaceDroit';
import { MDBRow, MDBCol } from 'mdbreact';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         
        }
        
    }
   
    render() {
      
      return (
        <div className="w3-container ">
        <MDBRow>
          <MDBCol style={{marginTop: '50px'}} md="3"><EspaceGauche/></MDBCol>
          <MDBCol style={{marginTop: '50px'}} md="6">          
          <LoginForm />
          </MDBCol>
          <MDBCol style={{marginTop: '50px'}} md="3"><EspaceDroit/></MDBCol>
        </MDBRow>
          
        </div>
      );
    }
}
SignIn.propTypes = {
  loginAction: PropTypes.func.isRequired
}
export default connect( null, {loginAction})(SignIn);


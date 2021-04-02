import React, { Component, useState } from 'react';
import { logout } from '../actions/back-end'
import LogoTtm from '../../assets/logo-Ttm.png'
import { connect } from "react-redux";
import { MDBLink, MDBIcon } from 'mdbreact';
import { logoutAction } from "../actions/authAction"
import { PropTypes } from "prop-types"
import {  Link, NavLink, Redirect } from 'react-router-dom';


class Header extends Component {
 
  // ===================== Déconnexion ==================== //
  
  onLogout = (e) => {
    e.preventDefault()
    const { history } = this.props;
    console.log(history)    
    this.props.logoutAction(history )
     
  }
  render() {
    
    const { authenticated } = this.props.authReducer;
    const  user = this.props.identite
    const userHeader = (
      <MDBLink><button Link to ='/' onClick={this.onLogout.bind(this)} className='w3-white btn'>Déconnexion</button></MDBLink>
    );
    const guestHeader = (
      <MDBLink to='/'><button className='w3-white btn'>Connexion</button></MDBLink>
    );
    const userId = (
       <h2 style={{marginLeft:"100px"}}><MDBIcon icon="user"/> {user ? user.profile.prenom : null } {user ? user.profile.nom : null } {user ? user.statut: null} </h2>
    )
    const compagnieNom = (
      <h2><b>{user ? user.profile.compagnieName : null } </b></h2>
    )
  
    return (

      <div>
        <div className="w3-deep-purple  w3-hide-small" style={{ marginTop: '-120px' }} style={{ marginTop: '50px' }} style={{ height: '200px' }}>
          <div>
            <img src={LogoTtm} style={{ width: '500px' }} />
          </div>
          <div className="w3-container" style={{marginTop:"-50px"}}>
            <center>{user ? compagnieNom : ""}</center>
          </div>
          <div className="w3-container">
            {user ? userId : ""}
          </div>
          <div className="w3-right" style={{ marginTop: '-60px' }}>
            {authenticated ? userHeader : guestHeader}

          </div>
        </div>
      </div>

    );
  }

}

Header.propTypes = {
  authReducer: PropTypes.object.isRequired,
  logoutAction: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
    identite: state.authReducer.user,
    
  }
};


export default connect(mapStateToProps, { logoutAction })(Header);
 
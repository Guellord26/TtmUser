import React, { Component, useState } from 'react';
import {
    MDBContainer, MDBRating,
    MDBRow,
    MDBCol,
    MDBNav,
    MDBLink,
    MDBCard,
    MDBBtn,

} from 'mdbreact';
import LogoJungo from '../../assets/LogoJungotrans.png'
import {connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

class EspaceGauche extends React.Component {


    render() {
        const  user = this.props.identite
        
        console.log(user)
        return (
            <div className="w3-container ">
                <MDBCard>
                    <div style={{ marginLeft: '25px', marginRight: '25px', marginTop: '25px' }}>
                        <div  className="w3-center">
                            <img src={LogoJungo} className="w3-center" style={{ width: '200px' }}></img>
                            {/* {user ? <h2 ><b>{user.profile.compagnieName}</b></h2> : ""} */}
                        </div>
                        <hr />
                        <div>
                            {/* {user ? <h4><b>{user.profile.prenom} </b></h4> : ""} */}
                        </div><hr />
                        <div>
                            {/* {user ? <h4><b>{user.profile.postnom}</b></h4> : ""} */}
                        </div><hr />
                        
                        <div>
                            {user ? <h4><b>Matr: {user.matricule}</b></h4> : ""}
                        </div><hr />
                        <div>
                            {user ? <h4><b>Statut: {user.statut}</b></h4> : ""}
                        </div><br />

                    </div>

                </MDBCard>

            </div>


        );
    }
}
function mapStateToProps(state) {
    return {
        identite: state.authReducer.user
    }
}
export default connect( mapStateToProps)(EspaceGauche); 

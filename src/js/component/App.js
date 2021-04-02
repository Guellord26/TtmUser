
import Footer from "../navigation/footer"

import Header from '../navigation/headers'
import { connect } from 'react-redux'
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
import SectionContainer from './sectionContainer';
import Routes from '../Routes'
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import MenuDG from './Menus/menuDG'
import MenuDT from './Menus/menuDT'
import MenuDF from './Menus/menuDF'
import MenuDC from './Menus/menuDC'
import MenuDO from './Menus/menuDO'



class App extends Component {

  render() {
    const user = this.props.statut

    // console.log(this.props.statut)
    const StatutDF = (
      <div style={{ marginTop: '50px' }} class="w3-container">
        {user == "DG" ? <MenuDG /> : null}
        {user == "DC" ? <MenuDC /> : null}
        {user == "DT" ? <MenuDT /> : null}
        {user == "DF" ? <MenuDF /> : null}
        {user == "DO" ? <MenuDO /> : null}
      </div>
    )

    const StatutDfVide = (
      <div></div>
    )
    return (
      <>

        <Router>

          <div className="w3-containe w3center">

            {/* ===================== Header ==================== */}
            <Header />

            <div className="Menu">
              {user ? StatutDF : StatutDfVide}
            </div>


            {/* ========================= Reservation ========================= */}
            <div>
              <MDBRow>

                <MDBCol md='12' className="w3-container">
                  <Suspense fallback={
                    <div className='my-5 d-flex justify-content-around'>
                      <div className='spinner-border text-primary' role='status'>
                        <span className='sr-only'>Loading...</span>
                      </div>
                    </div>} >
                    <Routes />
                  </Suspense>
                </MDBCol>

              </MDBRow>
            </div>
            {/* ========================CLASSES============================= */}
            <div>

            </div>

            {/* </MDBContainer>  */}
            {/* ======================= FOOTER ============================ */}
            <div><Footer /></div>
            {/* ============================================================= */}

          </div>
        </Router>


      </>
    )
  }
}
function mapStateToProps(state) {
  return {

    statut: state.statutReducer.statut
  }
};

export default connect(mapStateToProps)(App)
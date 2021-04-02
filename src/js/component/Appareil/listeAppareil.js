import React, { Component, useState } from 'react';
import {

  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,

}
  from 'mdbreact';

import SectionContainer from '../sectionContainer'
import { getListeAppareil } from "../../actions/apisActions"
import { connect } from 'react-redux'
import Moment from 'react-moment';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

class ListeAppareils extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // listeAppareil: []
    }
  }
  componentDidMount() {
    this.props.getListeAppareil()

  }

  render() {

    return (
      <div>

            <h4 className="w3-text-deep-purple">Liste des Appareils</h4>
            <SectionContainer
              header=''
              noBorder >
              {/* <MDBCard>
                <MDBCardBody> */}
                  <table class="w3-table">
                    <thead>
                      <tr class="w3-deep-purple">
                        <th>Immatriculation</th>
                        <th>Code Appreil</th>
                        <th>Kilométrage</th>
                        <th>Plan Cabine</th>
                        <th>Nombre des sieges</th>
                        <th>Type Appareil</th>
                        <th>Etat</th>
                        <th>Date de mise en service</th>
                        <hr />
                      </tr>
                    </thead>
                    {
                      this.props.ListeAppareil.map(items => (
                        <tr key={items.idAppareil}>
                          <td>{items.immatriculation}</td>
                          <td>{items.codeAppareil}</td>
                          <td>{items.indexKm}</td>
                          <td>{items.planCabine}</td>
                          <td>{items.nbrSiege}</td>
                          <td>{items.typeAppareil}</td>
                          <td>{items.etat}</td>
                          <Moment format="YYYY/MM/DD">
                            {items.miseEnService}
                          </Moment>
                        </tr>
                      ))
                    }

                  </table>
                {/* </MDBCardBody>
              </MDBCard> */}
            </SectionContainer>
          

      </div>

    );
  }
}
function mapStateToProps(state) {
  return {
    ListeAppareil: state.appareilReducer.listeAppareil
  }
}
export default connect(mapStateToProps, { getListeAppareil })(ListeAppareils); 

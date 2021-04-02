import React, { Component, useState } from 'react';
import {

  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,

}
  from 'mdbreact';

import SectionContainer from '../sectionContainer'
import { getListeDossier } from "../../actions/apisActions"
import { connect } from 'react-redux'
import Moment from 'react-moment';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';

class ListeDossier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // listeAppareil: []
    }
  }
  componentDidMount() {
    this.props.getListeDossier()
  }

  render() {
    return (
      <div>
            <h4 className="w3-text-deep-purple">Liste des Dossiers</h4>
            <SectionContainer
              header=''
              noBorder >
             
                  <table class="w3-table-all ">
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
                    //   this.props.dossier.map(items => (
                        // <tr key={items.idAppareil}>
                        //   <td>{items.immatriculation}</td>
                        //   <td>{items.codeAppareil}</td>
                        //   <td>{items.indexKm}</td>
                        //   <td>{items.planCabine}</td>
                        //   <td>{items.nbrSiege}</td>
                        //   <td>{items.typeAppareil}</td>
                        //   <td>{items.etat}</td>
                        //   <Moment format="YYYY/MM/DD">
                        //     {items.miseEnService}
                        //   </Moment>
                        // </tr>
                    //   ))
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
    dossier: state.dossierReducer.listeDossier
  }
}
export default connect(mapStateToProps, { getListeDossier })(ListeDossier); 

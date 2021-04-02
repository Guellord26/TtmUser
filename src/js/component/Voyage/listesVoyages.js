import React, { Component, useState } from 'react';
import { getListeVoyage } from "../../actions/apisActions";
import { connect } from "react-redux"
import Moment from 'react-moment';
import { MDBCard, MDBContainer } from 'mdbreact';

class ListeVoyages extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.getListeVoyage()
  }

  render() {

    return (
      <div>
        <div className="w3-container">

          {/* =================== */}
          <MDBCard style={{ marginTop: '30px', marginBottom: '50px' }}>
            <MDBContainer>
              <h3 style={{ marginTop: '20px' }}>Liste des Voyages</h3>
              <table class="w3-table"style={{ marginBottom: '20px' }}>
            <thead>
              <tr class="w3-deep-purple">
                <th>Date de Départ</th>
                <th>Date d'arriver</th>
                <th>Heure de Départ</th>
                <th>Heure d'arriver</th>
                <th>Noméro du Voyage</th>
                <th>Place disponible</th>

              </tr>
            </thead>
            {/* ====== */}
            {
              this.props.ListeVoyage.map(items => (
                <tr key={items.idVoyage}>
                  
                  <td>
                    <Moment format="YYYY/MM/DD">
                    {items.dateDepart}
                    </Moment>
                  </td>
                  <td>
                    <Moment format="YYYY/MM/DD">
                      {items.dateArrivee}
                    </Moment>
                  </td>
                  {/* <td>
                    <Moment format="HH:mm:ss">
                    {items.heureDepart}
                    </Moment>
                  </td>
                  <td>
                    <Moment format="HH:mm:ss">
                    {items.heureArrivee}
                    </Moment>
                  </td> */}
                  <td>{items.heureDepart}</td>
                  <td>{items.heureArrivee}</td>
                  <td>{items.numVoyage}</td>
                  <td>{items.placeDisponible}</td>
                  <td>
                    <button onClick={() => this.modifier(items.idVoyage)} className="w3-btn w3-round w3-green w3-right" >
                      <b>Modifier</b>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => this.supprimer(items.idVoyage)} className="w3-btn w3-round w3-red w3-right" >
                      <b>Supprimer</b>
                    </button>
                  </td>
                </tr>

              ))
            }
            {/* ====== */}

          </table>
          </MDBContainer>
          </MDBCard>
          <br />
        </div>

      </div>

    );
  }
}
function mapStateToProps(state) {
  return {
    ListeVoyage: state.voyageReducer.listeVoyage
  }
}
export default connect(mapStateToProps, { getListeVoyage })(ListeVoyages); 

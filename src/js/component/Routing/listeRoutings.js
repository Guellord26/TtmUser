import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { MDBCard, MDBContainer } from 'mdbreact';
import { getListeRouting } from "../../actions/apisActions";


class ListeRoutings extends React.Component {

  constructor(props) {
    super(props);

  }

  // ============ La list des Routing ============ //
  componentDidMount() {

    this.props.getListeRouting()

  }

  render() {
   const routing = this.props.routings
   console.log("Routing", routing)
    return (
      <div className="w3-container ">

        <div className="w3-container">

          {/* =================== */}
          <MDBCard style={{ marginTop: '30px', marginBottom: '50px' }}>
            <MDBContainer>
              <h3 style={{ marginTop: '20px' }}>Liste des Routings</h3>
              <table class="w3-table"style={{ marginBottom: '20px' }}>
                <thead>
                  <tr class="w3-deep-purple">                     
                    <th>Ville de Départ</th>
                    <th >Ville d'arriver</th>
                    <th >Abréviation</th>
                  </tr>
                </thead>
                {/* ====== */}
                {

                  this.props.routings.map(items => (
                    <tr key={items.idRouting}>
                      
                      <td>{items.vileDepart}</td>
                      <td>{items.vileArrive}</td>
                      <td>{items.abreviation}</td>
                      <td>
                        <button onClick={() => this.modifier(items.idPersonnel)} className="w3-btn w3-round w3-green w3-right" >
                          <b>Modifier</b>
                        </button>
                      </td>
                      <td>
                        <button onClick={() => this.supprimer(items.idPersonnel)} className="w3-btn w3-round w3-red w3-right" >
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
    routings: state.routingReducer.listeRouting
  };
}

export default connect(mapStateToProps, { getListeRouting })(ListeRoutings);

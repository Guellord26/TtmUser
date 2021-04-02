import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { MDBCard, MDBContainer } from 'mdbreact';
import { getListeDevise, getListeTaux } from "../../../actions/apisActions";


class ListeDevise extends React.Component {
  constructor(props) {
    super(props);
  }

  // ============ La list des Routing ============ //
  
  componentDidMount() {
    this.props.getListeDevise()
    this.props.getListeTaux()
  }

  render() {
    const taux = this.props.taux
    const devise = this.props.devise
    console.log("devise = ",devise)
     console.log("Taux = ",taux)
    return (
      <div className="w3-container ">
        <div className="w3-container">
          {/* =================== */}
          <MDBCard style={{ marginTop: '30px', marginBottom: '50px' }}>
            <MDBContainer>
              <h3 style={{ marginTop: '20px' }}>Liste des Devises</h3>
              <table class="w3-table w3-striped w3-bordered w3-border w3-table-all"style={{ marginBottom: '20px' }}>
                    <tr class="w3-deep-purple">          
                    <th >Symbole de la devise</th>
                    <th >Statut</th>
                  </tr>
                
                {/* ==================== */}
                {
                  this.props.devise.map(items => (
                    <tr key={items.idMonnaie}>
                     
                      <td>{items.codeMonnaie}</td>
                      <td>{items.statut}</td>
                      <td>
                        <button onClick={() => this.modifier(items.idMonnaie)} className="w3-btn w3-round w3-green w3-right">
                          <b>Modifier</b>
                        </button>
                      </td>
                      <td>
                        <button onClick={() => this.supprimer(items.idMonnaie)} className="w3-btn w3-round w3-red w3-right">
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
          <br/>

        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    devise: state.deviseReducer.listeDevise,
     taux : state.tauxReducer.listeTaux
  };
}

export default connect(mapStateToProps, { getListeDevise, getListeTaux})(ListeDevise);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { MDBCard, MDBContainer } from 'mdbreact';
import {getListeTaux } from "../../../actions/apisActions";

class ListeTaux extends React.Component {
  constructor(props) {
    super(props);
  }

  // ============ La list des Routing ============ //
  
  componentDidMount() {
    this.props.getListeTaux()
  }

  render() {
    const taux = this.props.taux
   
    //  console.log("Taux = ",taux)
    return (
      <div className="w3-container ">
        <div className="w3-container">
          {/* =================== */}
          <MDBCard style={{ marginTop: '30px', marginBottom: '50px' }}>
            <MDBContainer>
              <h3 style={{ marginTop: '20px' }}>Liste des Taux</h3>
              <table class="w3-table w3-striped w3-bordered w3-borderw3-table-all">
                  <tr class="w3-deep-purple">
                    <th >contenu</th>                
                  </tr>
               
                {/* ==================== */}
                {
                  taux.map(items => (
                    <tr key={items.idTaux}>                     
                      <td>{items.contenu}</td>
                      {/* <td>{items.monnaie}</td> */}
                      <td>
                        <button onClick={() => this.modifier(items.idTaux)} className="w3-btn w3-round  w3-green w3-right">
                          <b>Modifier</b>
                        </button>
                      </td>
                      <td>
                        <button onClick={() => this.supprimer(items.idTaux)} className="w3-btn w3-round w3-red w3-right">
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
     taux : state.tauxReducer.listeTaux
  };
}

export default connect(mapStateToProps, { getListeTaux})(ListeTaux);

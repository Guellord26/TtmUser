import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { getListePrix, getListeRouting } from "../../../actions/apisActions";

class ListePrixVoyage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            listePrixVoyage: [],

        }
    }
    componentDidMount() {
        //  ============== Liste PrixVoyage ============//
        this.props.getListePrix()
    }
    render() {
        const ListePrixVoyage = this.props.listePrixVoyage
        return (
            <div className="w3-container ">
                <div class="w3-responsive">
                    <table class="w3-table w3-striped w3-bordered w3-border" style={{marginBottom: '50px'}}>
                        <tr class="w3-deep-purple">
                            <th>Routing</th>
                            <th>Classe</th>
                            <th>Tranch Ages</th>
                            <th>Prix</th>
                        </tr>
                        {
                            ListePrixVoyage.map(els =>(
                                <tr key={els.id}>
                                <td>{els.rooting}</td>
                                <td>{els.classVoyage}</td>
                                <td>{els.category}</td>
                                <td>{els.price}</td>                            
                              <td>
                                <button onClick ={ ()=> this.modifier(els.id)}  className="w3-btn w3-round w3-green w3-right" >
                                  <b>Modifier</b>
                                </button>                       
                              </td>
                              <td>
                                <button onClick ={ ()=> this.supprimer(els.id)} className="w3-btn w3-round w3-red w3-right" >
                                  <b>Supprimer</b>
                                </button>                       
                              </td>
                            </tr>    
                            ))
                        }
                    </table>
                </div>
            </div>
        );
    }
}
function mapstateToProps(state){
    return {    
        listePrixVoyage : state.prixReducer.listePrixVoyage
    }
}
export default connect(mapstateToProps, {getListePrix})(ListePrixVoyage);


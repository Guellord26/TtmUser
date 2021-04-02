import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { MDBCard, MDBContainer } from 'mdbreact';
import { getListeCourrier } from "../../actions/apisActions";


class ListeCourrier extends React.Component {

    constructor(props) {
        super(props);

    }

    // ============ La list des Courrier============ //
    componentDidMount() {

        this.props.getListeCourrier()

    }

    render() {
        const Courrier = this.props.Courriers
        console.log(Courrier)
        return (
            <div className="w3-container ">

                <div className="w3-container">

                    {/* =================== */}
                    <MDBCard className="w3-container" style={{ marginTop: '30px', marginBottom: '50px' }}>
                        
                            <h3 style={{ marginTop: '20px' }}>Liste des Courriers</h3>
                            <table class="w3-table-all w3-container" style={{ marginBottom: '20px' }}>
                                <thead>
                                    <tr class="w3-deep-purple">
                                        
                                        <th >Prenom expediteur</th>
                                        <th>Nom expediteur</th>
                                        <th >Prenom Bénéficiaire</th>
                                        <th>Nom Bénéficiaire</th>
                                        <th>Code Retrait</th>                                       
                                        <th>Prix Hore Taxe</th>
                                        <th>Taxe</th>
                                        
                                    </tr>
                                </thead>
                                {/* ====== */}
                                {

                                    this.props.Courriers.map(items => (
                                        <tr key={items.idCargos}>
                                        
                                            <td>{items.prenomExp}</td>
                                            <td>{items.nomExp}</td>                                           
                                            {/* <td>{items.numTelExp}</td>
                                            <td>{items.addresseExp}</td>
                                            <td>{items.mailExp}</td> */}
                                           
                                            <td>{items.prenomBenef}</td>
                                            <td>{items.nomBenef}</td>                                                                                                                                                                             
                                            {/* <td>{items.numTelBenef}</td>                                           
                                            <td>{items.addresseBenef}</td>
                                            <td>{items.mailBenef}</td> */}
                                            
                                            <td>{items.codeRetrait}</td>                                                                                                                                                                                                                     
                                            <td>{items.numDossier}</td>                                           
                                            <td>{items.prixHT}</td>
                                            <td>{items.taxe}</td>
                                           
                                        </tr>
                                    ))
                                }
                                {/* ====== */}

                            </table>
                        
                    </MDBCard>
                    <br />

                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        Courriers: state.courrierReducer.listeCourrier
    };
}

export default connect(mapStateToProps, { getListeCourrier })(ListeCourrier);

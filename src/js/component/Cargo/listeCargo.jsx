import React, { Component } from 'react';
import { connect } from "react-redux";
import { MDBCard, MDBContainer } from 'mdbreact';
import { getListeCargo } from "../../actions/apisActions";


class ListeCargo extends React.Component {

    constructor(props) {
        super(props);
    }

    // ============ La list des Routing ============ //
    componentDidMount() {
        this.props.getListeCargo()
    }

    render() {
        const cargo = this.props.cargos
        console.log(cargo)
        return (
            <div className="w3-container ">

                <div className="w3-container">

                    {/* =================== */}
                    <MDBCard className="w3-container" style={{ marginTop: '30px', marginBottom: '50px' }}>
                        
                            <h3 style={{ marginTop: '20px' }}>Liste des Cargos</h3>
                            <table class="w3-table-all w3-container" style={{ marginBottom: '20px' }}>
                                <thead  style={{ border: '1px solid grey',borderTopLeftRadius: '2em',borderTopRightRadius: '2em' }}>
                                    <tr class="w3-deep-purple">
                                        
                                        <th >Prenom expediteur</th>
                                        <th>Nom expediteur</th>
                                        <th >Prenom Bénéficiaire</th>
                                        <th>Nom Bénéficiaire</th>
                                        <th >Code Retrait</th>
                                        <th>Nature Cargo</th>
                                        <th>Numéro Dossier</th>
                                        <th> Numéro Colis</th>
                                        <th> Nombre Colis</th>
                                    </tr>
                                </thead>
                                {/* ====== */}
                                {
                                    this.props.cargos.map(items => (
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
                                            <td>{items.natureCargo}</td>                                                                                                                                                                             
                                            <td>{items.numDossier}</td>                                           
                                            <td>{items.numColi}</td>
                                            <td>{items.nbrColis}</td>
                                           
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
        cargos: state.cargoReducer.listeCargo
    };
}

export default connect(mapStateToProps, { getListeCargo })(ListeCargo);

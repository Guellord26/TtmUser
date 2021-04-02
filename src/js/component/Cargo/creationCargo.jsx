import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBContainer,
    MDBCardBody
} from 'mdbreact';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { postCargo, getListeRouting, getListeDevise } from '../../actions/apisActions'

class CreationCargo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            data: {
                //  ========= eprditeure ============== //
                nomExp: '',
                postnomExp: '',
                prenomExp: '',
                addresseExp: '',
                numTelExp: '',
                mailExp: '',
                //  ========= Benneficiaire ============ //
                postnomBenef: '',
                postnomExp: '',
                prenomBenef: '',
                prenomExp: '',
                addresseBenef: '',
                mailBenef: '',
                numTelBenef: '',
                // ============== colis ============== //
                nbrColis: '',
                poid: '',
                codeRetrait: '',
                etat: '',
                monaie: '',
                natureCargo: '',
                rooting: '',
                numColi: '',
                numDossier: '',
                payment: '',
                prix: '',
                typeTarif: '',


            },
            submitted: false,
        }

    };
    componentDidMount() {
        this.props.getListeDevise()
        this.props.getListeRouting()
    }


    handleSubmit = e => {
        e.preventDefault();
        const { data } = this.state
        console.log(data)
        this.props.postCargo(data)
    }

    handleChange = e => {
        //   e.preventDefault();
        const data = { [e.target.name]: e.target.value }
        const tmp = { ...this.state.data, ...data }
        this.setState({ data: { ...tmp } })
    }

    render() {
        const { submitted, data } = this.state
        return (
            <div className="w3-container" >
                <MDBContainer style={{ marginTop: '30px', marginBottom: '40px' }}>
                    <MDBCard>
                        <MDBCardBody>

                            <form onSubmit={this.handleSubmit} noValidate>
                                <MDBRow>
                                    <MDBCol sm="4">
                                        <div>
                                            {/* <MDBCard> */}
                                            <MDBContainer>
                                                <MDBRow style={{ border: '1px solid grey', borderTopLeftRadius: '2em', borderTopRightRadius: '2em' }}>
                                                    <NavLink className="w3-grey" to="/cargo" style={{ padding: "15px", borderTopLeftRadius: '2em' }}>
                                                        <MDBCol className="w3-grey" m="4" style={{ borderTopLeftRadius: '2em' }}>
                                                            <h2>CARGO</h2>
                                                        </MDBCol>
                                                    </NavLink>

                                                    <NavLink to="/courrier">
                                                        <MDBCol className="w3-white" m="4" style={{ padding: "15px", borderTopRightRadius: '2em' }}>
                                                            <h2>COURRIER</h2>
                                                        </MDBCol>
                                                    </NavLink>

                                                </MDBRow>
                                            </MDBContainer>
                                            {/* </MDBCard> */}
                                            <div className="" style={{ marginTop: '30px' }}>
                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Poids du colis</label>
                                                    <input
                                                        ref={(ref) => this.mainInput = ref}
                                                        type='text'
                                                        name="poid"
                                                        onChange={this.handleChange}
                                                        //value={this.state.nomRouting1}
                                                        id='defaultFormRegisterNameEx'
                                                        className='form-control'
                                                    />
                                                    {submitted && !data.poid &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>
                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Nature du colis</label>
                                                    <select name="natureCargo" value={this.state.natureCargo} onChange={this.handleChange} className="browser-default custom-select">
                                                        <option value="LIQUIDE">LIQUIDE</option>
                                                        <option value="SOLIDE">SOLIDE</option>
                                                        <option value="GASEU">GASEU</option>
                                                    </select>
                                                    {submitted && !data.natureCargo &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>

                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Code retrait</label>
                                                    <input
                                                        ref={(ref) => this.mainInput = ref}
                                                        type='text'
                                                        name=" codeRetrait:"
                                                        onChange={this.handleChange}
                                                        //value={this.state.nomRouting1}
                                                        id='defaultFormRegisterNameEx'
                                                        className='form-control'
                                                    />
                                                    {submitted && !data.codeRetrait &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>
                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Etat du Cargo</label>
                                                    <select name="etat" value={this.state.etat} onChange={this.handleChange} className="browser-default custom-select">
                                                        <option value="Normal">Normal</option>
                                                        <option value="Expresse">Expresse</option>
                                                        
                                                    </select>
                                                    {submitted && !data.etat &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>
                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Numéro Coli</label>
                                                    <input
                                                        ref={(ref) => this.mainInput = ref}
                                                        type='text'
                                                        name="numColi:"
                                                        onChange={this.handleChange}
                                                        //value={this.state.nomRouting1}
                                                        id='defaultFormRegisterNameEx'
                                                        className='form-control'
                                                    />
                                                    {submitted && !data.numColi &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>
                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Numéro Dossier</label>
                                                    <input
                                                        ref={(ref) => this.mainInput = ref}
                                                        type='text'
                                                        name=" numDossier:"
                                                        onChange={this.handleChange}
                                                        //value={this.state.nomRouting1}
                                                        id='defaultFormRegisterNameEx'
                                                        className='form-control'
                                                    />
                                                    {submitted && !data.numDossier &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>
                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Devise </label>
                                                    <select name='rooting' onChange={this.handleChange}
                                                        value={this.state.rooting} className="browser-default custom-select">

                                                        {
                                                            this.props.routings.map(items => (
                                                                <option key={items.idRooting}
                                                                    value={items.idRooting}>
                                                                    {items.vileDepart} - {items.vileArrive}
                                                                </option>
                                                            ))
                                                        }
                                                    </select>
                                                    {submitted && !data.rooting &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>
                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Dévise</label>
                                                    <select name='devise' onChange={this.handleChange}
                                                        value={this.state.devise} className="browser-default custom-select">

                                                        {
                                                            this.props.devises.map(items => (
                                                                <option key={items.idMonnaie}
                                                                    value={items.codeMonnaie}>
                                                                    {items.codeMonnaie}
                                                                </option>
                                                            ))
                                                        }

                                                    </select>
                                                    {submitted && !data.devise &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>
                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Type de Trif</label>
                                                    <select name="typeTarif" value={this.state.typeTarif} onChange={this.handleChange} className="browser-default custom-select">
                                                        <option value="Fixe">Fixe</option>
                                                        <option value="Palier">Palier</option>
                                                        
                                                    </select>
                                                    {submitted && !data.typeTarif &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>
                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Type de payment</label>
                                                    <input
                                                        ref={(ref) => this.mainInput = ref}
                                                        type='text'
                                                        name=" payment:"
                                                        onChange={this.handleChange}
                                                        //value={this.state.nomRouting1}
                                                        id='defaultFormRegisterNameEx'
                                                        className='form-control'
                                                    />
                                                    {submitted && !data.payment &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>
                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Prix</label>
                                                    <input
                                                        ref={(ref) => this.mainInput = ref}
                                                        type='text'
                                                        name=" prix:"
                                                        onChange={this.handleChange}
                                                        //value={this.state.nomRouting1}
                                                        id='defaultFormRegisterNameEx'
                                                        className='form-control'
                                                    />
                                                    {submitted && !data.prix &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>

                                            </div>
                                        </div>
                                    </MDBCol>
                                    {/* =================================== */}
                                    <MDBCol sm="8">
                                        <h4 className="w3-text-deep-purple" style={{ marginTop: '30px' }}>
                                            <b> Identification Expéditeur</b>
                                        </h4>
                                        <hr />
                                        <div className='grey-text'>
                                            <MDBRow>
                                                <MDBCol m="4">

                                                    <span style={{ width: "30px" }}>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Prénom</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="prenomExp"
                                                            onChange={this.handleChange}
                                                            //value={this.state.nomRouting1}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.prenomExp &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                    <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Adresse </label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="addresseExp"
                                                            onChange={this.handleChange}
                                                            //value={this.state.pieceIdentite}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.addresseExp &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>

                                                    {/* ================ */}
                                                    {/* <span style={{ width: "30px" }}>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> sexe</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="sexe"
                                                            onChange={this.handleChange}
                                                            //value={this.state.nomRouting4}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.sexe &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span> */}
                                                    {/* ================ */}

                                                    {/* ================ */}
                                                    {/* <div style={{ marginTop: "20px" }}>
                                                        <DatePicker selected={data.dateNaissance}
                                                            dateFormat="yyyy/MM/dd"
                                                            onChange={date => this.setState({ data: { ...this.state.data, dateNaissance: date } })} />

                                                    </div> */}
                                                    {/* ================ */}
                                                </MDBCol>

                                                {/* ================== */}
                                                <MDBCol m="4">
                                                    {/* ================= */}
                                                    <span style={{ width: "30px" }}>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Nom</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="nomExp"
                                                            onChange={this.handleChange}
                                                            //value={this.state.nomRouting2}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.nomExp &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                    {/* =================== */}
                                                    <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Téléphone</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='number'
                                                            name="numTelExp"
                                                            onChange={this.handleChange}
                                                            //value={this.state.numTelephone}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.numTelExp &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                    {/* ================= */}

                                                    {/* <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Piece d'identité</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="pieceIdentite"
                                                            onChange={this.handleChange}
                                                            //value={this.state.pieceIdentite}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.pieceIdentite &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span> */}
                                                    {/* ================ */}

                                                </MDBCol>
                                                <MDBCol m="2">
                                                    <span style={{ width: "30px" }}>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> PostNom</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="postnomExp"
                                                            onChange={this.handleChange}
                                                            //value={this.state.postnom}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.postnomExp &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                    {/* ================ */}
                                                    <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Mail</label>
                                                        <input ref={(ref) => this.mainInput = ref}
                                                            type='email'
                                                            name="mailExp"
                                                            onChange={this.handleChange}
                                                            //value={this.state.email}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.mailExp &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                    {/* ================ */}
                                                    {/* <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Numero d'identité</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='number'
                                                            name="numPieceIdentite"
                                                            onChange={this.handleChange}
                                                            //value={this.state.pieceIdentite}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.numPieceIdentite &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span> */}


                                                </MDBCol>

                                            </MDBRow>
                                            {/* ====================== */}

                                            <hr />
                                        </div>
                                        {/* <di>
                                            <h5 className="w3-text-deep-purple"> Adresse physique</h5>
                                            <MDBRow>
                                                <MDBCol m="3">
                                                    
                                                    <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Avenue </label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="avenue"
                                                            onChange={this.handleChange}
                                                            
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.avenue &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                </MDBCol>
                                                <MDBCol m="3">
                                                    
                                                    <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Quartier </label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="quartier"
                                                            onChange={this.handleChange}
                                                            
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.quartier &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                </MDBCol>
                                                <MDBCol m="3">
                                                    
                                                    <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Commune </label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="commune"
                                                            onChange={this.handleChange}
                                                            //value={this.state.pieceIdentite}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.numero &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                </MDBCol>
                                                <MDBCol m="3">
                                                    
                                                    <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Ville </label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="ville"
                                                            onChange={this.handleChange}
                                                            //value={this.state.pieceIdentite}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.ville &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                </MDBCol>
                                            </MDBRow>
                                        </di> */}
                                        <hr />
                                        {/* ================================================================================== */}
                                        {/* ================================================================================== */}
                                        {/* ================================================================================== */}
                                        <h4 className="w3-text-deep-purple" style={{ marginTop: '30px' }}>
                                            <b> Identification Bénéficiaire</b>
                                        </h4>
                                        <hr />
                                        <div className='grey-text'>
                                            <MDBRow>
                                                <MDBCol m="4">

                                                    <span style={{ width: "30px" }}>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Prénom</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="prenomBenef"
                                                            onChange={this.handleChange}
                                                            //value={this.state.nomRouting1}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.prenomBenef &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                    <span style={{ width: "30px" }}>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Adresse</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="addresseBenef"
                                                            onChange={this.handleChange}
                                                            //value={this.state.nomRouting4}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.addresseBenef &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                    {/* ================ */}
                                                    {/* <span style={{ width: "30px" }}>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> sexe</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="sexeBenef"
                                                            onChange={this.handleChange}
                                                            //value={this.state.nomRouting4}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.sexeBenef &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span> */}


                                                    {/* ================ */}
                                                    {/* <div style={{ marginTop: "20px" }}>
                                                        <DatePicker selected={data.dateNaissanceBenef}
                                                            dateFormat="yyyy/MM/dd"
                                                            onChange={date => this.setState({ data: { ...this.state.data, dateNaissanceBenef: date } })} />

                                                    </div> */}
                                                    {/* ================ */}
                                                </MDBCol>

                                                {/* ================== */}
                                                <MDBCol m="4">
                                                    {/* ================= */}
                                                    <span style={{ width: "30px" }}>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Nom</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="nomBenef"
                                                            onChange={this.handleChange}
                                                            //value={this.state.nomRouting2}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.nomBenef &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                    {/* =================== */}
                                                    <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Téléphone</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='number'
                                                            name="numTelBenef"
                                                            onChange={this.handleChange}
                                                            //value={this.state.numTelephone}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.numTelephoneBenef &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                    {/* ================= */}

                                                    {/* <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Piece d'identité</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="pieceIdentiteBenef"
                                                            onChange={this.handleChange}
                                                            //value={this.state.pieceIdentite}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.pieceIdentiteBenef &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span> */}
                                                    {/* ================ */}

                                                </MDBCol>
                                                <MDBCol m="2">
                                                    <span style={{ width: "30px" }}>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> PostNom</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='text'
                                                            name="postnomBenef"
                                                            onChange={this.handleChange}
                                                            //value={this.state.postnom}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.postnomBenef &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                    {/* ================ */}
                                                    <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Mail</label>
                                                        <input ref={(ref) => this.mainInput = ref}
                                                            type='email'
                                                            name="mailBenef"
                                                            onChange={this.handleChange}
                                                            //value={this.state.email}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.mailBenef &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span>
                                                    {/* ================ */}
                                                    {/* <span>
                                                        <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Numero d'identité</label>
                                                        <input
                                                            ref={(ref) => this.mainInput = ref}
                                                            type='number'
                                                            name="numPieceIdentiteBenef"
                                                            onChange={this.handleChange}
                                                            //value={this.state.pieceIdentite}
                                                            id='defaultFormRegisterNameEx'
                                                            className='form-control'
                                                        />
                                                        {submitted && !data.numPieceIdentiteBenef &&
                                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                                        }
                                                    </span> */}


                                                </MDBCol>

                                            </MDBRow>
                                            {/* ====================== */}

                                            <hr />
                                        </div>
                                        <di>
                                            {/* <h5 className="w3-text-deep-purple"> Adresse physique</h5> */}
                                            <MDBRow>
                                                {/* <MDBCol m="3">
                                                        
                                                        <span>
                                                            <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Avenue </label>
                                                            <input
                                                                ref={(ref) => this.mainInput = ref}
                                                                type='text'
                                                                name="avenueBenef"
                                                                onChange={this.handleChange}
                                                                //value={this.state.pieceIdentite}
                                                                id='defaultFormRegisterNameEx'
                                                                className='form-control'
                                                            />
                                                            {submitted && !data.avenueBenef &&
                                                                <div className="w3-text-red">Veillez remplire ce champ</div>
                                                            }
                                                        </span>
                                                    </MDBCol>
                                                    <MDBCol m="3">

                                                        <span>
                                                            <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Quartier </label>
                                                            <input
                                                                ref={(ref) => this.mainInput = ref}
                                                                type='text'
                                                                name="quartierBenef"
                                                                onChange={this.handleChange}

                                                                id='defaultFormRegisterNameEx'
                                                                className='form-control'
                                                            />
                                                            {submitted && !data.quartier &&
                                                                <div className="w3-text-red">Veillez remplire ce champ</div>
                                                            }
                                                        </span>
                                                    </MDBCol>
                                                    <MDBCol m="3">

                                                        <span>
                                                            <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Commune </label>
                                                            <input
                                                                ref={(ref) => this.mainInput = ref}
                                                                type='text'
                                                                name="communeBenef"
                                                                onChange={this.handleChange}

                                                                id='defaultFormRegisterNameEx'
                                                                className='form-control'
                                                            />
                                                            {submitted && !data.numeroBenef &&
                                                                <div className="w3-text-red">Veillez remplire ce champ</div>
                                                            }
                                                        </span>
                                                    </MDBCol>
                                                    <MDBCol m="3">

                                                        <span>
                                                            <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Ville </label>
                                                            <input
                                                                ref={(ref) => this.mainInput = ref}
                                                                type='text'
                                                                name="villeBenef"
                                                                onChange={this.handleChange}

                                                                id='defaultFormRegisterNameEx'
                                                                className='form-control'
                                                            />
                                                            {submitted && !data.villeBenef &&
                                                                <div className="w3-text-red">Veillez remplire ce champ</div>
                                                            }
                                                        </span>
                                                    </MDBCol> */}
                                            </MDBRow>
                                        </di>
                                        <MDBBtn className="w3-right" color='deep-purple' type='submit' disabled={this.buttonActive} style={{ marginTop: "20" }}>
                                            valider
                            </MDBBtn>
                                        <br />
                                    </MDBCol>
                                </MDBRow>
                            </form>
                        </MDBCardBody>
                    </MDBCard>

                    {/* =================== */}
                </MDBContainer>
            </div>
        );
    }
}
function mapStateToProps(state) {

    return {
        routings: state.routingReducer.listeRouting,
        devises: state.deviseReducer.listeDevise
    };
}

export default connect(mapStateToProps, {getListeDevise, getListeRouting, postCargo })(CreationCargo); 

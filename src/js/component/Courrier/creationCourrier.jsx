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
import { postCourrier } from '../../actions/apisActions'

class CreationCourrier extends React.Component {

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
                                                            
                codeRetrait: '',
                numDossier: '',
                payment: '',                                                          
                codeQR:'',
                prixHT:'',
                taxe: '',

            },
            submitted: false,
        }

    };


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

                                                    <MDBCol className="w3-white w3-text-black" m="4" style={{ padding: "15px", borderTopLeftRadius: '2em' }}>
                                                        <NavLink className=" w3-text-black" to="/cargo">
                                                            <h2>CARGO</h2>
                                                        </NavLink>
                                                    </MDBCol>
                                                    

                                                <MDBCol className="w3-grey w3-text-black" m="4" style={{ padding: "15px", borderTopRightRadius: '2em' }}>
                                                    <NavLink to="/courrier" >
                                                        <h2 className="w3-text-black">COURRIER</h2>
                                                    </NavLink>
                                                </MDBCol>
                                            
                                                </MDBRow>
                                            </MDBContainer>
                                        {/* </MDBCard> */}
                                        <div className="" style={{ marginTop: '30px' }}>
                                                                                               
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
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Dévise</label>
                                                    <input
                                                        ref={(ref) => this.mainInput = ref}
                                                        type='text'
                                                        name=" codeQR"                                                       
                                                        onChange={this.handleChange}
                                                        //value={this.state.nomRouting1}
                                                        id='defaultFormRegisterNameEx'
                                                        className='form-control'
                                                    />
                                                    {submitted && !data.codeQR &&
                                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                                    }
                                                </span>
                                                <span style={{ width: "30px" }}>
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Prix Hore Taxe</label>
                                                    <input
                                                        ref={(ref) => this.mainInput = ref}
                                                        type='text'
                                                        name="prixHT"                                                       
                                                        onChange={this.handleChange}
                                                        //value={this.state.nomRouting1}
                                                        id='defaultFormRegisterNameEx'
                                                        className='form-control'
                                                    />
                                                    {submitted && !data.prixHT &&
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
                                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Taxe</label>
                                                    <input
                                                        ref={(ref) => this.mainInput = ref}
                                                        type='text'
                                                        name="taxe:"
                                                        onChange={this.handleChange}
                                                        //value={this.state.nomRouting1}
                                                        id='defaultFormRegisterNameEx'
                                                        className='form-control'
                                                    />
                                                    {submitted && !data.taxe &&
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
                                                   
                                                </MDBCol>

                                            </MDBRow>
                                            {/* ====================== */}

                                            <hr />
                                        </div>
                                        
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
                                                  
                                                </MDBCol>

                                            </MDBRow>
                                            {/* ====================== */}

                                            <hr />
                                        </div>
                                        <di>
                                          
                                            <MDBRow>
                                               
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
            </div >
        );
    }
}

export default connect(null, { postCourrier })(CreationCourrier); 

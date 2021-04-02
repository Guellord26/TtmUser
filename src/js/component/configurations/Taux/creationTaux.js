import React, { Component, useState } from 'react';
import {
    MDBBtn,
    MDBRow,
    MDBCol
} from 'mdbreact';
import { connect } from 'react-redux'
import { postTaux, getListeDevise } from "../../../actions/apisActions";


class CreationTaux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                monnaie: null,
                contenu: null
            },
            submitted: false,
            access: localStorage.getItem("statut")
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        const { data } = this.state
        this.setState({ submitted: true });
        console.log(data)
        if (data.contenu && data.monnaie) {
            console.log(data)
            this.props.postTaux(data)
        }
    }

    // ===============================

    handleChange = e => {
        e.preventDefault();
        const data = { [e.target.name]: e.target.value }
        const tmp = { ...this.state.data, ...data }
        this.setState({ data: { ...tmp } })
    };

    // ===============================
    componentDidMount() {
        this.props.getListeDevise()
    }

    render() {
        const { data, submitted, access } = this.state;
        console.log(access)
        return (
            <div className="w3-container ">
                <h4 className='w3-text-deep-purple' style={{ marginTop: '5px' }}>Créaction du taux </h4>
                <br />
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className='grey-text'>
                        <MDBRow>
                            <MDBCol m="4">
                                <span style={{ width: "30px" }}>
                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Taux</label>
                                    <input
                                        ref={(ref) => this.mainInput = ref}
                                        type='text'
                                        name="contenu"
                                        onChange={this.handleChange}
                                        id='defaultFormRegisterNameEx'
                                        className='form-control'
                                    />
                                    {submitted && !data.contenu &&
                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                    }
                                </span>

                            </MDBCol>

                            {/* ================== */}

                            <MDBCol m="4">
                                <span>
                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Devise </label>
                                    <select name='monnaie' onChange={this.handleChange}
                                        value={this.state.monnaie} className="browser-default custom-select">

                                        {
                                            this.props.devise.map(items => (
                                                <option key={items.idMonnaie}
                                                    value={items.idMonnaie}>
                                                    {items.codeMonnaie}
                                                </option>
                                            ))
                                        }

                                    </select>
                                </span>
                              
                                {/* ================= */}

                            </MDBCol>
                            <MDBCol m="2">
                                {access == "DF" ?
                                    <MDBBtn color='deep-purple' type='submit' style={{ marginTop: '250' }}>
                                        valider
                                </MDBBtn> :
                                    <MDBBtn color='deep-purple' disabled type='submit' style={{ marginTop: '250' }}>
                                        valider
                                </MDBBtn>
                                }
                            </MDBCol>

                        </MDBRow>
                        <br />

                        <hr />

                    </div>

                </form>
                {/* =================== */}

                <br />

            </div>  
        );
    }
}
function mapStateToProps(state) {
    return {
        devise: state.deviseReducer.listeDevise,

    };
}
export default connect(mapStateToProps, { getListeDevise, postTaux })(CreationTaux); 

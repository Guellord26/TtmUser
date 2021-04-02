import React, { Component, useState } from 'react';
import {
    MDBBtn,
    MDBRow,
    MDBCol,
} from 'mdbreact';
import { connect } from 'react-redux'
import { postDevise } from "../../../actions/apisActions";


class CreationDevise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                codeMonnaie: null,
                statut: null
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
        if (data.codeMonnaie && data.statut) {
            console.log(data)
            this.props.postDevise(data)
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

    render() {
        const { data, submitted, access } = this.state;
        console.log(access)
        return (
            <div className="w3-container ">
                <h4 className='w3-text-deep-purple' style={{ marginTop: '5px' }}>Créaction des devises </h4>
                <br />
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className='grey-text'>
                        <MDBRow>
                            <MDBCol m="4">
                                <span style={{ width: "30px" }}>
                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Nom devise majeur</label>
                                    <input
                                        ref={(ref) => this.mainInput = ref}
                                        type='text'
                                        name="codeMonnaie"
                                        onChange={this.handleChange}
                                        id='defaultFormRegisterNameEx'
                                        className='form-control'
                                    />
                                    {submitted && !data.codeMonnaie &&
                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                    }
                                </span>

                            </MDBCol>

                            {/* ================== */}
                            <MDBCol m="4">
                                <span>
                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Statut </label>
                                    <select name="statut" value={this.state.statut} onChange={this.handleChange} className="browser-default custom-select">
                                        <option value="MR">Monaie de référence</option>
                                        <option value="MS">Monaie secondaire</option>
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

                        <hr />

                    </div>

                </form>
                {/* =================== */}
                <br />
            </div>
        );
    }
}

export default connect(null, { postDevise })(CreationDevise); 

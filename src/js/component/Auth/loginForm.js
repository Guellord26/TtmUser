import React, { Component, useState } from 'react';
import {

    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBContainer,
    MDBInput

} from 'mdbreact'
import { connect } from "react-redux";
import { connecterUser, getListeStatut } from "../../actions/back-end";
import { loginAction} from "../../actions/authAction";
import PropTypes from 'prop-types'
import { Redirect } from "react-router";
import { InputBlockMapStateToProps } from '../../seatings/components/input-info';

class LoginForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            iconInput: 'eye-slash',
            data: {
                codeEntreprise: null,
                matricule: null,
                password: null,
            },
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // ==== La list des statut ===== //
    componentDidMount() {

        getListeStatut().then(
            res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { data } = this.state
        console.log(data)

        // ========== Connexion ============//
        this.props.loginAction(data);
       
       

    }
    handleChange = e => {
        e.preventDefault();
        const data = { [e.target.name]: e.target.value }
        const tmp = { ...this.state.data, ...data }
        this.setState({ data: { ...tmp } })
    };
    mouseEnter = () => {
        this.setState({
            iconInput: 'eye',
            typeInput: 'text'
        });
    };

    mouseLeave = () => {
        this.setState({
            iconInput: 'eye-slash',
            typeInput: 'password'
        });
    };
    
    render() {
        const { data, submitted } = this.state;
        // if (this.props.redirection) {
        //     console.log(this.props.redirection)
        //     return <Redirect to={this.props.redirection} />;
        // }
        return (
            <div className="w3-container ">
                <div className="w3-container">

                    <MDBContainer>

                        <MDBCard >
                            <MDBCardBody>
                                <form onSubmit={this.handleSubmit} noValidate>
                                    <p className='h4 text-center py-4'>CONNEXION</p>
                                    <div className='grey-text'>
                                        <MDBInput
                                            label='Code Entréprise'
                                            icon='id-card'
                                            name="codeEntreprise"
                                            onChange={this.handleChange}
                                            //value={this.state.codeEntreprise}
                                            group
                                            type='text'
                                            validate
                                            error='wrong'
                                            success='right'
                                        />
                                        {submitted && !data.codeEntreprise &&
                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                        }
                                        <MDBInput
                                            label='Matricule'
                                            icon='user'
                                            name="matricule"
                                            onChange={this.handleChange}
                                            //value={this.state.matricule}
                                            group
                                            type='text'
                                            success='right'
                                        />
                                        {submitted && !data.matricule &&
                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                        }

                                        <MDBInput
                                            label='Mode de passe'
                                            icon='lock'
                                            name="password"
                                            onChange={this.handleChange}
                                            //value={this.state.password}
                                            group
                                            type='password'

                                            validate
                                        />
                                        {submitted && !data.password &&
                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                        }
                                    </div>
                                    <div className='text-center py-4 mt-3'>

                                        <MDBBtn color='deep-purple' type='submit'>
                                            SE CONNECTER
                    </MDBBtn>

                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                        {/* </MDBCol> */}

                    </MDBContainer>

                </div>
            </div>
        );
    }
}

LoginForm.propTypes = {
    loginAction: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return{
        redirection : state.redirectReducer.redirectTo
    }
    
}

export default connect(mapStateToProps, {loginAction})(LoginForm);



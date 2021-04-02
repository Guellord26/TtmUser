import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import {

  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBSelect

} from 'mdbreact';

import { getListeStatut } from '../../actions/back-end'
import { createUser } from '../../actions/authAction'
class CreationPersonnel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listStatut: [],
      modal: false,
      data: {
        prenom: null,
        nom: null,
        postnom: null,
        mail: null,
        statut: null,
        matricule: null,
        codeEntreprise: null,
        numTel: null,
                   
      },

    };
  }
  // ==== La list des statut ===== //
  componentDidMount() {
    const statut = localStorage.getItem('statut')
   
      if (statut) {
        getListeStatut(statut).then(
            res =>{
              
              this.setState({ listStatut : res.data.data})

            }).catch(error =>{
            console.log(error.response)
          })
      }
    
  }

  handleSubmit = e => {
    e.preventDefault();
    const { data } = this.state
    console.log(data)
    this.props.createUser(data)
   

  }

  handleChange = e => {
    //   e.preventDefault();
    const data = { [e.target.name]: e.target.value }
    const tmp = { ...this.state.data, ...data }
    this.setState({ data: { ...tmp } })
  

  }
  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };

  render() {
    const { modal } = this.state;
    const ListStatut = this.state.listStatut
    
    return (
      <div>

        <div className='text-center py-4 mt-3'>
          <MDBBtn className="w3-right" color="deep-purple" style={{ marginTop: '15px', marginBottom:'20px' }} type='submit' onClick={this.toggle}>
            <b>+ Ajouter Utilisateur</b>
          </MDBBtn>
        </div>
        <MDBModal
          isOpen={modal}
          toggle={this.toggle}
          className='cascading-modal'>
          <div className='modal-header w3-deep-purple white-text'>
            <h4 className='title'>
              <MDBIcon icon='pencil-alt' />Création Personnel
              </h4>
            <button type='button' className='close' onClick={this.toggle}>
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <MDBModalBody>
            <form onSubmit={this.handleSubmit} noValidate className='grey-text'>
              <MDBInput
                size='sm'
                label='Pénom'
                onChange={this.handleChange}
                value={this.state.prenom}
                group
                name='prenom'
                type='text'
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                size='sm'
                label='Nom'
                onChange={this.handleChange}
                value={this.state.nom}
                group
                name='nom'
                type='text'
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                size='sm'
                label='postnom'
                onChange={this.handleChange}
                value={this.state.postnom}
                group
                name='postnom'
                type='text'
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                size='sm'
                label='Mail'
                onChange={this.handleChange}
                value={this.state.mail}
                group
                name='mail'
                type='email'
                validate
                error='wrong'
                success='right'
              />

              <select name='statut' onChange={this.handleChange} 
              value={this.state.statut} className="browser-default custom-select">

                {
                  ListStatut.map(items => (
                    <option key={items.idStatut}
                      value={items.enfant}>
                      {items.enfant}
                    </option>
                  ))
                }

              </select>

              <MDBInput
                size='sm'
                label='Matricule'
                onChange={this.handleChange}
                value={this.state.matricule}
                group
                name='matricule'
                type='text'
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                size='sm'
                label='code Entreprise'
                onChange={this.handleChange}
                value={this.state.codeEntreprise}
                group
                name='codeEntreprise'
                type='text'
                validate
                error='wrong'
                success='right'
              />
              <MDBInput
                size='sm'
                label='Numéro de téléphone'
                onChange={this.handleChange}
                value={this.state.numTel}
                group
                name='numTel'
                type='num'
                validate
                error='wrong'
                success='right'
              />
             
              <MDBBtn color='deep-purple' type='submit'>
                Enregistrer <MDBIcon icon='paper-plane' className='ml-1' />
              </MDBBtn>
            </form>
          </MDBModalBody>
          <MDBModalFooter>

          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

export default connect(null, {createUser})(CreationPersonnel); 

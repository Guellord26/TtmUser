import React, { Component, useState } from 'react';
import {
 
  MDBIcon,
  MDBCardText,
  MDBBtn,
  MDBCard,
  MDBCardBody, 
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalFooter

} from 'mdbreact';
import SectionContainer from '../component/sectionContainer'
class EspaceDroit extends React.Component {
  state = {
    modal: false
  };

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };

  render() {
    const { modal } = this.state;
      return (
        <div className="w3-container ">
        <div className="w3-container">         
          {/* <MDBCol md='4'> */}
          <MDBCard>          
            <MDBCardBody>
              
              <MDBCardText>
               <div className='text-center py-4 mt-3'>
                   <h4>AVEZ-VOUS BESOIN D'ASSISTANCE ?</h4>
               </div>
               <div className='text-center py-6 mt-3'> 
                  <MDBIcon className="w3-text-orange" size="10x" icon="question"/>
               </div>
              </MDBCardText>
              <div className=' py-4 mt-3'>
              <div className='text-center py-4 mt-3'>
                <MDBBtn className="text-center"color="warning" type='submit' onClick={this.toggle}>
                    CONTACTEZ-NOUS
                </MDBBtn>
              </div>
          <MDBModal
            isOpen={modal}
            toggle={this.toggle}
            className='cascading-modal'>
            <div className='modal-header w3-deep-purple white-text'>
              <h4 className='title'>
                <MDBIcon icon='pencil-alt' />Contact
              </h4>
              <button type='button' className='close' onClick={this.toggle}>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <MDBModalBody>
              <form className='grey-text'>
                <MDBInput
                  size='sm'
                  label='Votre Nom'
                  icon='user'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  size='sm'
                  label='Votre adresse mail'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  size='sm'
                  label='Sujet'
                  icon='tag'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  size='sm'
                  type='textarea'
                  rows='2'
                  label='Votre Message'
                  icon='pencil-alt'
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='danger' onClick={this.toggle}>
                Fermer
              </MDBBtn>
              <MDBBtn color='deep-purple'>
                Envoyer <MDBIcon icon='paper-plane' className='ml-1' />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        
            </div>
            </MDBCardBody>
                
          </MDBCard>
          <br></br>
          
              </div>
          </div>
      );
    }
}
export default EspaceDroit; 

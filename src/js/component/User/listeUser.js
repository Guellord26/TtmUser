import React, { Component, useState } from 'react';
import {
  MDBCard,
  MDBContainer, 
  MDBRow,
  MDBCol,  
}
 from 'mdbreact';
import { connect } from "react-redux";
import CreationPrsonnel from './creationPersonnels'
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';
import { deleteUser, updateUser } from '../../actions/back-end'
import { getListeUser } from '../../actions/apisActions'
import { usePromiseTracker } from "react-promise-tracker";

class ListeUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal1: false,
      checkbox1: '',
      checkbox2: '',
      multiple: '',
      // listUser: []          
    };
   
}
   // ==== La list des statut ===== //
   componentDidMount(){ 
    
    this.props.getListeUser()
    
  }
   modifier = (idUser) =>{
       updateUser(idUser)
       
  }
  supprimer = (idUser) =>{
     deleteUser(idUser)
    
}
  // =========== modifier User ==========//
  
    // ========================//
      toggle = nr => () => {
        const modalNumber = `modal${nr}`;
        this.setState({
          [ modalNumber ]: !this.state[ modalNumber ]
        });
      };
    render() {
        const { modal1,data, multiple, checkbox1, checkbox2 } = this.state;
        // const ListUser = this.state.listUser
      return (
        <div className="">
              
          <MDBRow>
          <MDBCol md='12'>
           
                <MDBCard style={{marginTop:'30px', marginBottom:'50px'}}>
                   <MDBContainer>
                   <h3 style={{marginTop:'20px',marginBottom:'20px'}}>Liste des utilisateurs</h3>
                   <table class="w3-table"style={{ marginBottom: '20px',marginBottom:'20px' }}>

                      <tr class="w3-deep-purple">
                        <th>Prénom</th>
                        <th >Nom</th>
                        <th >Matricule</th>
                        <th >Statut</th>
                      </tr>

                    {/* ====== */}
                    {
                        this.props.listeUser.map(items=>(
                          <tr key={items.idPresonnel}>
                            <td>{items.profile.prenom}</td>
                            <td>{items.profile.nom}</td>
                            <td>{items.matricule}</td>
                            <td>{items.statut}</td>
                            <td>
                              <button onClick ={ ()=> this.modifier(items.idPersonnel)}  className="w3-btn w3-round w3-green w3-right" >
                                <b>Modifier</b>
                              </button>                       
                            </td>
                            <td>
                              <button onClick ={ ()=> this.supprimer(items.idPersonnel)} className="w3-btn w3-round w3-red w3-right" >
                                <b>Supprimer</b>
                              </button>                       
                            </td>
                          </tr>
                            
                        ))
                    }
                    {/* ====== */}
                   
                  </table>
                  
                  <CreationPrsonnel/>
                   </MDBContainer>
                </MDBCard>
               
          </MDBCol>
        </MDBRow>

      </div>
        
      );
    }
}
// export default EspacePersonnls;
function mapStateToProps(state) {
  
  return {
    listeUser: state.userReducer.listeUser
  };
}

export default connect( mapStateToProps, {getListeUser})(ListeUser); 

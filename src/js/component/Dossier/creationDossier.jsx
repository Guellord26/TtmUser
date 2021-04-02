import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import {
 
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBInputGroup,
  MDBInputSelect

} from 'mdbreact';
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';

import DatePicker from'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { postDossier, getListeRouting }  from '../../actions/apisActions'

class CreationDossier extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           meStation: null,
           data:{
        // ========  identité ======= // 
            prenom : null,
            nom: null,           
            postnom : null, 
            sexe: null,           
            numTelephone : null,
            email: null,
            addresse: null,           
            dateNaissance : new Date(),
            pieceIdentite: null,           
            numPieceIdentite : null, 
        // ======== adresse physique ========= // 
            avenue: null,
            quartier: null,
            commune: null,
            ville: null,
        // ======== adresse Destination: ========= // 
             avenueDestination: null,
             quartierDestination: null,
             communeDestination: null,
             villeDestination: null
           },
           submitted: false,
           buttonActive: false,
           
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }
   
    // ==== La list des statut ===== //
    componentDidMount(){ 
      
      this.props.getListeRouting()
    }
    //  // ========== Nombre station ========//
   
    
    // // ===============================
   
//     cleanform = () =>{
//         const {nomRouting} = this.state.data;
//         const {nombreStation} = this.state.data;
//         this.props.onSearchTermChange(nomRouting);
//         this.props.onSearchTermChange(nombreStation);
//         return this.mainInput.value = "";
//  }
    // ===============================
   
        handleSubmit = e =>{
            e.preventDefault();        
            const { data } = this.state
            console.log(data)
            
             this.setState({submitted: true})
            //    this.cleanForm()
            // if (data.codeEntreprise && data.matricule && data.password) {
                 postDossier(data);
            // }
            
        }
       
    
    // ==================================== //

    handleChange = e =>{ 
        e.preventDefault();     
        const data = { [e.target.name] : e.target.value }
        const tmp = { ...this.state.data, ...data }
        this.setState({data : { ...tmp}})       
     };
    //  =========================//
    handleChangeDate = date => {
        this.setState({
            dateNaissance: date
        });
      };
    

    render() {
      const { data, buttonActive, submitted } = this.state;
     
      return (
        <div className="w3-container ">
                      
        <div className="w3-container">
        <h3 className="w3-center w3-text-deep-purple" style={{marginTop:"40px"}}><b> Dossier Client</b></h3>
        <hr/>
        {/* =============================== */}

        <div>
            <MDBBtn color='success'>VOIDER</MDBBtn>
            <MDBBtn color='success'>MODIFIER VOYAGE</MDBBtn>
            <MDBBtn color='primary'>SPLITER</MDBBtn>
            <MDBBtn color='primary'>CONFIRMER VOYAGE</MDBBtn>
            <MDBBtn color='danger'>ANNULER VOYAGE</MDBBtn> 
            <MDBBtn color='danger'>SUPPRIMER</MDBBtn>          
        </div>
      {/* ================================= */}
      <ul class="w3-navbar w3-left-align">
  
        <li class=""><a Linli to="" class="w3-hover-deep-purple ">Infor du Passager</a></li>
        <li class=""><a Linli to="" class="w3-padding w3-hover-deep-purple ">Autres Passager</a></li>
        <li class=""><a Linli to="" class="w3-padding w3-hover-deep-purple ">Bagages</a></li>
        <li class=""><a Linli to="" class="w3-padding w3-hover-deep-purple ">Voyage</a></li>
        <li class=""><a Linli to="" class="w3-padding w3-hover-deep-purple ">Payement</a></li>
      </ul>
            
      {/* ================================= */}
        <hr/>
                <form onSubmit={this.handleSubmit} noValidate>
                 <h4 className="w3-text-deep-purple"> Identification</h4>
                  <div className='grey-text'>
                       <MDBRow>
                           <MDBCol m="4">
                           <span style={{width:"30px"}}>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Prénom</label>
                                    <input
                                    ref={(ref) => this.mainInput= ref} 
                                    type='text'
                                    name="prenom"
                                    onChange={this.handleChange}
                                        //value={this.state.nomRouting1}
                                    id='defaultFormRegisterNameEx'
                                    className='form-control'
                                    />
                                        {submitted && !data.prenom &&
                                         <div className="w3-text-red">Veillez remplire ce champ</div>
                                        }
                            </span>
                           
                            
                             {/* ================ */}
                             <span style={{width:"30px"}}>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> sexe</label>
                                    <input
                                    ref={(ref) => this.mainInput= ref} 
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
                            </span>
                            {/* ================ */}
                            <div style={{marginTop:"20px"}}>
                                 <DatePicker selected={data.dateNaissance} onChange={date => this.setState({data:{...date, dateNaissance: date}})} />
                            </div>                     
                            {/* ================ */}
                           </MDBCol>
                           
                           {/* ================== */}
                           <MDBCol m="4">
                                {/* ================= */}
                            <span style={{width:"30px"}}>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Nom</label>
                                    <input
                                    ref={(ref) => this.mainInput= ref} 
                                    type='text'
                                    name="nom"
                                    onChange={this.handleChange}
                                        //value={this.state.nomRouting2}
                                    id='defaultFormRegisterNameEx'
                                    className='form-control'
                                    />
                                        {submitted && !data.nom &&
                                                    <div className="w3-text-red">Veillez remplire ce champ</div>
                                        }
                            </span>
                            {/* =================== */}
                           <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Téléphone</label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
                                type='number'
                                name="numTelephone"
                                onChange={this.handleChange}
                                    //value={this.state.numTelephone}
                                id='defaultFormRegisterNameEx'
                                className='form-control'
                                />
                                    {submitted && !data.numTelephone &&
                                                <div className="w3-text-red">Veillez remplire ce champ</div>
                                    }
                            </span>
                            {/* ================= */}
                           
                            <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Piece d'identité</label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
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
                            </span>
                             {/* ================ */}
                            
                           </MDBCol>
                           <MDBCol m="2">
                           <span style={{width:"30px"}}>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> PostNom</label>
                                    <input
                                    ref={(ref) => this.mainInput= ref} 
                                    type='text'
                                    name="postnom"
                                    onChange={this.handleChange}
                                        //value={this.state.postnom}
                                    id='defaultFormRegisterNameEx'
                                    className='form-control'
                                    />
                                        {submitted && !data.postnom &&
                                          <div className="w3-text-red">Veillez remplire ce champ</div>
                                        }
                            </span>
                             {/* ================ */}
                             <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Mail</label>
                                <input ref={ (ref) => this.mainInput = ref}
                                    type='email'
                                    name="email"
                                    onChange={this.handleChange}
                                        //value={this.state.email}
                                    id='defaultFormRegisterNameEx'
                                    className='form-control'
                                />
                                    {submitted && !data.email &&
                                    <div className="w3-text-red">Veillez remplire ce champ</div>
                                    }
                            </span>
                            {/* ================ */} 
                            <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Numero d'identité</label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
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
                            </span>

                           
                           </MDBCol>
                           
                       </MDBRow>
                       {/* ====================== */}
                      
                      <hr/>             
                  </div>
                  <di>
                  <h5 className="w3-text-deep-purple"> Adresse physique</h5>
                    <MDBRow>
                       <MDBCol m="3">
                             {/* ================ */} 
                             <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Avenue </label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
                                type='text'
                                name="avenue"
                                onChange={this.handleChange}
                                    //value={this.state.pieceIdentite}
                                id='defaultFormRegisterNameEx'
                                className='form-control'
                                />
                                {submitted && !data.avenue &&
                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                }
                            </span>
                       </MDBCol>
                       <MDBCol m="3">
                             {/* ================ */} 
                             <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Quartier </label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
                                type='text'
                                name="quartier"
                                onChange={this.handleChange}
                                    //value={this.state.pieceIdentite}
                                id='defaultFormRegisterNameEx'
                                className='form-control'
                                />
                                {submitted && !data.quartier &&
                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                }
                            </span>
                       </MDBCol>
                       <MDBCol m="3">
                             {/* ================ */} 
                             <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Commune </label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
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
                             {/* ================ */} 
                             <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Ville </label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
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
                  </di>
                  <div>
                  <h5 className="w3-text-deep-purple"> Adresse de déstination</h5>
                    <MDBRow>
                       <MDBCol m="3">
                             {/* ================ */} 
                             <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Avenue </label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
                                type='text'
                                name="avenueDestination"
                                onChange={this.handleChange}
                                    //value={this.state.pieceIdentite}
                                id='defaultFormRegisterNameEx'
                                className='form-control'
                                />
                                {submitted && !data.avenueDestination &&
                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                }
                            </span>
                       </MDBCol>
                       <MDBCol m="3">
                             {/* ================ */} 
                             <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Quartier </label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
                                type='text'
                                name="quartierDestination"
                                onChange={this.handleChange}
                                    //value={this.state.pieceIdentite}
                                id='defaultFormRegisterNameEx'
                                className='form-control'
                                />
                                {submitted && !data.quartierDestination &&
                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                }
                            </span>
                       </MDBCol>
                       <MDBCol m="3">
                             {/* ================ */} 
                             <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Commune </label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
                                type='text'
                                name="communeDestination"
                                onChange={this.handleChange}
                                    //value={this.state.pieceIdentite}
                                id='defaultFormRegisterNameEx'
                                className='form-control'
                                />
                                {submitted && !data.numeroDestination &&
                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                }
                            </span>
                       </MDBCol>
                       <MDBCol m="3">
                             {/* ================ */} 
                             <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Ville </label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
                                type='text'
                                name="villeDestination"
                                onChange={this.handleChange}
                                    //value={this.state.pieceIdentite}
                                id='defaultFormRegisterNameEx'
                                className='form-control'
                                />
                                {submitted && !data.villeDestination &&
                                            <div className="w3-text-red">Veillez remplire ce champ</div>
                                }
                            </span>
                       </MDBCol>
                    </MDBRow>
                  </div>
                  <MDBBtn className="w3-right" color='deep-purple' type='submit' disabled={this.buttonActive} style={{marginTop:"20"}}>
                                valider
                  </MDBBtn>
                  <br/>
                </form>
             {/* =================== */}
            
              </div>
          </div>
      );
    }
}
function mapStateToprops(state){
    return{
        routings : state.routingReducer.listeRouting
    }
}
export default connect(mapStateToprops,{ postDossier,getListeRouting })(CreationDossier); 

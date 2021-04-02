import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import {
  MDBJumbotron,
  MDBRating,
  MDBRow,
  MDBCol,
}
  from 'mdbreact';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import SectionContainer from '../sectionContainer'
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { getListeRouting, getAppareil } from "../../actions/back-end";
import { postVoyage } from '../../actions/apisActions'


class CreationVoyages extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listeRouting: [],
      listeAppareil: [],

      data: {
        numVoyage: '',
        dateDepart: new Date(),
        dateArrivee: new Date(),
        heureDepart: new Date(),
        heureArrivee: new Date(),
        placeDisponible: '',
        vehicule: null,
        rooting: null
      },
      submitted: false,
     
      access: localStorage.getItem("statut")
  
    }
  }
 
  componentDidMount() {
    //  ============== Liste Routing ============//
    getListeRouting().then(
      res => {
        console.log(res.data)
        if (res.data) {
          this.setState({ listeRouting: res.data });
        }
      }).catch(error => {
        console.log(error.response)
      })
    // ============== Liste Appreil================//
    getAppareil().then(
      res => {
        if (res.data) {
          console.log(res.data)
          this.setState({ listeAppareil: res.data })
        }
      }
    ).catch(
      error => {
        console.log(error.response)
      }
    )
  }
  //============ VALIDATION =============//

  submitHandler = e => {
    e.preventDefault();
    const { data } = this.state
    this.setState({ submitted: true });
    
    console.log(data)
    if (data.dateDepart && data.dateArrivee && data.heureDepart && data.heureArrivee && data.vehicule &&
      data.placeDisponible && data.numVoyage && data.rooting) {
      console.log(data)
      this.props.postVoyage(data)
     
    }

  };

  changeHandler = e => {
    const data = { [e.target.name]: e.target.value }
    const tmp = { ...this.state.data, ...data }
    this.setState({ data: { ...tmp } })
    
  };

  render() {

    const { data, submitted, access } = this.state
    const ListeRouting = this.state.listeRouting
    const ListeAppareil = this.state.listeAppareil
    return (
      <div className="">

        {/* ========================== */}
        <MDBCol>
          <SectionContainer noBorder header=''>
            <h4 className='w3-text-deep-purple' style={{ marginTop: '20px' }}>Créaction Voyage </h4>
            <MDBJumbotron className=''>

              <MDBRow>
                <MDBCol md='12'>
                  <form className='needs-validation'
                    onSubmit={this.submitHandler}
                    noValidate >
                    <MDBRow>
                      <div className='col-md-4 mb-3'>
                        <label
                          htmlFor='defaultFormRegisterPasswordEx4'
                          className='grey-text'>
                          Numéro de voyage
                        </label>
                        <input
                          value={data.numeroVoyage}
                          onChange={this.changeHandler}
                          type='text'
                          id='defaultFormRegisterPasswordEx4'
                          className='form-control'
                          name='numVoyage'
                          placeholder='Numéro du Voyage'
                          required
                        />
                        {submitted && !data.numVoyage &&
                          <div className="w3-text-red">Veillez remplire ce champ</div>
                        }
                      </div>
                      <div className='col-md-4 mb-3'>
                        <label
                          htmlFor='defaultFormRegisterPasswordEx4'
                          className='grey-text'>
                          Place disponible
                        </label>
                        <input
                          // value={placeDiponible}
                          onChange={this.changeHandler}
                          type='text'
                          id='defaultFormRegisterPasswordEx4'
                          className='form-control'
                          name='placeDisponible'
                          placeholder='Place disponible'
                          required />

                        {submitted && !data.placeDisponible &&
                          <div className="w3-text-red">Veillez remplire ce champ</div>
                        }
                      </div>
                      <div className='col-md-4 mb-3' style={{ marginTop: "0px" }}>
                        <label
                          htmlFor='defaultFormRegisterPasswordEx4'
                          className='grey-text'>
                          Véhicule
                        </label>
                        <select name='vehicule' onChange={this.changeHandler} value={this.state.vehicule} className="browser-default custom-select">
                        
                          {
                            ListeAppareil.map(items => (
                              <option key={items.idAppareil}
                                value={items.idAppareil}>                           
                                {items.typeAppareil}
                              </option>
                            ))
                          }

                        </select>
                        {submitted && !data.vehicule &&
                          <div className="w3-text-red">Veillez remplire ce champ</div>
                        }

                      </div>
                    </MDBRow>

                    <MDBRow>
                      <div className='col-md-4 mb-3'>

                        <p>Date de départ</p>
                        {/* ================ */}
                        <div style={{ marginTop: "20px" }}>
                          <DatePicker selected={data.dateDepart}
                            dateFormat="yyyy/MM/dd"
                            onChange={date => this.setState({ data: { ...this.state.data, dateDepart: date } })} />

                        </div>
                        {/* ================ */}

                      </div>
                      <div className='col-md-4 mb-3' style={{ marginLeft: "0px" }}>

                        <p>Date d'arrivé</p>
                        {/* ================ */}
                        <div style={{ marginTop: "20px" }}>
                          <DatePicker selected={data.dateArrivee}
                            dateFormat="yyyy/MM/dd"
                            onChange={date => this.setState({ data: { ...this.state.data, dateArrivee: date } })} />
                          {submitted && !data.dateArrivee &&
                            <div className="w3-text-red">Veillez remplire ce champ</div>
                          }

                        </div>
                      </div>
                      {/* ================ */}
                      <div className='col-md-4 mb-3' style={{ marginTop: "0px" }}>
                        <label
                          htmlFor='defaultFormRegisterPasswordEx4'
                          className='grey-text'>
                          Routing
                        </label>
                        <select name='rooting' onChange={this.changeHandler} value={this.state.rooting} className="browser-default custom-select">

                          {
                            ListeRouting.map(items => (
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

                      </div>
                    </MDBRow>
                    <MDBRow>
                      <div className='col-md-4 mb-3'>
                        <p>Heure de départ</p>
                        {/* ================ */}
                        <div style={{ marginTop: "20px" }}>
                          <DatePicker selected={data.heureDepart}

                            onChange={date => this.setState({ data: { ...this.state.data, heureDepart: date } })}
                            showTimeSelect
                            showTimeSelectOnly
                            timeCaption="Time"
                            dateFormat="h:mm aa" />
                          {submitted && !data.heureDepart &&
                            <div className="w3-text-red">Veillez remplire ce champ</div>
                          }

                        </div>

                      </div>
                      <div className='col-md-4 mb-3'>
                        <p>Heure d'arrivé</p>
                        {/* ================ */}
                        <div style={{ marginTop: "20px" }}>
                          <DatePicker selected={data.heureArrivee}

                            onChange={date => this.setState({ data: { ...this.state.data, heureArrivee: date } })}
                            showTimeSelect
                            showTimeSelectOnly
                            timeCaption="Time"
                            dateFormat="h:mm aa" />
                          {submitted && !data.heureArrivee &&
                            <div className="w3-text-red">Veillez remplire ce champ</div>
                          }

                        </div>

                      </div>

                    </MDBRow>

                    {access == "DC" ?
                      <button className='btn w3-deep-purple' type='submit'>
                        <h5>+ Ajouter</h5>
                      </button> :
                      <button className='btn w3-deep-purple' disabled type='submit'>
                        <h5>+ Ajouter</h5>
                      </button>
                    }

                  </form>
                </MDBCol>

              </MDBRow>
            </MDBJumbotron>
          </SectionContainer>
        </MDBCol>

        {/* ========================== */}
      </div>

    );
  }
}
export default connect(null, {postVoyage})(CreationVoyages); 

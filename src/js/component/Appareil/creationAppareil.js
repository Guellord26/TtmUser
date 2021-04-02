import React, { Component, useState } from 'react';
import {

  MDBJumbotron,
  MDBRow,
  MDBCol,

}
  from 'mdbreact';

import SectionContainer from '../sectionContainer'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { postAppareil } from "../../actions/apisActions";
import { connect } from "react-redux"

class CreationAppareils extends React.Component {
  state = {
    data: {
      immatriculation: '',
      indexKm: '',
      codeAppareil: '',
      typeAppareil: '',
      nbrSiege: '',
      planCabine: '',
      etat: '',
      miseEnService: new Date()
    },
    submitted: false,
    access: localStorage.getItem("statut")
  }
  //============ VALIDATION =============//

  submitHandler = e => {
    e.preventDefault();
    const { data } = this.state
    this.setState({ submitted: true })
    console.log(data)
    if (data.immatriculation && data.typeAppareil && data.indexKm &&
      data.planCabine && data.nbrSiege && data.etat && data.codeAppareil &&
      data.miseEnService) {
      console.log(data)
      this.props.postAppareil(data)

    }

  };


  changeHandler = e => {
    const data = { [e.target.name]: e.target.value }
    const tmp = { ...this.state.data, ...data }
    this.setState({ data: { ...tmp } })

  };

  render() {
    const { data, access, submitted } = this.state
    return (
      <div className="">

        {/* ========================== */}
        <MDBCol>
          <SectionContainer noBorder header=''>
            <h4 className='w3-text-deep-purple' style={{ marginTop: '20px' }}>Créaction Appareil </h4>
            <MDBJumbotron className=''>

              <MDBRow>
                <MDBCol md='12'>
                  <form className='needs-validation'
                    onSubmit={this.submitHandler}
                    noValidate >
                    <MDBRow>
                      <div className='col-md-4 mb-3'>

                        <input
                          onChange={this.changeHandler}
                          type='text'
                          id='defaultFormRegisterPasswordEx4'
                          className='form-control'
                          name='immatriculation'
                          placeholder='Immatriculation'
                          required
                        />
                        {submitted && !data.immatriculation &&
                          <div className="w3-text-red">Veillez remplire ce champ</div>
                        }
                      </div>
                      <div className='col-md-4 mb-3'>

                        <input

                          onChange={this.changeHandler}
                          type='text'
                          id='defaultFormRegisterPasswordEx4'
                          className='form-control'
                          name='codeAppareil'
                          placeholder='Code Appareil'
                          required
                        />
                        {submitted && !data.codeAppareil &&
                          <div className="w3-text-red">Veillez remplire ce champ</div>
                        }
                      </div>
                      <div className='col-md-4 mb-3'>

                        <input

                          onChange={this.changeHandler}
                          type='text'
                          id='defaultFormRegisterPasswordEx4'
                          className='form-control'
                          name='typeAppareil'
                          placeholder=" Type Appareil "
                          required
                        />
                        {submitted && !data.typeAppareil &&
                          <div className="w3-text-red">Veillez remplire ce champ</div>
                        }
                      </div>
                    </MDBRow>
                    <MDBRow>
                      <div className='col-md-4 mb-3'>

                        <input

                          onChange={this.changeHandler}
                          type='text'
                          id='defaultFormRegisterPasswordEx4'
                          className='form-control'
                          name='indexKm'
                          placeholder='Index Km'
                          required />
                        {submitted && !data.indexKm &&
                          <div className="w3-text-red">Veillez remplire ce champ</div>
                        }
                      </div>
                      <div className='col-md-4 mb-3'>

                        <input

                          onChange={this.changeHandler}
                          type='text'
                          id='defaultFormRegisterPasswordEx4'
                          className='form-control'
                          name='nbrSiege'
                          placeholder='Nombre des Sieges'
                          required
                        />
                        {submitted && !data.nbrSiege &&
                          <div className="w3-text-red">Veillez remplire ce champ</div>
                        }
                      </div>

                      <div className='col-md-4 mb-3'>

                        <input

                          onChange={this.changeHandler}
                          type='text'
                          id='defaultFormRegisterPasswordEx4'
                          className='form-control'
                          name='planCabine'
                          placeholder="PlanCabine "
                          required
                        />
                        {submitted && !data.planCabine &&
                          <div className="w3-text-red">Veillez remplire ce champ</div>
                        }
                      </div>
                    </MDBRow>
                    <MDBRow>
                      <div className='col-md-4 mb-3'>
                        <div style={{ marginTop: "20px" }}>
                          <DatePicker selected={data.miseEnService}
                            dateFormat="yyyy/MM/dd"
                            onChange={date => this.setState({ data: { ...this.state.data, miseEnService: date } })} />

                        </div>
                      </div>
                      <div className='col-md-4 mb-3'>
                        <input
                          onChange={this.changeHandler}
                          type='text'
                          id='defaultFormRegisterPasswordEx4'
                          className='form-control'
                          name='etat'
                          placeholder='Etat Appareil'
                          required
                        />
                        {submitted && !data.etat &&
                          <div className="w3-text-red">Veillez remplire ce champ</div>
                        }

                      </div>

                    </MDBRow>

                    {access == "DT" ?
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
export default connect(null, { postAppareil })(CreationAppareils); 

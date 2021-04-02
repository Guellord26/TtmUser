import React, { Component, useState } from 'react';
import {
 
  MDBBtn,
  MDBRow,
  MDBCol,
 
} from 'mdbreact';
import {connect } from 'react-redux'
import {postRouting } from "../../actions/apisActions";


class CreationRoutings extends React.Component {
    constructor(props){
        super(props);
        this.state = {  
           
           data:{
            vileDepart: "",
            vileArrive: "",
            abreviation: "",                  
           },
           submitted: false,
           access : localStorage.getItem("statut")
         
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }
   
   
   
        handleSubmit = e =>{
            e.preventDefault();        
            
            const { data } = this.state
            this.setState({ submitted: true });
            console.log(data)
            
            //    this.cleanForm()
            if (data.vileDepart && data.vileArrive && data.abreviation) {
                 console.log(data)
              
                 this.props.postRouting(data)
              
            }
            
        }
       
    // ====================================

    handleChange = e =>{ 
        e.preventDefault();     
        const data = { [e.target.name] : e.target.value }
        const tmp = { ...this.state.data, ...data }
        this.setState({data : { ...tmp}})       
    };
  
    // ===============================
    
   
    render() {
      const { data, submitted, access} = this.state;
       console.log(access)
      return (
        <div className="w3-container ">
               
        
        <div className="w3-container">
                
                <form onSubmit={this.handleSubmit} noValidate>
                 
                  <div className='grey-text'>
                       <MDBRow>
                           <MDBCol m="4">
                           <span style={{width:"30px"}}>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'> Ville de Départ </label>
                                    <input
                                    ref={(ref) => this.mainInput= ref} 
                                    type='text'
                                    name="vileDepart"
                                    onChange={this.handleChange}
                                    id='defaultFormRegisterNameEx'
                                    className='form-control'
                                    />
                                        {submitted && !data.vileDepart &&
                                                    <div className="w3-text-red">Veillez remplire ce champ</div>
                                        }
                            </span>
                           
                           </MDBCol>
                           
                           {/* ================== */}
                           <MDBCol m="4">
                           <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Ville d'Arriver </label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
                                type='text'
                                name="vileArrive"
                                onChange={this.handleChange}
                                id='defaultFormRegisterNameEx'
                                className='form-control'
                                />
                                    {submitted && !data.vileArrive &&
                                      <div className="w3-text-red">Veillez remplire ce champ</div>
                                    }
                            </span>
                            {/* ================= */}
                            
                           </MDBCol>
                           <MDBCol m="4">
                           <span>
                                <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Abréviation </label>
                                <input 
                                ref={ (ref) => this.mainInput = ref}
                                type='text'
                                name="abreviation"
                                onChange={this.handleChange}
                                id='defaultFormRegisterNameEx'
                                className='form-control'
                                />
                                    {submitted && !data.abreviation &&
                                      <div className="w3-text-red">Veillez remplire ce champ</div>
                                    }
                            </span>
                            {/* ================= */}
                            
                           </MDBCol>
                           <MDBCol m="2">
                          
                            { access == "DC" ?
                            <MDBBtn color='deep-purple' type='submit' style={{marginTop:'250'}}>
                                valider
                            </MDBBtn> :
                            <MDBBtn color='deep-purple' disabled type='submit' style={{marginTop:'250'}}>
                                 valider
                            </MDBBtn>
                            }
                           </MDBCol>
                           
                       </MDBRow>
                         <hr/> 
                         <br/>            
                  </div>
                  
                </form>
             {/* =================== */}
              
                  <br/>
              </div>
          </div>
      );
    }
}
 
export default connect(null, {postRouting})(CreationRoutings); 

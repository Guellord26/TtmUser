import React, { Component, useState } from 'react';
import {
    MDBBtn,
    MDBRow,
    MDBCol,
} from 'mdbreact';
import { connect } from 'react-redux'
import { postPrix,  getListeDevise, getListeRouting, getListeClasseVoyage, getListeCategorie} from "../../../actions/apisActions";


class CreationPrixVoyage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
              price: null,
              rooting: null,
              devise: null,
              classVoyage: null,
              category: null
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
        // if (data.codeMonnaie && data.statut){
        //     console.log(data)
            this.props.postPrix(data)
        // }
    }

    // ===============================

    handleChange = e => {
        e.preventDefault();
        const data = { [e.target.name]: e.target.value }
        const tmp = { ...this.state.data, ...data }
        this.setState({ data: { ...tmp } })
    };
    componentDidMount(){
        this.props.getListeCategorie()
        this.props.getListeClasseVoyage()
        this.props.getListeDevise()
        this.props.getListeRouting()
    }

    // ===============================

    render() {
        const { data, access, submitted} = this.state
        const classeVoyage = this.props.classeVoyages
        const categorie = this.props.categories
        console.log(this.props.devises)
        console.log("routing",this.props.routings)
        console.log("classe",this.props.classeVoyage)
        
        return (
            <div className="w3-container ">
                <h4 className='w3-text-deep-purple' style={{ marginTop: '5px' }}>Créaction des Prix </h4>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className='grey-text'>
                        <MDBRow>
                            <MDBCol m="4">
                                <span>
                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Routing </label>
                                    <select name='rooting' onChange={this.handleChange}
                                        value={this.state.rooting} className="browser-default custom-select">

                                        {
                                            this.props.routings.map(items => (
                                                <option key={items.idRooting}
                                                    value={items.idRooting}>
                                                    {items.vileDepart} - {items.vileArrive}
                                                </option>
                                            ))
                                        }

                                    </select>
                                </span>
                              
                            </MDBCol>
                            <MDBCol m="4">
                                <span>
                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Classse </label>
                                    <select name='classVoyage' onChange={this.handleChange}
                                        value={this.state.classVoyage} className="browser-default custom-select">

                                        {
                                            this.props.classeVoyages.map(items => (
                                                <option key={items.idClass}
                                                    value={items.name}>
                                                    {items.name}
                                                </option>
                                            ))
                                        }

                                    </select>
                                </span>
                              

                            </MDBCol>
                            <MDBCol m="4">
                                <span>
                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Categorie age </label>
                                    <select name='category' onChange={this.handleChange}
                                        value={this.state.category} className="browser-default custom-select">

                                        {
                                            this.props.categories.map(items => (
                                                <option key={items.idCat}
                                                    value={items.name}>
                                                    {items.name}
                                                </option>
                                            ))
                                        }

                                    </select>
                                </span>
                              
                             

                            </MDBCol>
                            </MDBRow>
                            <MDBRow>
                            <MDBCol m="4">
                                <span>
                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Devise </label>
                                    <select name='devise' onChange={this.handleChange}
                                        value={this.state.devise} className="browser-default custom-select">

                                        {
                                            this.props.devises.map(items => (
                                                <option key={items.idMonnaie}
                                                    value={items.codeMonnaie}>
                                                    {items.codeMonnaie}
                                                </option>
                                            ))
                                        }

                                    </select>
                                </span>
                        
                            </MDBCol>
                            <MDBCol m="4">
                                <span style={{ width: "30px" }}>
                                    <label htmlFor='defaultFormRegisterNameEx' className='grey-text'>Prix </label>
                                    <input
                                        ref={(ref) => this.mainInput = ref}
                                        type='text'
                                        name="price"
                                        onChange={this.handleChange}
                                        id='defaultFormRegisterNameEx'
                                        className='form-control'/>
                                    {submitted && !data.price &&
                                        <div className="w3-text-red">Veillez remplire ce champ</div>
                                    }
                                </span>

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
                
            </div>
        );
    }
}

function mapstateToProps(state){
    return{
        routings : state.routingReducer.listeRouting,
        devises : state.deviseReducer.listeDevise,
        classeVoyages : state.classeVoyageReducer.listeClasseVoyage,
        categories : state.categorieReducer.listeCategorie
    }
}

export default connect(mapstateToProps, {getListeRouting, getListeDevise, getListeClasseVoyage, getListeCategorie, postPrix})(CreationPrixVoyage); 

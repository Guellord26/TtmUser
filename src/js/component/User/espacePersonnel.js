import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import ListeUser from './listeUser';
import EspaceGauche from '../../navigation/espaceGauche';
import EspaceDroit from '../../navigation/espaceDroit';


class EspacePersonnls extends React.Component {

  // ==== La list des statut ===== //

  render() {
   
    return (
      <div className="">

        <MDBRow>
          <MDBCol md="3"><EspaceGauche/></MDBCol>
          <MDBCol md="6">          
            <ListeUser />
          </MDBCol>
          <MDBCol md="3"><EspaceDroit/></MDBCol>
        </MDBRow>
      </div>

    );
  }
}

export default EspacePersonnls; 

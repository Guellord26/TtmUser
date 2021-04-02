import React, { Component, useState } from 'react';
import CreationDossier from './creationDossier'
import ListeDossier from './listeDossier'
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';


class DossierClient extends React.Component {
   
    render() {
     
      return (
          <div className="w3-container ">
             <CreationDossier/>         
             <ListeDossier/>
          </div>
      );
    }
}

export default DossierClient; 

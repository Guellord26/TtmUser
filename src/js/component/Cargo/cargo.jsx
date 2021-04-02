import React, { Component, useState } from 'react';
import CreationCargo from './creationCargo'
import ListeCargo from './listeCargo'
class Cargo extends React.Component {
    render(){
        
        return(
            <div>
               <CreationCargo/>
               <ListeCargo/>     
            </div>
        )
    };
}
export default Cargo
import React, { Component, useState } from 'react';
import CreationCourrier from './creationCourrier'
import ListeCourrier from './listeCourrier'
class Courrier extends React.Component {
    render(){
        return(
            <div>
               <CreationCourrier/> 
               <ListeCourrier/>    
            </div>
        )
    };
}
export default Courrier
import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import SeatingEdition from '../seatings/containers/edit_seat'
import { postSeating } from '../actions/apisActions'

class Seating extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        data:{
          seating: null
        }
    }

  }
  
  handlerSaveSeat = seat =>{
    const seatString = JSON.stringify(seat)
    this.props.postSeating(seatString)
  }
  
  render() {
      
      const user = this.props.identite
      // const User = JSON.parse(user)
      console.log(user.idUser)
    return (
      <div className="w3-container ">
        <div className="w3-container">
          <SeatingEdition onSave={ this.handlerSaveSeat } initUser={user.idUser}/>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      identite: state.authReducer.user
  }
}
export default connect(mapStateToProps,{postSeating})(Seating);


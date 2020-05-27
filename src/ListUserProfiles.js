import React, { Component } from 'react';

class ListUserProfiles extends Component {
  render(){
    return (
      <ol>
      {this.props.userprofiles.map((profiles) =>(
      	
      <li key={profiles.id}>
		{profiles.username}'s favorite movie is {profiles.title}.
      </li>
      ))}
      </ol>
      )
  }
}

export default ListUserProfiles;
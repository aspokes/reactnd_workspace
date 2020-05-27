import React, { Component } from 'react';
import ListUserProfiles from './ListUserProfiles';
import './App.css';
import logo from './logo.svg';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

function getUser(userid){
  var usr = '';
  userid = Number(userid);
   Object.keys(users).forEach(function (k) {
     if(userid === users[k].id){
      usr = users[k].name
     }
  }); 
  return usr;
}

function getMovie(movieid){
  let value = '';
  movieid = Number(movieid);
   Object.keys(movies).forEach(function (k) {
     
     if(movieid === movies[k].id){
      value = movies[k].name
     }
  }); 
  return value;
}


let userprofiles = [];

for (const profile of profiles) {
	userprofiles.push({
		id: profile.id,
  		username: getUser(profile.userID),
		title: getMovie(profile.favoriteMovieID)
    })
}
//console.log(userprofiles);

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Favorite Movies</h2>
			<ListUserProfiles userprofiles={userprofiles}/>
      </div>
    );
  }
}

export default App;

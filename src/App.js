import React, { Component } from 'react';
import Profiles from './Components/Profiles';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      profiles: [
        {
          picture: 'https://i.pinimg.com/originals/e7/b6/a6/e7b6a60d64c5a31810c2097e7f2f23d5.jpg',
          name: 'Bart',
          file: null
        }
      ],
      picture: '',
      name: '',
      clicked: 'false'
    };
    this.deleteProfile = this.deleteProfile.bind(this);
  }

  updatePicture(e){
    // this.setState({picture: e.target.value})
    this.setState({picture: URL.createObjectURL(e.target.files[0])}) 
  }
  updateName(e){
    this.setState({name: e.target.value})
  }
  // POST CRUD
  addProfile(e){
    e.preventDefault();
    
    const {profiles, picture, name} = this.state;

    let newProfile = profiles.slice();
    newProfile.push({picture, name});

    this.setState({profiles: newProfile, picture: '', name: ''});
    console.log('after add Fn: ',newProfile);
  }
  // DELETE CRUD
 deleteProfile(i){
   let deleteX = [
     ...this.state.profiles
   ]
   deleteX.splice(i, 1);
   this.setState({profiles: deleteX, picture: '', name: ''});
  //  conditional css-onClick (className='fall')?
   this.setState({
    clicked: !this.state.isClicked
  })
 }
  //  PUT CRUD
  // GET CRUD

  render() {
    return (
      <div className='App'>
        <div className='logo'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/b/b7/The_logo_simpsons_yellow.png' />
        </div>
        <form>
          <span>Picture:</span>
          <input
            className='file_input'
            id='file_input'
            // value={this.state.picture}
            type='file'
            onChange={(e)=> this.updatePicture(e)}
          />
          
          <span>Name:</span>
          <input
            value={this.state.name}
            onChange={(e)=> this.updateName(e)}
          />
          <button onClick={(e)=>this.addProfile(e)}>Add Bart</button>
        </form>

        {this.state.profiles.map((profile, i)=>(
          <Profiles key={i} 
            profile={profile} 
            deleteFn={()=>this.deleteProfile(i)} />
        ))}
      </div>
    );
  }
}

export default App;

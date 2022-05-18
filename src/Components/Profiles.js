import React, { Component} from 'react';

class Profiles extends Component {

  render() {
    return (
      <div className='profile'>
        <img src={this.props.profile.picture} />
        <h1>{this.props.profile.name}</h1>
        <button onClick={this.props.deleteFn}>X</button>
      </div>
    )
  }
}

export default Profiles
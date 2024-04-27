import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img style={{width: '50px', height:'50px' }} src={loading} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
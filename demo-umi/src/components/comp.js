import React, { Component } from 'react'

export default class comp extends Component {
  componentDidMount() {
    console.log('props====', this.props.onchange('1234'))
  }


  render() {
    return (
      <div>
        {this.props.title}
        <button onClick={() => {
          console.log("ckick")
          this.props.onchange && this.props.onchange("1111")
        }}>按钮</button>


      </div>
    )
  }
}

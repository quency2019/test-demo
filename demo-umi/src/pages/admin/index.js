import React, { Component } from 'react'
import Comp from "../../components/comp"
import {connect} from "dva"
class index extends Component {
  state = {
    title: "title",
    indexnum:0

  }


  componentDidMount() {
    this.setState({
      indexnum:this.state.indexnum+1
    },()=>{
      console.log(this.state.indexnum)
      this.setState({
        indexnum:this.state.indexnum+1
      })
      console.log(this.state.indexnum)
    })
   
    
    console.log(this.state.indexnum)
  }

  change1(value){
    console.log(value)

  }
  add(){
    console.log(this.props.num)
    this.props.change&&this.props.change(this.props.num+1)
    // console.log(this.props.change())

  }

  render() {
    console.log(this, "this")
    return (
      <div>
        admin index222
        
        <Comp  title={this.state.title} onchange={this.change1}/>
        <button onClick={this.add.bind(this)}>add</button>
        <div>{this.props.num}</div>
        <div onClick={(e)=>{
          this.setState({
            indexnum:this.state.indexnum+1
          })
          console.log(this.state.indexnum)
          this.setState({
            indexnum:this.state.indexnum+1
          })
          console.log(this.state.indexnum)

        }}>indexnum</div>
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
  console.log(state,"state.storeState")
  return{
    num:state.index.storeState
  }
  

}
let mapDispatchToProps=(dispatch)=>({
 
  change(value){
    console.log(value)
    dispatch(
      {
        type:"index/fetch",
        payload:value
      }
    )
  }

})
export default connect(mapStateToProps,mapDispatchToProps)(index)

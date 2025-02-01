import { useState } from "react"


const Home = () => {
  // console.log(useState(0))
  // const state = useState(0) // [0, function]
  // const state1 = state[0] // initial value of the state
  // const state2 = state[1] // function to update the value
  
  const[count,setCount] = useState(0)
  // const increaseCount = () =>setCount(count + 1)
  // var count = 0
  const increaseCount = () => {
    setCount(count + 1)
    console.log(count)
  }

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default Home

// import { Component } from "react";

// class Home extends Component{
//   constructor(){
//     super()

//     this.state = {
//       count: 0
//     }
//   }

//   increaseCounter(){
//     this.setState({count : this.state.count + 1})
//   }

//   render(){
//     return(
//       <div>
//         <h1>Count : {this.state.count}</h1>
//         <button onClick={()=>this.increaseCounter()}>+</button>
//       </div>
//     )
//   }

// }

// export default Home
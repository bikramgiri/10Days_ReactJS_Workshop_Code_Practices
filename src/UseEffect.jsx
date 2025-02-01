import { useEffect, useState } from "react"


const UseEffect = () => {
      const [count, setCount] = useState(0)
      const [count2, setCount2] = useState(0)

// // Type1 of useEffect on the basis of execution
// useEffect(()=>{
//       console.log("Hello World")
// },[])



// Type2 of useEffect on the basis of execution
// useEffect(()=>{
//       // document.title = `Count: ${count2}` // This will change the title of the page to the count value of count2
//       console.log("useEffect Triggered")
// },[count,count2])



// Type3 of useEffect on the basis of execution

// useEffect(()=>{
//       console.log("useEffect Triggered")
// })


  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() =>setCount(count + 1)}>+</button>
      <h1>Count2: {count2} </h1>
      <button onClick={() =>setCount2(count2 - 1)}>-</button>
    </div>
  )
}

export default UseEffect


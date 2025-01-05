import React from 'react'


const Card = (props) => {
    console.log(props.a)
  return (
    <>
        <h1>the value  is {props.a} </h1>
        <h1>the value  is {props.b} </h1>
        </>

  )
  
}

export default Card;

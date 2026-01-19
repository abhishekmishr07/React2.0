import React from 'react'

const Card = (prop) => {
  return (
    <div className="card">
      <img src={prop.img} alt="this is image of cartoon" />
      <h1>{prop.user}</h1>
      <h2> Age:{prop.age}  </h2>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, sed eaque. Fugiat doloribus minima sint architecto culpa explicabo est velit.</p>
      <button>click me</button>
    </div>
  )
}

export default Card


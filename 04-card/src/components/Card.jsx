import React from 'react'
import { Album } from 'lucide-react';



const Card = (job) => {
  return (
      <div className="card">
    <div > 
<div className="top">
    <img src={job.brandLogo} alt="Placeholder Image"></img>
    <button>save    <Album /></button>
</div>
    <div className="center">
        <h3>{job.companyName}</h3>
        <h2>{job.post}</h2>
        <div className="tag">
            <h4>{job.tag1}</h4>
            <h4>{job.tag2}</h4>
            </div>
    </div>     
    </div>
     <div className="bottom">
        <div>
            <h3>{job.pay}</h3>
            <p>{job.location}</p>
        </div>
        <button>appl y</button>
     </div>
</div>
    
  )
}

export default Card

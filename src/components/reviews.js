import React, { useState } from 'react'
import data from '../data'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, img, job, text } = data[index]

  return (
    <div className="content">
      <div className="info">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div className="user">
          <p>{job}</p>
        </div>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Review

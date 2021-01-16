import React, { useState } from 'react'
import data from '../data'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { FaRandom } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(3)
  const [readMore, setReadMore] = useState(false)
  const { name, img, job, text } = data[index]

  const checkNumber = number => {
    if (number > data.length - 1) {
      return 0
    }

    if (number < 0) {
      return data.length - 1
    }

    return number
  }

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * data.length)

    if (randomNumber === index) {
      randomNumber = index + 1
    }

    setIndex(checkNumber(randomNumber))
  }

  const prevReview = () => {
    setIndex(index => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const nextReview = () => {
    setIndex(index => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  return (
    <div className="content">
      <div className="info">
        <img src={img} alt="" />
        <div className="user">
          <h3>{name}</h3>
          <p>{job}</p>
        </div>
      </div>
      <p>
        {readMore ? text : text.substring(0, 100)}
        <button
          className="read-more"
          onClick={() => {
            setReadMore(!readMore)
          }}
        >
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <div className="btn-container">
        <button className="btn prev" onClick={prevReview}>
          <GrPrevious className="icon" />
        </button>
        <button className="btn random" onClick={randomReview}>
          <FaRandom />
        </button>
        <button className="btn next" onClick={nextReview}>
          <GrNext className="icon" />
        </button>
      </div>
    </div>
  )
}

export default Review

import React from 'react'
import { StarFill } from 'react-bootstrap-icons'

const RatingSystem = ({stars}) => {
  return (
    <>
        {
            [...Array(stars)].map((star, index) => {
                return <StarFill key={index}/>
            })
        }
    </>
  )
}

export default RatingSystem
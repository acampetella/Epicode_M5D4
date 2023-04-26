import React from 'react'
import Badge from 'react-bootstrap/Badge'

const MyBadge = ({text, color}) => {
  return (
    <Badge bg={color}>{text}</Badge>
  )
}

export default MyBadge
import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import '../styles/myCard.css'
import { useState } from 'react'
import CommentArea from '../components/CommentArea'


const SingleCard = ({asin, title, img, price, category}) => {
  const [selected, setSelected] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleSelected = () => {
    setSelected(!selected)
  }
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <Card
      className={`${selected ? 'border border-danger shadow' : null}`}
      key={asin} 
      style={{ width: '18rem' }}
      onClick={toggleSelected}
      >
      <Card.Img className='object-fit-cover w-100 imageHeight' variant="top" src={img} />
      <Card.Body>
        <Card.Title className='text-truncate'>{title}</Card.Title>
        <Card.Text>
          {category}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant="primary" onClick={toggleModal}>
          Commenti
        </Button>
      </Card.Body>
      {isModalOpen && <CommentArea closeFunction={toggleModal} bookId={asin}/>}
    </Card>
  )
}

export default SingleCard
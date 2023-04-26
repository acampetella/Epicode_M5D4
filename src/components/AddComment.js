import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { RingLoader } from 'react-spinners'

const AddComment = ({ bookId, closeFunction, refreshFunction }) => {
  const [commentText, setCommentText] = useState('')
  const [rate, setRate] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const sendComment = async () => {
    const myComment = {
      comment: commentText,
      rate: rate,
      elementId: bookId
    }
    setLoading(true)
    try {
      const data = await fetch('https://striveschool-api.herokuapp.com/api/comments/',
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYTdlMWIxNGE1MTAwMTQ2NjNmZmYiLCJpYXQiOjE2ODIyNjk1ODcsImV4cCI6MTY4MzQ3OTE4N30.XEtp5nynY-RRJGeYZJhBl5eugSzgadDfGk_7RIAx83k'
          },
          method: 'POST',
          body: JSON.stringify(myComment),
        })
      const response = await data.json()
      setLoading(false)
    } catch (error) {
      if (error) setError("Errore nell'invio dei dati")
    }
  }
  const validate = () => {
    return (commentText && rate)
  }
  const saveButtonEvent = async () => {
    if (validate()) {
      await sendComment()
      await refreshFunction()
      closeFunction()
    } else {
      setError('Devi inserire entrambe le informazioni richieste')
    }
  }
  return (
    <div
      className="modal show"
      style={{ display: 'block' }}
    >
      <Modal.Dialog centered>
        <Modal.Header>
          <Modal.Title>Nuovo Commento</Modal.Title>
        </Modal.Header>
        <Modal.Header>
          <Modal.Title>{`Id libro: ${bookId}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>Testo del commento</h4>
            <textarea
              rows="5"
              cols="30"
              onChange={(e) => setCommentText(e.target.value)}
            >
            </textarea>
            <br></br>
            <label className='me-2'>Rate</label>
            <input
              type="number"
              name="rate"
              min="1"
              max="5"
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          {error &&
            <div>
              <h5 className='text-danger'>{error}</h5>
            </div>
          }
          {loading && !error && <RingLoader/>}
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeFunction}>
            Close
          </Button>
          <Button variant="secondary" onClick={saveButtonEvent}>
            Save
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default AddComment
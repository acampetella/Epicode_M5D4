import React from 'react'
import { useState, useEffect } from 'react'
import { RingLoader } from 'react-spinners';
import CommentList from './CommentList';

const CommentArea = ({ closeFunction, bookId }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [comments, setComments] = useState([])
  const getComments = async () => {
    setLoading(true)
    try {
      const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYTdlMWIxNGE1MTAwMTQ2NjNmZmYiLCJpYXQiOjE2ODIyNjk1ODcsImV4cCI6MTY4MzQ3OTE4N30.XEtp5nynY-RRJGeYZJhBl5eugSzgadDfGk_7RIAx83k'
          }
        })
      const response = await data.json()
      setComments(response)
      setLoading(false)
    } catch (error) {
      if (error) {
        setError('Errore nella ricezione dei dati')
      }
    }
  }
  useEffect(() => {
    getComments()
  }, [])
  return (
    <>
      {loading && !error && <RingLoader />}
      {!loading && !error && <CommentList comments={comments} 
        closeFunction={closeFunction} refreshFunction={getComments}/>}
      {error && <h3 className='text-danger'>{error}</h3>}
    </>
  )
}

export default CommentArea
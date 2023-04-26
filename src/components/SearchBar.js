import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useState } from 'react'

const SearchBar = ({totalBooksList, setBooks}) => {
    const [searchKey, setSearchKey] = useState('')
    const filterBooks = () => {
      if (searchKey !== '') {
        setBooks(totalBooksList.filter((book) => 
        book.title.toLowerCase().includes(searchKey.toLowerCase())))
      } else {
        setBooks(totalBooksList)
      }
    }
  return (
    <Container className='mt-3 fs-4'>
        <Row sm={12}>
            <input 
                type="text" 
                placeholder='Search'
                onChange={(e) => {
                  setSearchKey(e.target.value)
                  filterBooks()
                } }
            />
        </Row>
    </Container>
  )
}

export default SearchBar
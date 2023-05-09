import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useState } from 'react'

const SearchBar = ({totalBooksList, setBooks}) => {
    const [searchKey, setSearchKey] = useState('')
    const filterBooks = () => {
        const filter = totalBooksList.filter((book) => 
        book.title.toLowerCase().includes(searchKey.toLowerCase()))
        setBooks(filter)
    }
    useEffect(() => {
      filterBooks()
    }, [searchKey])
  return (
    <Container className='mt-3 fs-4'>
        <Row sm={12}>
            <input 
                type="text" 
                placeholder='Search'
                onChange={(e) => {
                  setSearchKey(e.target.value)
                } }
            />
        </Row>
    </Container>
  )
}

export default SearchBar
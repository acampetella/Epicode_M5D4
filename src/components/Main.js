import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleCard from '../components/SingleCard';
import MyBadge from '../components/MyBadge'
import SearchBar from './SearchBar';
import { useState } from 'react';
import { useEffect } from 'react';
import { RingLoader } from 'react-spinners';

function Main() {
  const [booksList, setBooksList] = useState([])
  const [totalBooksList, setTotalBooksList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const getBooks = async () => {
    setLoading(true)
    try {
      const data = await fetch('https://epibooks.onrender.com/')
      const response = await data.json()
      setBooksList(response)
      setTotalBooksList(response)
      setLoading(false)
    } catch (error) {
      if (error) {
        setError('Errore nella ricezione dei dati')
      }
    }
  }

  useEffect(() => {
    getBooks()
  }, [])
  return (
    <>
      {loading && !error && <RingLoader/>}
      {!loading && !error &&
      <div>
        <SearchBar
          totalBooksList={totalBooksList}
          setBooks={setBooksList}
        />
        <MyBadge text='NEW' color='primary' />
        <MyBadge text='CIAO' color='secondary' />
        <Container className='mt-5 mb-5'>
          <Row className='g-3'>
            {
              booksList.map((book) => {
                return (
                  <Col key={book.asin} sm={12} md={6} lg={3}>
                    <SingleCard
                      asin={book.asin}
                      title={book.title}
                      img={book.img}
                      price={book.price}
                    />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
      }
      {error && <h2 className='text-danger'>{error}</h2>}
    </>
  );
}

export default Main;
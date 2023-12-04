import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>Shop &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

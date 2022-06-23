import SingleBook from "./SingleBookComponent";
import HorrorBooks from '../data/horror.json'
import {Col, Container, Form, Row} from 'react-bootstrap'
import { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';    

class BookList extends Component {

    state = {
        SearchQuery: ""
    }

    render(){
        return(
<Container>
    <Row>
        <Col>
        <Form.Group  controlId="formGroupEmail">
        <Form.Label>search</Form.Label>
        <Form.Control type="text" placeholder="search" 
        value = {this.state.SearchQuery}
        onChange={e=>this.setState({SearchQuery: e.target.value})}
        />
      </Form.Group>
        </Col>
    </Row>
    <Row>
        {
           this.props.Books.filter(b=>b.title.toLowerCase().includes(this.state.SearchQuery.toLowerCase())).map(b =>(
                    <Col key={b.asin} xs={3}>
                        <SingleBook book = {b}/>
                    </Col>
            ))
        }
    </Row>
</Container>
)}}
export default BookList
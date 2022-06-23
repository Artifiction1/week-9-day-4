import { Card } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";


class SingleBook extends Component{
    state = {
            selected: false
        }
    render(){
    return (
        <Card key={this.props.book.ASIN} onClick={()=>this.setState({selected: !this.state.selected})}
        style={{border:this.state.selected ? '3px solid red' : 'none '}}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{color:"black"}}>{this.props.book.title}</Card.Title>
          </Card.Body>
          <CommentArea id = {this.props.book.asin}/>
        </Card>
      );
}}

export default SingleBook
import { Component } from "react";
import { Card, Button} from "react-bootstrap"


class CommentArea extends Component {


    fetchComments = async () => {
        try {
            const url = fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.id, {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE1ZDRlMzMzODEzZjAwMTUwZGRkZjkiLCJpYXQiOjE2NTU5ODc4NTEsImV4cCI6MTY1NzE5NzQ1MX0.QZJPOky070VN9ZPz-U1fDUMmsHPBmxHlF1p-5ASVu20"
                }
                })
    
          const response = await fetch(url)
    
          if (response.ok) {
            // Server answered with a 200 :)
            const data = await response.json()
            this.setState({
                comment:{
                    text: data.comment,
                    rate: data.rate,
                    id: data.elementId
                }
            })
            /*this.setState({
              reservations: data,
              isLoading: false,
            })*/
          } else {
            const message = await response.text()
            this.setState({ ...this.state, isLoading: false, errMessage: message })
          }
        } catch (error) {
          console.log(error)
          this.setState({ ...this.state, isLoading: false, errMessage: "GENERIC ERROR HAPPENED!" })
        }
      }
    render(){
        return (
            <Card>
           <Card.text>
            {this.state.comment.text}
           </Card.text>
           <Button variant="primary">{this.state.comment.rate}</Button>
           </Card>
        )
    }
}
export default CommentArea
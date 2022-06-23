import { Badge } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const MyBadge = (props) =>(
    <Badge variant ={props.color} >{props.text}</Badge>
)
export default MyBadge
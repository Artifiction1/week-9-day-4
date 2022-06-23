import {Alert} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
const WarningSign = (props) => (
    <Alert variant='danger'>{props.text}</Alert>
    )

export default WarningSign
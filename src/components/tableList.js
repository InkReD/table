import React, {Component} from 'react'
import columns from "./fixtures";
class Rattle extends Component {
    render() {
        console.log('---',23)
        return(
                    <tr>
                        <td>{columns.hidden.id}</td>
                        <td>{columns.hidden.oderID}</td>
                        <td>{columns.hidden.quantity}</td>
                        <td>{columns.hidden.Price}</td>
                    </tr>
                )
        }
}
export default Rattle


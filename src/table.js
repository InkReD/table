import React, {Component} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './tableStyle.css'
import columns from './components/fixtures'

class Ter extends Component {
    state = {
        isOpen: false
    }
    handleClick = () => {
        console.log('---', 'clicked')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    componentWillMount() {
        console.log('----', 'mounting')
    }

    componentWillUpdate() {
        console.log('---', 'will update')
    }

    render() {
        const {isOpen, columns} = this.props
        const body = this.state.isOpen &&
            <div className="table-responsive" style={{height: '100px', width: '350px', overflow: 'scroll'}}>
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th>1</th>
                        <th>Order ID</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                    </tr>
                    <tr>
                        <td>{columns.hidden.id}</td>
                        <td>{columns.hidden.orderId}</td>
                        <td>{columns.hidden.quantity}</td>
                        <td>{columns.hidden.Price}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        return (
            <tbody>
            <tr className="r">
                <td>
                    <button onClick={this.handleClick}
                            className="btn btn-default">{this.state.isOpen ? '-' : '+'}</button>
                </td>
                <td>{columns.itemId}</td>
                <td>{columns.productId}</td>
                <td>{columns.listPrice}</td>
                <td>{columns.unitCost}</td>
                <td>{columns.attribute}</td>
                <td>{columns.status}</td>
            </tr>
            <tr>
                <td style={{float: 'left'}}>{body}</td>


            </tr>
            </tbody>
        )
    }
}

export default Ter
import React, {Component} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './tableStyle.css'
import Rattle from './components/tableList'

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
            <div className="table-responsive" style={{height: '100px', width: '100%', overflow: 'scroll'}}>
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th>1</th>
                        <th>Order ID</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                    </tr>
                        <Rattle columns={columns[0].hidden[0]} />
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
                <td colspan="5">{body}</td>
            </tr>
            </tbody>
        )
    }
}

export default Ter
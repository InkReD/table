import React, {Component} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './tableStyle.css'
class Article extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    componentWillMount(){
        console.log('----','mounting')
    }
    componentWillUpdate(){
        console.log('---','will update')
    }
    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen
        return (
            <tbody>
            <tr className="r">
                <td>
                    <button onClick={onButtonClick} className="btn btn-default">{isOpen ? '-':'+'}</button>
                </td>
                <td>{article.itemId}</td>
                <td>{article.productId}</td>
                <td>{article.listPrice}</td>
                <td>{article.unitCost}</td>
                <td>{article.attribute}</td>
                <td>{article.status}</td>
            </tr>
            {body}
            </tbody>
        )
    }
}

export default Article
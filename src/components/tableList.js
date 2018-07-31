import React, {PureComponent} from 'react'
import Article from '../table'
export default class TableList extends PureComponent{
    state = {
        openTableId: null
    }
    render(){
        console.log('---',2);
        const tableElements = this.props.articles.map((article, index)=>
            <div className="table-responsive" style={{ height:'130px', width:'600px',}}>
                <table className="table table-striped">
                    <thead>
                    <tr className='table'>
                        <th> </th>
                        <th>Order ID</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                    </tr>
                    </thead>
                    <tbody key={article.id}>
                        <Article article={article}
                                 isOpen = {this.state.openTableId === article.id}
                                 onButtonClick={this.handleClick.bind(this, article.id)}
                            />
                    </tbody>
               </table>
            </div>
        )
        return ({tableElements})
    }
    handleClick = openTableId => this.state({
        openTableId :this.state.openTableId === openTableId ? null : openTableId
    })
}
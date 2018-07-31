import React, { PureComponent } from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.css'
import Article from './table'
import articles from './components/fixtures'


class App extends PureComponent {
/*    constructor(props) {
        super(props)сук
    }*/

    render() {
        return(
            <div>
                <h1>
                    App
                </h1>
                <div className="table-responsive" style={{ height:'300px', width:'650px', overflow:'scroll'}}>
                    <table className="table table-striped">
                        <thead>
                        <tr className='top'>
                            <th>2</th>
                            <th>ItemID</th>
                            <th>ProductID</th>
                            <th>List Price</th>
                            <th>Unit Cost</th>
                            <th>Attribute</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <Article article={articles[0]} />
                        <Article article={articles[1]} />
                        <Article article={articles[2]} />
                    </table>
                </div>

            </div>
                /*<div class="table-responsive" style={{ height:'130px', width:'600px', overflow:'scroll'}}>
                    <table class="table table-striped">
                        <thead>
                        <tr className='table'>
                            <th> </th>
                            <th>Order ID</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>456</td>
                            <td>456</td>
                            <td>456</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>456</td>
                            <td>456</td>
                            <td>456</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>456</td>
                            <td>456</td>
                            <td>456</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>*/
        )
    }
}
export default App
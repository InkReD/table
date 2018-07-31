import React, {PureComponent} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import TableList from './components/tableList'
import Article from './table'
import articles from './components/fixtures'



class App extends PureComponent {
    render() {
        return (
            <div>
                <h1>
                    App
                </h1>
                <div className="table-responsive" style={{height: '300px', width: '650px', overflow: 'scroll'}}>
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
                        <Article article={articles[0]}/>
                        <TableList article={articles[0].hidden}/>
                        <Article article={articles[1]}/>
                        <Article article={articles[2]}/>
                    </table>
                </div>

            </div>
        )
    }
}

export default App
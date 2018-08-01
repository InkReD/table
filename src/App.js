import React, {PureComponent} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Ter from './table'
import columns from './components/fixtures'


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
                        <Ter columns={columns[0]}/>
                        <Ter columns={columns[2]}/>
                    </table>

                </div>

            </div>
        )
    }
}

export default App
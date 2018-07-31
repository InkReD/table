import React, {Component} from 'react'
import  '../node_modules/bootstrap/dist/css/bootstrap.css'
import './tableStyle.css'
        function Article(props){
            const {article} = props
            return (
                        <tbody>
                            <tr className="r">
                                    <td>+</td>
                                    <td>{article.itemId}</td>
                                    <td>{article.productId}</td>
                                    <td>{article.listPrice}</td>
                                    <td>{article.unitCost}</td>
                                    <td>{article.attribute}</td>
                                    <td>{article.status}</td>
                            </tr>
                        </tbody>
            )
        }

export default Article
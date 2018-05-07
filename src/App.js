import React from 'react'
import {Button} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
 export default class App extends React.Component{
    render(){
        const a='hx'
        return(
            <div>
                <h1>{a}</h1>
                <Button type="primary">111</Button>
            </div>
        )
    }
}

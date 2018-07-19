import React, {Component} from 'react'
import {
    TouchableHighlight,
    Text
} from 'react-native'


let timer =  null
let COUNT_NUMBER = 60

export default class CountDownButton extends Component {
    constructor(props){
        super(props)
        COUNT_NUMBER = this.props.count ? this.props.count : COUNT_NUMBER
        this.state = {
            count: COUNT_NUMBER ,
            maxCount: COUNT_NUMBER,
            timeStr: `获取验证码`,
            clickEnable: true
        }
        this.btnClick = this.btnClick.bind(this)
    }

    render() {
        return (
            <TouchableHighlight 
                style={this.props.style}
                disabled={!this.state.clickEnable}
                onPress={() => {
                        this.props.onClick(this.btnClick)
                    }}>
                <Text>{this.state.timeStr}</Text>
            </TouchableHighlight>
        )
    }

    btnClick(status) {  
        if (!status) return

        this.setState({
            clickEnable: false
        }) 

        timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1,
                timeStr: `重新获取${this.state.count}s`
            })
            if (this.state.count === -1){
                clearInterval(timer)
                this.setState({
                    count: this.state.maxCount,
                    timeStr: `获取验证码`,
                    clickEnable: true
                })
            }
        }, 1000)
    }

    reset() {
        clearInterval(timer)
        this.setState({
            count: COUNT_NUMBER ,
            maxCount: COUNT_NUMBER,
            timeStr: `获取验证码`,
            clickEnable: true
        })
    }

    componentWillUnmount(){
        this.reset()
    }
}




{/* <TimeButton
style={{
    width: 110,
    height: 40,
    // borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: '#d00',
    overflow: 'hidden',
    position: 'absolute',
    top: 300,
    justifyContent: 'center',
    alignItems: 'center'
}}
count={60}
onClick={(btnClick) => {
    // To Do Request
    btnClick('status')
}}
></TimeButton> */}
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import {deviceWidth , deviceHeight} from '../../config/dismension'

export default class HomeScreen extends Component{

    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            // headerTitle: 'text',
            header: null,
        })
      }

    constructor(props){
        super(props)
        this.state = {
            headerStyle:{
                backgroundColor: 'rgba(255,0,0,1)'
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header, this.state.headerStyle]}>
                    <Text>我就是标题</Text>
                </View>
                <ScrollView 
                onScroll={this.onScroll}
                scrollEventThrottle={1}
                style={styles.scrollView}>
                    <Text style={styles.text} onPress={()=>{
                        this.props.navigation.navigate('Mine')
                    }}>card</Text>

                    <Text style={styles.text} onPress={()=>{
                        this.props.navigation.navigate('Hot')
                    }}>modal</Text>

                    <View style={[styles.itemView, {backgroundColor: '#f00'}]}></View>
                    <View style={[styles.itemView, {backgroundColor: '#ff0'}]}></View>
                    <View style={[styles.itemView, {backgroundColor: '#f0f'}]}></View>
                    <View style={[styles.itemView, {backgroundColor: '#0f0'}]}></View>
                    <View style={[styles.itemView, {backgroundColor: '#00f'}]}></View>
                </ScrollView>
            </View>
        )
    }

    onScroll = (event) => {
        let Y = 64 - event.nativeEvent.contentOffset.y;
        let opacity = Y / 64.0
        console.log(opacity)
        this.setState({
            headerStyle: {
                backgroundColor: `rgba(255, 0, 0, ${opacity})`
            }
        })
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    scrollView:{
        width: deviceWidth,
    },
    itemView: {
        height: 200,
        width: deviceWidth
    },
    text:{
        alignSelf:'center'
    },
    header: {
        width:deviceWidth,
        height: 64,
        alignItems:'center',
        justifyContent: 'center'
    }
})
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native'
import {deviceWidth , deviceHeight, naigatorBarHeight} from '../../config/dismension'
import MyImage from '../common/MyImage'

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
                backgroundColor: 'rgba(255,0,0,0)'
            },
            imgStr: 'http://uat.ripple-corp.com/chanel/bleusampling/static/img/man.f785c89.jpg'
        }
    }

    renderDoctorIcon(userInfo) {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header, this.state.headerStyle]}>
                    <Text>我就是标题</Text>
                </View>
                <Text style={styles.text} onPress={()=>{
                        this.props.navigation.navigate('Mine')
                    }}>card</Text>
                    <Text style={styles.text} onPress={()=>{
                        this.props.navigation.navigate('Hot')
                    }}>modal</Text>
                <ScrollView 
                onScroll={this.onScroll}
                scrollEventThrottle={1}
                horizontal = {true}
                pagingEnabled={true}
                style={styles.scrollView}>
                    <MyImage
                        style={{width:deviceWidth, height: 200}} 
                        placeSource={require('../../resources/images/pic1.jpg')}
                        source={{uri: "https://blueserumsampling.chanel.com.cn/blue-sample-register/static/img/3@2x.64c7ae5.png"}}
                    />
                    <MyImage
                        style={{width:deviceWidth, height: 200}} 
                        placeSource={require('../../resources/images/pic1.jpg')}
                        source={{uri: "https://blueserumsampling.chanel.com.cn/blue-sample-register/static/img/3@2x.64c7ae5.png"}}
                    />
                    <MyImage
                        style={{width:deviceWidth, height: 200}} 
                        placeSource={require('../../resources/images/pic1.jpg')}
                        source={{uri: "https://blueserumsampling.chanel.com.cn/blue-sample-register/static/img/3@2x.64c7ae5.png"}}
                    />
                    <MyImage
                        style={{width:deviceWidth, height: 200}} 
                        placeSource={require('../../resources/images/pic1.jpg')}
                        source={{uri: "https://blueserumsampling.chanel.com.cn/blue-sample-register/static/img/3@2x.64c7ae5.png"}}
                    />
                    {/* <Image 
                        style={{width:deviceWidth, height: 200}} 
                        defaultSource={require('../../resources/images/pic1.jpg')}
                        source={{uri: "https://blueserumsampling.chanel.com.cn/blue-sample-register/static/img/3@2x.64c7ae5.png"}}
                    ></Image> */}
                </ScrollView>
            </View>
        )
    }

    onScroll = (event) => {
        let Y = naigatorBarHeight - event.nativeEvent.contentOffset.y;
        let opacity = Y / naigatorBarHeight >= 1 ? 1 : Y / naigatorBarHeight <= 0 ? 0 : Y / naigatorBarHeight
        this.setState({
            headerStyle: {
                backgroundColor: `rgba(255, 0, 0, ${1 - opacity})`
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
        height: naigatorBarHeight,
        alignItems:'center',
        justifyContent: 'center'
    }
})
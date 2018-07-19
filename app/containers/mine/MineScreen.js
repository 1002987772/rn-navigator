import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native'
import {deviceWidth} from '../../config/dismension'

export default class MineScreen extends Component{
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            headerTitle: 'text',
            tintColor: '#f00',
            // header: null
        })
      }

    constructor(props){
        super(props)
        let iconScroll
        let bannerScroll
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                    horizontal = {true}
                    onScroll={this.onScroll}
                    scrollEventThrottle={1}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onScroll={this.onScroll}
                    ref={(scroll) => {
                        bannerScroll = scroll
                    }}
                    onMomentumScrollEnd={this.onScrollEnd}
                    style={styles.scrollView}>
                    <View style={[styles.itemView, {backgroundColor: '#f00'}]}></View>
                    <View style={[styles.itemView, {backgroundColor: '#ff0'}]}></View>
                    <View style={[styles.itemView, {backgroundColor: '#f0f'}]}></View>
                    <View style={[styles.itemView, {backgroundColor: '#0f0'}]}></View>
                    <View style={[styles.itemView, {backgroundColor: '#00f'}]}></View>
                </ScrollView>

                <ScrollView 
                    horizontal = {true}
                    onScroll={this.onScroll}
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onScroll={this.onScroll}
                    // scrollEnabled={false}
                    ref={(scroll)=>{
                        iconScroll = scroll
                    }}
                    style={[styles.scrollView]}>
                    <TouchableWithoutFeedback onPress={()=>{this.onClick(1)}} key={0}>
                        <View  style={[styles.icon, {backgroundColor: '#f00', marginLeft:deviceWidth/2.0 - 40}]}></View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{this.onClick(2)}} key={1}>
                        <View  style={[styles.icon, {backgroundColor: '#ff0'}]}></View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{this.onClick(3)}} key={2}>
                        <View  style={[styles.icon, {backgroundColor: '#f0f'}]}></View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{this.onClick(4)}} key={3}>
                        <View  style={[styles.icon, {backgroundColor: '#0f0'}]}></View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{this.onClick(5)}} key={4}>
                        <View  style={[styles.icon, {backgroundColor: '#00f', marginRight:deviceWidth/2.0 - 40}]}></View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        )
    }

    onScroll = (event) => {
        let X = event.nativeEvent.contentOffset.x;
        let index = X / deviceWidth
        // console.log(index)
    }

    onScrollEnd = (event) => {
        let X = event.nativeEvent.contentOffset.x;
        let index = X / deviceWidth
        let distance = 80 * index
        if (index > 0) distance += 30 * index
        iconScroll.scrollTo({x:distance, y:0, animated:true})
    }

    onClick = (index) => {
        let distance = 80 * (index - 1)
        distance += 30 * (index - 1)
        iconScroll.scrollTo({x:distance, y:0, animated:true})
        bannerScroll.scrollTo({x:(index - 1) * deviceWidth, y: 0, animated: true})
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
        height: 200
    },
    itemView: {
        height: 200,
        width: deviceWidth
    },
    text:{
        alignSelf:'center'
    },
    icon:{
        width: 80,
        height: 80,
        margin: 15,
        borderRadius: 50
    }
})
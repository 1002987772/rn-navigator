import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {deviceWidth , deviceHeight, naigatorBarHeight} from '../../config/dismension'
import RootStyles from '../root/RootStyles'

export default class ListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            ...props,
            listItemHeight: 70
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={[styles.title, {height: this.state.listItemHeight, lineHeight: this.state.listItemHeight}]}>体重指数</Text>
                <Text 
                    onLayout={this.attentionTextLayout.bind(this)} 
                    style={styles.detail}>
                    {this.props.text}
                </Text>
            </View>
        )
    }

    attentionTextLayout(event){
        const layout = event.nativeEvent.layout;
        let height = layout.height > this.state.listItemHeight ? layout.height : this.state.listItemHeight
        this.setState({
            listItemHeight: height
        })
        this.props.getListItemContentHeight(height)
    }
}


const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1, 
        borderColor: '#ddd',
        // justifyContent: 'center'
    },
    title:{
        left: 10, 
        fontSize: 16, 
    },
    detail:{
        fontSize: 16, 
        color: '#d00', 
        alignSelf:'flex-end', 
        padding: 10, 
        position:'absolute',
        width: deviceWidth - 130,
        textAlign: 'justify',
        lineHeight: 25
    }
})
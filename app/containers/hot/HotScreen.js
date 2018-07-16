import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class HotScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>this is hot page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#f00'
    }
})
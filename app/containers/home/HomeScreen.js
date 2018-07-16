import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class HomeScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={()=>{
                    this.props.navigation.navigate('Mine')
                }}>card</Text>

                <Text onPress={()=>{
                    this.props.navigation.navigate('Hot')
                }}>modal</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
})
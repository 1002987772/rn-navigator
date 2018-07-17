import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

export default class HotScreen extends Component{

    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            headerLeft:(
                <Text style={{marginLeft:15, width:30, textAlign:"center"}}
                    onPress={() => {
                        navigation.pop()
                    }}
                >
                    返回　
                </Text>
            )
        })
      }

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={
                    () => {
                        this.props.navigation.navigate('Set')
                    }
                }>this is hot page</Text>
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
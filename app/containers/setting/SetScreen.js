import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

export default class SetScreen extends Component{

    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            // headerLeft:(
            //     <Text style={{marginLeft:15, width:30, textAlign:"center"}} >
            //         返回　
            //     </Text>
            // )
        })
      }

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
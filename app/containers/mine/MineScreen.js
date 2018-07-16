import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class MineScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text
                    onPress={
                        ()=>{
                            this.props.navigation.navigate('Mine')
                        }
                    }
                >this is mine page</Text>
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
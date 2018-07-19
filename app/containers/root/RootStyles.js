import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import {deviceWidth , deviceHeight, naigatorBarHeight} from '../../config/dismension'


const styles = StyleSheet.create({
    header:{
        height: naigatorBarHeight
    },
    headerTitle:{
        alignSelf: 'center',
        top: (naigatorBarHeight - 28),
        fontSize: 18
    }
})

export default styles
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    ListView,
    TouchableWithoutFeedback
} from 'react-native'

export default class RuleScreen extends Component {
    constructor(props){
        super(props)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'row 1', 
                'row 2', 
                'row 3', 
                'row 4', 
                'row 5', 
                'row 6', 
                'row 7', 
                'row 8', 
                'row 9', 
                'row 10', 
                'row 11', 
                'row 12', 
            ]),
            selectItem: ''
        };
    }


    renderRuleScaleItem(item){
        return (
            <TouchableWithoutFeedback onPress={() => {
                this.ruleItemClick(item)
            }}>
                <View style={[styles.container]}>
                    <View style={[styles.item]}>
                        <Text>{item}</Text>
                    </View>
                    <View style={[styles.item, {height: 30, left: 50, top: 20}]}></View>
                    {/* <View style={styles.select}></View> */}
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            <ListView
                dataSource = {this.state.dataSource}
                horizontal = {true}
                renderRow={this.renderRuleScaleItem.bind(this)}
                style={styles.listView}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                onScroll={this.ruleViewScroll.bind(this)}
            ></ListView>
        )
    }

    ruleItemClick(item){
        this.setState({
            selectItem: item
        })
        console.log(item)
    }

    ruleViewScroll(){
        console.log('thie')
    }
}

const styles = StyleSheet.create({
    item:{
        width: 50,
        height: 50,
        borderLeftWidth: 1,
        position: 'absolute',
        borderBottomWidth: 1,
        backgroundColor: 'transparent'
    },
    container:{
        width: 100,
    },
    listView:{
        marginTop: 100
    },
    select:{
        backgroundColor: `rgba(255, 0, 0, 0.5)`,
        width: 100,
        borderColor: '#f00',
        borderRightWidth: 1,
        zIndex: 10,
        position: 'absolute',
    }
})
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Animated,
    Image,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native'
import {deviceWidth , deviceHeight, naigatorBarHeight} from '../../config/dismension'
import RootStyles from '../root/RootStyles'
import LinearGradient from 'react-native-linear-gradient'
import AnalysisItem from '../common/AnalysisItem'

const Line_Height = 30

export default class AnalysisScreen extends Component{

    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            headerTitle: 'AnalysisScreen',
            header: null
        })
      }

    constructor(props) {
        super(props);
        this.state={
            ...props,
            showAnim:new Animated.Value(0),
            showAttentionAnim: new Animated.Value(0),
            doctorTextHeight: 0,
            attentionTextHeight: 110
            };
        this.showorhide = 0;
        this.showAttention = 0;
    }
    
    /**
     *  设置导航栏
     */
    readerHeader(){
        return (
            <View style={[RootStyles.header, {backgroundColor:'#f00'}]}>
                <Text style={RootStyles.headerTitle}>数据分析</Text>
            </View>
        )
    }

    render(){
        return(
          <View style={{backgroundColor:'#fff', flex: 1}}>
            {this.readerHeader()}
        
            <ScrollView style={{height: deviceHeight - naigatorBarHeight}}>
                <AnalysisItem></AnalysisItem>
                <AnalysisItem></AnalysisItem>
                <AnalysisItem></AnalysisItem>
            </ScrollView>
          </View>
        )
    }
}

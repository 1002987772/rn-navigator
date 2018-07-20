import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Image,
    TouchableWithoutFeedback
} from 'react-native'
import {deviceWidth , deviceHeight, naigatorBarHeight} from '../../config/dismension'
import RootStyles from '../root/RootStyles'
import LinearGradient from 'react-native-linear-gradient'
import ListItem from './ListItem'

export default class AnalysisItem extends Component{
    constructor(props) {
        super(props);
        this.state={
            ...props,
            suggestionAnim: new Animated.Value(0),
            suggestionShow: false,
            attentionAnim: new Animated.Value(0),
            attentionShow: false,
            doctorTextHeight: 0,
            attentionTextHeight: 0
        };
    }

        /**
     *  获取主要模块
     */
    renderAnalysisItemHeader() {
        return(
              <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}}
                colors={['#009edd', '#73d3cf']} 
                style={styles.linearGradient}>
                  <Image resizeMode={'contain'} style={styles.analysisIcon} source={require('../../resources/images/doctor_icon1.png')}></Image>
                  <View style={styles.analysisType}>
                      <Text style={{fontSize: 18, color: '#fff'}}>体检</Text>
                  </View>
                  <View style={styles.analysisDate}>
                      <Text style={{fontSize: 14, color: '#fff'}}>2018-06-14  13:05</Text>
                  </View>
                  <TouchableWithoutFeedback onPress={() => {
                      this.analysisDetailClick()
                  }}>
                      <View style={styles.analysisMore}>
                          <Text style={{fontSize: 14, color: '#fff'}}>查看详情</Text>
                      </View>
                  </TouchableWithoutFeedback>
               </LinearGradient>
        )
    }

    renderAnalysisItemDoctorSuggestions() {
        return(
            <View style={styles.bottom}>
                <View style={{height: 80, flexDirection:'row',}}>
                    <Image  style={styles.doctorIcon} source={require('../../resources/images/pic3.jpg')}></Image>
                    <Text style={{lineHeight: 80, fontSize: 18, paddingLeft: 15}}>医生建议</Text>
                </View>
                <Animated.View
                    style={{
                      height:this.state.suggestionAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, this.state.doctorTextHeight]
                      }),
                      overflow:'hidden',
                      backgroundColor: '#eee'
                    }}
                >
                    <Text
                          numberOfLines={0}
                          ellipsizeMode={'clip'}
                          onLayout={this.doctorSugesstionsTextOnLayout.bind(this)}
                          style={styles.detailText}>
                        医生的建议：多吃饭多吃饭多吃饭多吃饭多吃饭多吃饭多吃饭多吃饭多
                        吃饭多吃饭多吃饭多睡觉多睡觉多睡觉多睡觉多睡觉多睡觉多睡觉多睡觉
                        多睡觉多睡觉多睡觉多喝水多喝水多喝水多喝水多喝水多喝水多喝水22
                        多睡觉多睡觉多睡觉多喝水多喝水多喝水多喝水多喝水多喝水多喝水33
                        多睡觉多睡觉多睡觉多喝水多喝水多喝水多喝水多喝水多喝水多喝水83
                    </Text>
                </Animated.View>
            </View>
        )
    }

    renderAttentionItem() {
        return (
                <View>
                    <ListItem 
                    text=" 多睡觉多睡觉多睡觉多喝水多喝水多喝水多喝水多喝水多喝水多喝水83多睡觉多睡觉多睡觉多喝水多喝水多喝水多多睡觉多睡觉多睡觉多喝水多喝水多喝水多喝水多喝水多喝水多喝水83多睡觉多睡觉多睡觉多喝水多喝水多喝水多喝水多喝水多喝水多喝水83喝水多喝水多喝水多喝水83多睡觉多睡觉多睡觉多喝水多喝水多喝水多喝水多喝水多喝水多喝水83多睡觉多睡觉多睡觉多喝水多喝水多喝水多喝水多喝水多喝水多喝水83"
                    getListItemContentHeight={this.getListItemContentHeight.bind(this)}
                ></ListItem>
                <ListItem 
                    text="多睡觉多喝水多喝水多喝水多喝水多喝水多喝水多喝水83"
                    getListItemContentHeight={this.getListItemContentHeight.bind(this)}
                ></ListItem>
            </View>
        )
    }

    renderAnalysisItemAttentions() {
      return(
        <View>
            <TouchableWithoutFeedback onPress={this.attentClick.bind(this)}>
                <View style={{height: 80, flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize: 18, paddingLeft: 15}}>需要重点关注<Text style={{color:'#f00'}}>5</Text>个项目</Text>
                </View>
            </TouchableWithoutFeedback>
            <Animated.View
                    style={{
                      height:this.state.attentionAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, this.state.attentionTextHeight]
                      }),
                      overflow:'hidden',
                      backgroundColor: '#eee'
                    }}
                >
                {this.renderAttentionItem()}
            </Animated.View>
        </View>)
    }

    doctorSugesstionsTextOnLayout(event){
        const layout = event.nativeEvent.layout;
        this.setState({
          doctorTextHeight: layout.height
        })
      }
  
    attentionTextLayout(event){
        const layout = event.nativeEvent.layout;
        this.setState({
            attentionTextHeight: layout.height
        })
    }

    analysisDetailClick(){
        Animated.timing(          // Uses easing functions
            this.state.suggestionAnim,    // The value to drive
        {
            duration:300,
            toValue: this.suggestionShow ? 1 : 0
        }            // Configuration
        ).start();
        this.suggestionShow = this.suggestionShow ? false : true

    }

    attentClick() {
        Animated.timing(          // Uses easing functions
            this.state.attentionAnim,    // The value to drive
            {
                duration:300,
                toValue: this.showAttention ? 1 : 0
            }            // Configuration
        ).start();
        this.showAttention = this.showAttention ? false : true
    }


    getListItemContentHeight(height){
        let attentionTextHeight = this.state.attentionTextHeight
        this.setState({
            attentionTextHeight: attentionTextHeight + height
        }, () =>{
            console.log('getheight: ' + attentionTextHeight)

        })
    }

    render() {
        return (
            <View style={styles.analysisItem}>
              {this.renderAnalysisItemHeader()}
              {this.renderAnalysisItemDoctorSuggestions()}
              {this.renderAnalysisItemAttentions()}
          </View>
        )
    }

}

const styles=StyleSheet.create({
    headerLine:{
      height:50,
      flexDirection:'row',
      // borderBottomWidth:1,
      // borderBottomColor:'red',
    },
    headerRows:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    showitemContain:{
      // borderWidth:1,
      // borderColor:'red',
      height:110,
      justifyContent:'center',
      alignItems:'center',
    },

    analysisItem:{
      width: deviceWidth - 30,
      // height: 100,
      // backgroundColor:'#0f0',
      alignSelf:'center',
      borderRadius: 10,
      marginTop: 30,
      //以下是阴影属性：
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowColor: '#666',
      backgroundColor: '#fff',
      marginBottom: 30
    //   overflow: 'hidden'
    },

    analysisHeader:{
      height: 44,
      // backgroundColor: 'rgb(96, 166, 251)'
    },
   
    linearGradient: {
        height: 56,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },

    analysisIcon: {
      left: 5,
      top: 3,
      width: 40,
    },

    analysisType:{
      position:'absolute',
      height:56,
      alignItems: 'center',
      justifyContent: 'center',
      left: 50
    },
    analysisDate:{
      position:'absolute',
      height:56,
      alignItems: 'center',
      justifyContent: 'center',
      left: 100
    },
    analysisMore: {
      position:'absolute',
      height:56,
      alignItems: 'center',
      justifyContent: 'center',
      right: 20
    },
    bottomContainer:{
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden'
    },
    detailText:{
      fontSize: 16,
      fontWeight:'bold',
      lineHeight: 25,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'justify',
      position: 'absolute'
    },
    doctorIcon: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginTop: 10,
      marginLeft: 15
    },
    bottom:{
        borderColor: '#eee',
        borderBottomWidth: 2
    }
  });

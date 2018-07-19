import React, {Component} from 'react'
import {
    Image,
    View
} from 'react-native'

/**
 * source        网络图片的地址
 * placeSource      占位图的地址
 * active           网络图片是否加载成功
 */
export default class MyImage extends Component{
    constructor(props){
        super(props)
        this.state = {
            source: props.source,
            placeSource: props.placeSource,
            active: true
        }
    }

    render() {
        return (
            this.state.active ? 
                 <Image style={[this.props.style, {backgroundColor: '#eee'}]}></Image>
                 : <Image style={this.props.style} source={{uri:this.state.source.uri}}></Image>
        )
    }

    componentDidMount() {
        let self = this
        Image.prefetch(this.props.source.uri).then((result) => {
        //当预下载成功时，返回值result是true
            setTimeout(() => {
                self.setState({
                    active: false
                })
            }, 1);
        }).catch((error) => {
        //预下载图片失败
            console.log(error);
        });
    }


}

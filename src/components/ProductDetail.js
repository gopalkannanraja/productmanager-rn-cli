import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
class ProductDetail extends Component {
    
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                {this.props.navigation.state.params.title}
            </View>
        );
    }
}

export default ProductDetail;
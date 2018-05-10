import React, { Component } from 'react';
import {createStackNavigator} from "react-navigation";
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

export default AppNavigator = createStackNavigator({
    List: {
        screen: Products
    },
    Detail: {
        screen: ProductDetail
    },
    AddProduct: {
        screen: AddProduct
    }
}, {
    initialRouteName: 'List',
    navigationOptions: {
        title: 'Product Manager'
    }
});
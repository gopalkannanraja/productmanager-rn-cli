import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';

const ListStack = createStackNavigator({
    List: {
        screen: Products
    },
    Detail: {
        screen: ProductDetail
    }
}, {
    initialRouteName: 'List',
    navigationOptions: {
        title: 'Product Manager'
    }
});

const AddStack = createStackNavigator({
    Add: {
        screen: AddProduct
    },
});

export default AppNavigator = createBottomTabNavigator({
    ListStack: ListStack,
    AddStack: AddStack
});
import React, { Component } from 'react';
import {View,Text,TextInput,Picker,Button,Alert} from "react-native";


class AddProduct extends Component {
    static navigationOptions={
        title:'Add Product'
    }
    constructor(props){
        super(props);
        this.state={
            title:'',
            price:'',
            categories:['Mobiles','Laptops','Others']
        }
    }
    _handleSubmit = () => {
        let {title,price}=this.state;
        fetch("http://10.0.2.2:4000/products", {
                body: JSON.stringify({title,price}),
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(r => r.json())
            .then(p => Alert.alert(`Success`, `Prodcuct Saved successfully wiht id : ${p.id}`))
    }
    render() {
        return (
            <View>
            <TextInput
                placeholder='Product Title'
                value={this.state.title} 
                onChangeText={(title)=>this.setState({title})}
            />
            <TextInput
                placeholder='Product Price'
                value={this.state.price} 
                onChangeText={(price)=>this.setState({price})}
            />
            <Picker>
                {this.state.categories.map(c =><Picker.Item label={c} value={c} key={c}/>)}
            </Picker>
            <Button title='ADD' onPress={this._handleSubmit}></Button>
            </View>
        );
    }
}

export default AddProduct;
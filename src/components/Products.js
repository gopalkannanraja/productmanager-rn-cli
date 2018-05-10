import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentWillMount() {
        this._getData();
    }

    _getData = (limit = 20) => {
        fetch(`http://10.0.2.2:4000/products?_page=${this.state.page}&_limit=${limit}`).then(r => r.json()).then(products=>{
            // this.setState({products: this.state.products.concat(products)});
            this.setState({products: [...this.state.products, ...products]});
        });
    }

    _getMore = () => {
        this.setState({page: ++this.state.page}, function() {
            this._getData();
        });
    }

    // _renderItem = () => {

    // }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.products}
                    renderItem={({item})=> <Text style={{margin:10}}>{item.id} - {item.title}</Text>}
                    keyExtractor={(item,index)=>`${item.id}`}
                    onEndReachedThreshold={0.5}
                    onEndReached={this._getMore}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

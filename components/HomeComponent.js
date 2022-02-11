import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { BAKERIES } from '../shared/bakeries';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/sprinkles.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bakeries: BAKERIES,
        };
    }
    static navigationOptions = {
        title: 'Home'
    }
    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.bakeries.filter(bakery => bakery.featured)[0]}
                />
            </ScrollView>
        );
    }
}
export default Home;
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { BAKERIES } from '../shared/bakeries';

function RenderBakery({bakery}) {

    if (bakery) {
        return (
            <Card
                featuredTitle={bakery.name}
                image={require('./images/sprinkles.jpg')}
            >
                <Text style={{margin: 10}}>
                    {bakery.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class BakeryInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bakeries: BAKERIES
        };
    }

    static navigationOptions = {
        title: 'Bakery Information'
    }

    render() {
        const bakeryId = this.props.navigation.getParam('bakeryId');
        const bakery = this.state.bakeries.filter(bakery => bakery.id === bakeryId)[0];
        return <RenderBakery bakery={bakery} />;
    }
}

export default BakeryInfo;
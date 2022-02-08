import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderBakery({bakery}) {
    if (bakery) {
        return (
            <Card 
                featuredTitle={bakery.name}
                image={require('./images/chocolateChipCookie.jpeg')}
            >
                <Text style={{margin: 10}}>
                    {bakery.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function BakeryInfo(props) {
    return <RenderBakery bakery={props.bakery} />;
}

export default BakeryInfo;
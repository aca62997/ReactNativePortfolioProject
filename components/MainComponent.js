import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import BakeryInfo from './BakeryInfoComponent';
import { View } from 'react-native';
import { BAKERIES } from '../shared/bakeries';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bakeries: BAKERIES,
            selectedBakery: null
        };
    }

    onBakerySelect(bakeryId) {
        this.setState({selectedBakery: bakeryId});
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Directory
                    bakeries={this.state.bakeries}
                    onPress={bakeryId => this.onBakerySelect(bakeryId)}
                />
                <BakeryInfo
                    bakery={this.state.bakeries.filter(
                        bakery => bakery.id === this.state.selectedBakery)[0]}
                />
            </View>
        );
    }
}

export default Main;
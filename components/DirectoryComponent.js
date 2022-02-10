import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        bakeries: state.bakeries
    };
};

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bakeries: BAKERIES
        };
    }

    static navigationOptions = {
        title: 'Menu'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('BakeryInfo', { bakeryId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.bakeries.bakeries}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Directory);
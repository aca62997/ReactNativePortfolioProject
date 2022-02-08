import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { BAKERIES } from '../shared/bakeries';

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
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('BakeryInfo', { bakeryId: item.id })}
                    leftAvatar={{ source: require('./images/sprinkles.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.bakeries}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;
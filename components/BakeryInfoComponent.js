import React, { Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import { Card, Icon } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    bakeries: state.bakeries,
    comments: state.comments,
  };
};

function RenderBakery(props) {
  const { bakery } = props;
  if (bakery) {
    return (
      <Card
        featuredTitle={bakery.name}
        image={{ uri: baseUrl + bakery.image }}
      >
        <Text style={{ margin: 10 }}>{campsite.description}</Text>
        <Icon
          name={props.favorite ? "check" : "cart-plus"}
          type="font-awesome"
          color="red"
          raised
          reverse
          onPress={() =>
            props.favorite
              ? console.log("Already set as a favorite")
              : props.markFavorite()
          }
        />
      </Card>
    );
  }
  return <View />;
}
function RenderComments({ comments }) {
  const renderCommentItem = ({ item }) => {
    return (
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.text}</Text>
        <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
        <Text
          style={{ fontSize: 12 }}
        >{`-- ${item.author}, ${item.date}`}</Text>
      </View>
    );
  };
  return (
    <Card title="Reviews">
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Card>
  );
}
class BakeryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }
  markFavorite() {
    this.setState({ favorite: true });
  }
  static navigationOptions = {
    title: "Bakery Information",
  };

  render() {
    const bakeryId = this.props.navigation.getParam("bakeryId");
    const bakery = this.props.bakeries.bakeries.filter(
      (bakery) => bakery.id === bakeryId
    )[0];
    const comments = this.props.comments.comments.filter(
      (comment) => comment.bakeryId === bakeryId
    );
    return (
      <ScrollView>
        <RenderBakery
          bakery={bakery}
          favorite={this.state.favorite}
          markFavorite={() => this.markFavorite()}
        />
        <RenderComments comments={comments} />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(BakeryInfo);
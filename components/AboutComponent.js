import React, { Component } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { BAKERIES } from "../shared/bakeries";

function Mission() {
  return (
      <Card
            title={"Our Story"}
            image={require('./images/chocolateChipCookie.jpeg')}
            style={{ padding: 10 }}>
        <Text style={{ margin: 10 }}>
            Amanda started baking when she was a child with her mom. She loved baking so much that she made it her passion and loves baking every day!
        </Text>
    </Card>
  );
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bakeries: BAKERIES,
    };
  }

  static navigationOptions = {
    title: "About Us",
  };

  render() {
        return (
            <ScrollView>
                <Mission />
            </ScrollView>
      );
  }
}

export default About;
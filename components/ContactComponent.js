import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { BAKERIES } from "../shared/bakeries";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bakeries: BAKERIES,
    };
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card title={"Contact Information"} wrapperStyle={{ margin: 20 }}>
          <Text>123 Cookie Ln</Text>
          <Text>Baltimore, MD 21244</Text>
          <Text style={{ marginBottom: 10 }}></Text>
          <Text>Phone: 1-860-123-4567</Text>
          <Text>Email: amanda@amandaspastryshop.com</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
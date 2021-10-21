import React from 'react';
import { Image, ScrollView, Text, View } from "react-native";

class  MoreDetails extends React.Component {
  state = {
    Details: this.props.route.params.detail
  }
  componentDidMount() {
    this.props.navigation.setOptions({title: `${this.props.route.params.name}`, headerShown: true})
  }

  render() {
    return (
      <>
        <ScrollView>
          <View
            style={{alignItems: `center`}}
          >
            <Image source={{uri: `https://image.tmdb.org/t/p/w500${this.state.Details.poster_path}`}} style={{width: `60%`, height: 400, backgroundColor: `red`,}}/>
            <Text>{this.state.Details.first_air_date}</Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              padding: 5,
            }}
          >{this.state.Details.overview}</Text>
        </ScrollView>
      </>
    );
  }
}
export default MoreDetails;

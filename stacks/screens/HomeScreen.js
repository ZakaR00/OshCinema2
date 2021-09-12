import React from "react";
import {
  FlatList, Text, ScrollView
} from "react-native";
import axios from "axios";
import { Card, Title, Button } from "react-native-paper";

class HomeScreen extends React.Component {
  state = {
    trend: [],
  }

  componentWillUnmount() {
    this.items();
  }


 items =  async () => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=en`)
      console.log(res)
      this.setState({
        trend: res.data.result
      })
    } catch (a) {
      console.log(`error`)
    }
 }

  render() {
    return (
      <>
        <FlatList
          style={{  backgroundColor: `rgba(155, 224, 216, 0.88)`, padding: 10,}}
          data={this.state.trend}
          renderItem={({ item }) => {
            return (
                <Card
                  style={{
                    margin: 10,
                    width: `50%`,
                    height: `90%`,
                  }}>
                  <Card.Content>
                  <Title>{item.name}</Title>
                  <Title>{item.first_air_date}</Title>
                </Card.Content>
                  <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
                </Card>
            )
          }}
        />
      </>
    );
  }
}

export default HomeScreen;

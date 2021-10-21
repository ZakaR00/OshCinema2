import React from 'react';
import { FlatList, Text, View } from "react-native";
import { Card } from "react-native-paper";
import axios from "axios";

class  ScreenFilm extends React.Component {
  state = {
    Film: []
  }
  componentDidMount() {
    this.start();
  }
  start = async () => {
    try {
      const data = await axios.get(`https://api.themoviedb.org/3/movie/popular/?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
      this.setState({
        Film: data.data.results,
      })
    }catch {
    }
  }
  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: '#b65ec4'
        }}>
        <FlatList data={this.state.Film} horizontal={false} numColumns={2} renderItem={({ item }) => {
          return (
            <Card
              style={{
                margin: 10,
                width: `45%`,
              }}
              onPress={() => this.props.navigation.navigate('MoreDetails', {detail: item, name: item.title})}
            >
              <Card.Content>
                <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
              </Card.Content>
              <Card.Actions>
                <Card.Title title={item.title}  subtitleNumberOfLines={100} />
              </Card.Actions>
            </Card>
          );
        }} />
      </View>
      </>
    );
  }
}
export default ScreenFilm;

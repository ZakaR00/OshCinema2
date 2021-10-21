import React from 'react';
import { FlatList, Text } from "react-native";
import { Card } from "react-native-paper";
import axios from "axios";

class  ScreenGenreFilm extends React.Component {
  state = {
    Film: []
  }
  componentDidMount() {
    this.start();
  }
  start = async () => {
    try {
      const data = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
      this.setState({
        Film: data.data.genres,
      })
    }catch {
    }
  }
  render() {
    return (
      <>
        <FlatList data={this.state.Film} renderItem={({ item }) => {
          return (
            <Card
              style={{
                margin: 10,
                width: `95%`,
                backgroundColor: `rgb(76, 206, 175)`,
              }}
              onPress={() => this.props.navigation.navigate('ScreenGenreFilm2', {detail: item.id, name: item.name, props: `Film`})}
            >
              <Card.Actions>
                <Card.Title title={item.name}  subtitleNumberOfLines={100} />
              </Card.Actions>
            </Card>
          );
        }} />
      </>
    );
  }
}
export default ScreenGenreFilm;

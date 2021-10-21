import React from 'react';
import { FlatList, Text } from "react-native";
import { Card } from "react-native-paper";
import axios from "axios";

class  ScreenGenreSerial extends React.Component {
  state = {
    Cinema: []
  }
  componentDidMount() {
    this.start();
  }
  start = async () => {
    try {
      const data = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
      this.setState({
        Cinema: data.data.genres,
      })
    }catch {
    }
  }
  render() {
    return (
      <>
        <FlatList data={this.state.Cinema} horizontal={false} numColumns={2} renderItem={({ item }) => {
          return (
            <Card
              style={{
                margin: 10,
                width: `95%`,
                backgroundColor: `rgb(76, 206, 175)`,
              }}
              onPress={() => this.props.navigation.navigate('ScreenGenreFilm2', {detail: item.id, name: item.name, props: `Serial`})}
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
export default ScreenGenreSerial;

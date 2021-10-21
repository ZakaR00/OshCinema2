import React from 'react';
import {
  FlatList, View,
} from "react-native";
import axios from "axios";
import { Card } from "react-native-paper";

class  ScreenHomeTV extends React.Component {
  state = {
    TvShow: []
  }
  componentDidMount() {
    this.start();
  }
  start = async () => {
    try {
      const data = await axios.get(`https://api.themoviedb.org/3/tv/popular/?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
      this.setState({
        TvShow: data.data.results,
      }, () => {console.log(this.state.TvShow)})
    }catch {
    }
  }
  render() {
    return (
      <>
        <View
          style={{
          backgroundColor: `rgba(86, 210, 196, 0.88)`
        }}>
        <FlatList  data={this.state.TvShow} horizontal={false} numColumns={2} renderItem={({ item }) => {
          return (
            <Card
              style={{
                margin: 10,
                width: `45%`,
                height: `90%`,
                backgroundColor: `rgba(243,243,243,0.97)`
              }}
              onPress={() => this.props.navigation.navigate('MoreDetails', {detail: item, name: item.name})}
            >
              <Card.Content>
                <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
              </Card.Content>
              <Card.Actions>
                <Card.Title title={item.name}  subtitleNumberOfLines={100} />
              </Card.Actions>
            </Card>
          );
        }} />
        </View>
      </>
    );
  }
}
export default ScreenHomeTV;

import React from 'react';
import {
  FlatList,
} from "react-native";
import axios from "axios";
import { Card } from "react-native-paper";

class  ScreenGenre extends React.Component {
  state = {
    TvShow: []
  }
  componentDidMount() {
    this.props.navigation.setOptions({title: `${this.props.route.params.name}`})
    this.start();
  }
  start = async () => {
    try {
      const data = await axios.get(`https://api.themoviedb.org/3/discover/${this.props.route.params.props !== `Film` ? `movie` : `tv`}?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.route.params.detail}`);
      this.setState({
        TvShow: data.data.results,
      }, () => {console.log(this.state.TvShow)})
    }catch {
    }
  }
  render() {
    return (
      <>
        <FlatList data={this.state.TvShow} horizontal={false} numColumns={2} renderItem={({ item }) => {
          return (
            <Card
              style={{
                margin: 10,
                width: `45%`,
                height: `90%`,
              }}
              onPress={() => this.props.navigation.navigate('MoreDetails', {detail: item, name: item.name})}
            >
              <Card.Content>
                <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
              </Card.Content>
              <Card.Actions>
                <Card.Title title={this.props.route.params.props !== `Film` ? item.title : item.name}  subtitleNumberOfLines={100} />
              </Card.Actions>
            </Card>
          );
        }} />
      </>
    );
  }
}
export default ScreenGenre;

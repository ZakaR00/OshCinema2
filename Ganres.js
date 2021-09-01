import React from 'react';
import {
  FlatList,
} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card } from "react-native-paper";
import axios from "axios";
const Stack = createNativeStackNavigator();

class Ganr extends React.Component{

  state = {
    ganrfilm: [],
    id: this.props.route.params.id
  }

  componentDidMount() {
    this.props.navigation.setOptions({title: this.props.route.params.name})
    this.film()
  }

  film = async () => {
    try {
      const as = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.route.params.id}`)
      console.log(as)
      this.setState({
        ganrfilm: as.data.results
      })
    } catch (f) {
      console.log(f)
    }
  }

  render() {
    return (
      <>
        <FlatList
          data={this.state.ganrfilm}
          renderItem={({item})=>{
            return (
              <Card
                style={{
                  width: `95%`,
                  margin: 10,
                  backgroundColor: `blue`
                }}>
                <Card.Cover  resizeMode={`contain`}  source={{ uri: `https://image.tmdb.org/t/p/w500${this.state.id.poster_path}`}}/>
                <Card.Content>
                  <Card.Title>{this.state.id.title}</Card.Title>
                </Card.Content>
              </Card>
            )
          }}
        />
      </>
    )
  }
}
export default Ganr;

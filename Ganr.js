import React from 'react';
import {
 ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import axios from "axios";

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
      const as = await axios.get(`
https://api.themoviedb.org/3/discover/tv/?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.route.params.id}`)

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
        <ScrollView>
          {this.state.ganrfilm.map((item)=>{
            return (
              <>
                <Card
                  style={{
                    width: `95%`,
                    margin: 10,
                    backgroundColor: `pink`
                  }}>
                  <Card.Cover  resizeMode={`contain`}  source={{ uri: `https://image.tmdb.org/t/p/w500${this.state.id.poster_path}`}}/>
                  <Card.Content>
                    <Card.Title> {this.state.id.name}</Card.Title>
                  </Card.Content>
                </Card>
              </>
            )
          })}
        </ScrollView>
      </>
    )
  }
}

export default Ganr;

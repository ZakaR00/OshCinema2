import React from 'react';
import {
  Text,
  View,FlatList, TouchableOpacity
} from 'react-native';
import axios from "axios";
import { Card, Title, Button } from "react-native-paper";


class ScreenGanrFilm extends React.Component{

  state = {
    ganrfilm: [],
  }

  componentDidMount() {

    this.film()
  }

  film = async () => {
    try {
      const as = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`)
      console.log(as)
      this.setState({
        ganrfilm: as.data.genres
      })
    } catch (f) {
      console.log(f)
    }
  }

  opisanie = (item) => {
    this.props.navigation.navigate(`Ganr`,{
      name: item.name,
      id: item.id

    })
  }

  render() {
    return (
      <>
      <FlatList
        data={this.state.ganrfilm}
        renderItem={({item})=>{
          return (
            <>
              <Card
                style={{
                  width: `95%`,
                  margin: 10,
                  backgroundColor: `white`
                }}>
              </Card>
              <View
                style={{
                  margin: 10,
                  padding: 10,
                  backgroundColor: `rgba(182, 10, 229, 0.47)`
                }}>
                <TouchableOpacity  onPress={()=>this.opisanie(item)}>
                  <Text>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            </>

          )
        }}
      />
      </>
    )
  }
}
export default ScreenGanrFilm;

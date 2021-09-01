
import React from 'react';
import {
   FlatList, ScrollView
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, Title, Button } from "react-native-paper";
import axios from "axios";
import Indicator from "./Indicator";

const Stack = createNativeStackNavigator();

class Serials extends React.Component{

  state = {
    trend: [],
    indicator: true
  }


  componentDidMount() {
    this.cinema()
  }

  cinema = async () => {
    try {
      const as = await axios.get(`https://api.themoviedb.org/3/tv/popular/?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`)
      console.log(as)
      this.setState({
        trend: as.data.results
      })
    } catch (e){
      console.log(e)
    } finally {
      this.setState({indicator: false})
    }
  }

  opisanie = (item) => {
    this.props.navigation.navigate(`Ser`, {
      props: item.name,
      id: item,
    })
  }


  render() {
      if(this.state.indicator){
        return (
        <>
          <Indicator/>
        </>
        )
      }
    return (
      <>
        <FlatList
          numColumns={2} horizontal={false}
          style={{  backgroundColor: `rgba(155, 224, 216, 0.88)`, padding: 10, }}
          data={this.state.trend}
          renderItem={({item})=>{
            return(
              <Card
                onPress={()=>this.opisanie(item)}
                style={{
                  margin: 10,
                  width: `50%`,
                  height: `90%`,
                }}>
                <Card.Cover  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`  }} />
                <Card.Content>
                  <Title style={{textAlign: `center`}}>{item.name}</Title>
                  <Title style={{textAlign: `center`, fontSize: 13 }} >{item.first_air_date}</Title>
                </Card.Content>
              </Card>
            )
          }}
        />
      </>
    )
  }
}
export default Serials;

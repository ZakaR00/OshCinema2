import React from 'react';
import {
  ScrollView,
} from "react-native";
import { Card, Title } from "react-native-paper";
import Indicator from "./Indicator";

class Fil extends React.Component{

  state = {
    op: [],
    indicator: true,
    id: this.props.route.params.id
  }

  componentDidMount() {
    this.setState({
      indicator: false
    })
    this.props.navigation.setOptions({title:this.state.id.title })
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
        <ScrollView>
          <Card
            style={{
              width: `100%`,
              height: `100%`,
            }}>
            <Card.Cover  resizeMode={`contain`}  source={{ uri: `https://image.tmdb.org/t/p/w500${this.state.id.poster_path}`}}/>
            <Card.Content>
              <Title style={{textAlign: `center`}}>{this.state.id.title} }</Title>
              <Title style={{fontSize: 20}}>{this.state.id.overview}</Title>
            </Card.Content>
          </Card>
        </ScrollView>
      </>
    )
  }
}
export default Fil;

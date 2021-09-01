import React from 'react';
import { Card, Title } from "react-native-paper";
import Indicator from "./Indicator";

class Opisanie2 extends React.Component{

  state = {
    op: [],
    indicator: true,
    id: this.props.route.params.id
  }

  componentDidMount() {
   this.setState({
    indicator: false
   })
    this.props.navigation.setOptions({title:this.props.route.params.prop})
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
              <Card
                style={{
                  margin: 30,
                  width: `90%`,
                  height: `90%`,
                }}>
                <Card.Cover  resizeMode={`contain`}  source={{ uri: `https://image.tmdb.org/t/p/w500${this.state.id.poster_path}`}}/>
                <Card.Content>
                  <Title style={{textAlign: `center`}}>{this.state.id.title} }</Title>
                  <Title style={{fontSize: 20}}>{this.state.id.overview}</Title>
                </Card.Content>
              </Card>
      </>
    )
  }
}
export default Opisanie2;

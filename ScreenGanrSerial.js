import React from "react";
import {
  FlatList,
  Text,
} from "react-native";
import axios from "axios";
import { Card } from "react-native-paper";

class ScreenGanrSerial extends React.Component {

  state = {
    ganrfilm: [],
  };

  componentDidMount() {
    this.film();
  }

  film = async () => {
    try {
      const as = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
      console.log(as);
      this.setState({
        ganrfilm: as.data.genres,
      });
    } catch (f) {
      console.log(f);
    }
  };

  opisanie = (item) => {
    this.props.navigation.navigate(`Ganres`, {
      name: item.name,
      id: item.id,
    });
  };

  render() {
    return (
      <>
        <FlatList
          data={this.state.ganrfilm}
          renderItem={({ item }) => {
            return (
              <>
                <Card
                  onPress={() => this.opisanie(item)}
                  style={{
                    width: `95%`,
                    margin: 10,
                    padding: 10,
                    backgroundColor: `green`,
                  }}>
                  <Text>{item.name}</Text>
                </Card>
              </>
            );
          }}
        />
      </>
    );
  }
}

export default ScreenGanrSerial;

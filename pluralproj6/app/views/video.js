import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback
} from "react-native";

export class Video extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { listLoaded: false };
  }

  componentDidMount() {
    return fetch(
      "https://app.pluralsight.com/player?course=react-native-fundamentals&author=reggie-dawson&name=2e250659-11af-4df2-88cd-f19340ea6ca4&clip=2&mode=live"
    )
      .then(response => response.json())
      .then(response => {
        this.state({
          listLoaded: true,
          videoList: Array.from(responseJson.items)
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        {this.state.listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <FlatList
              data={this.state.videoList}
              renderItem={({ item }) => (
                <TubeItem
                  id={item.id.videoId}
                  title={item.snippet.title}
                  imageSrc={item.snippet.thumbnails.high.url}
                />
              )}
            />
          </View>
        )}
        {!this.state.listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text> Loading</Text>
          </View>
        )}
      </View>
    );
  }
}

export class TubeItem extends React.Component {
  onPress = () => {
    console.log(this.props.id);
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{ paddingTop: 20, alignItems: "center" }}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={{ uri: this.props.imageSrc }}
          />
          <Text>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import GridView from 'react-native-super-grid';


export default class App extends Component {
  render() {
    const items = [
      { name: '300', code: 'Total' ,link:'http://simpleicon.com/wp-content/uploads/global1.png' }, { name: '0', code: 'Today',link:'https://img.icons8.com/color/260/checkmark.png' },
      { name: '3', code: 'Weekly',link:'http://as.asmhost.net/comatram2/police/png/ban.png' }, { name: '54', code: 'Monthly',link:'http://as.asmhost.net/comatram2/police/png/ban.png' },
      ];
    return (
      <View>
        <View style={styles.titleBarCss}><Text style={{ fontSize: 25, color: "#fff" }}>Users Sign Up Report</Text></View>
      <GridView
        itemDimension={130}
        items={items}
        style={styles.gridView}
        renderItem={item => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <TouchableOpacity style={{width: 50,height: 50,borderRadius: 30,alignItems:"center",justifyContent:"center" ,backgroundColor: '#0D60E3',position: 'absolute',bottom: 10,right: 10, }}>
            <Image source={{ uri: (item.link) }} style={{width:40 , height:40 ,tintColor:'white'}}/>
            </TouchableOpacity>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        )}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 15,
    backgroundColor:"#DCDCDC", 
    height:"100%"
  },
  itemContainer: {
    justifyContent: 'flex-start',
    borderRadius: 10,
    padding: 10,
    height: 150,
    borderWidth: 0,
    elevation:5,
    backgroundColor:"#fff"
  },
  itemName: {
    fontSize: 25,
    color: '#000',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 18,
    color: '#0d60e3',
  },
  titleBarCss: {
    backgroundColor: "#0d60e3",
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  }
});

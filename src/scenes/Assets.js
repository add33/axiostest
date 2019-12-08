// https://blog.cloudboost.io/getting-started-with-react-native-and-redux-6cd4addeb29?
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';

import { listAssets } from './../redux/reducers/Assets';

class Assets extends Component {

  async componentDidMount() {
    console.log(this.props)
    await this.props.listAssets({current_user:true})
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.lib}</Text>
    </View>
  )

  render() {
    const { assets } = this.props;
    return (
	    <View style={styles.container}>
	      <FlatList
	        styles={styles.container}
	        data={assets}
	        renderItem={this.renderItem}
	        keyExtractor={(item, index) => index.toString()}
	      />
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});


const mapStateToProps = (state) => {
    console.log('map state',state)
    return {authUser: state.authUser, assets: state.assets}
}
const mapDispatchToProps = {
  listAssets
} 
export default connect(mapStateToProps, mapDispatchToProps)(Assets) 
import React, {Component} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import CxButton from '../../Components/CxButton';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      counter: 0,
      Data: '',
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.note();
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  note() {}

  render() {
    console.log('render');

    return (
      <>
        <View style={{flex: 1, justifyContent: 'center'}}>
          {console.log('first render')}
          <Text
            onPress={() => this.setState({counter: this.state.counter + 1})}>
            {' '}
            textInComponent {this.state.counter}
          </Text>
          {this.state.counter < 5 ? (
            <CxButton title={'hello'} />
          ) : (
            <CxButton title={'called'} />
          )}
        </View>
      </>
    );
  }
}

export default HomeScreen;

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Modal} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Style from '../stylesheets/styles';
import MapView from 'react-native-maps';
import ActionButton from 'react-native-action-button';

var self;

export default class Home extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      hajnumber: '',
      region: {
        latitude: 21.614857,
        longitude: 39.156606,
        latitudeDelta: 0.012653,
        longitudeDelta: 0.012023,
      },
      coordinate: {
        latitude: 21.614857,
        longitude: 39.156606,
      },
      modalVisible: false,
      hajjs: [
        {
          name : 'Omar Ali',
          latlng : { latitude: 21.617397, longitude: 39.157190 },
          description : 'description',
          number : 1
        },
        {
          name : 'Ali Ahmed',
          latlng : { latitude: 21.615803, longitude: 39.154774 },
          description : 'description',
          number : 2
        },
        {
          name : 'Ahmed Sami',
          latlng : { latitude: 21.612984, longitude: 39.157615 },
          description : 'description',
          number : 3
        },
        {
          name : 'Sami Osama',
          latlng : { latitude: 21.612060, longitude: 39.155388 },
          description : 'description',
          number : 4
        },
        {
          name : 'Osama Omar',
          latlng : { latitude: 21.616274, longitude: 39.152520 },
          description : 'description',
          number : 5
        }
      ]
    }
    self = this;
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition((position) => {
        self.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.012653,
              longitudeDelta: 0.012023,
            },
            coordinate: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
        });
      },(error) => {
        console.log("location error", error);
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  componentDidMount(){
    this.setState({
      hajnumber:this.props.hajnumber
    })
  }

  onRegionChange(region) {
    console.log('region', region);
    self.setState({ region });
  }

  showHideBusModal(){
    this.setState({modalVisible: !this.state.modalVisible});
  }

  render() {
    return (
      <View style={Style.container} >

        <MapView
          provider="google"
          showsCompass={true}
          rotateEnabled={true}
          zoomControlEnabled={true}
          initialRegion={this.state.region}
          style={Style.map}
         >
         <MapView.Marker
           coordinate={this.state.coordinate}
           image={require('../images/busPin.png')}
           title={'My Bus'}
           onPress={()=>this.showHideBusModal()}
         />
          {this.state.hajjs.map((marker, index) => (
            <MapView.Marker
              key={"hajjindex"+index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.number == self.state.hajnumber ? 'My location' : marker.title}
              image={marker.number == self.state.hajnumber ? require('../images/myLocationPin.png') : require('../images/othersHajjsPin.png')}
            />
          ))}
        </MapView>

        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          position="left"
          bgColor="rgba(0,0,0,0.7)"
          spacing={10}
          degrees={280}
          >
          <ActionButton.Item buttonColor='transparent' title="Help" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => console.log("notes tapped!")}>
            <Image source={require('../images/hotel.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="My Camp" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => console.log("notes tapped!")}>
            <Image source={require('../images/camp.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="My Hotel" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => console.log("notes tapped!")}>
            <Image source={require('../images/hotel.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="Schedule" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => console.log("notes tapped!")}>
            <Image source={require('../images/resturant.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="My Bus" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => {}}>
            <Image source={require('../images/hajj.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="Hospitals" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => {}}>
            <Image source={require('../images/hospitals.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="Restaurants" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => {}}>
            <Image source={require('../images/resturant.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="Holy Places" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => {}}>
            <Image source={require('../images/hajj.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
        </ActionButton>


        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          >
          <View style={Style.busModalContainer}>
            
            <View>
              <Image source={require('../images/resturant.png')} style={{width:50,height:50}} />
              <Text>Supervisor : Khalid Abdulrahman</Text>

              <Image source={require('../images/resturant.png')} style={{width:50,height:50}} />
              <Text>Supervisor : Khalid Abdulrahman</Text>

              <Image source={require('../images/resturant.png')} style={{width:50,height:50}} />
              <Text>Supervisor : Khalid Abdulrahman</Text>

            </View>

            <TouchableOpacity style={Style.hideButton} onPress={()=>this.showHideBusModal()} >
              <Text style={Style.langTitleRev} > hide </Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  }
}

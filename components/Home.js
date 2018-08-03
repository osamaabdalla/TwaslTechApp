import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Linking, Modal, TouchableWithoutFeedback} from 'react-native';
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
      message:'',
      modalVisible: false,
      modalMessageVisible: false,
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

  confimBusChange(){
    Alert.alert(
      'Success',
      '\n Your request has been sent to the Supervisor',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  showRequestResons(){
    this.setState({modalVisible: !this.state.modalVisible});

    setTimeout(function () {
      Alert.alert(
        'Select Change Reason',
        '\n',
        [
          {text: 'I will late', onPress: () => self.confimBusChange()},
          {text: 'I Lost my way', onPress: () => self.confimBusChange()},
          {text: 'Emergney issue', onPress: () => self.confimBusChange()},
          {text: 'I need More time', onPress: () => self.confimBusChange()},
          {text: 'Cancel Request', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }, 100);
  }

  sendMessage(){
    this.setState({modalVisible: !this.state.modalVisible});
    setTimeout(function () {
      self.setState({modalMessageVisible: !self.state.modalMessageVisible});
    }, 100);
  }

  sendMessageDone(){
    if(self.state.message){
      this.setState({modalMessageVisible: !this.state.modalMessageVisible});
      setTimeout(function () {
        Alert.alert(
          'Success',
          '\n Your message has been sent to the Supervisor',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      }, 100);
    }else {
      Alert.alert(
        'Sorry',
        '\n Please enter your message',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
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
           title={'My Bus'}
           onPress={()=>this.showHideBusModal()}
         >
           <Image
             source={require('../images/busPin.png')}
             style={{width:40,height:60}}
             resizeMode="contain"
           />
         </MapView.Marker>

          {this.state.hajjs.map((marker, index) => (
            <MapView.Marker
              key={"hajjindex"+index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.number == self.state.hajnumber ? 'My location' : marker.title}
            >
              <Image
                source={marker.number == self.state.hajnumber ? require('../images/myLocationPin.png') : require('../images/othersHajjsPin.png')}
                style={{width:40,height:60}}
                resizeMode="contain"
              />
            </MapView.Marker>
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
            <Image source={require('../images/help.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="My Camp" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => console.log("notes tapped!")}>
            <Image source={require('../images/camp.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="My Hotel" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => console.log("notes tapped!")}>
            <Image source={require('../images/hotel.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="Schedule" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => console.log("notes tapped!")}>
            <Image source={require('../images/calendar.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="Medical History" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => {}}>
            <Image source={require('../images/medical.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="Hospitals" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => {}}>
            <Image source={require('../images/hospitals.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="Restaurants" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => {}}>
            <Image source={require('../images/resturant.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='transparent' title="Holy Places" textStyle={Style.actionSheetTitle} textContainerStyle={Style.actionSheets} onPress={() => {}}>
            <Image source={require('../images/hpalces.png')} style={{width:50,height:50}} />
          </ActionButton.Item>
        </ActionButton>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          >
          <View style={Style.busModalContainer} >

            <View style={Style.titlePopButton} >
              <Text style={Style.langTitleRev} > My Bus Supervisor </Text>
            </View>

            <View style={Style.supreVisorRow} >
              <Image source={require('../images/user.png')} style={{width:20,height:20,marginRight:8}} />
              <Text>Khalid Abdulrahman</Text>
            </View>

            <TouchableOpacity style={Style.supreVisorRow} onPress={()=>{Linking.openURL('tel://966123456789')}} >
              <Image source={require('../images/mobile.png')} style={{width:20,height:20,marginRight:8}} />
              <Text style={{color:'red'}} >+966123456789</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.supreVisorRow} onPress={()=>{this.sendMessage()}} >
              <Image source={require('../images/message.png')} style={{width:20,height:20,marginRight:8}} />
              <Text style={{color:'red'}} >Send Message</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.supreVisorRow} onPress={()=>{this.showRequestResons()}} >
              <Image source={require('../images/resturant.png')} style={{width:20,height:20,marginRight:8}} />
              <Text style={{color:'red'}} >Request Bus Change</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.hideButton} onPress={()=>this.showHideBusModal()} >
              <Text style={Style.langTitleRev} > hide </Text>
            </TouchableOpacity>

          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalMessageVisible}
          >
          <View style={Style.busModalContainer} >

            <View style={Style.titlePopButton} >
              <Text style={Style.langTitleRev} > Enter your message </Text>
            </View>

            <View style={Style.supreVisorRow} >
              <TextInput
                style={[Style.TextAreaInput,{marginTop:90}]}
                onChangeText={(text) => this.setState({message:text})}
                value={this.state.message}
                placeholder="Enter your message here"
              />
            </View>

            <View style={Style.mainHideButton} >
              <TouchableOpacity style={Style.seminHideButton} onPress={()=>this.sendMessageDone()} >
                <Text style={Style.langTitleRev} > Send </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.seminHideButton} onPress={()=>this.setState({modalMessageVisible:false})} >
                <Text style={Style.langTitleRev} > Cancel </Text>
              </TouchableOpacity>
            </View>

          </View>
        </Modal>

      </View>
    );
  }
}

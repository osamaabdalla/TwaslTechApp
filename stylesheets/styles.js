import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Dimensions,
  I18nManager
} from 'react-native';

var {width, height} = Dimensions.get('window');
var paddingTop = (Platform.OS === 'ios') ? 64 : 54;

const FONTBLACK = 'Cairo Black';
const FONTLIGHT = 'Cairo Light';
const FONTELIGHT = 'Cairo ExtraLight';
const FONTSBOLD = 'Cairo SemiBold';

const Style = StyleSheet.create({
  container:{
    width:width,
    height:height,
    backgroundColor:'#00aced',
  },
  logoSection:{
    width:width,
    height:height/2,
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#00aced',
  },
  languagesSection:{
    width:width,
    height:height/2,
    backgroundColor:'#ffffff',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  lSLogo:{
    width:150,
    height:150,
    marginTop:50,
    marginBottom:-15
  },
  lSMashaer:{
    width:width,
    resizeMode:'contain'
  },
  textTitle:{
    color: '#00aced',
    fontSize: 18,
    fontFamily: FONTLIGHT,
    marginTop:20,
    marginBottom:20,
  },
  langTitle:{
    color: '#00aced',
    fontSize: 15,
    fontFamily: FONTLIGHT,
  },
  sLangButton:{
    width:width/2+40,
    height:45,
    marginTop:5,
    marginBottom:5,
    borderRadius:5,
    borderColor:'#b0e5f9',
    borderWidth:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  TextInput:{
    width:width/2+40,
    height:45,
    marginTop:5,
    marginBottom:5,
    borderRadius:5,
    borderColor:'#b0e5f9',
    borderWidth:1,
    color: '#00aced',
    textAlign:'center'
  },
  TextAreaInput:{
    width:width/2+70,
    height:145,
    marginTop:5,
    marginBottom:5,
    borderRadius:5,
    borderColor:'#b0e5f9',
    borderWidth:1,
    color: '#00aced',
    textAlign:'center'
  },
  lSLangLogo:{
    width:25,
    height:16,
    position:'absolute',
    left:15,
    top:14
  },
  langTitleRev:{
    color:'#ffffff',
    fontFamily:FONTLIGHT,
    fontSize:18
  },
  loginButton:{
    width:width/2+40,
    height:45,
    marginTop:5,
    marginBottom:5,
    borderRadius:5,
    backgroundColor:'#00aced',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  hideButton:{
    width:width,
    height:45,
    marginTop:5,
    position:'absolute',
    bottom:0,
    backgroundColor:'#00aced',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  seminHideButton:{
    width:width/2,
    height:45,
    marginTop:5,
    backgroundColor:'#00aced',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  mainHideButton:{
    width:width,
    height:45,
    marginTop:5,
    position:'absolute',
    bottom:0,
    backgroundColor:'#00aced',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  titlePopButton:{
    width:width,
    height:45,
    marginTop:5,
    position:'absolute',
    top:-5,
    backgroundColor:'#00aced',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  actionSheets:{
    width:width/2,
    height:50,
    marginTop:-13,
    marginBottom:0,
    marginLeft:-50,
    paddingLeft:40,
    borderRadius:25,
    backgroundColor:'#ffffff',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    zIndex:-1
  },
  actionSheetTitle:{
    color:'#00aced',
    fontSize:16,
    fontFamily:FONTLIGHT,
  },
  map:{
    width:width,
    height:height,
  },
  busModalContainer:{
    width:width-80,
    height:height/2-70,
    top:height/4,
    left:40,
    borderWidth:1,
    padding:20,
    borderColor:'#00aced',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'#ffffff',
    borderRadius:30,
    overflow:'hidden',
    paddingTop:70
  },
  supreVisorRow:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:width-120,
    height:30,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  }
});

export default Style;

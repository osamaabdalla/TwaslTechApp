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
  actionSheets:{
    width:width/2,
    height:50,
    marginTop:-13,
    marginBottom:0,
    marginLeft:-50,
    paddingLeft:50,
    borderRadius:25,
    backgroundColor:'#ffffff',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    zIndex:-1
  },
  actionSheetTitle:{
    color:'#00aced',
    fontSize:18,
    fontFamily:FONTLIGHT,
  },
  map:{
    width:width,
    height:height,
  },
  busModalContainer:{
    width:width-80,
    height:height/2-40,
    top:height/4,
    left:40,
    borderWidth:1,
    borderColor:'#00aced',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff',
    borderRadius:30,
    overflow:'hidden'
  }
  /*
  navigationBarStyle:{
    backgroundColor:'#e9d3f8',
    borderBottomColor: '#e9d3f8'
  },
  navigationBarTitleImage: {
    width: 220,
    height: 35,
    resizeMode: 'center',
  },
  titleStyle: {
    color: '#413353',
    fontFamily: FONTFAMILY
  },
  sceneStyle: {
    backgroundColor: '#f1f1f1'
  },
  container: {
      flex: 1,
      paddingTop: paddingTop,
      backgroundColor: '#f0f0f0'
  },
  menu: {
    paddingTop: paddingTop,
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'stretch'
  },
  menuItem: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomColor: '#ec8ccc',
    borderBottomWidth: 1,
  },
  menuItemText: {
    fontSize: 14,
    fontWeight: '400',
    color: "#ffffff",
    marginLeft: 10
  },
  menuItemIcon: {
    width: 20,
    height: 20,
    fontSize: 18,
    fontWeight: '700',
    color: "#ec8ccc",
    marginRight: 10
  },
  city: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcdc49'
  },
  logincity: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcdc49'
  },
  loginlay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityText:{
    color: "#413353",
    fontFamily: FONTFAMILY,
    fontSize: 16
  },
  padding: {
    padding: 20,
  },
  homeLogo: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    width: 220,
    height: 35,
    resizeMode: 'center',
    alignSelf: 'center'
  },
  heading: {
     textAlign: 'center',
     marginBottom: 20,
     color: '#f6f6f6',
     fontSize: 16,
     backgroundColor: 'transparent'
  },
  category: {
    width: width - 40 ,
    height: (height - paddingTop - 150) / 2 ,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  categoryImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: width - 40,
    height: 160 ,
    resizeMode: 'stretch'
  },
  categoryName: {
    padding: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#363638',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  categoryInfo: {
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: 'normal',
    color: '#606062'
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fffbff',
    height: 110,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    padding: 5,
    shadowOffset: { width: 1, height: 1},
    shadowColor: '#000000',
    shadowOpacity: 0,
    shadowRadius: 4
  },
  listItemLeft: {
    flex: 0.25,
    justifyContent: 'center'
  },
  listItemRight: {
    flex: 0.2,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItemBody: {
    flex: 0.4,
    padding: 5,
    borderRightWidth: 0,
    paddingHorizontal: 10,
    borderRightColor: '#dac4d9',
    alignItems: 'flex-start'
  },
  listItemImage: {
    width: null,
    height: 80,
    resizeMode: 'stretch'
  },
  shopName: {
    color: '#413353',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    fontFamily: FONTFAMILY,
    lineHeight: 18,
    textAlign: 'left'
  },
  shopDescription: {
    color: '#9b7daf',
    fontSize: 14,
    marginBottom: 5,
    fontFamily: FONTFAMILY,
    lineHeight: 16,
    textAlign: 'left'
  },
  shopCategory: {
    color: 'rgba(65, 51, 83, 0.8)',
    fontSize: 12,
    marginBottom: 5,
    fontFamily: FONTFAMILY,
    lineHeight: 16,
    textAlign: 'left'
  },
  shopInfo: {
    color: '#606062',
    fontWeight: '400',
    fontSize: 12,
    marginBottom: 3
  },
  minimum: {
    color: '#9b7daf',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: FONTFAMILY
  },
  delivery: {
    color: '#9b7daf',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
  },
  amount: {
    color: '#413353',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: FONTFAMILY
  },
  currency: {
    color: '#413353',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: FONTFAMILY
  },
  shopIcon: {
    color: '#ec76c4',
    fontSize: 18,
    width: 40,
    height: 20,
    textAlign: 'center'
  },
  smallImages:{
     width: 14,
     height: 14,
     marginRight: 8
  },
  label:{
    fontSize: 12,
    fontFamily: FONTFAMILY,
    color: '#73667b'
  },
  productList: {
    flexDirection: 'row',
    padding: 5,
  },
  product: {
    width: (width -10 ) / 2,
    marginBottom: 10
  },
  productInner: {
    margin: 5,
    backgroundColor: 'rgba(255,255,255,0.8)',

  },
  productImage: {
    width: (width - 30) / 2,
    height: 140,
    resizeMode: 'cover'
  },
  productInfo: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#c6cddc',
    height: 80,
  },
  productName: {
    color: '#363638',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 7,
  },
  productCategory: {
    color: '#777',
    fontWeight: '400',
    fontSize: 12,
    marginBottom: 7,
  },
  productPrice: {
    height: 40,
    width: 100,
    position: 'absolute',
    resizeMode: 'stretch',
    top: 20,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'

  },
  productPriceText: {
    color: '#e454b5',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#413353',
    marginBottom: 10
  },
  buttonIcon: {
    fontSize: 20,
    color: '#e9d3f8',
    marginRight: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e9d3f8',
    fontFamily: FONTFAMILY
  },
  productDetails: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  productDetailsLeft: {
    flex: 0.7,
  },
  productDetailsRight: {
    flex: 0.3,
    paddingRight: 10
  },
  productDetailsName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#413353',
    marginBottom: 5,
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontFamily: FONTFAMILY
  },
  accountTextFields: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#413353',
    marginBottom: 5,
    backgroundColor: 'transparent',
    textAlign: 'left',
    fontFamily: FONTFAMILY
  },
  productDetailsDescription: {
    fontWeight: '400',
    backgroundColor: 'transparent',
    color: '#9b7daf',
    fontSize: 14,
    textAlign: 'left',
    fontFamily: FONTFAMILY
  },
  morepagesDescription: {
    fontWeight: '100',
    backgroundColor: 'transparent',
    color: '#413353',
    fontSize: 15,
    textAlign: 'justify',
    fontFamily: FONTFAMILY,
    writingDirection: 'rtl'
  },
  productDetailsImage: {
    width: null,
    height: 100,
    resizeMode: 'cover'
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  increment: {
    flex: 0.3,
    height: 64,
    backgroundColor: '#fcdc49',
    alignItems: 'center',
    justifyContent: 'center',
  },
  incrementText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#413353',
  },
  decrement: {
    flex: 0.3,
    height: 64,
    backgroundColor: '#fcdc49',
    alignItems: 'center',
    justifyContent: 'center',
  },
  decrementText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#413353',
  },
  quantityContainer: {
    flex: 0.4,
    height: 64,
    backgroundColor: '#ffccff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    width: 100,
    backgroundColor: 'transparent',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#413353'
  },
  footer: {
    height: 64,
    width: width-20,
    backgroundColor: '#f0f0f0',
    alignSelf: 'center',
  },
  footerButton: {
    height: 64,
    backgroundColor: '#413353',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e9d3f8',
    fontFamily: FONTFAMILY
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsIcon: {
    fontSize: 32,
    marginBottom: 10,
    backgroundColor: 'transparent',
    color: '#413353'
  },
  noResultsText: {
    backgroundColor: 'transparent',
    color: '#413353',
    fontFamily: FONTFAMILY
  },
  cartItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    marginTop: 0
  },
  cartItemLeft: {
    flex: 0.1,
    justifyContent: 'center'
  },
  cartItemRight: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cartItemBody: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRightColor: '#d2b1c9',
  },
  cartQuantityText: {
    backgroundColor: 'transparent',
    color: '#363638',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cartItemName: {
    color: '#363638',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 7,
    textAlign: 'left',
    backgroundColor: 'transparent',
    fontFamily: FONTFAMILY
  },
  cartItemAmount: {
    color: '#ec76c4',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: FONTFAMILY,
    textAlign: 'left'
  },
  cartItemRemove: {
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: 'transparent'
  },
  cartTotal: {
    padding: 10,
    backgroundColor: '#e9d3f8',
  },
  cartTotalText: {
    color: '#413353',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: FONTFAMILY
  },
  cartTotalAmountText: {
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: FONTFAMILY
  },
  cartDelivery: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: 'transparent',
  },
  cartDeliveryText: {
    color: '#413353',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: FONTFAMILY,
    textAlign: 'left'
  },
  cartDeliveryAmountText: {
    color: '#413353',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
    fontFamily: FONTFAMILY
  },
  paragraph: {
    backgroundColor: "transparent",
    color: '#ffffff',
    marginBottom: 10
  },
  countryCode:{
    flex: 0.2,
    height: 45,
    justifyContent: 'center',
    backgroundColor: "white"
  },
  countryCodeText:{
    textAlign: 'center',
    backgroundColor: "white",
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: FONTFAMILY
  },
  verificationCodeInput:{
    flex: 0.8,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    color: 'white'
  },
  mapView: {
    width: width,
    height: height - 128
  },
  placeDescription:{
    height: 140,
    backgroundColor: "rgba(255,255,255, 0.7)",
    padding: 10,
  },
  checkout: {
    padding: 20,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD'
  },
  checkoutTotal:{
     marginBottom: 30
  },
  checkoutRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start'
  },
  checkoutColumn: {
    flex: 0.5,
    alignItems: 'flex-start'
  },
  checkoutRowText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: FONTFAMILY,
    textAlign: 'left'
  },
  checkoutTotalAmount: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#ff0000',
    fontFamily: FONTFAMILY
  },
  checkoutTotalText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20,
    fontFamily: FONTFAMILY,
  },
  formattedAddress: {
    padding: 10,
    backgroundColor: '#f0dc49',
  },
  formattedAddressText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#413353',
    backgroundColor: 'transparent',
    fontFamily: FONTFAMILY,
  },
  paymentMethod: {
    alignItems: 'flex-start'
  },
  paymentMethodText: {
    fontSize: 18,
    paddingTop: 30,
    marginBottom: 30,
    backgroundColor: 'transparent',
    fontFamily: FONTFAMILY,
    textAlign: 'left'
  },
  orderDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#413353'
  },
  orderDetailsLeft: {
    flex: 0.7,
    alignItems: 'flex-start',
  },
  orderDetailsRight: {
    flex: 0.3,
    paddingRight: 10
  },
  orderDetailsName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fcdc49',
    marginBottom: 5,
    backgroundColor: 'transparent',
    fontFamily: FONTFAMILY,
  },
  orderDetailsDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 20,
    backgroundColor: 'transparent'
  },
  orderDetailsImage: {
    width: null,
    height: 100,
    resizeMode: 'cover'
  },
  orderStatus: {
      color: '#e758b3',
      borderRadius: 4,
      fontWeight: 'bold',
      marginBottom: 5,
      fontFamily: FONTFAMILY
  },
  orderDate: {
    fontSize: 12,
    fontFamily: FONTFAMILY,
    color: '#000'
  },
  textInput:{
    height: 45,
    backgroundColor: '#e9d3f8',
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#333333',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    fontFamily: FONTFAMILY ,
    textAlign: I18nManager.isRTL ? 'right' : 'left'
  },
  textInputnew:{
    height: 45,
    backgroundColor: '#413353',
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    fontFamily: FONTFAMILY ,
    textAlign: I18nManager.isRTL ? 'right' : 'left'
  },
  newTextInputnew:{
    height: 145,
    backgroundColor: '#413353',
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    fontFamily: FONTFAMILY ,
    textAlign: I18nManager.isRTL ? 'right' : 'left'
  },
  textSelect:{
    fontSize: 16,
    padding: 8,
    color: '#fff',
    fontFamily: FONTFAMILY ,
    textAlign: 'left',
  },
  textInputnewSelect:{
    height: 45,
    backgroundColor: '#413353',
    paddingHorizontal: 10,
    marginBottom: 10,
    width:width-20,
    alignItems: 'flex-start'
  },
  accounttextInputnewSelect:{
    height: 45,
    backgroundColor: '#413353',
    paddingHorizontal: 10,
    marginBottom: 10,
    width:width-30,
    alignItems: 'flex-start'
  },
  logintextInput:{
    height: 45,
    backgroundColor: '#413353',
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 0,
    borderBottomWidth: 0,
    borderBottomColor: '#ecdff5',
    fontFamily: FONTFAMILY ,
    textAlign: I18nManager.isRTL ? 'right' : 'left'
  },
  option: {
    padding:10,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    alignItems: 'flex-start'
  },
  optionss: {
    padding:10,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    alignItems: 'center'
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  removeText: {
    fontSize: 14,
    color: "#e454b5",
    textAlign: 'right',
    fontFamily: FONTFAMILY
  },
  removeTextcenter: {
    fontSize: 15,
    color: "#e454b5",
    textAlign: 'center',
    fontFamily: FONTFAMILY
  },
  swipperWrapper: {
    height: 260,
    width: width,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    height: 260,
    width: width,
    alignItems: 'center',
    backgroundColor: '#413353',
  },
  slideImage: {
    width: width,
    height: 260,
    resizeMode: 'stretch',
  },
  pin: {
    width: 32,
    height: 32
  },
  moreListItem: {
    flexDirection: 'row',
  },
  moreListItemRight: {
    flex: 0.1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  moreListItemRightIcon: {
    fontSize: 24,
    color: "#a8a8a8"
  },
  moreListItemRightIconSmall: {
    fontSize: 20,
    color: "#a8a8a8"
  },
  moreListItemLeft: {
    flex: 0.9,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: "#dddddd"
  },
  moreListItemTitle: {
    flex: 0.9,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 12,
  },
  moreListItemTitleText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FONTFAMILY,
  },
  moreListItemArrow: {
    flex: 0.1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 12,
  },
  moreListItemArrowIcon: {
    fontSize: 14,
    color: '#c8c8cd'
  },
  cityNameText: {
    fontFamily: FONTFAMILY,
    textAlign: 'left'
  },
  cityNameTextBig: {
    fontFamily: FONTFAMILY,
    textAlign: 'left',
    fontSize: 16,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white",
    fontFamily: FONTFAMILY,
  },
  menuHeader: {
     backgroundColor: '#ecdff5',
     padding: 10,
     alignItems: 'flex-start'
  },
  menuHeaderText: {
   fontSize: 16,
   fontWeight: 'bold',
   color: "#413353",
   textAlign: 'left',
   fontFamily: FONTFAMILY,
  },
  menuRow: {
      flexDirection: 'row',
      padding: 10,
      borderBottomColor: "#9b7daf",
      backgroundColor: 'white',
      borderBottomWidth: 0.5,
  },
  menuProductName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#a88fb8',
    fontFamily: FONTFAMILY
  },
  placeDescriptionInput: {
    minHeight: 40,
    fontSize: 14,
    marginBottom: 10,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontFamily: FONTFAMILY
  },
  deliveryPlaceButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e9d3f8',
    fontFamily: FONTFAMILY
  },
  reviewReplayText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#413353',
    fontFamily: FONTFAMILY
  },
  countdownText: {
    color:'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#413353',
    fontFamily: FONTFAMILY
  },
  pleaseWait: {
    textAlign: 'center',
    padding: 30,
    fontFamily: FONTFAMILY,
    fontSize: 18,
    color: '#e293cf'
  },
  pendingOrderText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#413353',
    fontFamily: FONTFAMILY,
  },
  phoneNumberBeforeText:{
    fontFamily: FONTFAMILY,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
    color: '#413353',
  },
  phoneNumberInput: {
    height: 60,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e9d3f8',
    marginBottom: 10,
    fontFamily: FONTFAMILY,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  nextText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: FONTFAMILY,
  },
  doneText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: FONTFAMILY,
  },
  verificationCodeInput: {
    height: 60,
    backgroundColor: '#413353',
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e9d3f8',
    marginBottom: 10,
    fontFamily: FONTFAMILY,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  }
  */
});

export default Style;

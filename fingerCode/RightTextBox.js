import React from 'react';
import { View, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';
import { isNil, isEmpty } from 'ramda';
    
// import { TouchableOpacity } from 'react-native-gesture-handler';

export const RightTextInputContainer = ({
  disabled,
  icon = null,
  params,
  onPressItem,
  lblTitle,
  item,
  lblInputTitle,
  lblDescription,
  lblInputPlaceHolder,
  value,
  editable = true,
  maximumLength = 3,
  handleFocus,
  onSubmitEditing,
  onSetTouched,
  onChange,
  option = 'percentage',
  identifier,
  spendAmount,
  style: styleOverride,
  lblTitleStyle,
  lblDescStyle,
  valueStyle = {}
}) => {

  console.log(
    "lblTitle : ",lblTitle,
    '\nlblInputTitle',lblInputTitle,
    "\nlblInputPlaceHolder",lblInputPlaceHolder,
    "\nvalue",value,
    "\n!value",!value,
    "\nonSetTouched",onSetTouched,
    "\nidentifier",identifier,
    "\neditable",editable,
    "\nspendAmount",spendAmount,

  )
  

  return (
            <View  >
              {lblInputTitle === 'Spend Anywhere' && !value ? (
                <TextInput 
                  style={{backgroundColor:'white',color:'black'}}
                  key={lblInputTitle}
                  editable={onChange ? true : false}
                  keyboardType={'numeric'}
                  placeholderTextColor={'black'}
                  placeholder={spendAmount ? `${spendAmount.toFixed(2)}` : '0'}
                  value={spendAmount}
                  // onChangeText={(txt) => (onChange && txt.length >0 ? onChange(identifier, txt) : null)}
                  onChangeText={(txt) => {console.log('onChange',onChange),console.log('txt',txt,txt.length)}}
                />
              ) : editable == false ? (
                null
              ) : (
                //Savings Account
                <TextInput
                  key={lblInputTitle}
                  editable={editable}
                  keyboardType={'numeric'}
                  maxLength={maximumLength ? maximumLength : null}
                //   onBlur={() => onSetTouched && onSetTouched(identifier)}
                  onChangeText={(txt) => onChange(identifier, txt)}
                  onFocus={handleFocus}
                  option={option}
                  onSubmitEditing={onSubmitEditing}
                  placeholder={lblInputPlaceHolder}
                  style={[styles.text, valueStyle]}
                  value={value}
                />
              )}
             
            </View>
  );
};

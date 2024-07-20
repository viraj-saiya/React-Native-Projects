import React from 'react';
import { View, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';
import { isNil, isEmpty } from 'ramda';
 
import { AppText } from '../text/text';
import { COLORS_NEW } from '../../constants/colors.new';
import Metrics from '../../constants/metrics';
// import { preset_new } from '../text/text.new.presets';
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
  
  const isLblDescriptionFound = lblDescription !== null && !isNil(lblDescription) && !isEmpty(lblDescription);

  return (

      
            <View style={styles.viewRow} pointerEvents={disabled ? 'none' : 'auto'}>
  


                <TextInput
                  key={lblInputTitle}
                  editable={onChange ? true : false}
                  keyboardType={'numeric'}
                  placeholder={spendAmount ? `${spendAmount.toFixed(2)}` : '0'}
                  placeholderTextColor={COLORS_NEW.gray}
                  value={spendAmount}
                  onChangeText={(txt) => (onChange && txt.length >0 ? onChange(identifier, txt) : null)}
                  // onChangeText={(txt) => {console.log('onChange',onChange),console.log('txt',txt,txt.length)}}
                />
              
              
              
            </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: COLORS_NEW.red
  },
  txtBottomMargin: {
    marginBottom: Metrics.rfv(8)
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: COLORS_NEW.darkBlue,
    height: Metrics.rfv(50)
  },
  viewLblContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  text: {
    // ...preset_new.PARAGRAPH_1M_16,
    color: COLORS_NEW.darkBlue,
    paddingRight: Platform.OS == 'ios' ? 0 : Metrics.rfv(5),
    height: Metrics.rfv(50),
    flex: 1,
    textAlign: 'right',
    paddingTop: 13,
    paddingBottom: 13
    // backgroundColor: 'green'
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: Metrics.rfv(85),
    // backgroundColor: COLORS_NEW.red,
    backgroundColor: COLORS_NEW.mainBG,
    borderRadius: Metrics.rfv(10)
  }
});

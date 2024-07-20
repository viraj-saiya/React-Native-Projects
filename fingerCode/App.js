import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
// import ReactNativeBiometrics from 'react-native-biometrics';
import codePush from "react-native-code-push";

import SpInAppUpdates, {
  NeedsUpdateResponse,
  IAUUpdateKind,
  StartUpdateOptions,
} from 'sp-react-native-in-app-updates';

import DeviceInfo from 'react-native-device-info';

// appcenter codepush release-react -a saiyaviraj.09-gmail.com/fingerprint -d Production

// appcenter codepush release-react -a saiyaviraj.09-gmail.com/fingerprint -d Staging

  const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };



  const statusLog=(data)=>{
    console.log('statusLog',data)
  
  }

  
const update=()=>{
  console.log('I am code Push sync')
  codePush.sync({
    installMode: codePush.InstallMode.IMMEDIATE,statusLog
});
}



  // appcenter codepush release-react -a saiyaviraj.09-gmail.com/fingerprint -d Production
const App=()=> {


  // const isBiometricSupport = async () => {

  // //  
  //   const { biometryType ,available } = await ReactNativeBiometrics.isSensorAvailable()

  //   console.log('biometryType: ',biometryType,'available : ',available)

  //   if (available && biometryType === ReactNativeBiometrics.TouchID) {

  //     console.log('TouchID is supported',ReactNativeBiometrics.TouchID)

  //   } else if (available && biometryType === ReactNativeBiometrics.FaceID) {

  //     console.log('FaceID is supported',ReactNativeBiometrics.FaceID)

  //   } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {

  //     console.log('Biometrics is supported',ReactNativeBiometrics.Biometrics)

  //   } else {
  //     console.log('Biometrics not supported')
  //   }
  //   const {error,success}=await ReactNativeBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
  //   console.log(error,success)


  // }
  // useEffect(() => {

  //   // isBiometricSupport();
  //   // console.log('biometryType',biometryType)

  // }, []);



  // const inAppUpdates = new SpInAppUpdates(
  //     false // isDebug
  //   );
    
  //   console.log("inAppUpdates : ",inAppUpdates)
    
    
    
    
    
  //   inAppUpdates.checkNeedsUpdate({ curVersion:'1.0.1' }).then((result) => {
    
  //     console.log('result',result)
  //     if (result.shouldUpdate) {
  //       let updateOptions : StartUpdateOptions = {};
  //       if (Platform.OS === 'android') {
  //         // android only, on iOS the user will be promped to go to your app store page
  //         updateOptions = {
  //           updateType: IAUUpdateKind.FLEXIBLE,
  //         };
  //       }
  //       inAppUpdates.startUpdate(updateOptions); // https://github.com/SudoPlz/sp-react-native-in-app-updates/blob/master/src/types.ts#L78
  //     }
  //   }).catch((error) => 
  //     console.log(error)
  //   )
    
    


  
  // let readableVersion = DeviceInfo.getReadableVersion();

  // console.log('readableVersion',readableVersion)



  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'black'}}>
      <Text style={{color:'red'}}>App</Text>
      <Text style={{color:'blue'}}>App1</Text>
      <Text style={{color:'yellow'}}>App2</Text>
      <Text style={{color:'green'}}>App3</Text>
      <Text style={{color:'pink'}}>App4</Text>
      <Text style={{color:'pink'}}>Adding Some Text In App for randomizer</Text>


      <TouchableOpacity style={{backgroundColor:'skyblue',padding:10,margin:10,borderRadius:10}} onPress={update} >
                <Text style={{color:'#000',fontSize:15}}>Check for updates</Text>
            </TouchableOpacity>
      
    </View>
  )
}

export default codePush(codePushOptions)(App);



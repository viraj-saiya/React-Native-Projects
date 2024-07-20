/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { MQFlash } from "./Flash";

const App = () => {

  useEffect(() => {
    Flash.hasFlash(() => {

          console.log( 'CameraModal::componentDidMount:Flash Detected' );
          this.setState( { hasFlash: true } );
      },

      () => {
          // Does not have flash
          console.log( 'CameraModal::componentDidMount:No Flash Detected' );
          this.setState( { hasFlash: false } );

      }

    );
  }, [])
  


  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{flex:1,backgroundColor:'cyan'}}></View>     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

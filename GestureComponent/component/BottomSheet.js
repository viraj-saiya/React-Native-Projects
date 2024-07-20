import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import React,{useEffect,useCallback} from 'react';
import Animated,{useSharedValue,useAnimatedStyle,withSpring,interpolate, Extrapolate} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const {height: ScreenHeight} = Dimensions.get('window');

const BottomSheet = React.forwardRef(({children},ref) => {

  const transalateY= useSharedValue(0);
  const context =useSharedValue({ y: 0 })
  const statusAddValue = (Platform.OS==='ios')? 50 :0
  const MAX_TRANSALTE_Y=-ScreenHeight + parseInt(statusAddValue)
  const active=useSharedValue(false)
  
  const scrollTo=useCallback(
    (destination) => {
        'worklet'
        transalateY.value=withSpring(parseInt(destination),{damping:50})
        active.value =destination !==0 
    },
    [],
  )
  const isActive = useCallback(()=>{
        return active.value;
    }, []);

   React.useImperativeHandle(ref,()=>({scrollTo,isActive}),[scrollTo,isActive])

  
  
   const gesture = Gesture.Pan()
  .onStart(()=>{
    context.value = { y: transalateY.value  };
  })
  .onUpdate((event) => {
    transalateY.value=event.translationY + context.value.y;
    transalateY.value=Math.max(transalateY.value,MAX_TRANSALTE_Y )

  }).onEnd(()=>{
    if (transalateY.value>-ScreenHeight/3){
        scrollTo(0)
    }else if(transalateY.value<-ScreenHeight/1.5){
        scrollTo(MAX_TRANSALTE_Y)
        

    }
  });
  


  const rBottemSheetStyle= useAnimatedStyle(()=>{
    const borderRadius = interpolate(transalateY.value,
        [ MAX_TRANSALTE_Y+50  ,MAX_TRANSALTE_Y], 
        [25,5],
        Extrapolate.CLAMP
        
        )

    return{
        borderRadius,
        transform :[{translateY:transalateY.value}]
    }
  })


  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer,rBottemSheetStyle]}>
        <View style={styles.line} />
            {children}
      </Animated.View>
    </GestureDetector>
  );
})

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: ScreenHeight,
    width: '100%',
    borderRadius: 25,
    backgroundColor: '#FFF',
    position: 'absolute',
    top: ScreenHeight,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'gray',
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default BottomSheet;

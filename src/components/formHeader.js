import React from 'react';
import {View, StyleSheet,Text,Animated} from 'react-native';

const FormHeader = ({
  leftHeading,
  rightHeading,
  subHeading,
  leftHeaderTranlateX = 0,
  rightHeaderTranslateY = -20,
  rightHeaderOpacity =0,
}) => {
    return (
        <>
            <View style={styles.container}>
                <Animated.Text style={[styles.heading,{transform:[{ translateX:leftHeaderTranlateX}]}]}>{leftHeading}</Animated.Text>
                <Animated.Text style={[styles.heading,{opacity:rightHeaderOpacity,transform:[{translateY:rightHeaderTranslateY}]}]}>{rightHeading}</Animated.Text>
            </View>
            <Text style={styles.subheadng}>{subHeading}</Text>
        </>
    );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center'
  },
  heading:{
    fontSize:30,fontWeight:'bold',color:'#1b1b33',paddingRight:5
  },
  subheadng:{
    fontSize:18,color:'#1b1b33',textAlign:'center'
  }
})

export default FormHeader;

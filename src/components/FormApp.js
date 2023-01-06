import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View ,Dimensions, Animated} from 'react-native';
import FormHeader from './formHeader';
import Signin from './signinBtn';
import SigninForm from './signinForm';
import SignupForm from './signupForm';
import Singup from './singupBtn';


const {width} = Dimensions.get('window')
export default function FormApp({navigation}) {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef()

  const rightHeaderOpacity = animation.interpolate({
    inputRange:[0,width],
    outputRange:[1,0]
  })
  const leftHeaderTranlateX = animation.interpolate({
    inputRange:[0,width],
    outputRange:[0,40]
  })
  const rightHeaderTranslateY = animation.interpolate({
    inputRange:[0,width],
    outputRange:[0,-20]
  })
  let signInBtnColor = animation.interpolate({
    inputRange:[0,width],
    outputRange:['rgba(27,27,51,1)','rgba(27,27,51,0.4)']
  })
  let signUpBtnColor = animation.interpolate({
    inputRange:[0,width],
    outputRange:['rgba(27,27,51,0.4)','rgba(27,27,51,1)']
  })
  return (
    <View style={styles.container}>
      <View style={{height:60}}>
        <FormHeader rightHeaderTranslateY={rightHeaderTranslateY} rightHeaderOpacity={rightHeaderOpacity} leftHeaderTranlateX={leftHeaderTranlateX} leftHeading="Welcome" rightHeading="Back" subHeading="You Tube Manager" />
      </View>
      <View style={{flexDirection:'row',padding:20,paddingBottom:40}}>
        <Signin onPress={()=>scrollView.current.scrollTo({x:0})} formBtn={styles.formBtn} backgroundColor={signInBtnColor} signInRadius={styles.signInRadius} title="Login" />
        <Singup onPress={()=>scrollView.current.scrollTo({x:width})} formBtn={styles.formBtn} backgroundColor={signUpBtnColor} signUpRadius={styles.signUpRadius} title="Signup"/>
      </View>
      <ScrollView 
        horizontal 
        pagingEnabled 
        showsHorizontalScrollIndicator={false} 
        scrollEventThrottle={16}
        onScroll={Animated.event( [{nativeEvent: {contentOffset: {x:animation}}}] ,
          {useNativeDriver: false})}
        ref={scrollView}
      >
        <SigninForm  navigation={navigation} title="Login"/>
        <ScrollView>

          <SignupForm navigation={navigation} title="Signup"/>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,paddingTop:70},
  formBtn:{
    height:45,
    width:'50%',
    justifyContent:'center',
    alignItems:'center',
  },
  signInRadius:{borderTopLeftRadius:5,borderBottomLeftRadius:5},
  signUpRadius:{borderTopRightRadius:5,borderBottomRightRadius:5},
  signInColor:{backgroundColor:'#1b1b33'},
  signUpColor:{backgroundColor:'rgba(27,27,51,0.4)'}
});
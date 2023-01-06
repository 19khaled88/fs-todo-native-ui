import React from 'react';
import {View,TouchableWithoutFeedback, Text, StyleSheet,Animated} from 'react-native';

const Signin = ({title,formBtn,backgroundColor,signInRadius,onPress}) => {
    
    return (
        <>
            <TouchableWithoutFeedback onPress={onPress}>
                <Animated.View style={[formBtn,{backgroundColor},signInRadius]}>
                    <Text style={styles.title}>{title}</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    // singin:{
    //     height:45,
    //     width:'50%',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     backgroundColor:'#1b1b33',
    //     borderTopLeftRadius:5,
    //     borderBottomLeftRadius:5, 
        
    // },
    title:{color:'white',fontSize:16}
})

export default Signin;

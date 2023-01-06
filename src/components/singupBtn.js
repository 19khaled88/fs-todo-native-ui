import React from 'react';
import {View, StyleSheet,TouchableWithoutFeedback,Text,Animated} from 'react-native';

const Singup = ({title,backgroundColor,formBtn,signUpRadius,onPress}) => {
   
    return (
        <>
            <TouchableWithoutFeedback onPress={onPress}>
                <Animated.View style={[formBtn,{backgroundColor},signUpRadius]}>
                    <Text style={styles.title}>{title}</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    // signup:{
    //     height:45,
    //     width:'50%',
    //     justifyContent:'center',
    //     backgroundColor:'rgba(27,27,51,0.4)',
    //     alignItems:'center',
    //     borderTopRightRadius:5,
    //     borderBottomRightRadius:5

    //     },
    title:{color:'white',fontSize:16}
})

export default Singup;

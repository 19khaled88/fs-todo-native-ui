import React from 'react';
import {View, StyleSheet,Text,TextInput,Dimensions} from 'react-native';

const FormTemplate = (props) => {
    const {title,example,change,error,blur ,secure} =props
    return (
        <View style={styles.field}>
            <View style={styles.error_title}>
                <Text style={styles.title}>{title}</Text>
                {error ? (<Text style={{color:'red',fontSize:16}}>{error}</Text>) : null}
            </View>
            <TextInput 
               {...props}
                secureTextEntry={secure} 
                placeholder={example} 
                autoCapitalize="none" 
                onChangeText={change} 
                onBlur={blur} 
                style={styles.input} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:25,color:'black',fontWeight:'bold'
    },
    input:{
        borderWidth:1,
        borderColor:'#1b1b33',
        height:35,
        borderRadius:8,
        fontSize:16,
        paddingLeft:10
    },
    field:{
        paddingBottom:20
    },
    error_title:{
        flexDirection:'column',justifyContent:'space-between'
    }
})

export default FormTemplate;

import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';

const FormSubmit = ({title,handleSubmit,submitting}) => {
    const backgroundColor = submitting ? 'rgba(27,27,51,0.4)' : 'rgba(27,27,51,1)'
    return (
        <TouchableOpacity onPress={!submitting ? handleSubmit : null} style={[styles.container ,{backgroundColor}]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        height:45,
        backgroundColor:'rgba(27,27,51,0.4)',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
       fontSize:18,color:'#fff' 
    }
})

export default FormSubmit;

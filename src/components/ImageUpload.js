import React from 'react';
import {View, StyleSheet, TouchableOpacity,Text} from 'react-native';

const ImageUpload = () => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                    <Text>Upload Image</Text>
                </TouchableOpacity>
                <Text>Skip</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default ImageUpload;

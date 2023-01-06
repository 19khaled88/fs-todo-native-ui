import React from 'react';
import {View, StyleSheet,Text,ImageBackground, Image,AsyncStorageStatic} from 'react-native';
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import {useFonts} from 'expo-font'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken } from '../api/tokenStore';
const CustomDrawer = (props) => {
    const [loaded] = useFonts({
        RobotoMedium: require('../../assets/fonts/Roboto-Medium.ttf'),
        RobotoItalic: require('../../assets/fonts/Roboto-Italic.ttf'),
      
      });
      if(!loaded){
        return null;
      }
      
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView style={styles.container} {...props} contentContainerStyle={{backgroundColor:'#8200d6'}}>
                <ImageBackground source={require('../../assets/bgImage.png')} style={styles.imageBackground}>
                    <View style={styles.imageUpdate}>
                        <Image source={require('../../assets/user.png')} style={styles.image}/>
                        <Feather name="edit" size={25} color="black" />
                    </View>
                    
                    <Text style={styles.address}>Name: Khaled Ahasan</Text>
                    <Text style={styles.address} >Email: khaled@gmail.com</Text>
                </ImageBackground>
                <View style={styles.drawerList}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            <View style={{padding:20, borderTopWidth:1,borderTopColor:'#ccc'}}>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name="share-social-outline" size={25} color="black" />
                        <Text style={{fontSize:15,fontFamily:'RobotoMedium',marginLeft:5}}>Share you neighbour</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <AntDesign name="logout" size={24} color="black" />
                        <Text style={{fontSize:15,fontFamily:'RobotoMedium',marginLeft:5}}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       
    },
    drawerList:{
        flex:1,
        backgroundColor:'#fff'
    },
    imageBackground:{
        flex:1,
        paddingTop:20,
        width:'100%',
        
    },
    image:{
        height:50,
        width:50,
        borderRadius:50,
        marginBottom:10,
        resizeMode:'cover',
        alignItems:'center',
        marginLeft:20,
    },
    address:{
        paddingLeft:20,
        color:'#fff', fontSize:18,fontFamily:'RobotoItalic'
    },
    imageUpdate:{
        flexDirection:'row',
        height:60,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
       
        paddingRight:10
    }
})

export default CustomDrawer;

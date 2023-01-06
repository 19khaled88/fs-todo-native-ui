import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import ImageUpload from '../components/ImageUpload';
import CustomDrawer from './CustomDrawer';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
function HomeScreen(){
    return(
        <View>
            <Text style={{textAlign:'center' , marginTop:300}} >
            Home Screen 
            </Text>
        </View>
    )
}
function Notification({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
             <Text>Notification Page</Text>
          <Button 
          onPress={() => navigation.goBack()}
          title="Go back home"
          />
        </View>
      );
}
function Settings({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Setting Page</Text>
          <Button 
          onPress={() => navigation.goBack()}
          title="Go back home"
          />
        </View>
      );
}
function Messages({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Message Page</Text>
          <Button 
          onPress={() => navigation.goBack()}
          title="Go back home"
          />
        </View>
      );
}

const Drawer = createDrawerNavigator()

const DrawerNav = () => {
    return (
            <Drawer.Navigator  
            drawerContent={props=><CustomDrawer {...props} /> } 
            screenOptions={{
                headerShown:true,
                headerStyle:{
                    backgroundColor:'transparent',
                    elevation:0,
                    shadowOpacity:0,
                },
                headerTitle:'',
            }} 
            initialRouteName='Home'
            >
                
                <Drawer.Screen name='Home' component={HomeScreen} options={{
                    drawerIcon:({})=>(
                        <MaterialCommunityIcons name="home-outline" size={24} color="black" />
                    ),
                    title:'Home'
                }}/>
                <Drawer.Screen name='Notification' component={Notification} options={{
                    drawerIcon:({})=>(
                        <Ionicons name="md-notifications-outline" size={24} color="black" />
                    )
                }}/>
                <Drawer.Screen name='Settings' component={Settings} options={{
                    drawerIcon:({})=>(
                        <SimpleLineIcons name="settings" size={24} color="black" />
                    )
                }}/>
                <Drawer.Screen name='Message' component={Messages} options={{
                    drawerIcon:({})=>(
                        <AntDesign name="message1" size={24} color="black" />
                    )
                }}/>
            </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({})

export default DrawerNav;

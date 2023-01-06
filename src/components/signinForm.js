import React, { useEffect, useState } from 'react';
import {View, StyleSheet,Dimensions,Text, TextInput,KeyboardAvoidingView,Platform} from 'react-native';
import FormSubmit from './formSubmit';
import FormTemplate from './formTemplate';
import {StackActions} from '@react-navigation/native'
import axios from 'react-native-axios'
import {Formik} from 'formik'
import * as Yup from 'yup'
import baseUrl from '../api/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from '../api/tokenStore';
const SigninForm = ({navigation}) => {
    const userInfo={
        email:'',
        password:'',
    }
    const validation= Yup.object({
        email:Yup.string().email('Invalid Email!').required('Email addres is requied'),
        password:Yup.string().trim().min(8,'Password should be al least 8 characters').required('Password is required')
    })
    
    const signinSubmit=async (values, actions)=>{
        const res = await baseUrl.post('/signin',{...values})
        if(res.data.success && res.data.token !== null){
          
            const token = res.data.token
            setToken(token)
            navigation.dispatch(
                StackActions.replace('Drawer')
            )
        }
        // console.log(res.data)
        actions.resetForm();
        actions.setSubmitting(false);
         // setTimeout(()=>{
         //  console.log(values)
         //  actions.resetForm();
         //  actions.setSubmitting(false);
         // },3000)
          
     }
    return (
        <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? "padding" : null} style={styles.container}>
           
           <Formik initialValues={userInfo} validationSchema={validation} onSubmit={signinSubmit}>
                {({values,handleChange,handleBlur,handleSubmit,touched,errors,isSubmitting})=>{
                     const {email,password} = values
                    return(
                        <>
                            <FormTemplate 
                            error={touched.email && errors.email}
                            title="Email" 
                            example="example@gmail.com"
                            blur={handleBlur('email')}
                            change={handleChange('email')}
                            value={email}
                            name="email"
                            />
                            <FormTemplate 
                            error={touched.password && errors.password}
                            title="Password" 
                            example="example@gmail.com"
                            blur={handleBlur('password')}
                            change={handleChange('password')}
                            value={password}
                            name="password"
                            />
                            <FormSubmit submitting={isSubmitting} handleSubmit={handleSubmit} title="Sign In" />
                        </>
                    )
                }}

           </Formik>
            
        </KeyboardAvoidingView >  
    );
}

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        paddingHorizontal:20
    },
})

export default SigninForm;

import React from 'react';
import {View, StyleSheet,Dimensions,Text,KeyboardAvoidingView} from 'react-native';
import FormSubmit from './formSubmit';
import FormTemplate from './formTemplate';
import {Formik} from 'formik'
import * as Yup from 'yup'
import baseUrl from '../api/baseUrl';
const SignupForm = () => {
    const userInfo={
        fullName:'',
        email:'',
        password:'',
        confirmPassword:'',
    }
    const validation=Yup.object({
        fullName:Yup.string().trim().min(3, 'Invalid Name').required('full name is required'),
        email:Yup.string().email('Invalid Email!').required('Email addres is requied'),
        password:Yup.string().trim().min(8,'Password should be al least 8 characters').required('Password is required'),
        confirmPassword:Yup.string().equals([Yup.ref('password'),null],'Passwords must match')
    })

    const signUpSubmit=async(values,actions)=>{
      
        const res = await baseUrl.post('/signup',{...values})
       
        // actions.resetForm()
        // actions.setSubmitting(false)

       
        // setTimeout(()=>{
        //     console.log(values)
        //     formikActions.resetForm()
        //     formikActions.setSubmitting(false)
        // },3000)
    }
    
    return (
       
            <KeyboardAvoidingView style={styles.container}>
                <Formik  initialValues={userInfo} validationSchema={validation} onSubmit={signUpSubmit}>
                    {({values,handleChange,handleSubmit ,errors,touched,handleBlur,isSubmitting})=>{
                        const {fullName,email,password,confirmPassword} = values
                        
                            return(
                                <>
                                    <FormTemplate
                                        error={touched.fullName && errors.fullName}
                                        title="Full Name"
                                        example="Full Name"
                                        blur={handleBlur('fullName')}
                                        change={handleChange('fullName')}
                                        name='fullName'
                                        value={fullName}
                                       />
                                    <FormTemplate 
                                    error={touched.email && errors.email}
                                        title="Email" 
                                        value={email}
                                        example="example@gmail.com" 
                                        blur={handleBlur('email')}
                                        change={handleChange('email')}
                                    />
                                    <FormTemplate 
                                        error={touched.password && errors.password}
                                        title="Password" 
                                        example="********" 
                                        secure={true}
                                        blur={handleBlur('password')}
                                        change={handleChange('password')}
                                        value={password}
                                    />
                                    <FormTemplate 
                                        error={touched.confirmPassword && errors.confirmPassword}
                                        title="Confirm Password" 
                                        example="********" 
                                        secure={true}
                                        blur={handleBlur('confirmPassword')}
                                        change={handleChange('confirmPassword')}
                                        value={confirmPassword}
                                    />
                                    <FormSubmit submitting={isSubmitting} handleSubmit={handleSubmit} title="Sign Up"/>
                                </>
                            )
                        }
                    }
                </Formik>
            </KeyboardAvoidingView> 
       
    );
}

const styles = StyleSheet.create({
    container:{
        
        width:Dimensions.get('window').width,
        paddingHorizontal:20
    },
   
})

export default SignupForm;

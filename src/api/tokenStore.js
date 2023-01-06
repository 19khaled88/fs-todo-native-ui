import AsyncStorage from "@react-native-async-storage/async-storage"

export const setToken = async(token)=>{
    try {
        await AsyncStorage.setItem('fsTokenConsistent',token)
    } catch (error) {
        return error
    }
}

export const getToken =async()=>{
    try {
        const value = await AsyncStorage.getItem('fsTokenConsistent')
        if(value !== null){
            return value
        }else{

            return false
        }
    } catch (error) {
        return error
    }
}
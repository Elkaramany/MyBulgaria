import { Alert } from "react-native";
//import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message'

export const validateName = (name: string): boolean => {
    if (!name || name.length < 2) return false;
    return true;
}

export const validateEmail = (email: string): boolean => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return false;
    }
    return true;
}

export const validatePassword = (password: string | undefined): boolean => {
    if (!password || password === undefined) return false
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!password || !password.length || !password.match(passw)) {
        return false
    }
    return true
}

export const validatePhone = (phone: string) => {
    var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (regex.test(phone)) return true
    return false
}

export const formatDate = (date: Date | string) => {
    return date.toString().substring(0, date.toString().length - 18)
}

export const selectItem = (item: string, arr: string[]) => {
    //Item already selected so remove it
    if (itemSelected(item, arr)) {
        let newArr = [...arr]
        newArr = newArr.filter(i => i !== item);
        return newArr
    } else {
        //Only have 5 catefories max
        if (arr.length <= 4) {
            const newArr = [...arr]
            newArr.push(item)
            return newArr
        } else {
            return arr
        }
    }
}

export const itemSelected = (cat: string, arr: string[]) => {
    if (arr && arr.length && arr.includes(cat)) return true
    return false
}

const handleImage = async (type: string) => {
    const image: any =
        type === "gallery"
            ? await ImagePicker.openPicker({
                width: 300,
                height: 300,
                cropping: true,
                includeBase64: true
            })
            : await ImagePicker.openCamera({
                width: 300,
                height: 300,
                cropping: true,
                includeBase64: true,
            })

    if (image) return `data:image/jpg;base64,${image.data}`
    return null
};


export const handleSelection = async (): Promise<string | null> => new Promise((resolve) => {
    Alert.alert("Add an image", "", [
        {
            text: "Take photo",
            onPress: async () => {
                resolve(await handleImage("camera"))
            }
        },
        {
            text: "Choose from library",
            onPress: async () => {
                resolve(await handleImage("gallery"))
            }
        },
        { text: "Cancel", style: "cancel" },
    ])
});

export const getSuggesions = (text: string, arr: any[]): any[] => {
    if (!text.length || !arr.length) return []
    return arr.filter(
        (val) => val.toLowerCase().indexOf(text.toLowerCase()) > -1
    );
}

export const ShowToast = (type: string, text1: string, text2?: string) => {
    if (text2?.length) {
        Toast.show({
            type,
            text1,
            text2,
        });
    } else {
        Toast.show({
            type,
            text1,
        });
    }
}
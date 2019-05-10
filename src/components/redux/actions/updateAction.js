import {PERSONAL_DETAILS, EDUCATIONAL_DETAILS, CONTACT_DETAILS, REGISTER_DETAILS, EDUCATION_FORM, PERSONAL_FORM, CONTACT_FORM, REGISTER_FORM } from './types';

export const pesonalDetails = data => {
    return{
        type: PERSONAL_DETAILS,
        payload: data
    }
}

export const educationalDetails = list => {
    return{
        type: EDUCATIONAL_DETAILS,
        payload: list
    }
}

export const contactDetails = list => {
    return{
        type: CONTACT_DETAILS,
        payload: list
    }

}

export const registerDetails = list => {
    return{
        type: REGISTER_DETAILS,
        payload: list
    }

}


export const educationalForm = list => {
    return{
        type: EDUCATION_FORM,
        payload: list
    }
}
export const personalForm = list => {
    return {
        type: PERSONAL_FORM,
        payload: list
    }
}
export const contactForm = list => {
    console.log('data coming---------',list)
    return {
        type: CONTACT_FORM,
        payload: list
    }
}

export const registerForm = list => {
    console.log('data coming---------',list)
    return {
        type: REGISTER_FORM,
        payload: list
    }
}



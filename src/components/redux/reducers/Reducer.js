import { PERSONAL_DETAILS, EDUCATIONAL_DETAILS, CONTACT_DETAILS, REGISTER_DETAILS, EDUCATION_FORM, PERSONAL_FORM, CONTACT_FORM, REGISTER_FORM } from '../actions/types'


const initialState = {
    personalData: [],
    educationalData: [],
    contactData: [],
    registerData: [],
    educationalForm: [],
    personalForm: [],
    contactForm: [],
    registerForm: [],
}

export default function (state = initialState, action) {

    switch (action.type) {
        case PERSONAL_DETAILS:
            return {
                ...state,
                personalData: action.payload
            }

        case PERSONAL_DETAILS:
            const emplData = {
                personalData: action.payload
            }
            return {
                ...state, personalData: [...state.personalData, emplData]

            }


        case EDUCATIONAL_DETAILS:
            return {
                ...state,
                educationalData: action.payload
            }

        case EDUCATIONAL_DETAILS:
            const eduData = {
                educationalData: action.payload
            }
            return {
                ...state, educationalData: [...state.educationalData, eduData]

            }


        case CONTACT_DETAILS:
            console.log("aaa in reducer88----", action.payload);
            return {
                ...state,
                contactData: action.payload
            }
     
            case REGISTER_DETAILS:
            console.log("aaa in reducer88----", action.payload);
            return {
                ...state,
                registerData: action.payload
            }

        // case CONTACT_DETAILS:
        // console.log("aaa in reducer----",action.payload)
        // const   contData = {
        //     contactData:action.payload
        //   }
        //   return { ...state, contactData:[...state.contactData, contData]

        //   }

        case EDUCATION_FORM:
            return {
                ...state,
                educationalForm: action.payload
            }
        case PERSONAL_FORM:
            return {
                ...state,
                personalForm: action.payload
            }
        case CONTACT_FORM:
            console.log("aaa in CONTACT_FORM----", action.payload.email);
            const contactData = {
                email: action.payload.email,
                name: action.payload.name,
                comments: action.payload.comments
            }
            return {
                ...state,
                contactForm: [...state.contactForm, contactData]
            }

        case REGISTER_FORM:
            console.log('data in reduser register form------', action.payload);
            const registerData = {
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                email: action.payload.email,
                password: action.payload.password
            }
            console.log('rrrr---', registerData)
            return {
                ...state,
                registerForm:[...state.registerForm, registerData]
            }

        default:
            return state;
    }

}


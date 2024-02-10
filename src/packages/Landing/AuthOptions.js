import { v4 as uuidv4 } from 'uuid';

export default [
    {
        id: uuidv4(),
        type: 'login',
        fields: [
            {
                id: uuidv4(),
                label: 'Emaill address',
                type: 'email',
                placeholder: 'johndoe@gmail.com',
                required: true,
                hint: '',
            },
            {
                id: uuidv4(),
                label: 'Password',
                placeholder: '',
                type: 'password',
                required: true,
                hint: 'Enter your password to access this site'
            }
        ],
        button: {
            caption: 'Login',
            icon: '',
        },
        hasOptions: true,
        options: {
            text: "New here? create account"
        }
    },
    {
        id: uuidv4(),
        type: 'signup',
        fields: [
            {
                id: uuidv4(),
                label: 'Emaill address',
                type: 'email',
                placeholder: 'johndoe@gmail.com',
                required: true,
                hint: '',
            },

        ],
        button: {
            caption: 'Sign up',
            icon: '',
        },
        hasOptions: true,
        options: {
            text: "Already have an account? login"
        }
    },
    {
        id: uuidv4(),
        type: 'confirm',
        fields: [
            {
                id: uuidv4(),
                caption: 'Emaill address',
                type: 'email',
                required: true,
                hint: '',
            },
            {
                id: uuidv4(),
                caption: 'Full name',
                type: 'email',
                required: true,
                hint: '',
            },
            {
                id: uuidv4(),
                label: 'Password',
                type: 'password',
                placeholder: '',
                required: true,
                hint: '',
            },
            {
                id: uuidv4(),
                label: 'Confirm password',
                type: 'password',
                placeholder: '',
                required: true,
                hint: '',
            },
        ],
        button: {
            caption: 'Continue',
            icon: '',
        },
        hasOptions: false,
    },
]
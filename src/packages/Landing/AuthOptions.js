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
                value: 'email',
            },
            {
                id: uuidv4(),
                label: 'Password',
                placeholder: '',
                type: 'password',
                required: true,
                hint: 'Enter your password to access this site',
                value: 'password',
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
                value: 'email',
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
                label: 'Full name',
                type: 'email',
                required: true,
                placeholder: 'John Doe',
                hint: '',
                value: 'name',
            },
            {
                id: uuidv4(),
                label: 'Password',
                type: 'password',
                placeholder: '',
                required: true,
                hint: '',
                value: 'password',
            },
            {
                id: uuidv4(),
                label: 'Confirm password',
                type: 'password',
                placeholder: '',
                required: true,
                hint: '',
                value: 'confirmPassword',
            },
        ],
        button: {
            caption: 'Continue',
            icon: '',
        },
        hasOptions: false,
    },
]
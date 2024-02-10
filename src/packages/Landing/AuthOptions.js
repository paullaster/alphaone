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
        type: 'confirm_email',
        fields: [
            {
                id: uuidv4(),
                caption: 'Emaill address',
                type: 'email',
                required: true,
            },
            {
                id: uuidv4(),
                caption: 'Password',
                type: 'password',
                required: true,
            },
            {
                id: uuidv4(),
                caption: 'Confirm password',
                type: 'password',
                required: true,
            }
            
        ]
    },
]
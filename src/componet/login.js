import axios from 'axios'
import { useState} from 'react'
const Login = (props) =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')
    const [emailornumber, setEmailornumber] = useState ('email')

    const submitform = (e) =>{
        e.preventDefault()
        if( emailornumber === 'email'){
            axios.post ('https://murmuring-coast-34375.herokuapp.com/users/emaillogin', {
                email: email,
                password: password
            }).then ((response) =>{
                console.log(response.data)
                props.setUser(response.data.user)
                localStorage.setItem('userId', response.data.userId)
            }).catch((error) =>{
                console.log(error)
            })
        } else if(emailornumber ==='number'){
            axios.post ('https://murmuring-coast-34375.herokuapp.com/users/numberlogin', {
                number: number,
                password: password
            }).then ((response) =>{
                console.log(response.data)
                props.setUser(response.data.user)
                localStorage.setItem('userId', response.data.userId)
            }).catch((error) =>{
                console.log(error)
            })

        }


    }
    return(
    <div className = 'loginpage'>
        <div className = 'login'>
        <div className = 'loginform'>
        {
            emailornumber === 'email' ?

                <form onSubmit = {submitform}>
                    <h3>Login to your Account</h3>
                    <div className = 'input'>
                        
                        <input placeholder = 'email' value = {email} onChange = {(e) =>(setEmail(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        
                        <input placeholder = 'password' type = 'password' value = {password} onChange = {(e) =>(setPassword(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        <input type = 'submit' value = 'Login!'/>
                    </div>

                </form>

            : null
        }

        {

            emailornumber === 'number' ?
                <form onSubmit = {submitform}>
                    <h3>Login to your Account</h3>
                    <div className = 'input'>
                        
                        <input placeholder = 'Number' value = {number} onChange = {(e) =>(setNumber(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        
                        <input placeholder = 'Password' type = 'password' value = {password} onChange = {(e) =>(setPassword(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        <input type = 'submit' value = 'Login!'/>
                    </div>

                </form>

            :
            null
        }
        </div>
            <div className = 'buttons'>
                <button onClick = {() =>(setEmailornumber('number'))}>Login with Number</button>
                <button onClick = {() =>(setEmailornumber('email'))}>Login with Email</button>
            </div>
        </div>
    </div>
)

}

export default Login
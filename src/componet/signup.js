import axios from 'axios'
import { useState} from 'react'

const Signup = (props) =>{

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [sex, setSex] = useState('Male')
    const [number, setNumber] = useState('')
    const [region, setRegion] = useState('')
    const [status, setStatus] = useState('Single')
    const [lookingFor, setLookingFor] = useState('Love')

    const submitform = (e) =>{
        e.preventDefault()

        axios.post ('https://murmuring-coast-34375.herokuapp.com/users/signup', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            number: number,
            region: region,
            sex:sex,
            status:status,
            lookingFor:lookingFor
        }).then ((response) =>{
            console.log(response.data)
            props.setUser(response.data.user)
            localStorage.setItem('userId', response.data.userId)
        }).catch((error) =>{
            console.log(error)
        })

    }

    return(
    <div className = 'signuppage'>

        <div className ='signup'>
            <form onSubmit = {submitform}>
            <h3>Create A new Account</h3>

                <div className = 'input'>
                    <input  placeholder = 'First name' value = {firstname} onChange = {(e) =>(setFirstName(e.target.value))}/>
                </div>

                <div className = 'input'>
                    <input  placeholder = 'last name' value = {lastname} onChange = {(e) =>(setLastName(e.target.value))}/>
                </div>

                <div className = 'input'>   
                    <input placeholder = 'Email' value = {email} onChange = {(e) =>(setEmail(e.target.value))}/>
                </div>

                <div className = 'input'>      
                    <input placeholder = 'Password' type = 'password' value = {password} onChange = {(e) =>(setPassword(e.target.value))}/>
                </div>


                <div className = 'input'>
                    <input  placeholder = 'Phone number' value = {number} onChange = {(e) =>(setNumber(e.target.value))}/>
                </div>

                <div className = 'input'>
                    <input  placeholder = 'Region' value = {region} onChange = {(e) =>(setRegion(e.target.value))}/>
                </div>

                <div className = 'input'>
                   <label for = 'sex'> I am a </label>    
                   <select name = 'sex' onChange = {(e) =>(setSex(e.target.value))}>
                        <option value = 'Male'> Male </option>
                        <option value = 'Female'> Female </option>
                        <option value = 'Other'> Other </option>
                         
                    </select>                
                </div>

                <div className = 'input'>
                   <label for = 'status'> Relationship Status </label>    
                   <select name = 'status' onChange = {(e) =>(setStatus(e.target.value))}>
                        <option value = 'Single'> Single </option>
                        <option value = 'Taken'> Taken </option>
                        <option value = 'Its Complicated'> Its Complicated </option>
                        <option value = 'Searching'> Searching</option>   
                   </select>               
                </div>

                <div className = 'input'>
                 <label for = 'lookingfor'> What are you looking for </label>    
                   <select name = 'lookingfor' onChange = {(e) =>(setLookingFor(e.target.value))}>
                        <option value = 'Love'> Love </option>
                        <option value = 'friendship'> friendship </option>
                        <option value = 'dating'> dating </option>
                        <option value = 'chatting'> chatting </option>
                        <option value = 'networking'> networking </option>    
                   </select>
                </div>

                <div className = 'input'>
                    <input type = 'submit' value = 'Sign up!'/>
                </div>
            </form>
        </div>
    </div>
)

}

export default Signup
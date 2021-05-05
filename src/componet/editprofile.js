import axios from 'axios'
import { useState} from 'react'
import { useHistory } from "react-router-dom";

const Editprofile = (props) =>{

    let history = useHistory();

    const [firstname, setFirstName] = useState(props.user.firstname)
    const [lastname, setLastName] = useState(props.user.lastname)
    const [email, setEmail] = useState(props.user.email)
    const [password, setPassword] = useState(props.user.password)
    const [sex, setSex] = useState(props.user.sex)
    const [number, setNumber] = useState(props.user.number)
    const [region, setRegion] = useState(props.user.region)
    const [status, setStatus] = useState(props.user.status)
    const [lookingfor, setLookingFor] = useState(props.user.lookingFor)

    const submitform = (e) =>{
        e.preventDefault()
        const userId = localStorage.getItem('userId')

        axios.put (`http://localhost:3001/users/editprofile/${userId}`, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            number: number,
            region: region,
            sex:sex,
            status:status,
            lookingfor:lookingfor
        }).then ((response) =>{
            console.log(response.data)
        }).catch((error) =>{
            console.log(error)
        })
      history.push('/profile')

    }

    return(
        <div className = 'editprofilepage'>

        <div className ='editprofile'>
            <form onSubmit = {submitform}>
            <h3>Edit Your Profile</h3>

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
                        <option value = 'Other'> Other </option>
                        <option value = 'Male'> Male </option>
                        <option value = 'Female'> Female </option>
                         
                    </select>                
                </div>

                <div className = 'input'>
                   <label for = 'status'> Relationship Status </label>    
                   <select name = 'status' onChange = {(e) =>(setStatus(e.target.value))}>
                        <option value = 'Other'> Other </option>
                        <option value = 'Single'> Single </option>
                        <option value = 'Taken'> Taken </option>
                        <option value = 'Its Complicated'> Its Complicated </option>
                        <option value = 'Searching'> Searching</option>   
                   </select>               
                </div>

                <div className = 'input'>
                 <label for = 'lookingfor'> What are you looking for </label>    
                   <select name = 'lookingfor' onChange = {(e) =>(setLookingFor(e.target.value))}>
                        <option value = 'Other'> Other </option>
                        <option value = 'Love'> Love </option>
                        <option value = 'friendship'> friendship </option>
                        <option value = 'dating'> dating </option>
                        <option value = 'chatting'> chatting </option>
                        <option value = 'networking'> networking </option>    
                   </select>
                </div>

                <div className = 'input'>
                    <input type = 'submit' value = 'Edit'/>
                </div>
            </form>
        </div>
        </div>
)

}

export default Editprofile
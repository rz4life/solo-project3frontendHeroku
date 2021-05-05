import axios from 'axios'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'



const Newfriend = (props) =>{
    const [firstname, setFirstname] = useState('')
    const [alluser, setAlluser] = useState([])

    const submitform = (e) =>{
        e.preventDefault()
        axios.post ('https://murmuring-coast-34375.herokuapp.com/users/getalluser', {
            firstname: firstname,
        }).then ((response) =>{
            console.log(response.data.alluser)
            setAlluser(response.data.alluser)
        })
    }
    

    return(
    <div className= 'addafriendpage'>
        <div className = 'findfriend'>
            <h2>Add a New friend</h2>

            <form className ='searchform' onSubmit = {submitform}>
                    <div className = 'input'>
                        
                        <input placeholder = 'firstname' value = {firstname} onChange = {(e) =>(setFirstname(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        <input type = 'submit' value = 'search'/>
                    </div>
            </form>

            </div>

                {
                    alluser.map((user,i) =>(
                     <div  key = {i}>     
                    <Link to = '/viewafriend'> <h4 onClick = {() =>(props.setSinglefriend(user))}>{user.firstname} {user.lastname} </h4> </Link>    
                     </div>
                    ))
                }

    </div>
    )


}

export default Newfriend
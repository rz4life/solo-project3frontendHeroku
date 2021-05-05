import {Link} from 'react-router-dom'

const Profile = (props) =>{

    console.log(props.user)

    return(
      <div className = 'profilepage'>
        <div className = 'profile'>
           <h3>Personal Information </h3> 
           <br/>
           <br/>
            <h5>Username: {props.user.firstname}</h5>
            <h5>Gender: {props.user.sex}</h5>
            <h5>Region: {props.user.region}</h5>
            <h5>Relationship Status: {props.user.status}</h5>
            <h5>Looking for: {props.user.lookingfor}</h5>
           <br/>
           <br/>
           <h4>Private Information- only you can see this</h4> 
           <br/>
             <h5>Full Name: {props.user.firstname} {props.user.lastname}</h5>
             <h5>Email: {props.user.email}</h5>
             <h5>Number: {props.user.number}</h5>
             <h5>Member since: {props.user.createdAt}</h5>

           <Link to = '/editprofile'><button>Edit Profile</button></Link>
           <button onClick = {() => (
             console.log('deleted')
           )}
           >Delete Profile</button>
         </div>
      </div>
    )


}

export default Profile
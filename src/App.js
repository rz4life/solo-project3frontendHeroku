import './App.css';
import {Redirect, Route} from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './navbar'
import Chat from './componet/chat'
import Friends from './componet/friends'
import Keepup from './componet/keepup'
import Newfriend from './componet/newfriend'
import Profile from './componet/profile'
import Signup from './componet/signup'
import Login from './componet/login'
import Viewafriend from './componet/viewaFriend'
import Editprofile from './componet/editprofile'
import Messaging from './componet/messaging'



function App() {
  const [user, setUser] = useState(null)
  const [friendId, setFriendId] = useState('')
  const [friendname, setFriendname] = useState('')
  const [singlefriend, setSinglefriend] = useState({})
  
  const getUserInfo = async () =>{
    
    const userId = localStorage.getItem('userId')
    try {
    const user = await axios.get(`https://murmuring-coast-34375.herokuapp.com/users/getuser/${userId}`)
    console.log(user)
    if( user.data.user){
      setUser(user.data.user)
    }
    } 
    catch(error){
      console.log(error)
    }
  }
  useEffect(() =>{getUserInfo()}, [])

  return (
    <div className="App">
      <Navbar user = {user}  setUser = {setUser}/>

      <Route path = '/friends' exact render = {() =>{
        if(user)
        {
          return <Friends setSinglefriend = {setSinglefriend}/>
        }else{
          return <Redirect to = "/login"/>
        }
        
      }}/>
      <Route path = '/newfriend' exact render = {() =>{
               if(user)
               {
                 return <Newfriend  setSinglefriend = {setSinglefriend}/> 
               }else{
                 return <Redirect to = "/login"/>
               }
              }}/>
      <Route path = '/viewafriend' exact render = {() =>{
               if(user)
               {
                 return <Viewafriend singlefriend = {singlefriend} /> 
               }else{
                 return <Redirect to = "/login"/>
               }
              }}/>

        
      <Route path = '/chat' exact render = {() =>{
               if(user)
               {
                 return <Chat user = {user} setFriendname = {setFriendname} setFriendId = {setFriendId}/>
               }else{
                 return <Redirect to = "/login"/>
               }
               }}/>

      <Route path = '/messaging' exact render = {() =>{
               if(user)
               {
                 return <Messaging friendname = {friendname} friendId = {friendId}/>
               }else{
                 return <Redirect to = "/login"/>
               }
               }}/>

      <Route path = '/keepup' exact render = {() =>{
        
        if(user)
        {
          return <Keepup/>
        }else{
          return <Redirect to = "/login"/>
        }
        }}/>
      <Route path = '/profile' exact render = {() =>{
        
        if(user)
        {
          return <Profile user = {user}/>
        }else{
          return <Redirect to = "/login"/>
        }
        }}/>

       <Route path = '/editprofile' exact render = {() =>{
        
        if(user)
        {
          return <Editprofile user = {user}/>
        }else{
          return <Redirect to = "/login"/>
        }
        }}/>
      <Route path = '/signup' exact render = {() =>{
        
        if(user)
        {
          return <Redirect to = "/friends"/>
        }else{
          return <Signup  setUser = {setUser}/>
        }
        
      }}/>
      <Route path = '/login' exact render = {() =>{
        
        if(user)
        {
          return <Redirect to = "/friends"/>
        }else{
          return <Login  setUser = {setUser}/>
        }
      
      }}/>

    </div>
  );
}

export default App;

import axios from 'axios'
import { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Friends = (props) =>{
    const [allfriendreqest, setAllfriendreqest] = useState([])
    const [allfriend, setAllfriend] = useState([])
    const [requeststatus, setRequeststatus] = useState('Accept')



    const getmyfriendrequests =() =>{
    const userId = localStorage.getItem('userId')

        axios.get(`http://localhost:3001/friend/getmyfriendequests/${userId}`)
        .then((response) =>{
            console.log(response.data.userfriends)
            setAllfriendreqest(response.data.userfriends)
        }).catch((error) =>{
            console.log(error)
        })
    }
    useEffect(getmyfriendrequests, [])

    const getmyfriend =() =>{
        const userId = localStorage.getItem('userId')
    
            axios.get(`http://localhost:3001/friend/getuserfriends/${userId}`)
            .then((response) =>{
                console.log(response.data.acceptedFriends)
                setAllfriend(response.data.acceptedFriends)
            }).catch((error) =>{
                console.log(error)
            })
        }
        useEffect(getmyfriend, [])
    
    


    return(
        <div className = 'friendpage'>

                <div className = 'friendrequests'>
                        <h3>Your Friend Requests</h3>
                        {
                         allfriendreqest.map((user,i) =>(
                        <div className = 'request' key = {i}>     
                         <h4>{user.friend.firstname} {user.friend.lastname}</h4> 
                         <button className = 'acceptbutton' onClick = {() =>{
                          const userId = localStorage.getItem('userId')

                        axios.post(`http://localhost:3001/friend/acceptafriendrequest/${userId}`)
                        .then((response) =>{
                           console.log(response.data)
                           setRequeststatus('Accepted')
                        }).catch((error) =>{
                           console.log(error)
                        })  
                        }}>{requeststatus}</button>  
                        </div>
                        ))
                        }
                </div>

                <div className = 'friend'>
                     <h2>Friends</h2>
                    {
                        allfriend.map((friend, i) =>(
                          <Link to = '/viewafriend'>
                            <div key = {i}>
                                <h3 className ='eachfriend' onClick = {() =>
                                (props.setSinglefriend(friend))}>
                                {friend.friend.firstname} {friend.friend.lastname}</h3>
                            </div>
                          </Link>  
                        ))
                    }
                </div>
        </div>
    )


}

export default Friends
import axios from 'axios'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


const Chat = (props) =>{

    const [allchat, setAllchat] = useState([])
    const userId = localStorage.getItem('userId')

    const getallchat = () =>{
        console.log(userId)
        axios.get(`https://murmuring-coast-34375.herokuapp.com/chat/getchats/${userId}`)
        .then ((response) =>{
            console.log(response)
            setAllchat(response.data.allchat)
        })
    }
    useEffect(getallchat, [])

    return(
    <div className = 'Chatpage'> 
        <div className = 'Chat'>

            <h2>All Chat</h2>
            {console.log(allchat)}

            {
                allchat.map((chat,i) =>(

                    <div key = {i}>
                      <Link to = '/messaging'>
                            <h5  className= 'eachfriend' onClick = {() => 
                            (
                                chat.chatmessage.firstname === props.user.firstname ?
                                 (props.setFriendId(chat.user.id))
                                 (props.setFriendname(chat.user.firstname))
                                : 
                                props.setFriendId(chat.chatmessage.id), 
                                props.setFriendname(chat.chatmessage.firstname), 
                                localStorage.setItem('chatId', chat.id )
                            )}>
                                
                                {
                                    chat.chatmessage.firstname === props.user.firstname ?
                                    <h2>{chat.user.firstname } {chat.user.lastname} </h2>
                                    : 
                                    <h2>{chat.chatmessage.firstname} {chat.chatmessage.lastname} </h2>
                                } 
                            </h5>
                      </Link>  
                    </div>
                    ))
            }
        </div>
    </div>
    )


}

export default Chat
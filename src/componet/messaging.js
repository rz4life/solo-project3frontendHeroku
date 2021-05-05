import axios from 'axios'
import {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom'


const Messaging = (props) =>{

    const [message, setMessage] = useState('')
    const [allmessages, setAllmessages] = useState([])

    {console.log(props.friendId)}

    const submitform = (e) =>{
        e.preventDefault()
        const chatId = localStorage.getItem('chatId')
        const userId = localStorage.getItem('userId')
        axios.post(`http://localhost:3001/chat/createmessage/${chatId}/${userId}`, {
            message: message
        }).then ((response) =>{
            console.log(response)
            setMessage('')
        })
    }
    const getallmessages = async () =>{
        const chatId = localStorage.getItem('chatId')

        axios.get (`http://localhost:3001/chat/getallmessage/${chatId}`)
        .then((response) =>{
            console.log(response)
            setAllmessages(response.data.allmessage)
        })
    }
     useEffect(getallmessages, [])

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }

    const [count, setCount] = useState(0)
    useInterval(() => {
        // Your custom logic here
        getallmessages() //invoke your function that does the api call
        setCount(count + 1);
      }, 500);
    

    return(
        <div className = 'messagingpage'>

        <div className = 'messaging'> 
            <h3 className = 'friendName'>{props.friendname}</h3>
                {
                    allmessages.map((message, i) =>(
                        <div key = {i}>
                            {
                              props.friendId === message.userId?
                              <h5 className = 'friendmessage'>{message.message}</h5>
                                :
                                <h5 className = 'usermessage'>{message.message}</h5>
                            }
                            
                        </div>
                    ))
                }
                <form onSubmit = {submitform}>
                    <div className = 'input'>
                        
                        <input placeholder = 'message' value = {message} onChange = {(e) =>(setMessage(e.target.value))}/>
                    </div>

                    <div className = 'input'>
                        <input type = 'submit' value = 'send'/>
                    </div>
            </form>
        </div>
        </div>
    )


}

export default Messaging
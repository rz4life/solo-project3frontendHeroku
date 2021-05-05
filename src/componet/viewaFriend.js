import axios from 'axios'
import { useHistory } from "react-router-dom"
import {Link} from 'react-router-dom'



const Viewafriend = (props) =>{
    let history = useHistory();

    {console.log(props.singlefriend)}

    const handleclick = () =>{

        const userId = localStorage.getItem('userId')
        const userId2 = props.singlefriend.id
        console.log(userId)
        console.log(userId2)

        axios.post (`https://murmuring-coast-34375.herokuapp.com/friend/create/${userId}/${userId2}`)
        .then((response) =>{
            console.log(response)
        }).catch((error) =>{
            console.log(error)
        })
        history.push('/friends')
    }

    const verify = (id) =>{

        const userId = localStorage.getItem('userId')
        axios.get (`https://murmuring-coast-34375.herokuapp.com/friend/verifyfriend/${userId}/${id}`)
        .then((response) =>{
            console.log(response)
            if(response.data.accepted === true){
                console.log('true statement')
                return true
            }else{
                console.log('false statement')
                return false
            }
        }).catch((error) =>{
            console.log(error)
        })
    }

    const startachat = (userId2) =>{
        
    }


return(
    <div className = 'singleviewpage'>

    <div className = 'singleview'> 
        { props.singlefriend.accepted ?
      
            <>
                 <h3>Name:- {props.singlefriend.friend.firstname}</h3>
                 <h3>Sex:- {props.singlefriend.friend.sex}</h3>
                 <h3>Region:- {props.singlefriend.friend.region}</h3>
                 <h3>Relationship Status:- {props.singlefriend.friend.status}</h3>
                 <h3>Looking For:- {props.singlefriend.friend.lookingfor}</h3>

                <br/>
                <>
               <Link to = '/chat'><button
                onClick = {() => {
                    const userId = localStorage.getItem('userId')
                    axios.post (`https://murmuring-coast-34375.herokuapp.com/chat/create/${userId}/${props.singlefriend.friend.id}`)
                    .then((response) =>{
                    console.log(response)
                    }).catch((error) =>{
                    console.log(error)
                    })
                }}
               >Chat</button></Link> 
                </> 
            </>
            :
            <>
                <h3> Name:- {props.singlefriend.firstname}</h3>
                <h3> Sex:- {props.singlefriend.sex}</h3>
                <h3> Region:- {props.singlefriend.region}</h3>
                <h3>Relationship Status:- {props.singlefriend.status}</h3>
                <h3> Looking For:-{props.singlefriend.lookingfor}</h3>

                <br/>
                <>
                { verify(props.singlefriend.id) ?
                <button onClick = {handleclick}>Send Request</button>
                :
                <Link to = '/chat'><button
                onClick = {() => {
                    const userId = localStorage.getItem('userId')
                    axios.post (`https://murmuring-coast-34375.herokuapp.com/chat/create/${userId}/${props.singlefriend.id}`)
                    .then((response) =>{
                    console.log(response)
                    }).catch((error) =>{
                    console.log(error)
                    })
                }}
                >Chat</button></Link> 
                }
                </>
            </>
    
        }
    </div>
    </div>

)

}

export default Viewafriend
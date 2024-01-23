import { useEffect, useState } from "react"
import './friends.css'
import Friend from "./Friend";

export default function Friends(){
    const [countFriends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>setFriends(data))
    },[])
    return(
        <div className="box">
            <h2>Friends: {countFriends.length}</h2>
            {
                countFriends.map(friend => <Friend friend ={friend}></Friend>)
            }
        </div>
    )
}
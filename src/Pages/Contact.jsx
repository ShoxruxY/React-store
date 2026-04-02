import { useState } from "react"

export function Contact(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    function handleSubmit(){

    }
    return (
        <>
        <h1>Contact us below:</h1>
        <input type="text" placeholder="Name: " onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="Question/Comment" onChange={(e) => setComment(e.target.value)}/>
        <button onClick={() => handleSubmit}>Submit</button>
        </>
    )
}
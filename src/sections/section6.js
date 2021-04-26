import React,{useState} from 'react'
import axios from 'axios'

export default function Section6() {
    const [name, setName] = useState('')
    const [occupation, setOccupation] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false);

    const data = {
        name,occupation,email,contact,message
    }
    const submitHandler = e => {
        setLoading(true)
        e.preventDefault()
        axios
            .post('https://dummy-api-app.herokuapp.com/api/jobs', data)
            .then(response => {
                console.log(response);
                setLoading(false)
                alert(response.data.success)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
                alert(error)
            }) 
	}

    return(
        <section>
            <div className="container pt-90 pb-80">
                <h2 className="capitalize text-3xl lg:text-4.5xl xl:text-5xl italic text-green font-avenir font-bold pl-15 leading-base mb-40">register your interest</h2>
                <div className="">
                    <form method="POST" onSubmit={submitHandler} className={`font-myriad grid md:grid-cols-2 px-15 md:p-35 md:border border-grey-600 rounded-md gap-x-30 lg:gap-x-60 gap-y-15 lg:gap-y-40 + ${loading ? "animate-pulse":""}`}>
                        <input className="input" type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                        <input className="input" type="text" name="occupation" placeholder="Occupation" onChange={(e) => setOccupation(e.target.value)}/>
                        <input className="input" type="email" name="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
                        <input className="input" type="text" name="contact" placeholder="Contact No" onChange={(e) => setContact(e.target.value)}/>
                        <textarea className="input h-120" type="text" name="message" placeholder="Message ..." onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button className="btn lg:w-330 bg-green text-grey-400 col-start-1 col-end-2 w-full" type="submit">submit message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
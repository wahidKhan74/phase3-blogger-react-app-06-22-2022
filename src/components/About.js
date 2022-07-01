import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament, decrement, isLoggedIn } from '../actions';

const About = () => {
    const counterState = useSelector(state => state.counter);
    const isLoggedInState = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    return (

        <div className="container">
            <h1>The counter value : {counterState} </h1>
            <button onClick={()=> dispatch(increament(5))} className="btn btn-info mr-4">Inc + </button> 
            <button onClick={()=> dispatch(decrement(5))} className="btn btn-danger">Dec - </button>
            <br />
            <br />
            <br />
            <br />
            <h1>The  user {isLoggedInState ? "LoggedIn" : "Not loggedIn"}</h1>
            <button onClick={()=> dispatch(isLoggedIn())} className="btn btn-primary">{isLoggedInState ? "Logout" : "LogIn"} </button>
        </div>
    )
}

export default About;

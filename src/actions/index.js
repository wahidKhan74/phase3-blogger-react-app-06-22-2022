export const increament = (add)=>{
    return {
        type : 'INCREMENT',
        payload : add
    }
}
export const decrement =(remove)=> {
    return {
        type : 'DECREMENT',
        payload : remove
    }
}

export const isLoggedIn =()=> {
    return {
        type : 'LOGGEDIN'
    }
}

export const loadProfile =()=> {
    return {
        type : 'LOADPROFILE'
    }
}
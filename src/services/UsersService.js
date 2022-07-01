const APIURL ="http://localhost:3000/users";

// Get all users
export const getUsers= () =>{
    return fetch(APIURL).then((response)=>{
        response.json();
    });
}

// Add user 
export const addUser= (user) =>{
    const headers = {'Content-Type':'application/json' };
    const body = JSON.stringify(user);
    const request = { method :'POST', headers: headers, body:body };
    // fetch with post method to create user
    return fetch(APIURL, request).then((response)=>{
        response.json();
    });
}

// Update user 
export const updateUser= (user) =>{
    const headers = {'Content-Type':'application/json' };
    const body = JSON.stringify(user);
    const request = { method :'PUT', headers: headers, body:body };
    // fetch with post method to create user
    return fetch(APIURL, request).then((response)=>{
        response.json();
    });
}

// DELETE user 
export const deleteUser= (userId) =>{
    const request = { method :'DELETE' };
    // fetch with post method to create user
    return fetch(`${APIURL}/${userId}`, request).then((response)=>{
        response.json();
    });
}

// Search user by title
export const searchUser= (userTitle) =>{
    // fetch with post method to create user
    return fetch(`${APIURL}?title=${userTitle}`).then((response)=>{
        response.json();
    });
}
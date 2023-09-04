


const data = {
    "title": "Mr",
    "firstName": "test",
    "surname": "test",
    "phone": "0854848",
    "email": "test@test.com",
    "homeAddressLine1":"random Address 1",
    "homeAddressLine2":"random Address 2",
    "homeEIRCODE":"WER234",
    "homeCountyCity":"random county, random city",
    "homeTown":"random town",

    "shipAddressLine1":"random Shipping Address 1",
    "shipAddressLine2":"random ShippingAddress 2",
    "shipEIRCODE":"ADC3456",
    "shipCountyCity":"random shipping county, random shipping city",
    "shipTown":"random shipping town",

    "matchID":"10"
   
};

const UpdatedData = {
    "title": "updated",
    "surname": "updated",
    "email": "updated",
}

function postUser(){
    fetch("http://localhost:3000/createUser", {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }

    })
    .then(res => res.json())
    .then(data => console.log("Successful uploaded:" ,data))
    .catch(error => console.log(error))
};


function getUser(){
    fetch("http://localhost:3000/user")
    .then((res) => res.json())
    .then((data) => console.log(data));
};



function deleteUser(){
    fetch("http://localhost:3000/deleteUser/test", {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log("Successful deleted:" ,data))
    .catch(error => console.log(error))
};

function updateUser(){
    fetch("http://localhost:3000/updateUser/test", {
        method: 'PATCH',
        body: JSON.stringify(UpdatedData),
        headers:{
        "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => console.log("Successful uploaded:" ,data))
    .catch(error => console.log(error))
}


//test functions with users 

postUser();
// getUser();
// deleteUser();
// updateUser();

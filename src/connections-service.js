import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080'
})

//export function getPeople() {
//    return axiosInstance.get('/person?role=Gamer').then((response) => response.data.people)
//}

export function getPeople() {
    return axiosInstance.get('/person/interests?interests=food').then((response) => response.data.people)
}

export function postPerson(name,role,food) {
    axios.post('/person', {
        name: 'jon',
        role: 'engineer',
        interest: 'food'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    return ('Success')
}
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/people'
})

export function getPeople() {
    return axiosInstance.get('/').then((response) => response.data.people)
}

export function getPeopleWithInterest(interests) {
    return axiosInstance.get('/' + {params: {interests}}).then((response) => response.data.people)

}

export function postPerson(name,role,food) {
    axios.post('/', {
        name: 'jon',
        role: 'engineer',
        interests: 'food'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    return ('Success')
}
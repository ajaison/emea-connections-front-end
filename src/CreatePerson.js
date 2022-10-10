import {useEffect, useState} from "react";
import {postPerson} from "./connections-service";

function CreatePerson() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [interests, setInterests] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const person = {name, role, interests};
        fetch('http://localhost:8080/person', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(person)
             }).then(() => {
            console.log(person);
            console.log('new blog added');
        })
    }

    return(
        <div className = "Create">
            <h1 className="display-4 fw-bold lh-1 mb-3">Create Person</h1>
            <form onSubmit= {handleSubmit}>
                    <label>
                        Full Name
                        <input type="text" value={name} required onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>Role</label>
                    <input type="text" value={role} required onChange={(e) => setRole(e.target.value)}/>
                    <label>Interest</label>
                    <input type="text" value={interests} required onChange={(e) => setInterests(e.target.value)}/>
                    <button>Create</button>
            </form>
        </div>
    )
}

export default CreatePerson;
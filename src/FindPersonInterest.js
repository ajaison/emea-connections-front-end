import {useEffect, useState} from "react";
import {getPeople} from "./connections-service";


function FindPersonInterest(){
    const [people, setPeople] = useState([])

    useEffect(() => {
        getPeople().then((peopleList) => {
            setPeople(peopleList)
        })
    }, [])


    return(
        <form className="needs-validation" noValidate="">
            <div className = "Create">
                <h1 className="display-4 fw-bold lh-1 mb-3">Find Person Based on Interest</h1>
                <label htmlFor="Interest" className="form-label">Interest</label>
                <input type="text" className="form-control" id="firstName"/>
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Find</button>

                <h1 className="display-4 fw-bold lh-1 mb-3">List of People</h1>
                {people.length > 0 ?
                    people.map(person => (
                        <div>
                            <p> Name: {person.name}</p>
                            <p> Role: {person.role}</p>
                            <p> Interests: {person.interests}</p>
                        </div>
                    ))
                    : <div></div>
                }
            </div>
        </form>
    )
}

export default FindPersonInterest;
import {useEffect, useState} from "react";
import {getPeople} from "./connections-service";

function People() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        getPeople().then((peopleList) => {
            setPeople(peopleList)
        })
    }, [])

    return (
        <div><h1 className="display-4 fw-bold lh-1 mb-3">List of People</h1>
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
        </div>);
}

export default People;
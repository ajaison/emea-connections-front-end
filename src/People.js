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
        <div><h1>List of People</h1>
            {people.length > 0 ?
              people.map(person => (
                  <div>
                      <p> name: {person.name}</p>
                      <p> role: {person.role}</p>
                      <p> interests: {person.interests}</p>
                  </div>
              ))
                : <div></div>
            }
        </div>);
}

export default People;
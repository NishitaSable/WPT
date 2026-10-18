import { useState } from "react";
import { people } from "./people.js";
import { getImageUrl } from "./utility.js";
export default function List() {
    const chemist = people.filter(people =>
        people.profession === 'chemist',
    );
    console.log(chemist);
    const [people1, setPeople] = useState(people);
    function handleClick() {
        setPeople(chemist);
    }
    const listpeople = people1.map((people, index) =>
        <li
            key={index}
        >
            <img src={getImageUrl(people)} alt={people.name} />
            <p>
                <b>{people.name}:</b>
                {' ' + people.profession + ' '}
                known for {people.accomplishment}
            </p>

        </li>
    );
    return (
        <>
            <div>
                <ul>{listpeople}</ul>
                <button onClick={handleClick}>Click Only For the Chemist</button>
            </div>
        </>
    )
}
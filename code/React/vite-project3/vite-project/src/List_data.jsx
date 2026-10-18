import {people} from './people.js';
import {getImageUrl} from './utility.js';
import { useState } from 'react';
export default function Getlist() {
    const [list, setList] = useState([]);
    function handellist() {
    const ListItems = people.map((person, index) =>
        <li key={index}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>                
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    setList(ListItems);
}
    return (
        <div>
            <ul>
               {list}
            </ul>
            <button onClick={handellist}>Click .....</button>

        </div>
    )
    


}
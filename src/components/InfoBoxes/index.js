import React from 'react';
import { boxData } from '../../data/data';

function InfoBoxes() {
    return (
        <ul className="box-info">
            {
                boxData.map(box => {
                    return (
                        <li key={box.id}>
                            <i className={box.icon}></i>
                            <span className="text">
                                <h3>{box.count}</h3>
                                <p>{box.name}</p>
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default InfoBoxes
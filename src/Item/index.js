import React from 'react';
import iconCheck from '../assets/static/icon-check.svg';
import iconRemove from '../assets/static/icon-cross.svg';

import './item.scss'

function Item(props) {
    return (
        <>
            {!props.last &&
                <li className="item">
                    <div className="item-check">
                        <img src={iconCheck} alt="check" />
                    </div>
                    <p className="item-text">
                        {props.text}
                    </p>
                    <img src={iconRemove} alt="remove" />
                </li>
            }
            {
                props.last &&
                <li className="item last">
                    <p>5 ítems left</p>
                    <div className="clear">
                        Clear Completed
                    </div>
                </li>
            }
        </>
    )
};

export { Item }
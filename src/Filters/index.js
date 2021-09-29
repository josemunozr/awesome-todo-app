import React from 'react';

import './filters.scss';

function Filters() {
    return (
        <ul className="filters">
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
        </ul>
    );
}

export { Filters }
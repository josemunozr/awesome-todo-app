import React from 'react';

import './list.scss';

function List(props) {
  return (
    <section className="list">
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { List }
import React, { Fragment } from 'react';

// https://reactjs.org/docs/forms.html

const Item = (props) => {
    return (
        <Fragment>
            <div className='i-item'>
                <p className='ritem item1'>{props.name}</p>
                
                    <select value="choose grind">
                        <option value="whole">Whole Bean</option>
                        <option value="drip">Drip</option>
                        <option value="french">French Press</option>
                        <option value="espresso">Espresso</option>
                        <option value="special">See Notes</option>
                    </select>

                <p className='ritem item3'>{props.quantity}</p>
            </div>
        </Fragment>
    );
}

export default Item;

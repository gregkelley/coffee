import React, { Fragment } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './item.css';
//import Button from 'react-bootstrap/Button';
import 'tachyons';


// https://reactjs.org/docs/forms.html

const Item = (props) => {
    return (
        <Fragment>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>

            <div className='i-item px-4'>
                <p className='ba f4 w-60 bg-light-green'>{props.name}</p>
                
                    <select value="choose grind" className="fl w-20">
                        <option value="whole">Whole Bean</option>
                        <option value="drip">Drip</option>
                        <option value="french">French Press</option>
                        <option value="espresso">Espresso</option>
                        <option value="special">See Notes</option>
                    </select>

                <p className='fl w-20 ba bg-light-green'>{props.quantity}</p>
            </div>
        </Fragment>
    );
}

export default Item;

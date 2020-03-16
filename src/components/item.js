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
          <div className='i-item px-4'>

            <p className='ba f4 w-60  i-color'>{props.name}</p>

            <DropdownButton id="dropdown-basic-button" 
                className="px-4 w-20 btn-drop"
                variant="Secondary"
                title="Choose Grind">
                <Dropdown.Item eventKey="1" active>Whole Bean</Dropdown.Item>
                <Dropdown.Item eventKey="2">Drip Grind</Dropdown.Item>
                <Dropdown.Item eventKey="3">French Press</Dropdown.Item>
                <Dropdown.Item eventKey="4">Espresso</Dropdown.Item>
                <Dropdown.Item eventKey="5">See Notes</Dropdown.Item>
            </DropdownButton>
            {/* </div> */}

            {/* <div className='i-item px-4'>
                <p className='ba f4 w-60 bg-light-green'>{props.name}</p>
                
                    <select value="choose grind" className="fl w-20">
                        <option value="whole">Whole Bean</option>
                        <option value="drip">Drip</option>
                        <option value="french">French Press</option>
                        <option value="espresso">Espresso</option>
                        <option value="special">See Notes</option>
                    </select> */}

                <p className='fl w-20 ba i-color'>{props.quantity}</p>
            </div>
        </Fragment>
    );
}

export default Item;

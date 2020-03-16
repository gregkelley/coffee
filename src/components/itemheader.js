import React, { Fragment } from 'react';
//import './itemheader.css';
import 'tachyons';

function ItemHeader() {
    return (
        <Fragment>
            <div className="pv2 mt3">
               <h3>Dawson Taylor Wholesale Coffee Orders</h3> 
            </div>
            {/* card section */}
            	
            <div className="d-flex justify-content-around my-3 px-5 text-center flex-wrap">
                {/* <!-- need the d-flex class in each of these because they will be containers. 
                    default flex direction is horizontal. need flex-column to make the container vertical --> */}
                <div className="d-flex p-4 m-2 flex-fill ba pointer">
                    <h5>Bulk Coffee</h5>
                </div>
                <div className="d-flex p-4 m-2 flex-fill ba pointer">
                    <h5>Retail Coffee</h5>
                </div>
                <div className="d-flex p-4 m-2 flex-fill ba pointer">
                    <h5>Syrup</h5>
                </div>
                <div className="d-flex p-4 m-2 flex-fill ba pointer">
                    <h5>Sauce</h5>
                </div>
                <div className="d-flex p-4 m-2 flex-fill ba pointer">
                    <h5>Cups</h5>
                </div>
            </div>

            <div className="d-flex justify-content-around flex-row px-4">
                <p className='fl w-60 bb mx-3'>Item</p>
                <p className='fl w-20 bb mx-3'>grind</p>
                <p className='fl w-20 bb mx-3'>amount </p>
            </div>
        </Fragment>
    );
}

export default ItemHeader;
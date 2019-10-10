// import React from "react";
import React, { useEffect, useState } from "react";
import Incoming from "./Incoming";

const DateForm = props => {
    const [date, setdate] = useState({});

    useEffect(props => {
        
    })
    
    const doNewDate = e => {
        setdate(e)
        // console.log(date)
        console.log(e.target.value)
        return (
            <Incoming />
        )
    }

    const doChange = (e, props) => {
        // console.log("Newimg: ", e.target.value, props)
        e.preventDefault();
    }

	return (
		<div className="dateform">
            <form name="pickdate" onSubmit = {e => doChange(e)}>
                <input type="date" onChange = {e => doNewDate(e, props)}></input>
            </form>
		</div>
	);
};
export default DateForm;

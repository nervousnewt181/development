import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Team(props) {
    //const [sortType, setSortType] = React.useState("Generation");

    const handleChangeSort = (event) => {
        props.setSortType(event.target.value);
        
    };

    const handleChangeType = (event) => {
        //props.setType(event.target.value);
        if (event.target.value === props.type) {
            props.setType("All");
        } else {
            props.setType(event.target.value);
        }
    };

    return (
        <div className="team-container">
            <h2>Sort By</h2>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    defaultValue="Generation"
                    value={props.sortType}
                    onChange={handleChangeSort}
                >
                    <FormControlLabel value="Generation" control={<Radio />} label="Generation" />
                    <FormControlLabel value="Type" control={<Radio />} label="Type" />
                    <FormControlLabel value="HP" control={<Radio />} label="HP" />
                </RadioGroup>
            </FormControl>

            <h2>Filter By</h2>
            <h3>Type</h3>
            <FormControl>
                <FormLabel id="filter-by--type"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={props.type}
                    // onChange={handleChangeType}
                >
                    <FormControlLabel value="Grass" control={<Radio onClick={handleChangeType}/>} label="Grass" />
                    <FormControlLabel value="Fire" control={<Radio onClick={handleChangeType}/>} label="Fire" />
                    <FormControlLabel value="Water" control={<Radio onClick={handleChangeType}/>} label="Water" />
                </RadioGroup>
            </FormControl>
            <h3>Type</h3>
            <h3>Generation</h3>
        </div>

       
    )
}
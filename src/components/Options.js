import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Options(props) {
    //const [sortType, setSortType] = React.useState("Generation");

    const handleChangeSort = (event) => {
        if (event.target.value === props.sortType) {
            props.setSortType("id");
        }
        else {
            props.setSortType(event.target.value);
        }
        
    };

    const handleChangeType = (event) => {
        //props.setType(event.target.value);
        if (event.target.value === props.type) {
            props.setType("All");
        } else {
            props.setType(event.target.value);
        }
    };

    const handleChangeGen = (event) => {
        //props.setType(event.target.value);
        if (event.target.value === props.gen) {
            props.setGen(0);
        } else {
            props.setGen(event.target.value);
        }
    };

    return (
        <div className="options-container">
            <h2>Sort By</h2>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    defaultValue="Generation"
                    value={props.sortType}
                    // onChange={handleChangeSort}
                >
                    <FormControlLabel value="Generation" control={<Radio onClick={handleChangeSort}/>} label="Generation" />
                    <FormControlLabel value="Type" control={<Radio onClick={handleChangeSort}/>} label="Type" />
                    <FormControlLabel value="HP" control={<Radio onClick={handleChangeSort}/>} label="HP" />
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

            <h3>Generation</h3>
            <FormControl>
                <FormLabel id="filter-by--gen"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={props.gen}
                    // onChange={handleChangeType}
                >   
                <div className="gen-select">
                    <FormControlLabel value={1} control={<Radio onClick={handleChangeGen}/>} label="1" />
                    <FormControlLabel value={2} control={<Radio onClick={handleChangeGen}/>} label="2" />
                    <FormControlLabel value={3} control={<Radio onClick={handleChangeGen}/>} label="3" />
                    <FormControlLabel value={4} control={<Radio onClick={handleChangeGen}/>} label="4" />
                    <FormControlLabel value={5} control={<Radio onClick={handleChangeGen}/>} label="5" />
                    <FormControlLabel value={6} control={<Radio onClick={handleChangeGen}/>} label="6" />
                    <FormControlLabel value={7} control={<Radio onClick={handleChangeGen}/>} label="7" />
                    <FormControlLabel value={8} control={<Radio onClick={handleChangeGen}/>} label="8" />
                    <FormControlLabel value={9} control={<Radio onClick={handleChangeGen}/>} label="9" />
                </div>
                    
                </RadioGroup>
            </FormControl>
        </div>

       
    )
}
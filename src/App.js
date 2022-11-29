import { cardActionAreaClasses } from "@mui/material";
import React from "react";
import Options from "./components/Options";
import Team from "./components/Team";
import TeamSelect from "./components/TeamSelect";
import data from "./Data"

function App() {
	//=======STATES=======//

	//filter/sorting options
	const [type, setType] = React.useState("All");
	const [gen, setGen] = React.useState(0);
	const [sortType, setSortType] = React.useState("id");

	//manage team
	const [team, setTeam] = React.useState([]);
	const [totalHP, setTotalHP] = React.useState(0);


	//=======AGGREGATOR MANAGEMENT=======//
	const addToTeam = (name, hp) => {
		if (!team.includes(name)) { //only one of each kind
			setTeam([...team, name]);
			setTotalHP(totalHP + hp); //update aggregator
		}		
	}

	const removeFromTeam = (name) => {
		setTeam(team.filter((member) => !(member === name)));
		var hpToDeduct = data.find(item => item.name === name).hp; 
		setTotalHP(totalHP - hpToDeduct);
	}


	//=======SORT AND FILTER=======//
	const matchesFilterType = (item) => {
		// all items should be shown when no filter is selected
		if(type === "All") { 
			return true
		} else if (type === item.type1) {
			return true
		} else {
			return false
		}
	}

	const matchesFilterGen = (item) => {
		// all items should be shown when no filter is selected
		if(gen === 0) { 
			return true
		} else if (gen == item.generation) {
			return true
		} else {
			return false
		}
	}

	//takes in data and applies both sorting and filter
	const display = (data) => {
		data = data.filter(matchesFilterType);
		data = data.filter(matchesFilterGen);
		if (sortType === "Generation") {
			data.sort((a, b) => (a.generation > b.generation) ? 1 : (a.generation === b.generation) 
				? ((a.id > b.id) ? 1 : -1) : -1 )
			//if equal, default to id number
		}
		else if (sortType === "id") { //default sort
			data.sort((a, b) => (a.id > b.id) ? 1 : -1)	
		}
		else if (sortType === "Type") {
			data.sort((a, b) => (a.type1 > b.type1) ? 1 : (a.type1 === b.type1) 
			? ((a.id > b.id) ? 1 : -1) : -1 )

		}
		else if (sortType === "HP") {
			data.sort((a, b) => (a.hp > b.hp) ? 1 : (a.hp === b.hp) ? ((a.id > b.id) ? 1 : -1) : -1 )

		}
		
		return data;

	}
	
	const dataToDisplay = display(data);

	return (
    	<div>
			<div className="header">
				<h1>Choose your starter(s)!</h1>
				<h3>Note: Starter Pokémon are rare, so you can only have one of each on your team.</h3>
			</div>

			<div className="main-container">
				<Options 
					sortType={sortType} setSortType={setSortType}
					type={type} setType={setType}
					gen={gen} setGen={setGen}
				/>
				<TeamSelect data={dataToDisplay} addFunc={addToTeam} />
				<Team currTeam={team} totalHP={totalHP} removeFunc={removeFromTeam}/>
			</div>
			
      		
    	</div>
  	);
}

export default App;

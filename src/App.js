import React from "react";
import Team from "./components/Team";
import TeamSelect from "./components/TeamSelect";
import data from "./Data"

function App() {
	const [type, setType] = React.useState("All");
	const [sortType, setSortType] = React.useState("Generation");

	const selectFilterType = (eventKey) => {
		setType(eventKey);
	};	

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

	const display = (data) => {
		data = data.filter(matchesFilterType);
		if (sortType === "Generation") {
			data.sort((a, b) => (a.generation > b.generation) ? 1 : -1)
		}
		else if (sortType === "Type") {
			data.sort((a, b) => (a.type1 > b.type1) ? 1 : -1)

		}
		else if (sortType === "HP") {
			data.sort((a, b) => (a.hp > b.hp) ? 1 : -1)

		}
		return data;

	}
	
	const dataToDisplay = display(data);

	return (
    	<div>
			<div className="header">
				<h1>Choose your starter(s)!</h1>
			</div>

			<div className="main-container">
				<Team 
					sortType={sortType} setSortType={setSortType}
					type={type} setType={setType}
				/>
				<TeamSelect data={dataToDisplay} />
			</div>

			<button onClick={() => selectFilterType("Grass")}>grass</button>
			<button>nah</button>
			
      		
    	</div>
  	);
}

export default App;

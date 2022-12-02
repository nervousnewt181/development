# Development

### Link to Deployed Website
https://github.com/nervousnewt181/development


### Goal and Value of the Application
This application lets users view all available starter Pokémon, sorting and filtering by relevant fields such as generation and primary type. The application also lets users build a team of these starters and see the total HP. 

### Usability Principles Considered
The layout is clearly divided into three main sections: a box with all the sorting/filtering options, the list of items, and the aggregator (current team and total HP). Appropriate text size is used to convey the information hierarchy, and there is a note at the top of the screen that tells users that they can only have one of each starter on their team. The primary typing of starters is also color-coded so users can clearly see the type of the starter at a glance.

### Organization of Components
My App.js file acts as a container for all of the components in this application. It contains hard HTML for the header as well as a main div that holds my Options.js, TeamSelect.js, and Team.js components. App also contains the main states used, such as sorting/filter keys and corresponding functions, as well as the aggregate fields, which are then passed down to the appropriate child components using props. 
Options.js contains the div with all of the sorting/filter options, creating the radio button groupings and handling their functionality. The sort/filter state and setState functions were passed into Options as props, because the radio buttons inside of Options act to change these states. 
TeamSelect.js is a simply a container for all of my ItemCard.js components(individual item cards). The filtered and sorted data is passed into TeamSelect as props, and is then mapped over to create ItemCard elements. TeamSelect passes in relevant fields that are displayed on each ItemCard, as well as an add function that it took in from App.js. This is because each ItemCard.js contains a button that lets the user add to the aggregate all the way back in App.js. 
ItemCard.js displays the information and has a button for adding functionality.
Finally, Team.js is a div that contains the aggregate information. 

### How Data is Passed Down Through Components
App.js contains the sorting/filter states and functions, which are passed down into Options.
App.js applies the sorting and filter to the data, and passes this edited data, as well as an add-to-aggregate function into TeamSelect.
In TeamSelect.js, the data passed in as props as well as the function for adding is passed down into individual ItemCard components.
App.js contains the aggregate team and total HP, which is then passed into Team along with a remove-from-aggregate function, which displays this information.


### How the User Triggers State Changes
There are a few ways the user triggers state changes. 
Clicking the radio buttons in the left box changes the filter and sort type states, which affects the item cards displayed. Clicking the "Add To Team" buttons on the item cards appends that item to the aggregate list state, as well as updating the total HP state. Similarly, clicking the "x" button on the right side for a current team member removes it from the aggregate list state, and also updates the total HP state.
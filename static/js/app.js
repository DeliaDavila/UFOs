// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}



// 1. Create a variable to keep track of all the filters as an object.
var filters = {};
// console.log(filters)

//Step 2 is the event listener that will kick off UpdateFilters...

// 3. Use this function to update the filters. 
function updateFilters() {
  // console.log("into update filters func")

    // 4a. Save the element that was changed as a variable, using d3.select(this).
    //info on "this": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
    //essentially: if value of this is not set by the call, it defaults to global object, the current browser window.
    
    let changedElement = d3.select(this);
    // console.log(changedElement.property("value"));

    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    // console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable...module says ATTRIBUTE....not changedElement.property("id")
    let filterID = changedElement.attr("id");
    // console.log(filterID);
  
    // 5. If a filter value was entered, add filterId & value to the filters list. If not, clear that filter from the filters object.

    if (elementValue) {
      filters[filterID] = elementValue;
    }
    else {
      delete filters[filterID];
    }

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
    // filterTable(filters);

    //"unreachable code" because call came after "return", which ends the function
  }

function filterTable() {

  console.log("in filterTable func");
  let filteredData = tableData;
    // Object.entries(filters).forEach(function([key, value]) {

    Object.entries(filters).forEach(([key, value])=> {

      console.log(filters);

      // console.log(filteredDataTest); 
      filteredData = filteredData.filter(entry => entry[key] === value);
            
    });

    buildTable(filteredData);
};


//for testing
d3.selectAll("input").on("change", updateFilters);
buildTable(tableData);



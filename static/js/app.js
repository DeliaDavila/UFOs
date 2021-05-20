// from data.js
const tableData = data;

// example data
// var data = [
//   {
//     datetime: "1/1/2010",
//     city: "benton",
//     state: "ar",
//     country: "us",
//     shape: "circle",
//     durationMinutes: "5 mins.",
//     comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
//   },


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

    //I think that means we don't need this:
    // let date = d3.select("#datetime").property("value");
    // let city = d3.select("#city").property("value");
    // let state = d3.select("#state").property("value");
    // let country = d3.select("#country").property("value");
    // let shape = d3.select("#shape").property("value");

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

    console.log("a change:")
    console.log(filters);
    return filters

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
    //filters here is "unreachable code"
    //filterTable(filters);
  }
  
  //..........PRETTY COPY......
  // 7. Use this function to filter the table when data is entered.
  //function filterTable() {
    // 8. Set the filtered data to the tableData.
    // 9. Loop through all of the filters and keep any data that matches the filter values  
    // 10. Finally, rebuild the table using the filtered data  
  //}

  // 2. Attach an event to listen for changes to each filter
  //d3.selectAll("input").on("change", updateFilters);

  // Build the table when the page loads
  //buildTable(tableData);

 //..........PRETTY COPY......

  //working area





//start the function
  function filterTable() {
    let filteredData = tableData;

    //for each filter first?//
    filters.forEach(function(filterItem) {

      console.log(filterItem);

      //this should be: for each key of filters, match to key of table data, then test those for matched values//
      Object.entries(filterItem).forEach(function([key, value]) {
        console.log(key, value);

        if filterItem.key = filteredData.key;
        {
          //keep it. do nothing?//
        }
        else; {
          delete filteredData[dataRow];
        }

      });
    });

    //Loop through all of the filters and keep any data that matches the filter values 

    //1.loop through the filters
    //2. for each, you want to reduce the dataset to things that have that same value for a matching key
    //3. so pull the first filter, say city = fresno. Compare filter.key to filteredData.key. Keep values where they match
    //4. if / then, if filter.key.value = filteredData.key.value, do nothing
    //5. else, drop the row.
    //Question. Wouldn't you need to keep rows until you compared all filters?

    // filters.forEach((dataRow) => {
    //   Object.values(dataRow).forEach((value) => {
    
    // //forEach row, if key in filters matches key in filteredData, keep the row. 
    //   if key = filteredData.key:
    //    {
    //     //keep it. do nothing?//
    //   }
    //   else: {
    //     delete filteredData[dataRow];
    //   }

    }


  

    





//// **** FOR TESTING *****

//for testing, copied above in pretty part
  d3.selectAll("input").on("change", updateFilters);
  buildTable(tableData);



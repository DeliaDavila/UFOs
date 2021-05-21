# UFO Sightings Finder

## Overview of Project
The project is for additions to a website dedicated to UFO sightings.

### Purpose
Dana’s website pulls in UFO information and sightings. The goal is to make a search function so website visitors can search for UFO sightings that they are interested in using multiple criteria.

### Background
The website originally had a basic filter for date. Our client Dana would like to  provide a more in-depth analysis of UFO sightings by adding additional filters for the city, state, country, and shape.


## Results
The website now allows users to search using some categories that are available in the sourced data.

### Search categories
* Date – when the sighting happened
* City – the city where the sighting happened
* State – state where sightings happened
* Country – once international data becomes available
* Shape  – search by the shape of the UFO! (standard shapes but also phenomena like “light” or “fireball”)

### Perform a search
Searching for sightings is quite simple. When the page loads, the data is unfiltered and displayed in a table.

![InitialState](https://github.com/DeliaDavila/UFOs/blob/main/screenshots/InitialState.png)

To begin a search, type in a search term into one of the filters shown to the left of the table. (Placeholder text shows the format to use for each field.) 

![SearchOptions](https://github.com/DeliaDavila/UFOs/blob/main/screenshots/SearchOptions.png)

For example, type the code for New Mexico into the “Enter State” box. Once you click out of the box, the table will show just sightings in that state!

![Search_byState](https://github.com/DeliaDavila/UFOs/blob/main/screenshots/Search_byState.png)

To add a filter, type the additional filter into another box and the table will filter for just that city. Here, we are showing just the sighting in Albuquerque.

![AddCity](https://github.com/DeliaDavila/UFOs/blob/main/screenshots/AddCity.png)


## Summary
I added new filters to the page that filter the data. While using the filters is successful, there are a few drawbacks. I’ll include some recommendations on further improvements.

### Limitations
Once a user uses the search filters, there’s not an easy way to return to the full list. Additionally, the search is narrow and not very forgiving. If a user types their search in a different case than the data (“Fresno” instead of “fresno”), the search doesn’t return the expected search.

### Recommendations
Here are some recommendations for further development.

* “Clear Search” button
    * Allows users to correct mistakes
    * Returns user to unfiltered table
    * Empties the filter searches

* Improve fuzzy matches
    * Allow for different capitalizations so searches “Fresno”, “fresno”, and “FRESNO” all return the same sightings
    * Allow return of similar items so search “oblong” also returns “cigar” and “circle” also returns “disk”

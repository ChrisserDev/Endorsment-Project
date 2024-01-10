# Endorsement-Project:

## Overview of the Project:

This project is a simple web page for creating and displaying endorsements. Users can enter a message, specify the sender and receiver, and publish the endorsement. 

The published endorsements are displayed on the page, and users can like them by clicking on a heart icon. The project incorporates HTML for structure, CSS for styling, and JavaScript for dynamic behavior.

## Key Concepts and Features:

### HTML Structure:

Uses a simple HTML structure with a main container (<main>) and various elements inside, including text areas, input boxes, a publish button, and endorsement display containers.

### CSS Styling:

Applies CSS styles for consistent and visually appealing design.

Uses flexbox for layout, custom styling for input elements, and responsive design for larger screens than 426px using media queries.

## JavaScript code explained:

### DOM ELEMENTS:

This part of the code retrieves various DOM elements by their IDs or class names and assigns them to corresponding variables. These elements include input fields (textValue, sender, receiver), a button (publishBtn), a container for displaying endorsements (endorsmentTextResult), and a warning message container (warning).
 
### EVENT LISTENER FOR THE PUBLISH BUTTON:

An event listener is added to the "Publish" button (publishBtn), which listens for a click event. When the button is clicked, it calls two functions: displayWarning and addItemToEndorsments.
 
### ADD ITEM TO ENDORSEMENTS FUNCTION:
 
This function takes three parameters (message, sender, receiver) and appends a new HTML structure to the endorsmentTextResult container. It creates a new div with class "endorsmentMessage" containing paragraphs with endorsement details and an empty heart icon. After adding the endorsement, it calls the resetValues function to clear input values.

### RESET VALUES FUNCTION:

This function sets the values of the textValue, sender, and receiver input fields to an empty string, effectively resetting them for the next endorsement.
 
### LIKE HEART FUNCTION:

An event listener is added to the endorsmentTextResult container to listen for click events. When a click occurs, it checks if the clicked element has the class "fa-regular." If true, it toggles the "fa-solid" class, changing the heart icon's appearance.
 
### WARNING FUNCTION:

This function displays a warning message (warning) if either the "Publish" button is not found or any of the required input fields (textValue, sender, receiver) are empty. It sets the warning's display property to "block" and hides the endorsement container (endorsmentTextResult). After 2 seconds, it hides the warning message by setting its display property to "none" using setTimeout.

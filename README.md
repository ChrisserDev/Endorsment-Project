# Endorsement Project:

https://endorsments.netlify.app/

## Overview of the Project:

This project is a simple web page for creating and displaying endorsements. Users can enter a message, specify the sender and receiver, and publish the endorsement. 

The published endorsements are displayed on the page, and users can like them by clicking on a heart icon. The project incorporates HTML for structure, CSS for styling, and JavaScript for dynamic behavior.

## Key Concepts and Features:

### HTML Structure:

Uses a simple HTML structure with a main container and various elements inside, including text areas, input boxes, a publish button, and endorsement display containers.

### CSS Styling:

Applies CSS styles for consistent and visually appealing design.

Uses flexbox for layout, custom styling for input elements, and responsive design for larger screens than 426px using media queries.

## JavaScript code explained:

### DOM ELEMENTS:

This part of the code retrieves various DOM elements by their IDs or class names and assigns them to corresponding variables. These elements include input fields (textValue, sender, receiver), a button (publishBtn), a container for displaying endorsements (endorsmentTextResult), and a warning message container (warning).

![image](https://github.com/ChrisserDev/Endorsment-Project/assets/126911205/59ddf3e5-c7f2-43ad-a6db-e5c53a4c311e)
 
### EVENT LISTENER FOR THE PUBLISH BUTTON:

An event listener is added to the "Publish" button (publishBtn), which listens for a click event. When the button is clicked, it calls two functions: displayWarning and addItemToEndorsments.

![image](https://github.com/ChrisserDev/Endorsment-Project/assets/126911205/11899c8a-c6cf-4dc6-9e96-44ea94d8c81c)
 
### ADD ITEM TO ENDORSEMENTS FUNCTION:
 
This function takes three parameters (message, sender, receiver) and appends a new HTML structure to the endorsmentTextResult container. It creates a new div with class "endorsmentMessage" containing paragraphs with endorsement details and an empty heart icon. After adding the endorsement, it calls the resetValues function to clear input values.

![image](https://github.com/ChrisserDev/Endorsment-Project/assets/126911205/2b6eb8c3-15ac-4f7d-af1e-3d66f8ad5c0c)

### RESET VALUES FUNCTION:

This function sets the values of the textValue, sender, and receiver input fields to an empty string, effectively resetting them for the next endorsement.

![image](https://github.com/ChrisserDev/Endorsment-Project/assets/126911205/0abceec5-f660-413c-8375-6d596bac1c60)
 
### LIKE HEART FUNCTION:

An event listener is added to the endorsmentTextResult container to listen for click events. When a click occurs, it checks if the clicked element has the class "fa-regular." If true, it toggles the "fa-solid" class, changing the heart icon's appearance.

![image](https://github.com/ChrisserDev/Endorsment-Project/assets/126911205/c1b8c6c9-1129-4175-9631-8001432a449f)
 
### WARNING FUNCTION:

This function displays a warning message (warning) if either the "Publish" button is not found or any of the required input fields (textValue, sender, receiver) are empty. 

It sets the warning's display property to "block" and hides the endorsement container (endorsmentTextResult). After 2 seconds, it hides the warning message by setting its display property to "none" using setTimeout.

![image](https://github.com/ChrisserDev/Endorsment-Project/assets/126911205/aae3b726-4d8e-4362-9f50-b4d5ad2cdd91)


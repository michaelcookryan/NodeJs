# NodeJs
Low scale examples of NodeJS projects.


Project - NodeJS_Example

REQUIRED INSTALLS - MongoDB & Node Modules
SUGGESTED - Nodemon

Simple example of online pizza order menu service.
- Menu is created dynamically with contents of menu.json. 
- When user selects their choices and clicks Submit, all information is stored into DB
  and ready for display under the Orders List tab.
- No validation is in use for input fields.

Notes:
- In file 'app.js' Line 10:
  "var mongoUrl = 'mongodb://localhost/yourDB'"
  You can change 'yourDB' to anything you would like for a data base name.
  
- Logic for price calculation contained between Line 5-11 routes/index.js 
  should be written into it's own Calculator class and used accodingly.

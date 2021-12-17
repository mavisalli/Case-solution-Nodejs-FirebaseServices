This folder includes node.js restful api which is written for a company case study.

This is an API project for managing admins and for content management.

🔎 In this project, Contents only can be managed by admins. Firebase Auth is used for authentication processes.

Technologies and Tools I use:

 :ballot_box_with_check: Back-end: Node.js => express
 
 :ballot_box_with_check: Database: Firestore
 
 :ballot_box_with_check: Docker
 
 :ballot_box_with_check: Swagger
 
### Usage
-npm install

-Add your config information of firebase and firebase-admin to the env file.

-npm start

### Usage with docker
```
docker build -t case_solution .
docker run -it -p 5000:5000 case_solution
```
 
### Folder Structure
To create sustainable and understandable structure, I tried to collapse all related files under a folder also I have followed global rules for people who will try to understand codes.
- Endpoints are located under routes/ folder inside of their related js file.
- Logical processes related to the endpoints took place under controller folder.
- All process handler such as Auth-validation and Content-validation is located under handler folder.
- Authentication controls and determination of errors according to validation schemes are located under middlewares folder.




  
  

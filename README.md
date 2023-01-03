# Amazon Clone
This projects mimics the e-commerce website Amazon.commerce
Bundled with login and sign up functionality frontend of the 
project includes tons of items listed in the home page that 
can be added to cart, When navigated to the basket those items
 will be displayed which can be removed from the basket as well.
There is a proceed to checkout button on the basket page which 
will redirect you to the checkout page.
In the checkout page where stripe payment is used to process a 
card payment, After entering the card details you will have three 
buttons "Buy Now", "Click to Confirm", "Proceed to Confirmation Page".



## Dependencies

Dependencies used in the project are as follows

[![Node.js](https://img.shields.io/badge/Dependency-Node.js-red)](https://nodejs.org/en/)

![React.js](https://img.shields.io/badge/Library-React.js-blue)

[![AGPL License](https://img.shields.io/badge/Backend-Firebase-lightgrey)](http://www.firebase.com)

[![AGPL License](https://img.shields.io/badge/dependency-Javascript-orange)](http://www.javascript.com)

[![AGPL License](https://img.shields.io/badge/UI-Material--UI-yellowgreen)](http://www.materialui.com)


## Demo
https://challenge-7d9e7.web.app/

### Home Page -
![ama1](https://user-images.githubusercontent.com/86125077/210316057-d9b6e135-dd91-481a-888d-6e86337e85da.png)



![ama2](https://user-images.githubusercontent.com/86125077/210316068-ec57bd1b-0070-4d30-bc1e-a64c2d67c132.png)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


### Login Page -
![ama3](https://user-images.githubusercontent.com/86125077/210316277-ac8ad501-91ee-4e08-818e-b2a0b178428b.png)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Cart Page -
![ama4](https://user-images.githubusercontent.com/86125077/210316181-14e39547-3846-4280-9753-6b734871a306.png)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Check Out Page -
![ama5](https://user-images.githubusercontent.com/86125077/210316369-40d41922-b82b-489c-b88d-e20106a3108a.png)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


### Confirmation Page -
![ama6](https://user-images.githubusercontent.com/86125077/210316438-17d8f404-a354-4347-bca2-9bcf9d786e9e.png)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


## Deployment

To deploy this project run

bash
npm run build

Upload the build file to a hosting app.
This App is hosted using Netlify.





  
### --------------------------------------------FOR DEVELOPER----------------------------------------
#### Firebase login should be via a cmd, the login might not work in powershell

#### After npm run build, any change in the application will have to updated using the npm run build command
#### firebase login -->
firebase init--> Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys          
--> use existing project        
--> public directory(build)       
--> npm run build(be in directory)       
--> firebase deploy         
#### repeat npm run build and firebase deploy everytime a new change is added to the project

#### to run emulators (firebase)
firebase emulators:start

git config --global user.email ""            
git config --global user.name ""          
git init         
git add -A         
git commit -m "Here is amazon clone "       
git remote add origin Link-to-app      
git push -u -f origin master


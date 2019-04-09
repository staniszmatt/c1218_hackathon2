# Board Game Bar Code Scanner

Welcome to our Hack-A-Thon project. 
We have created a web application that allows you to scan a standard bar code using your phone or device with a camera. 
The application was designed with games in mind so you will see some basic game information, locations of where you can buy the games in your current location and you tube videos for game play and reviews. 

### API's used: 
- QuaggaJS - https://serratus.github.io/quaggaJS/
  - This API allows you to request access to the camera of the device the application is running on. 
  - The camera continually capture images until it sees a recognizable bar code. Once it does, the API then stops scanning and returns the serial number if successfully or false if it was not recognizable. 

- UPCitemdb API - https://www.upcitemdb.com/api/explorer#!/lookup/get_trial_lookup
  - When the serial number is captured, then we use that to submit for information using the UPCitemdb API. 
  - The UPCitemdb API gives us game images, title, brand, min and max price it sold for (not sure where they get some of these numbers).

- Google Maps API 
  - Once we receive the information on the game from UPCitemdb, we use this data to grab the locations that sell the game with google maps API. 

- YouTube API 
  - Once we get the game information we also use this to load the YouTube videos with the YouTube API. 
  - We capture the videos that deal with game review and game play based of the game title that is retrieved. 
  
- Trello 
  - name your project 12.18 Team [your team number] Hackathon

### Tools 
  - Trello was used to track and project progress by feature sets. 
    - This allowed us to split the work up between the group and allow everyone to know who is working on what. 
      - The project would not have finished as well as it did if we did not keep the work organized in a way to prevent repeated work and conflicts. 

  - jQuery ajax
    - API requests we used ajax from jQuery. 

  - Git and GitHub
    - Git and GitHub were used for rev control and to save our project progress. 
    - We have the master and dev branches where dev was the main point of merger for additional feature sets and bug fixes where as the master branch was used to merge the major time lines for MVP and final product of MVP for presentation. 

### Team 
  - Christine Than:       GitHub - https://github.com/krispthan
  - Sean Jaw:             GitHub - https://github.com/seanjaw
  - Bill Darnall:         GitHub - https://github.com/beeeweee
  - Matthew Staniszewski  GitHub - https://github.com/staniszmatt


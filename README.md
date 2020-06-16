Following up from DateSpot, which is a full stack JS application with Node, Express and React, I decided to do a React Native version to demonstrate my abilities to TDD a React Native application.

This project was built with the help of Expo CLI which is a set of tools built around React Native.

I have decided to stop working on this project in its current form. That is, I will restart this project but without Expo.

Reasons for this:

1. Though Expo is a great tool to get something up and running quickly, I am depending on the expo team to update their library. This was made very obvious to me when it came to using AsyncStorage, which is deprecated from "react-native" but the expo team still hasn't issued an update on this in around a year. Reading around the forums, it seems that this will cause issues later when it comes to React-Natives new "web simulator" way of using a react-native app. Using tools that are not being maintained or updated is generally not a good idea in my opinion.

2. Solutions online tend to lean towards the user not initialising the project with expo. This can be frustrating as it requires further digging for the expo solution

3. I accept that there may be some things that expo handles to make a devs life easier but I am prepared to take on those hardships in exchange for dealing with tools that are not maintained or updated.

4. The project is still in its very early stages so I can get away with not ejecting the expo project and to just create a new one from scratch using npx react-native init myProject.

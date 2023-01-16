# GoParkAh

The team consists of **Tay Yu Xuan, Jolene Tan, Tan Yap Siang and Alvin Chan.** 

In our project, we introduce an engaging solution to the monitoring of HDB car parks. With the sheer amount of car park activities going on daily, it is not practical for HDB to deploy staff to all car parks. To solve this, we propose a fun and engaging solution, GoParkAh, which shifts the responsibility of car park maintenance to residents, allowing them to take ownership of their shared spaces.

GoParkAh is an application built using *Angular* and *Ionic*. This means that it is a cross-platform application that can be deployed on the web, as well as on iOS and Android mobile devices. This allows it to effectively target a wide range of HDB car park users. 

The main functionality is the fault reporting system implemented in our application, GoParkAh. Users can post pictures or videos of faults detected in car parks near them, and other users can view these posts and choose whether to upvote or downvote it. Once enough upvotes are gathered on a post, it will be sent directly to HDB as a fault report for reviewing. HDB will then send workers down to the site to work on the fault and upload appropriate photos and statuses to the original post as progress reports. This allows users to check on the fault progress and estimated date of completion.

GoParkAh prevents bad images from being uploaded in 2 ways. Firstly, if a post has too many downvotes, it will be automatically deleted from the app. Additionally, only users that are within a certain distance range from a specific car park are allowed to make fault reports.
 
Additionally, GoParkAh has a ‘Find Carpark’ function where users can input a postal code. The nearest car park gets displayed as a search result, allowing users to easily find a car park near them and view its details. The app also allows residents to view the amount of car park space available, thereby limiting the chances of unnecessary movements in car parks that already have maximum capacity. 

In future, we plan to extend the upvote functionality to the car park capacity status where users can vote on the accuracy of currently shown status and it will be updated accordingly.

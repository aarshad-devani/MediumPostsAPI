# MediumPostsAPI
Medium API for fetching posts directly in json using live feeds.

This application is hosted on Azure and is available for minor usage.

Use the API by calling 
```
https://mediumapi.azurewebsites.net/?Username={{Your username}}&Format=json
```
replace {{Your username}} with your username directly and get public posts in JSON

```
https://mediumapi.azurewebsites.net/?Username={{Your username}}
```
gives XML feed response realted to that user. This solves the problem of CORS for some users 

Note: This app is no where associated to Medium directly, the soul pupose of this api to serve development of Blogs page on personal portfolios and the idea started with the same purpose. 

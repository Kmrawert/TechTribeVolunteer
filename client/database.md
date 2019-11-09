
```
db
use volunteer
```

```
use volunteer
db.users.insert({name: 'x', username: 'x', password: 'x', interests:['x', 'x', 'x'] })

 db.users.insert({"name" : "molly patterson", "username" : "molly_patterson@yahoo.com", "password" : "example", "interests" : ["homelessness", "arts", "animals"] })
   ```
   <!-- object - option one true, 2 false, etc. option n -->
```
use volunteer
db.events.insert({title: 'x', description: 'x', organization: 'x', interests:['x', 'x', 'x'], experience: 'x',  })

 db.events.insert({"title" : "animal shelter", "description" : "sample", "organization" : "paws", "experience" : "none", "zipcode" : "60611", "numberofspots" : "10", "link" : "www.paws.com", "image" : "ximage", "posteddate" : "11/9/19", "eventdate" : "12/2/19", "eventtime" : "3pm" })
   ```
  <!-- encript password? -->
  <!-- user input goes into database -->
  <!-- table 3 for users, creating events, and email notification -->
  <!-- where in file structure does this file go? -->
  <!-- event form sends  -->
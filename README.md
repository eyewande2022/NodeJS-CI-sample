# NodeJS-CI-sample


### How to set up a production server 

1. Using Git Hub Action as the Continuous Integreation Tool 
2. Connecting with a Self Hosted Runner


### Pre-requisites

1. NodeJS Application and its Dependencies
2. Cloud-Hosted Server

#### Implementation Steps 

Create a repository having the following app.js files and its dependencies as shown below

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/8fe32499-f6ca-44a5-8f15-67a076f96054)

Add content to the file and commit changes on  app.js files 

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/234fb765-5703-4003-a801-5f8d7f199923)


 Goto Repo main page and click “Actions” tab
 
![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/38dd7302-9663-44b9-ba97-4827ec3ff731)

Navigate to the Cpntinuour Integration Section and locate the Node.js section and click "Configure" button

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/d195965a-5632-4da4-ab39-535b171387fe)

Proceed to edit the project name as shown 

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/8bbb8965-f145-4a70-9f66-4be70b596ec4)

#### Pay attention to the sections pointed 

- **Jobs section** : These are the collection of steps 
- **Strategy section** : We intend to use the 3 versions of node.js
- **Steps** : These are actions to be taken ,commands ,scripts steps

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/df17ab7c-440c-4e21-b24d-f1652e51a031)

Commit Changes  

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/e0dc862b-50b1-4dd0-b3fc-57651c30762c)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/0ecd37b6-21e7-499d-a2a6-62ac78135f63)


Immediate Check  and final check of the Git Action workflows 

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/e1ce9410-10a6-4f9e-a762-bb9fb6c94597)

#### 1st Workflow
Errors displayed  and checking the state of the 3 jobs which represents the 3 versions of NodeJS as shown below

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/5a1f0723-9bbe-4c72-a0cd-bdf8ef75bf65)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/dd6959ec-4be6-449b-8f11-03a91f299097)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/22086bbd-04d5-4ee4-9997-86a556c03468)


#### 2nd Workflow

Next we amend the node version section to allow only one node version 18 and the same check of the Git Action workflows 

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/501430bb-cf76-4a4a-8c46-e1eb6d862ebd)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/e9adca0f-f733-4951-9d98-ba434fbd708b)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/6ef51bed-1300-44a9-9d1a-2528776828d1)


#### 3rd Workflow

A new error is generated and this is because there are no test to be done in the yml file .Hence we would remove the test section to allow the completion .

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/343f936d-aab5-425f-be72-812e2a1edc27)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/dd4d3d7f-5555-4067-b568-8a6be33a0c5f)

Finally the job succeeded.

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/b93febc5-d708-4c01-b328-b6af78fb3049)

We have successfully implemented using GitHub Action but you should take note 

































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

We have successfully implemented using GitHub Action but you should take note that the ubuntu latest image used was created by github .
If we decide to have it self hosted. Theres a different approach we have to take to actualize it.



## SELF-HOSTED APPROACH 

We create an instance on any cloud hosted server .In this case AWS  and ensure its running .

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/ec3c80ee-b842-43a8-b67c-420432dc6e95)

Navigate back to your NodeJs yml file and make sure its running on "self-hosted" and commit the changes

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/40cab19d-d4a8-4a6d-ba85-8c3511bd901e)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/4a3f1487-8c45-4d9b-90f5-091c29550947)


#### 4th Workflow

Immediate Check  and final check of the Git Action workflows

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/0e91d5e5-a1c8-420d-823f-f8f702455e27)

It would be noticed that the build is waiting for a runner to pick up the job since it is self-hosted.

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/13ae349e-1ba2-4aea-aafd-ce014f535b37)

Click on Settings and Click on Actions Tab and proceed to Click Runners as shown below

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/15c0690f-45df-44fb-8b6c-e35da8dc5c6e)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/a8811d9e-544b-48ed-a62e-0e85306cd8bb)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/7a811a25-5a79-483d-973f-30c40f679ec3)


CLIKC THE "New Self-hosted runner" button and speifcy its a Linux with the commands below

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/56e35848-2db7-47ba-aee6-9f2570c98b9c)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/4c6262f6-06aa-4715-9158-d4b8723e1fed)

Navigate back to the terminal and perform the actions below

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/979671cc-fd09-4e63-92f4-52934baec178)

Authenticate and connect to Git Hub and ensure Runner us successfully added and settings saved 

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/7c66774f-40a1-4e4f-8735-0d540820c6fe)


Notice Our server is Populated in the runners section after refreshing it .

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/4c4caa20-af75-422d-98aa-6a3ff568676c)

Once that is done ,Check the files in the action-runner directory and locate the ./svc.sh file and proceed to install and start 

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/2f27c405-3cb8-4107-b031-e3a969d5e7dc)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/99b05446-0bc8-452a-b6a9-ad7d7cf49c86)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/b0ddb851-fa04-48bf-918a-97b71638ded0)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/8849eaf8-6962-43cf-b241-b1b9d9b59b53)

Now let us  get into the  _work and NodeJS Sample directories  check the file in the  


![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/6e545305-f06a-46c4-8b11-4989ff3a3356)

Then go ahead to make a change on the content in the app.js file and commit it 

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/c5a5fbdb-861d-4f69-b6a1-d5d104c2bc64)

#### 5th Workflow

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/c294a443-93ca-4b42-a97c-c66edeb9075c)

Check the status on terminal to observe it showed succeeded

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/2c9b5457-4e08-4dfe-bee6-d7d59ec5429a)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/5b87e5be-a393-41f6-b533-94e1a2150003)

View the app.js file and see the changes as reflected on github

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/e9e4d3bd-5184-42ce-9dec-cb0e1568ec56)


Update and Install NodeJS,npm packages 

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/15dcdb30-6eca-482e-bea3-57c036280047)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/6a58fa86-894f-472b-8263-ee7b7b7f0ba8)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/d24cc715-fee1-4a09-b106-44380ec81ec0)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/70bec835-a773-45cb-a9e2-2369a3561783)

Ensure to install pm2 which servers as the process manager to allow us to use the terminal for other tasks while the server is running nodeJs


![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/a4c885ba-bfdd-4e80-96da-95dc4ed2a42a)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/bc647b0f-c5db-4a34-bb55-0e1575426c55)


Once done run the command  `node app.js` 

Take note it  should be running on port:3000

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/07f67f6e-9fc8-415d-a0ef-1de0a9210d2f)



Navigate back to the server and ensure it is inserted in the security group section as shown below 


![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/617921ab-b4f2-4970-95e7-d089b8606a1f)


![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/da133a28-7743-4222-b46f-d1279f1fec21)


Type the ip address and port on the web browser .Successfully displayed 

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/7f9af747-ac1d-45e5-afdc-987fb4942a73)


We can try again to ensure its working as expected  and can see its successfully displayed 

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/59ff32f5-bdf9-40cc-a2c5-cfc2a602665e)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/fad49f5b-ca95-4c69-9a29-d29570d05d72)

![image](https://github.com/eyewande2022/NodeJS-CI-sample/assets/116227096/7fcd2f50-e904-4741-80a6-1e3142e84d45)




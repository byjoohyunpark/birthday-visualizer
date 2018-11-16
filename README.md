# birthday-visualizer
This data visualization project is a personal experiment on building single page applications (SPAs). You can view project [here](https://birthday-visualizer.glitch.me/).
* Back-end : Node, Express.js, MongoDB 
* front-end : HTML/CSS, jQuery, Ajax, Three.js



## Set up
Clone this repository, cd to your folder and install following packages. Also You have to set up [MongoDB](https://www.mongodb.com/) environment for storing data. Then ideally you should be able to run this locally. 



```
npm install express --save
```
```
npm install mongojs --save
```


Create ```config.js``` file and fill your information. This will connect your MongoDB space with the node.


```
var config = {
mlabstring: "name:info@xxxxxxxxx.mlab.com:xxxxx/folder"
}
module.exports = config 
```


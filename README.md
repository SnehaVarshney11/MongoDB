# What is No SQL database
1) It's not No SQL, It's NOT ONLY SQL.
2) NoSQL Database is used to refer a non-SQL or non-relational database.
3) It's not even a replacement to RDBMS.
4) No-SQL database dosen't use tables for storing data.
5) As compared to older days, we are saving more and more data.
6) It is generally used to store big-data and real time web applications. 

# Difference between SQL and NoSQL
* &nbsp; SQL 
1) Sql database are primary called as Relational Database.   
2) Sql database are table-based. 
3) They are vertically scalable. 
4) Oracle, Postgres, MS-SQL etc. 
* &nbsp; NoSQL
1) NoSql database are primary called as Non- relational or distributed database. 
2) NoSql database are document based, key-value pairs, graph databases.
3) They are horizontally scalable.
4) MongoDB, Redis, Neo4j, Cassendra etc. <br>
<img src="/IMAGES/Difference.png">

# What is MongoDB
* MongoDB is a cross-platform, document oriented database that provides-->
High Performance, High Availability, Easy Scalability
* It works on the concept of <b>Collection</b> and <b>Document</b>
* There is no concept of rows. <br>
* Use JSON Structure means MongoDb uses JS Object.
<img src="/IMAGES/Architecture.png">
* <b> Main Advantage of MongoDB -> </b> In mongodb, we don't think about the structure and schema. 
<br><br>
<b> Database -> </b>Database is a physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has mutilple database.<br> 
<b> Collection -> </b>Collection is a group of MongoDB document. It is equivalent of RDBMS table. A collection exists within single database. Collections don't enforce a schema. Typically, all documents in a collection are of similar or related purpose.<br>
<b> Document -> </b> It is a set of key-value pair. Documents have dynamic schema. 

# Advantages of MongoDB
1) Schema less.
2) Structure of a single object is clear.
3) No complex joins.
4) Deep query-ability.
5) Tuning.
6) Ease of scale-out.

# Where to use MongoDB?
In Big Data, Content Management and Delivery, Mobile and Social Infrastructure, User Data Management, Data Hub etc. 

# Types of NoSQL database
1) Key Value Pair -> Dynamo DB, Azure Table Storage (ATS)
2) Document Based -> MongoDb, AmazonSimple DB, Couch DB
3) Graph Database -> Neo4j, Infogrid
4) Column Oriented Database -> Bigtable(Google), HBase

# Organizations that use MongoDB
Adobe, LinkedIn, McAfee, FourSquare, eBay, MetLife, SAP
# Download MongoDb via this link->
https://www.mongodb.com/try/download/community (Download msi file)
* <b><u> Steps to download </u></b>
Open downloaded msi file -> click on next -> accept terms then next -> chose complete setup type -> next -> then click on install -> click on finish<br>
Go to C Drive -> Program files -> MongoDB -> Server -> 5.0 -> bin then copy the path
* Now SetUp Path --> Go to Environment Variable -> In advance tab go to Environment Variables -> Under system variable go to <b>Path</b> then <b>New</b> then paste the same path -> click on OK
* Now open CMD -> type mongod -> type mongo -> show dbs<br>
* <b><u> To Create Database </u></b> --> write <b>use database_name </b> (in cmd) 
* <b> NOTE: </b> Now there is no collection in this database if we show this database by using show dbs, it will not show that database because we need to have atleast one collection in our database.
* <b><u> To create Collection--> </u></b> db.createCollection("MyNewCollection");
Now it will show that database. 
* <b><u> To Show Collections--></u></b> show collections
* <b><u> Insert records in collection--></u></b> db.collectionName.insert({name: "Sneha", class: "SecD", age: 20})
* <b><u> Show the record in Collection--></u></b> db.collectionName.find();
* <b><u> Remove the Collection--></u></b>  db.collectionName.drop();
* <b><u> Remove the DataBase--></u></b>  db.dropDatabase();

# MongoDB Data Types
Data type is an essential component of a language or script that is used to define the type of data being used in framing the database. <b>MongoDB stores data in BSON format.</b>
# What Are JSON and BSON?
JavaScript Object Notation (JSON) is a standard file format that uses human type readable text to transmit data with attribute-value pairs and array data types. This is one of the most common data formats which are mainly used for asynchronous browser-server communication. JSON is a language-independent format. BSON, on the other hand, is a computer interchange format that is mainly used for data storage and as a network transfer format in the MongoDB database. It is a simple binary form which is used to represent data structures and associative arrays (often called documents or objects in MongoDB).<br>
<b>NOTE:</b> What is asynchronous data transfer? -->Asynchronous (Non-blocking service) data is data that is not synchronized when it is sent or received. In this type of transmission, signals are sent between the computers and external systems or vice versa in an asynchronous manner.

# Difference between JSON and BSON
JSON is used to transmit the data and BSON is used to store the data.
<img src="/IMAGES/JsonAndBson.png">

# Different MongoDB Data Types
<img src="/IMAGES/Data-Types.jpg"><br>
* <b><u>Integer:</u></b>Integer is a data type that is used for storing a numerical value.
<h3>Example:</h3> 
<h4>&nbsp;&nbsp; db.TestCollection.insert({"Integer example": 62}) </h4><br>
<img src="/IMAGES/Integer.png">

* <b><u>String:</u></b>String is one of the most frequently implemented data type for storing the data.
<h3>Example:</h3> 
<h4>&nbsp;&nbsp; db.TestCollection.insert({"string data type" : "This is a sample message."})</h4><br>
<img src="/IMAGES/String.png">

* <b><u>Double:</u></b>Double, as we know, is used to store float values. It represents the float value and is of 8 bytes.
<h3>Example:</h3> 
<h4>&nbsp;&nbsp; db.TestCollection.insert({"double data type": 3.1415})</h4><br>
<img src="/IMAGES/Double.png">

* <b><u>Null:</u></b>Null is implemented for storing a Null value.
<h3>Example:</h3> 
<h4>&nbsp;&nbsp; db.TestCollection.insert({" EmailID ": null})</h4><br>
<img src="/IMAGES/Null.png">

* <b><u>Date:</u></b>Date is implemented for storing the current date and time as UNIX-time format.
<h3>Example:</h3> 
var date=new Date()

var date2=ISODate()

var month=date2.getMonth()

db.TestCollection.insert({"Date":date, "Date2":date2, "Month":month}) <br>

<img src="/IMAGES/Date.png">

* <b><u>Boolean:</u></b>Boolean is implemented for storing a Boolean (i.e., true or false) values.
<h3>Example:</h3> 
<h4>&nbsp;&nbsp; db.TestCollection.insert({"Nationality Indian": true}) <br>
<img src="/IMAGES/Boolean.png">

* <b><u>Arrays:</u></b>Arrays are implemented for storing arrays or list type or several values under a single key.
<h3>Example:</h3> 
var degrees = ["BCA", "BS", "MCA"]
<h4>&nbsp;&nbsp; db.TestCollection.insert({" Array Example" : " Here is an example of array"," Qualification" : degrees})</h4><br>
<img src="/IMAGES/Array.png">

* <b><u>Object:</u></b>Object is implemented for embedded documents.
<h3>Example:</h3> 
var embeddedObject = {"English" : 94, "ComputerSc." : 96, "Maths" : 80, "GeneralSc." : 85}
<h4>&nbsp;&nbsp; db.TestCollection.insert({"Object data type" : "This is Object","Marks" : embeddedObject})</h4><br>
<img src="/IMAGES/Object.png">

* <b><u>Min/Max Keys:</u></b>Min / Max keys are implemented for comparing a value adjacent to the lowest as well as highest BSON elements.<br>
<img src="/IMAGES/Min&Max.png">

* <b><u>Regular expression:</u></b>Regular expression is implemented for storing regular expression.<br>
<img src="/IMAGES/RegExp.png">

* <b><u>Code:</u></b>Code is implemented for storing JavaScript code for your MongoDB document.<br>
<img src="/IMAGES/code.jpg">

* <b><u>Binary data:</u></b>Binary data is implemented for storing binary data.<br>
<img src="/IMAGES/Binary.jpg">

* <b><u>Object ID:</u></b>Object ID is implemented for storing the ID of the document.<br>
<img src="/IMAGES/Obj ID.jpg">

# CRUD Operation
* C stands for Create Documnet, R stands for Read Documnet, U stands for Update Documnet, D stands for Delete Documnet
# * CREATE DOC (insert Documents in MongoDb)
1) <b>insert() -></u> We can insert one or more data. But for multiple records, the records should be in array.<br>
<img src="/IMAGES/insert.png"><br>
2) <u>insertOne() -></u> Insert only a single document.<br>
<img src="/IMAGES/insertOne.png"><br>
3) <u>insertMany() -></u> Insert more than one records. It produces obj_ID for every records in output. <br>
<img src="/IMAGES/insertMany.png"><br>

# * READ DOC
<b>Methods:</b> find(), findOne()
> db.collectionName.find({Query}, {projection})
* If we want to fetch the record of particular index --
> db.CollectionName.find()[index];
* If there are multiple records in which for e.g. name is same and we want first record --
> db.collectionName.findOne();
<b>NOTE:</b> There is no use of pretty with findOne() method. 
* If there are multiple records in which for e.g. name is same and we want only one record --
> db.collectionName.find({query}).pretty().limit(1);
* If there are multiple records in which for e.g. name is same and we want second record --
> db.collectionName.find({query}).pretty().limit(1).skip(1);
* If there are multiple records in which for e.g. name is same and we want two records and skip first record --
> db.collectionName.find({query}).pretty().limit(2).skip(1);
<b>NOTE:</b> We can use <b>forEach(printjson)</b> instead of pretty();

# * UPDATE DOC
<b>Methods:</b> update(), updateOne(), updateMany(), save()
> db.collectionName.update({query}, {$set:{key:value}}) 
<img src="/IMAGES/update.png"><br>
<b>NOTE:</b> update() works same as updateOne() means both functions update only single record.  
updateMany() :- It updates multiple records. 
<b> Update multiple records with the help of update:-
> db.collectionName.update({name: "Sneha"}, {$set:{sec: "A"}}, multi: true)

* If we want to add a particular record for all then -
> db.collectionName.updateMany({}, {$set:{email: null}}) -> here {} means for all
* To update attribute -
> db.collectionName.updateMany({}, {$rename: {name: "firstname"}})
* To remove an attribute from all the records -
> db.collectionName.updateMany({}, {$unset:{email:null}})

# * DELETE DOC
1) deleteOne() :- delete single record.
2) deleteMany() :- delete multiple records.
3) remove() :- It removes all the records within query or without query.

# Aggregation 
* It is an operation used to process the data that returns the computed results. 
* It is basically group of data from multiple documents and operates in many ways on those grouped data in order to return one combined result. 
* In sql, count(*) and with group by is an equivalent of MongoDB aggregation.
* Aggregate function groups the records in a collection, and can be used to provide sum, avg, max, min etc out of the grouped selected. 
# Aggregation Modes
1) Aggregation Pipeline -> Pipeline provides efficient data aggregation using native operations within MongoDB and is the preferred method for data aggregation in MongoDB.  
2) Map-Reduce
3) Single Purpose Aggregation Operations

<b> 1) Aggregation Pipeline -></b> In this method, we can pipe a collection into the top and transform it though a series of operations, eventually popping a result out the bottom. 

* <h2>Aggregation Stage Operations -> </h2> $match, $sort, $skip, $group, $count, $out, $project, $limit, $unwind <br>
Example: <br>
<b>Count</b> <img src="/IMAGES/Count.png"> <br>
<b>Match</b> <img src="/IMAGES/Match.png"> <br>
<b>Group (id is compulsory)</b> <img src="/IMAGES/Group.png"> <br>
<b>Push</b> <img src="/IMAGES/Push.png"> <br>
<b>Projection</b> <img src="/IMAGES/Projection.png"> <br>
<b>Sort</b> <img src="/IMAGES/Sort.png"> <br>
<b>Limit</b> <img src="/IMAGES/Limit.png"> <br>
<b>Skip</b> <img src="/IMAGES/Skip.png"> <br>
<b>Out</b> <img src="/IMAGES/Out.png"> <br> <img src="/IMAGES/Compass.png"><br>
<b>Skip</b> <img src="/IMAGES/Skip.png"> <br>
<b>Unwind</b> <img src="/IMAGES/Unwind.png"> <br>

# Indexes
* Indexes improve MongoDB query execution.
* Without index whole collection must be scanned(COLLSCAN).
* Index stores sorted files values.
* If appropriate index exists, MongoDB performs only index scan(IXSCAN).

* # Default _id Index
* {_id:1} is default index in each MongoDB collection.
* Name of this index is _ id_.
* Default _id index is unique.
``` 
{
    "v" : 2,
    "key" :{_id:1},
    "name" : "_id_",
    "ns" : "myDb.persons"
}
```
* # getIndexs() Method
* Returns current indexes for certain collection.
<br> db.<collectionName>.getIndexes()
<img src="/IMAGES/getIndex.png"> <br>

* # Create new Index
* db.collection.createIndex({<keyName>: [-1 | 1]}, <options>)
* <b> Index Creation Options <b> :- a) Create index in background. Other operations will not be blocked. 
{background: true}
b) Create unique index. {unique: true}
c) Specify name for the index. {name: "<indexName>"}
* <b> Create Unique Index </b> :- 
<img src="/IMAGES/createIndex.png"> <br>
<img src="/IMAGES/createIndex2.png"> <br>

* # Drop single and multiple Indexes
<img src="/IMAGES/drop.png"> <br>
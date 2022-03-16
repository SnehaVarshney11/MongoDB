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
<img src="/IMAGE/Difference.png">

# What is MongoDB
* MongoDB is a cross-platform, document oriented database that provides-->
High Performance, High Availability, Easy Scalability
* It works on the concept of <b>Collection</b> and <b>Document</b>
* There is no concept of rows. <br>
* Use JSON Structure means MongoDb uses JS Object.
<img src="/IMAGE/Architecture.png">
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
* <b> Steps to download </b>
Open downloaded msi file -> click on next -> accept terms then next -> chose complete setup type -> next -> then click on install -> click on finish<br>
Go to C Drive -> Program files -> MongoDB -> Server -> 5.0 -> bin then copy the path
* Now SetUp Path --> Go to Environment Variable -> In advance tab go to Environment Variables -> Under system variable go to <b>Path</b> then <b>New</b> then paste the same path -> click on OK
* Now open CMD -> type mongod -> type mongo -> show dbs

const MongoClient = require("mongodb").MongoClient;

var URL = "mongodb+srv://root:MongoDB@cluster0.rjvil.mongodb.net/damo?retryWrites=true&w=majority";

//const config = {useUnifieldTopology: true};

MongoClient.connect(URL, function(error, MYMongoClient){
    if(error){
        console.log("connection fail");
    }
    else{
        console.log("connection sucess");
        //InsertData(MYMongoClient);
        DeleteOneItem(MYMongoClient);
    }

});
function InsertData(MYMongoClient){
    var MYDataBase = MYMongoClient.db("damo");

    var MyCollection = MYDataBase.collection("list");
    var MyData = {name :"Chayan Majumdar",Roll:"01", Class:"Ten", City:"Dhaka"};
    MyCollection.insertOne(MyData, function(error){
        if(error){
            console.log("Data Insert Fail");
        }
        else{
            console.log("Data Insert Success");
        }

    });
}

function DeleteOneItem(MyMongoClinet) {
    var MyDataBase= MyMongoClinet.db("damo");
    var MyCollection= MyDataBase.collection('list');
    var DeleteItem={Roll:"02"}
    MyCollection.deleteOne(DeleteItem,function (error) {
        if(error){
            console.log("Data Delete Fail");
        }
        else{
            console.log("Data Delete Success");
        }
    });
}
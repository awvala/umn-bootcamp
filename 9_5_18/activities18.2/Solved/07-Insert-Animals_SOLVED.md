# INSERTING ANIMALS 

* An example of animals you can insert into the zoo db:

```
use zoo

``` show dbs
``` Optionally setup animals Collections (otherwise auto created with documents)
``  db.createCollection("animals")
``  show collections


 db.animals.insert({"name" : "Monkey", "numLegs" : 4.0, "class" : "mammal", "weight" : 14.0, "whatIWouldReallyCallIt" : "Marcel" }) 

 db.animals.insert({"name" : "Groundhog", "numLegs" : 4.0, "class" : "mammal", "weight" : 15.0, "whatIWouldReallyCallIt" : "Punxsatawny Phil" }) 

 db.animals.insert({"name" : "Snowy Owl", "numLegs" : 2.0, "class" : "Bird", "weight" : 8.0, "whatIWouldReallyCallIt" : "Hedwig" }) 

 db.animals.insert({"name" : "Dolphin", "numLegs" : 0, "class" : "mammal", "weight" : 200.0, "whatIWouldReallyCallIt" : "Snowflake" }) 

 db.animals.insert({"name" : "Komodo dragon", "numLegs" : 4.0, "class" : "Reptile", "weight" : 25.0, "whatIWouldReallyCallIt" : "Carmine Sabatini" }) 


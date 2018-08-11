var orm = require("./config/orm.js");

// Console log all the party names.
orm.selectAndOrder("party_name", "parties", "id");
// Console log all the client names.
orm.selectAndOrder("client_name", "clients", "id");

// Console log all the parties that have a party-type of grown-up.
orm.selectWhere("parties", "party_type", "grown-up");

// Find the buyer with the most pets.
orm.findClientList("client_name", "party_name", "party_type", "clients", "parties", "id","client_id");

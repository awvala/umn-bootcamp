var connection = require("./connection.js");

// Object Relational Mapper (ORM)
var orm = {
    selectWhere: function (tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            console.log("grown_up parties\n");
            console.log(result);
        });
    },
    selectAndOrder: function (whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findClientList: function (tableOneCol, tableTwoCol, tableTwoColTwo, tableOne, tableTwo, tableOneKey, ForeignKey) {
        var queryString =
            "SELECT ??, ??, ?? FROM ?? INNER JOIN ?? ON ??.?? = ??.?? ORDER BY ?? ASC";

        connection.query(
            queryString,
            [tableOneCol, tableTwoCol, tableTwoColTwo, tableOne, tableTwo, tableOne, tableOneKey, tableTwo, ForeignKey, tableOneCol],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;

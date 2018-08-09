// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps
$.get("/api/all", function (data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            row.addClass("oldChirps");

            row.append("<p>" + data[i].author + "</p>");
            row.append("<p>" + data[i].chirp + "</p>");
            row.append("<p>" + data[i].time_created + "</p>");

            $("#oldChirpContainer").prepend(row);

        }

    }

});

$("#newChirpSubmit").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newChirp = {
        author: $("#authorInput").val().trim(),
        chirp: $("chirpInput").val().trim(),
        time_created: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    // When user chirps
    $.post("/api/new", jsonData)
        .then(function () {

            var row = $("<div>");
            row.addClass("newChirps");

            row.append("<p>" + jsonData.author + "</p>");
            row.append("<p>" + jsonData.chirp + "</p>");
            row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

            $("#oldChirpContainer").prepend(row);

        });

    $("#author").val("");
    $("#chirp-box").val("");
});

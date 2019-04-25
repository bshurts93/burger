// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured-state").on("click", function (event) {
        var id = $(this).data("id");
        var newState = $(this).data("devoured-state");

        var newDevouredState = {
            devoured: newState
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed sleep to", newDevouredState);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#name-input").val().trim(),
            devoured: 0
        };

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New burger created!");
                location.reload();
            }
        );
    });
});

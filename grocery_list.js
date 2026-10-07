const prompt = require("prompt-sync")();

let groceries = [];
let option = "";

while (option !== "5") {

    console.log("\nGROCERY MANAGER");
    console.log("1. Add item");
    console.log("2. Search item");
    console.log("3. Remove item");
    console.log("4. Show list");
    console.log("5. Exit");

    option = prompt("Choose an option: ");

    if (option === "1") {

        let item = prompt("Enter an item: ");
        groceries.push(item);
        console.log("Item added!");

    } else if (option === "2") {

        let search = prompt("What item do you want to search? ");
        let found = false;

        for (let i = 0; i < groceries.length; i++) {
            if (groceries[i].toLowerCase() === search.toLowerCase()) {
                found = true;
            }
        }

        if (found === true) {
            console.log("Found!");
        } else {
            console.log("Not found.");
        }

    } else if (option === "3") {

        let remove = prompt("What item do you want to remove? ");
        let found = false;

        for (let i = 0; i < groceries.length; i++) {
            if (groceries[i].toLowerCase() === remove.toLowerCase()) {
                groceries.splice(i, 1);
                found = true;
                break;
            }
        }

        if (found === true) {
            console.log("Item removed!");
        } else {
            console.log("Item not found.");
        }

    } else if (option === "4") {

        console.log("\nYour grocery list:");

        for (let i = 0; i < groceries.length; i++) {
            console.log((i + 1) + ". " + groceries[i]);
        }

    } else if (option === "5") {

        console.log("Goodbye!");

    } else {

        console.log("Invalid option.");
    }
}
let addIcon = $("#add-icon");
let inputElement = $("#add-new-todo");
let content = $("#content");

let maxItems = 8;
let numOfItems = $("#content .item").length;

addIcon.click(appendANewItem);
$(document).keypress(appendANewItem);

function appendANewItem(evt) {
    if(evt.which != 1 && evt.which != 13) {
        return;
    }

    let newItem = createANewItem();
    if(newItem === undefined) {
        return;
    }

    if(numOfItems < maxItems) {
        content.append(newItem);
        inputElement.val("");
        numOfItems++;
    } else {
        alert("Too many items!");
    }
}

function createANewItem() {
    let newItem = document.createElement("div");
    newItem = $(newItem);
    newItem.addClass("item");

    let removeIcon = createARemoveElement();

    let todoName = document.createElement("p");
    todoName = $(todoName);
    todoName.addClass("todo-name");
    if(inputElement.val().length > 0) {
        todoName.text(inputElement.val());
    } else {
        window.alert("I won't insert an empty Todo!");
        return;
    }

    todoName.click(function() {
        todoName.toggleClass("todo-name--done");
    });

    newItem.on('mouseenter', function() {
        newCss = {
            width: "40px",
            opacity: "1.0"
        }
        removeIcon.css(newCss);
    });

    newItem.on('mouseleave', function() {
        oldCss = {
            width: "0px",
            opacity: "0.0"
        }
        removeIcon.css(oldCss);
    });

    newItem.append(removeIcon);
    newItem.append(todoName);

    return newItem;
}

function createARemoveElement() {
    let removeIcon = document.createElement("i");
    removeIcon = $(removeIcon);
    removeIcon.addClass("remove-icon");
    removeIcon.addClass("fa fa-trash-o");

    removeIcon.click(function() {
        parentNode = removeIcon.parent();
        parentNode.remove();
        numOfItems--;
    });

    return removeIcon;
}
export class dropDown {
    constructor(parentNode, buttonText, listOfItems){
        this.buttonText = buttonText;
        this.items = listOfItems;
        this.parent = parentNode;
        this.iconURL = document.createElement('link');
        this.container = document.createElement("div");
        this.dropDownButton = document.createElement("button");
        this.arrowIcon = document.createElement("span");
        this.dropDownItems = document.createElement("div");
    }
    
    createDropdown() {
        this.iconURL.rel = "stylesheet"
        this.iconURL.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        document.head.appendChild(this.iconURL);
    
        this.container.classList.add("container");
        this.dropDownButton.classList.add("dropDownButton");
        this.arrowIcon.classList.add("material-symbols-outlined");
        this.dropDownItems.classList.add("dropDownItems");

        
    
        this.dropDownButton.innerHTML = this.buttonText;
        this.dropDownButton.type = "button";
        this.arrowIcon.innerHTML = "expand_less";
        for (const item of this.items) {
            this.addDropDownItem(item)
        }

        this.dropDownButton.appendChild(this.arrowIcon);
        this.container.appendChild(this.dropDownButton);
        this.container.appendChild(this.dropDownItems);
    
        this.parent.appendChild(this.container);
    
    }

    addDropDownItem(itemName) {
        const newItem = document.createElement("a");
        newItem.innerHTML = itemName;
        newItem.classList.add("item");
        this.dropDownItems.appendChild(newItem);
    }

    initiateDropDown() {
        this.dropDownButton.addEventListener('click', () => {
            this.arrowIcon.classList.toggle("rotateIconDown");
            setTimeout(() => {
                this.dropDownItems.classList.toggle("visible");
            }, 250)
            
        })
    }

}

// function createDropdown(desiredLocation,buttonText, listOfItems) {
//     const iconURL = document.createElement('link');
//     const container = document.createElement("div");
//     const dropDownButton = document.createElement("button");
//     const arrowIcon = document.createElement("span");
//     const dropDownItems = document.createElement("div");
    
//     iconURL.rel = "stylesheet"
//     iconURL.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
//     document.head.appendChild(iconURL);

//     container.classList.add("container");
//     dropDownButton.classList.add("dropDownButton");
//     arrowIcon.classList.add("material-symbols-outlined");
//     dropDownItems.classList.add("dropDownItems");

//     dropDownButton.innerHTML = buttonText;
//     dropDownButton.type = "button";
//     arrowIcon.innerHTML = "expand_less";
//     for (const item of listOfItems) {
//         addDropDownItem(dropDownItems, item)
//     }

    
//     dropDownButton.appendChild(arrowIcon);
//     container.appendChild(dropDownButton);
//     container.appendChild(dropDownItems);

//     desiredLocation.appendChild(container);

// }

// function addDropDownItem(parentNode, itemName) {
//     const newItem = document.createElement("a");
//     newItem.innerHTML = itemName;
//     newItem.classList.add("item");
//     parentNode.appendChild(newItem);
// }

// function initiateDropDown() {
//     const dropDownButton = document.querySelector('.dropDownButton');
//     const dropDownContainer = document.querySelector('.dropDownItems');
//     const dropDownChevron = document.querySelector(".material-symbols-outlined");
    

//     dropDownButton.addEventListener('click', () => {
//         dropDownChevron.classList.toggle("rotateIconDown");
//         setTimeout(() => {
//             dropDownContainer.classList.toggle("visible");
//         }, 250)
        
//     })
// }
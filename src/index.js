import { dropDown } from "./drop-down.js";
import './styles.css';

const body = document.querySelector("body");
const myItems = ["Home","Contact", "Options", "Menu"];
const myDropdown = new dropDown(body, "Push Me!", myItems);

const myDropdown2 = new dropDown(body, "Push Me!", myItems);

myDropdown.createDropdown();
myDropdown.initiateDropDown();


// createDropdown(body,"Press Me", myItems);
// initiateDropDown();


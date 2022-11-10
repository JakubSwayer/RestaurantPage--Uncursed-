import mainPage from "./mainPage.js";
import Home from "./Home.js";
import Menu from "./Menu.js";
import Contact from "./Contact.js";

document.getElementById('content').appendChild(mainPage());
document.querySelector('.container').appendChild(Home());

const handleChange = (target) => {
    document.getElementById('inside').remove();
    if (target == "Home") {
        document.querySelector('.container').appendChild(Home());
    } else if (target == "Menu") {
        document.querySelector('.container').appendChild(Menu());
    } else if (target == "Contact") {
        document.querySelector('.container').appendChild(Contact());
    }
}

let btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', event => {
        handleChange(event.target.innerText)
    });
    
}



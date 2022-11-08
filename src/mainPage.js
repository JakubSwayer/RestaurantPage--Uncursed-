import backgroundImage from "./homeIMG.jpg";

const mainPage = () => {
    const mainPage = document.createElement('div');
    mainPage.classList.add('mainPage');

    const span = document.createElement('span');
    const backIMG = document.createElement('img');
    backIMG.src = backgroundImage;
    span.appendChild(backIMG);

    const container = document.createElement('div');
    container.classList.add('container');
    const header = document.createElement('header');
    const HomeBTN = document.createElement('button');
    const MenuBTN = document.createElement('button');
    const ContactBTN = document.createElement('button');
    HomeBTN.innerText = "Home" ; MenuBTN.innerText = "Menu" ; ContactBTN.innerText = "Contact";
    header.appendChild(HomeBTN);
    header.appendChild(MenuBTN);
    header.appendChild(ContactBTN);
    container.appendChild(header)

    const insideDiv = document.createElement('div');
    insideDiv.id = "inside";
    container.appendChild(span)


    mainPage.appendChild(span);
    mainPage.appendChild(container);

    return(mainPage)

}

export default mainPage;
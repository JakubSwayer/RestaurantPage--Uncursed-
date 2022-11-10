const Contact = () => {
    let text =["Warszawska 17","03-400","Bytom","Poland","756 483 9211","restaurant@mail.com"]

    const div = document.createElement("div");
    div.id = "inside";

    const heading = document.createElement("h1");
    heading.classList.add('contact-header');
    heading.innerText = "Contact";

    const contactBox = document.createElement("div");
    contactBox.classList.add("contact-box");

    const divOne = document.createElement("div");
    const divTwo = document.createElement("div");

    for (let i = 0; i < 4; i++) {
        let p = document.createElement('p');
        p.innerText = text[i];
        divOne.appendChild(p);
    }
    for (let i = 4; i < 6; i++) {
        let p = document.createElement('p');
        p.innerText = text[i];
        divTwo.appendChild(p);
    }
    div.appendChild(heading);
    contactBox.appendChild(divOne);
    contactBox.appendChild(divTwo);
    div.appendChild(contactBox);

    return(div);
}

export default Contact;
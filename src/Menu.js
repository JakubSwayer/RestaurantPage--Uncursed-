const Menu = () => {

    let list = ["Green Bean Salad","Crunchy Ribbons","Traditional Miso Soup"];

    const div = document.createElement("div");
    div.id = "inside";

    const h1 = document.createElement("h1");
    h1.innerText = "Menu";
    h1.classList.add('menu-header');
    const menuList = document.createElement("div");
    menuList.classList.add('menu-list');

    for (let i = 0; i < list.length; i++) {
        let el_h2 = document.createElement('h2');
        el_h2.innerText = list[i];
        let el_p = document.createElement('p');
        el_p.innerText = "Egestas congue quisque egestas diam in arcu cursus. Venenatis tellus in metus vulputate eu scelerisque felis. Mauris a diam maecenas sed enim ut sem viverra.";
        let el_hr = document.createElement('hr');

        menuList.appendChild(el_h2);
        menuList.appendChild(el_p);
        menuList.appendChild(el_hr);
    }



    div.appendChild(h1);
    div.appendChild(menuList);

    return(div);
}

export default Menu;
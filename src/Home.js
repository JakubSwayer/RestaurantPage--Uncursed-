const Home = () => {

    const div = document.createElement("div");
    div.id = "inside";

    const h1 = document.createElement("h1");
    h1.innerText = "The Restaurant";
    const  h2 = document.createElement("h2");
    h2.innerText = "Try recipies we put all our hearts to create and cook";

    div.appendChild(h1);
    div.appendChild(h2);

    return(div);
}

export default Home;
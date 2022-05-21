const form = document.querySelector("#box");
const textarea = document.querySelector("#floatingTextarea2");
const add = document.querySelector("#notes");
let int = 0;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = textarea.value
    const newcard = document.createElement("div")
    newcard.classList.add("card", "mx-3", "my-3", "newcard")
    newcard.style = "width: 18rem;";
    const newcardinnerHtml = `<div class="card-body">


    <h5 class="card-title">Note-${int}</h5>
    <p class="card-text">${value}</p>
    <a href="#" class="btn btn-primary">delete</a>
</div>`;
    int++;
    newcard.innerHTML = newcardinnerHtml;
    add.append(newcard);
    textarea.value = "";
})
add.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        const deleteditem = e.target.parentNode.parentNode;
        deleteditem.remove();
    }
})
const search = document.querySelector(".d-flex");
const valuesearch = document.querySelector(".d-flex>input")
search.addEventListener("input", (e) => {
    const searchedelement = valuesearch.value;
    const card = document.querySelectorAll(".newcard");
    console.log(card)
    console.log(searchedelement)
    console.log("hi")
    console.log(card);
     card.forEach((element) => {
        const content = element.getElementsByTagName("p")[0].innerHTML;
        console.log(content)
        if (content.includes(searchedelement)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        };

    })
})

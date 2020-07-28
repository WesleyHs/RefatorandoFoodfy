const receitas = document.querySelectorAll('.receitas')

for (let receita of receitas) {

    //recebe as receitas do data.js pelo ID

    receita.addEventListener("click", function () {
        const recipeId = receita.getAttribute('id')
        window.location.href = `/recipe/${recipeId}`
        //ao receber o id direciona pra page /receita/id
    })
}

//fazer aparecer e desaparecer os detalhes da receitas.

const content = document.querySelectorAll('.recipe-wrapper .content ');
const buttons = document.querySelectorAll('.button');


for (let [i, button] of buttons.entries()) {
    button.addEventListener("click", () => {
        if (content[i].classList.contains("show")) {
            content[i].classList.remove('show')
            content[i].classList.add('hide')
            button.innerHTML = "Mostrar"

        } else {
            content[i].classList.add('show')
            content[i].classList.remove('hide')
            button.innerHTML = "Esconder"
        }
    })
}
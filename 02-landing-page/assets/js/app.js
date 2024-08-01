let path = [
    "./assets/pages/home.html",
    "./assets/pages/produtos.html",
    "./assets/pages/localizacao.html",
    "./assets/pages/sobre.html",
    "./assets/pages/contato.html"
]

function mostrarPopUp(){
    document.getElementById('pop-up').style.display = 'block';
}

function fecharPopUp() {
    document.getElementById('pop-up').style.display = 'none';
}

function setDisplay(index) {
    let ajax = new XMLHttpRequest();

    ajax.open('GET', path[index]);
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.querySelector("main").innerHTML = ajax.responseText;
        }
    }

    setTimeout(() => {ajax.send()}, 100);
}

function changeDisplay(index) {
    let main = document.querySelector("main");
    let ajax = new XMLHttpRequest();

    ajax.open('GET', path[index]);
    main.classList.add('fade-out');
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            main.innerHTML = ajax.responseText;
        }

        if (ajax.readyState == 4 && ajax.status == 404) {
            main.innerHTML = "<h1>Error, página não encontrada</h1>"
        }
    }

    setTimeout(
        () => {ajax.send(); setTimeout(() => {main.classList.remove('fade-out'), 300 })}, 400
    );
}
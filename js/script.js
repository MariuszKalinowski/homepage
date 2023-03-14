{
    const welcome = () => {
        console.log("Cześć, miło że tu jesteś :)")
    };
    
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".js-navigation__themeName");

        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "dzienny" : "nocny";
    };

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();

}




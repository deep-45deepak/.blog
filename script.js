document.addEventListener("DOMContentLoaded", () => {
    const toggleMode = document.querySelector("#darkMode");

    toggleMode.addEventListener("click", () => {
        document.body.classList.toggle("bg-gray-700");
        document.body.classList.toggle("bg-white");
        document.body.classList.toggle("text-white");
        document.body.classList.toggle("text-black");
        document.getElementById("S2").classList.toggle("bg-gray-800");
        document.getElementById("S2").classList.toggle("bg-white");
    });

});

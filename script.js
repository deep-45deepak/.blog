document.addEventListener("DOMContentLoaded", () => {

    const uri = "https://api.github.com/users/deep-45deepak"
    fetch(uri)
        .then(response => response.json())
        .then(data => {
            const profileImage = document.getElementById('profile_image');
            profileImage.setAttribute('src', data.avatar_url);
        }
        ).catch(error => {
            console.error('Error fetching profile image');
        }
        );

    const toggleMode = document.querySelector("#darkMode");

    toggleMode.addEventListener("click", () => {
        document.body.classList.toggle("bg-gray-700");
        document.body.classList.toggle("bg-white");
        document.body.classList.toggle("text-white");
        document.body.classList.toggle("text-black");
        document.getElementById("S2").classList.toggle("bg-gray-800");
        document.getElementById("S2").classList.toggle("bg-white");
    });

    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });



    const text = "A beautiful website starts here!";
    let index = 0;
    const speed = 150;
    const textElement = document.getElementById("animated-text");

    function animateText() {
        if (index <= text.length) {
            textElement.textContent = text.slice(0, index);
            index++;
            setTimeout(animateText, speed);
        } else {
            setTimeout(() => {
                index = 0;
                textElement.textContent = "";
                animateText();
            }, 1000);
        }
    }

    animateText();


});




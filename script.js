/* =====================================
   CYBER SECURITY AWARENESS PORTAL
   JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const navbar =
        document.getElementById("navbar");


    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("show");

        });

    }


    document
        .querySelectorAll("#navbar a")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                if (navbar) {

                    navbar.classList.remove("show");

                }

            });

        });


    /* =====================================
       DARK MODE
    ===================================== */

    const darkBtn =
        document.getElementById("darkBtn");


    if (darkBtn) {

        darkBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark");


            const darkMode =
                document.body.classList.contains("dark");


            localStorage.setItem(
                "darkMode",
                String(darkMode)
            );

        });

    }


    const savedMode =
        localStorage.getItem("darkMode");


    if (savedMode === "true") {

        document.body.classList.add("dark");

    }


    /* =====================================
       PASSWORD STRENGTH
    ===================================== */

    const passwordInput =
        document.getElementById("passwordInput");

    const passwordResult =
        document.getElementById("passwordResult");

    const strengthProgress =
        document.getElementById("strengthProgress");


    if (
        passwordInput &&
        passwordResult &&
        strengthProgress
    ) {

        passwordInput.addEventListener(
            "input",
            function () {

                const password =
                    passwordInput.value;

                let score = 0;


                if (password.length >= 8)
                    score++;


                if (/[A-Z]/.test(password))
                    score++;


                if (/[a-z]/.test(password))
                    score++;


                if (/[0-9]/.test(password))
                    score++;


                if (/[^A-Za-z0-9]/.test(password))
                    score++;


                if (password.length === 0) {

                    strengthProgress.style.width =
                        "0%";

                    passwordResult.innerHTML =
                        "Password strength will appear here.";

                    return;

                }


                if (score <= 2) {

                    strengthProgress.style.width =
                        "30%";

                    passwordResult.innerHTML =
                        "❌ Weak Password";

                }

                else if (score <= 4) {

                    strengthProgress.style.width =
                        "65%";

                    passwordResult.innerHTML =
                        "⚠️ Medium Password";

                }

                else {

                    strengthProgress.style.width =
                        "100%";

                    passwordResult.innerHTML =
                        "✅ Strong Password";

                }

            }
        );

    }


    /* =====================================
       SHOW PASSWORD
    ===================================== */

    const showPasswordBtn =
        document.getElementById(
            "showPasswordBtn"
        );


    if (
        showPasswordBtn &&
        passwordInput
    ) {

        showPasswordBtn.addEventListener(
            "click",
            function () {

                if (
                    passwordInput.type ===
                    "password"
                ) {

                    passwordInput.type =
                        "text";

                }

                else {

                    passwordInput.type =
                        "password";

                }

            }
        );

    }


    /* =====================================
       QUIZ
    ===================================== */

    const submitQuizBtn =
        document.getElementById(
            "submitQuizBtn"
        );


    if (submitQuizBtn) {

        submitQuizBtn.addEventListener(
            "click",
            function () {

                let score = 0;


                const q1 =
                    document.querySelector(
                        'input[name="q1"]:checked'
                    );


                const q2 =
                    document.querySelector(
                        'input[name="q2"]:checked'
                    );


                const q3 =
                    document.querySelector(
                        'input[name="q3"]:checked'
                    );


                const result =
                    document.getElementById(
                        "quizResult"
                    );


                if (!result)
                    return;


                if (!q1 || !q2 || !q3) {

                    result.innerHTML =
                        "⚠️ Please answer all questions.";

                    return;

                }


                if (q1.value === "correct")
                    score++;


                if (q2.value === "correct")
                    score++;


                if (q3.value === "correct")
                    score++;


                if (score === 3) {

                    result.innerHTML =
                        "🎉 Excellent! Score: 3/3";

                }

                else if (score === 2) {

                    result.innerHTML =
                        "👍 Good! Score: 2/3";

                }

                else {

                    result.innerHTML =
                        "📚 Keep Learning! Score: "
                        + score +
                        "/3";

                }

            }
        );

    }


    /* =====================================
       CONTACT / FEEDBACK
    ===================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();


                const nameInput =
                    document.getElementById(
                        "contactName"
                    );


                const result =
                    document.getElementById(
                        "contactResult"
                    );


                if (
                    nameInput &&
                    result
                ) {

                    result.innerHTML =
                        "✅ Thank you, "
                        + nameInput.value
                        + "! Your feedback has been received.";

                }


                contactForm.reset();

            }
        );

    }


    /* =====================================
       WEBSITE LOADED
    ===================================== */

    console.log(
        "Cyber Security Awareness Portal Loaded Successfully."
    );

});




document.addEventListener("DOMContentLoaded", function () {

    const profiles = document.querySelectorAll(".profile");


    profiles.forEach(function (profile) {

        profile.addEventListener("click", function (event) {

            /*
             * If the user clicks LinkedIn,
             * GitHub or Email, don't open/close
             * the profile card.
             */

            if (event.target.closest(".icons a")) {
                return;
            }


            /*
             * Close every other profile
             */

            profiles.forEach(function (otherProfile) {

                if (otherProfile !== profile) {

                    otherProfile.classList.remove("active");

                }

            });


            /*
             * Open/close the selected profile
             */

            profile.classList.toggle("active");

        });

    });


    /*
     * Close an opened profile when the user
     * clicks outside the profile.
     */

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".profile")) {

            profiles.forEach(function (profile) {

                profile.classList.remove("active");

            });

        }

    });

});
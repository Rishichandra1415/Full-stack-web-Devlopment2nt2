var ButtonLoop = document.querySelectorAll(".drum").length;
for (var i = 0; i < ButtonLoop; i++) {
    // this is touch code....


    document.querySelectorAll(".drum")[i].addEventListener("click", sound);

    function sound() {
        // this.style.color = "white";
        var BUttonInnerHtml = this.innerHTML;
        makeSound(BUttonInnerHtml);

        addAnimation(BUttonInnerHtml);

    }

    // this  is keypress code...

    document.addEventListener("keypress", function(event) {
        makeSound(event.key);
        addAnimation(event.key);
    });



    function makeSound(key) {
        switch (key) {
            case "w":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;


            case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

            case "s":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            case "d":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

            case "j":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case "k":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

            case "l":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;




        }


    }


    function addAnimation(currentKey) {


        var activeBtn = document.querySelector("." + currentKey);
        activeBtn.classList.add("pressed"); // I use classList attibute too add the class in java script

        setTimeout(function() {
            activeBtn.classList.remove("pressed"); // in this   we can remove the class..
        }, 100);

    }







}
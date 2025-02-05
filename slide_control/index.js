var Input = document.getElementById("Input");
        var price = document.querySelectorAll('.price_tag');
        var box = document.getElementsByClassName("box");
        Input.addEventListener("input", function (e) {
            let x = Input.value;
            var Output = document.getElementById("textOutput");
            Output.innerHTML = x;
            // console.log("x=", x);

            for (var i = 0; i < price.length; i++) {
                var price_tag = Math.round(price[i].textContent);
                var box_style = box[i].style;
                // console.log("price_tag => "+ price_tag);
                if (price_tag <= x) {
                    // console.log("price=", price_tag);
                    // console.log("x=", x);
                    // console.log("box1");
                    box_style.display = "block";
                } else {
                    // console.log("box2");
                    box_style.display = "none";
                }
            }
        });
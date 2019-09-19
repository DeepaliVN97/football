$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});


// function myfunction() {
//     var x= document.getElementById("wrapper");
//     if(x.className =="close")
//     {
//         document.getElementById("wrapper").addEventListener("click", function (event) {
//             event.preventDefault()
//         })
//         // x.preventDefault();
//         // x.className="active";
//     }
//     if (x.className == "active")
//     {
//         x.className = "close";
//     }

    
// }

function hover() {
    // var y = document.getElementsByClassName("black_white");
    // if(clas)
    // y.className = color_image
    document,getElementsByClassName("black_white").toggleClass("color_image");
    
}
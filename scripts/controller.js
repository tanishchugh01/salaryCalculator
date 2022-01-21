window.addEventListener('load',mymain);

function mymain()
{
    var submit = document.getElementsByTagName("button")[0];

    submit.addEventListener("click", changeValue);
}

function changeValue() {
    var mybs = document.getElementById("bs");
    allowences.bs = parseInt(mybs.value);
    
    var answer = document.querySelector("#answer");
    
    answer.innerHTML = "<hr>";

    for (let key in allowences) {
        if (typeof allowences[key] === "function") {
            var ptag = document.createElement("p");

            ptag.innerHTML = `${key.toUpperCase()} is &#x20B9;${allowences[key]().toLocaleString('hi','in')}`;

            answer.appendChild(ptag);
        }
    }
}
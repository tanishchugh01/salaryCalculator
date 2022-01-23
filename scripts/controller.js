window.addEventListener('load',mymain);

function mymain()
{
    var submit = document.getElementsByTagName("button")[0];

    submit.addEventListener("click", changeValue);
}

function changeValue() {    
    var mybs = document.getElementById("bs");
    allowences.bs = parseInt(mybs.value);

    if (!validate())
    {
        return;
    }
    
    var answer = document.querySelector("#answer");
    
    answer.innerHTML = "<hr>";

    for (let key in allowences) {
        if (typeof allowences[key] === "function") {
            var ptag = document.createElement("p");

            ptag.innerHTML = `${key.toUpperCase()} is &#x20B9;${allowences[key]().toLocaleString('hi','in')}`;
            
            answer.appendChild(ptag);
        }
    }
        
        //DRY was voilated here
        //
        //document.getElementById("hra").innerText = allowances.hra();
        // document.getElementById("da").innerText = allowances.da();
        // document.getElementById("ta").innerText = allowances.ta();
        // document.getElementById("ma").innerText = allowances.ma();
        // document.getElementById("pf").innerText = allowances.pf();
        // document.getElementById("gs").innerText = allowances.gs();
        // document.getElementById("ns").innerText = allowances.ns();
}

function validate()
{
    var error=document.querySelector('#error');

    if(!allowences.bs)
    {
        document.querySelector('#answer').innerHTML='';
        
        error.innerHTML='Please fill the Salary <i>properly</i>!';
        
        return false;
    }
    else if(allowences.bs<0)
    {
        document.querySelector('#answer').innerHTML='';
        
        error.innerHTML='Your Salary is too high ( <i>Just like you, may be :)</i> )';
        
        return false;
    }
    else
    {
        error.innerHTML='';
    
        return true;
    }
}
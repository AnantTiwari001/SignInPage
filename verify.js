function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); 
    xmlHttp.send(null);
}

var url = "https://emailvalidation.abstractapi.com/v1/?api_key=74e85733748d4baeb4adfef730bec241&email=ananttiwariali@gmail.com"

let emailInput= document.getElementById('email')

function emailtyping(){
    url=`https://emailvalidation.abstractapi.com/v1/?api_key=74e85733748d4baeb4adfef730bec241&email=${emailInput.value}`;
    console.log(url);
    httpGetAsync(url, emailCheck);
}
emailInput.addEventListener('change',emailtyping)

function emailCheck(res) {
    console.log(res);
    if (JSON.parse(res).is_smtp_valid.value) {
        emailInput.style.border='1.5px solid green'
    }else{
        document.getElementById('emailLabel').innerText='Invalid email';
        emailInput.style.border='1.5px solid red'
    }
}
async function singIn() {
    const login_input = document.getElementById("input-login").value;
    const password_input = document.getElementById("input-pass").value;

    const res = await fetch("api/login", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({login, password}),
    });

    const data = await res.json();
    if(data.success){
        alert(data.message)
    }
    else{
        alert(data.error());
    }   
}

async function singUp() {
    const login_input = document.getElementById("input-login").value;
    const password_input = document.getElementById("input-pass").value;

    const res = await fetch("api/register", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({login: login, password: password}),
    });

    const data = res.json();
    if(data.success){
        alert(data.message)
    }
    else{
        alert(data.error());
    }
}
const btn_act = document.getElementById("btn-act");

btn_act.addEventListener("click", ResponseServer());

async function ResponseServer() {
    const message = "[eq yf";
    const response = await fetch("api/", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(message),
    });
}
    

function hash(str) {
    const utf8 = new TextEncoder().encode(str);
    return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((bytes) => bytes.toString(16).padStart(2, '0')).join('');
        return hashHex;
    });
}

async function check() {
    let uname = document.getElementById("uname").value;
    let passw = document.getElementById("passw").value;
    let wrong = document.getElementById("wrong");
    let megreet = document.getElementById("megreet");
    let tessagreet = document.getElementById("tessagreet");
    var username;
    var password;
    await hash(uname).then((hex) => username = hex);
    await hash(passw).then((hex) => password = hex);
    document.getElementById("uname").value = "";
    document.getElementById("passw").value = "";
    if ((username == "0fe9877170f58a0b7a7969545172bfe7eb9c4420b8b0a1f33b4cd2c41ead163e") && (password == "b600cb9e7ed4f42e59d8a47b06288e1eef82e1680a54be9c9f4551ffa1ea9d88")) {
        tessagreet.style.display = "block";
        document.getElementById("form").style.display = "none";
        wrong.style.display = "none";
        localStorage.setItem("login", true);
        localStorage.setItem("who", "Tessa");
    } else if ((username == "6132853eb8e76755d5646440abd7a00776a1facfa68e08fee859e454582c0b08") && (password == "b600cb9e7ed4f42e59d8a47b06288e1eef82e1680a54be9c9f4551ffa1ea9d88")) {
        megreet.style.display = "block";
        document.getElementById("form").style.display = "none";
        wrong.style.display = "none";
        localStorage.setItem("login", true);
        localStorage.setItem("who", "Douglas");
    } else {
        wrong.style.display = "block";
    }
}

function checklogin() {
    if (localStorage.getItem("login") == true) {
        document.getElementById("login").style.display = "none";
        document.getElementById("name").style.display = "block";
        document.getElementById("name").innerHTML = localStorage.getItem("who");
    }
}
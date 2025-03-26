const selected_admins = ["theOVERGOD"];

async function isuseradmin(username) {
    if (selected_admins.includes(username)) {
        return true;
    } else {
        const admins = await fetch('https://api.bark.dumorando.com/api/v2/admins').then(data => data.json());
        return admins.includes(username);
    }
}

async function amiadmin() {
    return await isuseradmin(localStorage.getItem("myBarkUsername"));
}

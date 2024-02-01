submit.onclick = userSubmitted;

var users = {user1: ["wombat_fire123", "bug"]};

function userSubmitted() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const username_value = username.value;
    const password_value = password.value;
    user_and_pass_array = [username_value, password_value];
    if (JSON.stringify(user_and_pass_array) === JSON.stringify(users.user1)) {
        alert("You Logged IN!");
        window.open("file:///media/fuse/drivefs-f70c150b9e5ab54c79dc723db99fb46e/root/Login%20Project/headquarters.html", "_blank");
    } else {
        alert("would like to  create an account. Your p/u are incorrect. ");
    }
}
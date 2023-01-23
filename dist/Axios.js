import axios from "axios";
axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
    console.log("WOO!!!");
    printUser(res.data);
})
    .catch((e) => {
    console.log("ERROR!", e);
});
axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    console.log("WOO!!!");
    res.data.forEach(printUser);
})
    .catch((e) => {
    console.log("ERROR!", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}

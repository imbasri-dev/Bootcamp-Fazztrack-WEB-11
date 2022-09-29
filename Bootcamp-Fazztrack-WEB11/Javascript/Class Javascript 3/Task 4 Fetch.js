// fetch("http://example.com/movies.json")
//     .then((response) => {
//         return response.json();
//     })
//     .then((myJson) => {
//         console.log(myJson);
//     });

// https://jsonplaceholder.typicode.com/users
// const api = "https://jsonplaceholder.typicode.com/users";

const output = document.getElementById("api");
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
        // console.log(response.status);
        // console.log(response.json());
    })
    .then((data) => {
        data.map((items) => {
            console.log(items.company.name);
            output.innerHTML += `<tr>${items.company.name}</tr>`;
        });
    })
    .catch((err) => {
        console.log(err.message);
    });

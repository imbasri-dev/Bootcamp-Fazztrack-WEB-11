const output = document.getElementById("api");
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
        // console.log(response.status);
        // console.log(response.json());
    })
    .then((data) => {
        console.log(data);
        data.map((el) => {
            console.log(el.name);
            output.innerHTML += `
            <tr>
            <td style="padding: 4px;">${el.id}</td>
            <td style="padding: 4px;">${el.name}</td>
            <td style="padding: 4px;">${el.company.name}</td>
            </tr>`;
        });
    })
    .catch((err) => {
        console.log(err.message);
    });

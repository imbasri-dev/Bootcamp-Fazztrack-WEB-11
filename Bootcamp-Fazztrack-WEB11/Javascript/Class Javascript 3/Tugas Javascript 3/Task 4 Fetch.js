const output = document.getElementById("api");
const sync = document.getElementById("sync");

fetch("https://jsonplaceholder.typicode.com/users") //proses dijalankan secara Asynchronous
    .then((response) => {
        console.log(response); //untuk debug hasil response
        if (!response.ok) throw Error(response.status); //check status code jika error
        return response.json(); // merubah isi respone dengan data json
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
    .catch((error) => {
        console.log(error.message);
    });

sync.innerText = "Test ini adalah Synchronous";

const container = document.querySelector(".container")
const tbody = document.querySelector(".tbody")

const API = "https://jsonplaceholder.typicode.com/photos"

async function getInfo(api) {
    const data = await fetch(api)
    data.json()
        .then((response) => createCard(response))
        .catch((error) => console.log(error))
}

getInfo(API);

function createCard(data) {
    const sliceData = data.slice(0, 10);
    console.log(sliceData);


    sliceData.forEach((item) => {
        let div = document.createElement("div");
        div.className = 'card'
        let img = document.createElement('img')
        let p = document.createElement('p')
        img.setAttribute("alt", "bu rasm")
        img.setAttribute("src", item.url)
        p.innerHTML = item.id + ") " + item.title


        div.appendChild(img)
        div.appendChild(p)

        container.appendChild(div)

    })
}


// ---------------------------------------------------------------------------------------------------------------


// for Table


const API_USERS = "https://jsonplaceholder.typicode.com/users"

async function getUsers(api) {
    const dataUser = await fetch(api)
    dataUser
        .json()
        .then((res) => createUser(res))
        .catch((err) => console.log(err))
}
getUsers(API_USERS);


function createUser(users) {
    const sliceUsers = users.slice(0, 5)
    console.log(sliceUsers);

    sliceUsers.forEach((item) => {
        let tr = document.createElement('tr')
        let id = document.createElement('td')
        let name = document.createElement('td')
        let username = document.createElement('td')
        let phone = document.createElement('td')
        id.innerHTML = item.id
        name.innerHTML = item.name
        username.innerHTML = item.username
        phone.innerHTML = item.phone
        tr.appendChild(id)
        tr.appendChild(name)
        tr.appendChild(username)
        tr.appendChild(phone)
        tbody.appendChild(tr)
        console.log(tbody);
    })
}

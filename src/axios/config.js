import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        // aqui podesse adicionar qualquer coisa para o cabeçalho, ie:
        // algumacoisa : "teste",
        "Content-Type": "application/json",
    }
})

export default blogFetch
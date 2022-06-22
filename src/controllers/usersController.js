
const users = [
    {
        id : 1,
        name: "Rafael",
        age: 40
    },
    {
        id: 2,
        name :"Arthur",
        age: 77

    }
]
const usersControllers = {
    index: (request, response) => {
        response.json(users);
    },
    show: (request, response) => {
        const { id } = request.params;

        const usuarioEncotrado = users.find(user => user.id === +id);

        response.json(usuarioEncotrado);
    }
}
module.exports = usersControllers;
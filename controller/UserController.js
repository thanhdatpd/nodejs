
let usersArr = [{
    id: 1,
    name: "Nguyen Phu Trong",
    age: 22,
},
{
    id: 2,
    name: "Bui hoang anh",
    age: 20,
}]


let check = async function check(req, res, next) {
    if (req.params.id == "Huong") {
        next()
    }
    else if (req.params.id == "Thao") {
        res.json({ mess: "Are you hacker" })
    }
    else {
        next()
    }
}

let newUser = async (req, res) => {
    usersArr.sort((a, b) => a.id - b.id)
    let lastUser = usersArr.slice(-1)
    let id = 1
    if (lastUser) id = lastUser[0].id + 1
    let user = {
        id,
        name: req.body?.name,
        age: Number(req.body?.age),
    }
    usersArr.push(user)
    res.json({
        message: 'ok user',
        result: user
    })
}


let getUserById = async (req, res) => {
    console.log(req.params);
    let user = usersArr.filter(({ id }) => id === Number(req?.params?.id))
    user = user ? user[0] : null
    res.json({
        message: 'ok user',
        result: user
    })
}
let isExist = async (req, res) => {
    let { id, name } = req.body
    console.log({ id, name });
    let user = usersArr.filter(({ id, name }) => id === Number(req.body?.id) && name === req.body?.name)
    user = user ? user[0] : null
    res.json({
        message: 'ok user',
        result: user ? true : false,
        user
    })
}
let deleteUser = async (req, res) => {
    let user = null
    usersArr = usersArr.filter((u) => {
        if (u.id === Number(req.params?.id)) return true
        else {
            user = u
            return false
        }
    })
    res.json({
        message: 'ok',
        result: user ? true : false,
        user
    })
}
let allUsers = async (req, res) => {
    res.json({
        message: 'ok',
        result: usersArr
    })
}

module.exports = {
    check,
    getUserById,
    newUser,
    allUsers,
    isExist,
    deleteUser
}
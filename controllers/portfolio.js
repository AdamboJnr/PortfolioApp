
const getUser = async (req, res) => {
    console.log('Getting the user..')
}

const createUser = async (req, res) => {
    console.log('Creating the user')
}

const updateUser = async (req, res) => {
    console.log('User Updated...');
}

const deleteUser = async (req, res) => {
    console.log('Deleting the User..');
}

module.exports = {
    getUser, createUser, updateUser, deleteUser
}
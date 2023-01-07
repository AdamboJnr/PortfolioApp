const router = require('express').Router()
const { login, createUser, updateUser, deleteUser } = require('../controllers/portfolio')
const notFound = require('../middleware/notFound')

router.route('/').get(login).post(createUser)
router.route('/:id').patch(updateUser).delete(deleteUser)
router.use(notFound)

module.exports = router
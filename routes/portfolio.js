const router = require('express').Router()
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/portfolio')
const notFound = require('../middleware/notFound')

router.route('/').get(getUser).post(createUser)
router.route('/:id').patch(updateUser).delete(deleteUser)
router.use(notFound)

module.exports = router
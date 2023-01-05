const router = require('express').Router()
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/portfolio')

router.route('/').get(getUser).post(createUser)
router.route('/:id').patch(updateUser).delete(deleteUser)

module.exports = router
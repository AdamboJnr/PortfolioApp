const router = require('express').Router()
const { login, createUser, updateUser, deleteUser, getCreateUserPage } = require('../controllers/portfolio')
const notFound = require('../middleware/notFound')
const logger = require('../middleware/logger')
const upload = require('../middleware/upload')

router.route('/').get( logger, getCreateUserPage ).post( logger,upload.single('image'), createUser )
router.route('/login').get(logger, login)
router.route('/:id').patch( logger, updateUser).delete( logger,deleteUser )
router.use( logger,notFound )

module.exports = router
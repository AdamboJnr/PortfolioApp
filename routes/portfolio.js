const router = require('express').Router()
const { login, createUser, updateUser, deleteUser } = require('../controllers/portfolio')
const notFound = require('../middleware/notFound')
const logger = require('../middleware/logger')

router.route('/').get( logger, login ).post( logger, createUser )
router.route('/:id').patch( logger, updateUser).delete( logger,deleteUser )
router.use( logger,notFound )

module.exports = router
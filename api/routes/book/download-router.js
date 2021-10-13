const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const { absPath } = require('../../modules/util')
const { findFile } = require('../../models/file')

router.get('/:idx', async (req, res, next) => {
	try {
		const { file } = await findFile(req.params.idx)
		res.redirect('http://127.0.0.1:3000/book/download/')
	}
	catch(err) {
		next(createError(err))
	}
})

module.exports = router
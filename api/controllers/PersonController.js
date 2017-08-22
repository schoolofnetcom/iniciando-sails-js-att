/**
 * PersonController
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: (req, res) => {
		Person
			.find({})
			.exec((err, result) => {
				return res.view('person/index', {
					people: result,
					title: 'Listing People'
				})
			})
	},

	new: (req, res) => {
		return res.view('person/new', {
			title: 'Create a new Person'
		})
	},
	create: (req, res) => {
		Person
			.create(req.body)
			.exec((err, result) => {
				if (err) {
					return res.redirect('/people/new')
				}

				return res.redirect('/people')
			})
	},
	show:(req, res) => {
		Person
			.findOne({ id: req.param('id') })
			.exec((err, result) => {
				if (err) {
					return res.redirect('/people')
				}

				return res.view('person/show',{
					title: 'Show Person',
					person: result
				})
			})
	}
};


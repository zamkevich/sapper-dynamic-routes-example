import sections from '../_posts.js';

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (slug in sections) {

		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(sections[slug]));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

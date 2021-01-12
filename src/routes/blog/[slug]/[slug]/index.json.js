import sections from '../../_posts.js';

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	let pathStart = req.originalUrl.indexOf('/', 2);
	let pathEnd = req.originalUrl.lastIndexOf('/');

	let parentFolder = req.originalUrl.slice(pathStart+1, pathEnd);

	if (slug in sections[parentFolder].pages) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(sections[parentFolder].pages[slug]));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

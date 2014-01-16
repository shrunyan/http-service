/**
 * Routing
 */

module.exports = {

	/**
	 * [status handle different http status codes]
	 * @param  {[object]} req [the client request]
	 * @param  {[object]} res [our response object]
	 *
	 * @see http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
	 */
	status : function status (req, res) {

		// 200s
		if (req.path === '/200') {
		res.status(200).render('status', { status: '200 OK' });
		}
		if (req.path === '/201') {
		res.status(201).render('status',{ status: '201 Created' });
		}
		if (req.path === '/202') {
		res.status(202).render('status', { status: '202 Accepted' });
		}
		if (req.path === '/203') {
		res.status(203).render('status', { status: '203 Non-Authoritative Information' });
		}
		if (req.path === '/204') {
		res.status(204).render('status', { status: '204 No Content' });
		}
		if (req.path === '/205') {
		res.status(205).render('status', { status: '205 Reset Content' });
		}
		if (req.path === '/206') {
		res.status(206).render('status', { status: '206 Partial Content' });
		}


		// 300s
		if (req.path === '/300') {
		res.status(300).render('status', { status: '300 Multiple Choices' });
		}
		if (req.path === '/301') {
		res.status(301).render('status', { status: '301 Moved Permanently' });
		}
		if (req.path === '/302') {
		res.status(302).render('status', { status: '302 Found' });
		}
		if (req.path === '/303') {
		res.status(303).render('status', { status: '303 See Other' });
		}
		if (req.path === '/304') {
		res.status(304).render('status', { status: '304 Not Modified' });
		}
		if (req.path === '/305') {
		res.status(305).render('status', { status: '305 Use Proxy' });
		}
		if (req.path === '/306') {
		res.status(306).render('status', { status: '306 (Unused)' });
		}
		if (req.path === '/307') {
		res.status(307).render('status', { status: '307 Temporary Redirect' });
		}



		// 400s
		if (req.path === '/400') {
		res.status(400).render('status', { status: '400 Bad Request' });
		}
		if (req.path === '/401') {
		res.status(401).render('status', { status: '401 Unauthorized' });
		}
		if (req.path === '/402') {
		res.status(402).render('status', { status: '402 Payment Required' });
		}
		if (req.path === '/403') {
		res.status(403).render('status', { status: '403 Forbidden' });
		}
		if (req.path === '/404') {
		res.status(404).render('status', { status: '404 Not Found' });
		}
		if (req.path === '/405') {
		res.status(405).render('status', { status: '405 Method Not Allowed' });
		}
		if (req.path === '/406') {
		res.status(406).render('status', { status: '406 Not Acceptable' });
		}
		if (req.path === '/407') {
		res.status(407).render('status', { status: '407 Proxy Authentication Required' });
		}
		if (req.path === '/408') {
		res.status(408).render('status', { status: '408 Request Timeout' });
		}
		if (req.path === '/409') {
		res.status(409).render('status', { status: '409 Conflict' });
		}
		if (req.path === '/410') {
		res.status(410).render('status', { status: '410 Gone' });
		}
		if (req.path === '/411') {
		res.status(411).render('status', { status: '411 Length Required' });
		}
		if (req.path === '/412') {
		res.status(412).render('status', { status: '412 Precondition Failed' });
		}
		if (req.path === '/413') {
		res.status(413).render('status', { status: '413 Request Entity Too Large' });
		}
		if (req.path === '/414') {
		res.status(414).render('status', { status: '414 Request-URI Too Long' });
		}
		if (req.path === '/415') {
		res.status(415).render('status', { status: '415 Unsupported Media Type' });
		}
		if (req.path === '/416') {
		res.status(416).render('status', { status: '416 Requested Range Not Satisfiable' });
		}
		if (req.path === '/417') {
		res.status(417).render('status', { status: '417 Expectation Failed' });
		}


		// 500s
		if (req.path === '/500') {
		res.status(500).render('status', { status: '500 Internal Server Error' });
		}
		if (req.path === '/501') {
		res.status(501).render('status', { status: '501 Not Implemented' });
		}
		if (req.path === '/502') {
		res.status(502).render('status', { status: '502 Bad Gateway' });
		}
		if (req.path === '/503') {
		res.status(503).render('status', { status: '503 Service Unavailable' });
		}
		if (req.path === '/504') {
		res.status(504).render('status', { status: '504 Gateway Timeout' });
		}
		if (req.path === '/505') {
		res.status(505).render('status', { status: '505 HTTP Version Not Supported' });
		}

	},

	/**
	 * [verb description]
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 *
	 * @see http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html
	 */
	verb : function verb (req, res) {
		if (req.path === '/options' && req.method === 'OPTIONS') {
			res.render('verb', { req: req });
		}
		if (req.path === '/get' && req.method === 'GET') {
			res.render('verb', { req: req });
		}
		if (req.path === '/head' && req.method === 'HEAD') {
			res.render('verb', { req: req });
		}
		if (req.path === '/post' && req.method === 'POST') {
			res.render('verb', { req: req });
		}
		if (req.path === '/put' && req.method === 'PUT') {
			res.render('verb', { req: req });
		}
		if (req.path === '/delete' && req.method === 'DELETE') {
			res.render('verb', { req: req });
		}
		if (req.path === '/trace' && req.method === 'TRACE') {
			res.render('verb', { req: req });
		}
		if (req.path === '/connect' && req.method === 'CONNECT') {
			res.render('verb', { req: req });
		}

		res.render('verb', {
			req: req,
			noMatch: true
		});

	}

};

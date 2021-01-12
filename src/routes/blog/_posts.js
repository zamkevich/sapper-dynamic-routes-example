// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const sections = {
	'about-sapper': {
		title: 'About Sapper',
		pages: {
			'what-is-sapper' : {
				title: 'What is Sapper?',
				html: `
					<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

					<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

					<ul>
						<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
						<li>Server-side rendering (SSR) with client-side hydration</li>
						<li>Service worker for offline support, and all the PWA bells and whistles</li>
						<li>The nicest development experience you've ever had, or your money back</li>
					</ul>

					<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
				`
			},

			'how-to-use-sapper': {
				title: 'How to use Sapper',
				html: `
					<h2>Step one</h2>
					<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

					<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
					cd my-app
					npm install # or yarn!
					npm run dev
					</code></pre>

					<h2>Step two</h2>
					<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

					<h2>Step three</h2>
					<p>...</p>

					<h2>Step four</h2>
					<p>Resist overdone joke formats.</p>
				`
			},

			'why-the-name': {
				title: 'Why the name?',
				html: `
					<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

					<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
				`
			},

			'how-is-sapper-different-from-next': {
				title: 'How is Sapper different from Next.js?',
				html: `
					<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

					<ul>
						<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
						<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
						<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
						<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
					</ul>
				`
			},

			'how-can-i-get-involved': {
				title: 'How can I get involved?',
				html: `
					<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
				`
			}
		}
	},
	'about-svelte': {
		title: 'About-svelte',
		pages: {
			'im-new-to-svelte' : {
				title: `I'm new to Svelte. Where should I start?`,
				html: `
				<p class="svelte-1ty6sog"><p>We think the best way to get started is playing through the interactive <a href="tutorial" rel="noopener noreferrer">Tutorial</a>. Each step there is mainly focused on one specific aspect and is easy to follow. You'll be editing and running real Svelte components right in your browser.</p>
				<p>Five to ten minutes should be enough to get you up and running. An hour and a half should get you through the entire tutorial.</p>
				</p>
				`
			},

			'are-there-any-video-courses': {
				title: 'Are there any video courses?',
				html: `
				<p class="svelte-1ty6sog"><p>Rich Harris, the creator of Svelte, taught a course:</p>
				<ul>
				<li><a href="https://frontendmasters.com/courses/svelte/" target="_blank" rel="noopener noreferrer">Frontend Masters</a></li>
				</ul>
				<p>There are also a number of third-party courses:</p>
				<ul>
				<li><a href="https://egghead.io/browse/frameworks/svelte" target="_blank" rel="noopener noreferrer">Egghead</a></li>
				<li><a href="https://www.udemy.com/courses/search/?q=sveltejs+svelte" target="_blank" rel="noopener noreferrer">Udemy</a> (Note: Udemy frequently has discounts over 90%)</li>
				<li><a href="https://www.pluralsight.com/search?q=svelte" target="_blank" rel="noopener noreferrer">Pluralsight</a></li>
				</ul>
				<p>Finally, there are also YouTube channels and playlists that teach Svelte:</p>
				<ul>
				<li><a href="https://www.youtube.com/channel/UCg6SQd5jnWo5Y70rZD9SQFA" target="_blank" rel="noopener noreferrer">Svelte Master</a></li>
				<li><a href="https://www.youtube.com/watch?v=zojEMeQGGHs&amp;list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO" target="_blank" rel="noopener noreferrer">Svelte Tutorial for Beginners</a> by The Net Ninja</li>
				</ul>
				</p>
				`
			},

			'are-there-any-books': {
				title: 'Are there any books?',
				html: `
				<p class="svelte-1ty6sog"><p>There are a few books:</p>
				<ul>
				<li><a href="https://flaviocopes.com/page/download-svelte-handbook/" target="_blank" rel="noopener noreferrer">Svelte Handbook</a> by Flavio Copes</li>
				<li><a href="https://www.amazon.com/dp/B08D6T6BKS/" target="_blank" rel="noopener noreferrer">Svelte 3 Up and Running</a> by Alessandro Segala</li>
				<li><a href="https://www.manning.com/books/svelte-and-sapper-in-action" target="_blank" rel="noopener noreferrer">Svelte and Sapper in Action</a> by R. Mark Volkmann</li>
				</ul>
				</p>
				`
			}
		}
	}
};

// prepare HTML characters
function iterator(obj){
	for(let key in obj ) {
		let section = obj[key];
		if('html' in section){
			section.html = section.html.replace(/^\t{3}/gm, '')
		}
		if('pages' in section){
			iterator(section.pages)
		}
	}
}

iterator(sections)




export default sections;

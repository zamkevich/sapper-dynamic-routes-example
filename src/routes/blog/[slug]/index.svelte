<script context="module">
	export async function preload(page) {
		let section = await this.fetch(`${page.path}.json`).then(r => r.json());
		return { section, PAGE: page };
	}
</script>

<script>

	export let section;
	export let PAGE;


	let title = section.title;
	let pages = [];
	for(let key in section.pages ) {
		let page = section.pages[key];
		page.slug = key
		pages.push(page)
	}

</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<ul>
	{#each pages as page_obj}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="{PAGE.path}/{page_obj.slug}">{page_obj.title}</a></li>
	{/each}
</ul>


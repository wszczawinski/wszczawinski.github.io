<script>
	import Hero from '$lib/components/layout/Hero.svelte';
	import Projects from './Projects.svelte';
	import TechStack from './TechStack.svelte';
</script>

<Hero
	title="Software Developer"
	textContent="The dynamic nature of software engineering continually challenges and motivates me to
		enhance my skills. Starting with frontend development, I gained solid experience in
		creating modern and responsive web applications. I've since expanded into full-stack development,
		building Java backend services and APIs. Now I'm diving into DevOps, working with VPS
		configuration, Dokploy deployment automation, and database management to create
		robust, production-ready applications. This hands-on experience with the entire
		development lifecycle allows me to build and deploy scalable web solutions from end to end."
/>

<TechStack />

<Projects />

<style>
</style>

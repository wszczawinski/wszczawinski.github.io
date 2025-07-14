<script>
	import { Linkedin, Github } from '@lucide/svelte';

	import avatar from '$lib/images/avatar.png';
	import Hero from '$lib/components/layout/Hero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Hero
	title="Beyond The Code"
	textContent="Engineering isn't just about the tools we use - it's about the approach to problem-solving.
		Whether designing mechanical systems or developing software, I've found that the core engineering
		principles remain constant: analyzing requirements, designing solutions, prototyping, testing, improving
		and delivering robust results. My journey from mechanical design to software development has
		shown me that both fields share the same methodical approach to problem-solving."
>
	<p class="contact">
		<a href="https://github.com/wszczawinski" class="btn btn-contact">
			<Github size="18" />
			GitHub
		</a>
		<a href="https://www.linkedin.com/in/wszczawinski" class="btn btn-contact" target="_blank">
			<Linkedin size="18" />
			LinkedIn
		</a>
	</p>
</Hero>

<Section>
	<p>
		Today, I apply this engineering mindset to create full-stack applications with TypeScript and
		Java, following the same cycle of design, iterate, test, and improve that I used when developing
		mechanical systems.
	</p>
	<p>
		I believe engineers should be active partners in shaping ideas into viable solutions, not just
		implementers of predetermined specifications. By collaborating closely with stakeholders, I help
		translate business vision into technical reality, offering expertise that balances immediate
		needs with future possibilities.
	</p>
	<p>
		The only constant is change, and the same is true in engineering - requirements evolve and new
		challenges emerge. That's why I focus on creating flexible, adaptable systems from the start.
		Making strategic architectural decisions today means building foundations that can support
		tomorrow's growth, even when specific future requirements aren't yet defined.
	</p>
	<p>
		In everything I create, I seek that perfect balance of functionality and good design. There's a
		certain elegance when a solution flows naturally - not just in its visual aspects, but in its
		underlying architecture. <b>Good design</b> reveals itself when revisiting the work feels intuitive,
		making it easier to understand and build upon.
	</p>
	<p>
		Outside of tech, I maintain an active lifestyle through various sports including cycling,
		hiking, swimming, and skiing. When not in motion, you can find me immersed in a good book
		alongside a cup of quality coffee.
	</p>

	<img class="avt" src={avatar} alt="Avatar" />
</Section>

<style>
	.avt {
		margin: 20px;
		width: 90%;
		max-width: 350px;
		border-radius: 10px;
		border: 1px solid rgba(201, 198, 198, 0.7);
	}

	.contact {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.btn-contact {
		margin: 10px;
		display: flex;
		flex-direction: row;
		gap: 5px;
		align-items: center;
	}

	p {
		line-height: 1.5;
		font-size: 0.9rem;
		text-align: justify;
	}

	@media (min-width: 600px) {
		p {
			font-size: 1.05rem;
			text-align: center;
		}

		.avt {
			margin: 0;
			width: 40vh;
			max-width: 500px;
		}

		.contact {
			width: 90%;
			max-width: 630px;
			margin-left: 0;
		}
	}
</style>

<script>
	import { Linkedin, Github } from '@lucide/svelte';

	import avatar from '$lib/images/avatar.png';
	import Hero from '$lib/components/Hero.svelte';
</script>

<Hero>
	<h1>About</h1>
	<p class="hero-text">
		I'm a software engineer who loves building things that actually solve problems. I've worked
		across the stack—mostly with TypeScript, React, and Java—developing full features from
		business idea to user-ready code.
	</p>
	<p class="contact-btn">
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

<section id="about" class="about">
	<p>
		I care about clean code, flexible design, and shipping stuff that works (and keeps working). I'm
		not tied to a single language or framework—just give me a good challenge and a keyboard.
	</p>
	<p>
		In everything that surrounds me, I appreciate functionality that goes hand in hand with good
		design, so I try to keep this balance in the things I create. In addition, I like technological
		innovations, sports, books and quality coffee.
	</p>
	<img class="avt" src={avatar} alt="Avatar" />
</section>

<style>
    .about {
        padding-top: 50px;
    }

    .avt {
        margin: 20px;
        width: 90%;
        max-width: 350px;
        border-radius: 10px;
        border: 1px solid rgba(201, 198, 198, 0.7);
    }

    .contact-btn {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 600px) {
        .avt {
            margin: 0;
            width: 40vh;
            max-width: 500px;
        }

        .contact-btn {
            width: 90%;
            max-width: 630px;
            margin-left: 0;
        }
    }
</style>

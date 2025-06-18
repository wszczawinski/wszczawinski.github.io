<script lang="ts">
	import { Linkedin, Github, Copyright } from '@lucide/svelte';
</script>

<footer class="footer">
	<div class="copy">
		<Copyright size="16" />
		Wojtek Szczawinski
	</div>
	<div class="socials">
		<a href="https://github.com/wszczawinski" target="_blank">
			<Github size="18" />
		</a>

		<a href="https://www.linkedin.com/in/wszczawinski" target="_blank">
			<Linkedin size="18" />
		</a>
	</div>
</footer>

<style>
    footer {
        font-size: 0.8rem;
        border-top: 1px solid rgba(201, 198, 198, 0.7);
        display: flex;
        justify-content: space-between;
        padding: 30px 20px;
        margin: 0 auto;
        width: 100%;
    }

    .copy {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    .socials {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
    }

    @media (min-width: 600px) {
        footer {
            font-size: 1rem;
            padding: 40px 50px;
        }

        .socials {
            gap: 50px;
        }
    }

    @media (min-width: 950px) {
        footer {
            padding: 45px 100px;
        }
    }
</style>

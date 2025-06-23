<script lang="ts">
	import { Construction, Github, Globe } from '@lucide/svelte';

	import Tooltip from '$lib/components/ui/Tooltip.svelte';

	type Project = {
		name: string,
		linkCode: string,
		linkLive?: string,
		img: string
	}

	export let project: Project;

	let { name, linkCode, linkLive, img } = project;
</script>

<article class="card">
	<div class="header">
		<h4>{name}</h4>

		<div class="links">

			{#if linkLive}
				<Tooltip content="View live" position="top">
					<a href={linkLive} target="_blank">
						<Globe size="16" />
					</a>
				</Tooltip>
			{:else}
				<Tooltip content="Work in progress" position="top">
					<Construction size="18" />
				</Tooltip>
			{/if}

			<Tooltip content="View code" position="top">
				<a href={linkCode} target="_blank" title="View code">
					<Github size="16" />
				</a>
			</Tooltip>
		</div>
	</div>

	<a href={linkCode} target="_blank">
		<img class="cover" src={img} alt={name} />
	</a>

	<p>
		<slot />
	</p>
</article>


<style>
    .card {
        font-family: 'Open Sans', sans-serif;
        display: flex;
        flex-direction: column;
        border: 1px solid #30bd1e;
        border-radius: 8px;
        flex-basis: 200px;
        flex-shrink: 0;
        flex-grow: 1;
        max-width: 340px;
        background-color: white;
    }

    .card a {
        opacity: 1;
        transition: all 0.3s ease-in-out;
    }

    .card a:hover {
        opacity: 0.85;
    }

    .card .header h4 {
        font-size: 1.2rem;
        font-weight: 100;
        text-align: left;
    }

    .card .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
    }

    .card .header .links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .card img.cover {
        width: 100%;
    }

    .card p {
        font-size: 13px;
        text-align: justify;
        padding: 12px;
    }

    @media (min-width: 480px) {
        .card {
            flex-basis: 300px;
            max-width: 400px;
        }
    }

    @media (min-width: 610px) {
        .card {
            height: 350px;
            flex-basis: 250px;
            max-width: 300px;
        }
    }
</style>
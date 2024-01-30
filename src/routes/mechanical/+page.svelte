<script lang="ts">
	import Icon from '@iconify/svelte';
	import Helmet from './Helmet.svelte';
	import { Canvas } from '@threlte/core';
</script>

<section id="technologies">
	<h4 class="title">Skills</h4>
	<p>
		Being able to think of ways to solve a problem and create things useful for other people gives
		me a sense of fulfilment. I consider this to be the most important because I apply this mindset
		in different projects it only requires the use of different tools.
	</p>
	<article class="tech-skills">
		<i><Icon icon="fa-solid:cubes" /> CAD: Inventor, AutoCad, Solidworks, SolidEdge</i>
		<i><Icon icon="fa6-solid:compass-drafting" /> GPS/GD&T: Geometrical Product Specifications</i>
		<i><Icon icon="fa6-solid:dice-d20" /> 3D printing: setting, prototyping, maintenance</i>
		<i><Icon icon="fa6-solid:calculator" /> MES: Ansys, calculation modules in CAD</i>
		<i><Icon icon="fa6-solid:server" /> working with standards (eg. MIL)</i>
		<i><Icon icon="fa-solid:industry" /> understending of technological processes</i>
		<i><Icon icon="fa6-solid:wrench" /> workshop experience</i>
	</article>
	<article class="mech-example">
		<Canvas>
			<Helmet />
		</Canvas>
	</article>
</section>

<style>
	.tech-skills {
		display: flex;
		flex-direction: column;
		width: 80%;
		font-size: 0.8rem;
	}

	.tech-skills i {
		padding-bottom: 3px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}

	.mech-example {
		width: 100%;
		height: 50vh;
	}

	@media (min-width: 610px) {
		.tech-skills {
			font-size: 0.9rem;
			width: auto;
		}

		.tech-skills i {
			padding-bottom: 10px;
		}

		.mech-example {
			width: 100%;
			height: 60vh;
		}
	}

	@media (min-width: 900px) {
		.tech-skills {
			font-size: 1rem;
		}
	}
</style>

<script lang="ts">
	import {
		Boxes,
		PencilRuler,
		Calculator,
		Wrench,
		Factory,
		BookCheck,
		Move3d
	} from '@lucide/svelte';
	import Helmet from './Helmet.svelte';
	import { Canvas } from '@threlte/core';

	import Hero from '$lib/components/Hero.svelte';
</script>

<Hero>
	<h1>Mechanical Design Engineer</h1>
	<p class="hero-text">
		My study background is mechatronics and mechanical engineering. My main interests are
		designing mechanical structures and guiding projects through all stages: from the concept
		phase, through 3D modeling, calculations and improvements, up to the implementation of
		working devices as the end result.
	</p>
</Hero>

<section id="technologies">
	<h4 class="title">Skills</h4>
	<article class="tech-skills">
		<i>
			<Move3d size="18" />
			CAD: Inventor, AutoCad, Solidworks, SolidEdge
		</i>
		<i>
			<PencilRuler size="16" />
			GPS/GD&T: Geometrical Product Specifications
		</i>
		<i>
			<Boxes size="16" />
			3D printing: setting, prototyping, maintenance
		</i>
		<i>
			<Calculator size="16" />
			MES: Ansys, calculation modules in CAD
		</i>
		<i>
			<BookCheck size="18" />
			working with standards (eg. MIL)
		</i>
		<i>
			<Factory size="18" />
			understanding of technological processes
		</i>
		<i>
			<Wrench size="18" />
			workshop experience
		</i>
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

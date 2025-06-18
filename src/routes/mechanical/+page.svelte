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

	import Hero from '$lib/components/layout/Hero.svelte';
</script>

<Hero>
	<h1>Mechanical Design Engineer</h1>
	<p class="hero-text">
		With a background in mechatronics and mechanical engineering, I spent several years focused on designing mechanical
		components and systems for complex devices. My work covered the entire development lifecycle: from initial concept
		creation through detailed 3D modeling to final implementation. I leveraged advanced CAD tools for assembly
		validation and optimization, while utilizing FEA analyses in Ansys for structural integrity assessments. Modern
		prototyping techniques, including 3D printing, helped streamline the development process from concept to production.
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
			Standards: ISO, DIN, MIL
		</i>
		<i>
			<Factory size="18" />
			Technological Processes
		</i>
		<i>
			<Wrench size="18" />
			Workshop hands-on experience
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
        gap: 4px;
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

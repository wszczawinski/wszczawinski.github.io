<script lang="ts">
	import { T, useFrame } from '@threlte/core';
	import DamagedHelmet from './DamagedHelmet.svelte';
	import { Environment, interactivity } from '@threlte/extras';

	import background from '$lib/images/environment_background.jpeg';

	let rotationY = 0;
	useFrame((_, delta) => {
		rotationY += 0.6 * delta;
	});

	interactivity();

	
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 40]} fov={4} />

<Environment files={background} />
<T.Group rotation.y={rotationY}>
	<DamagedHelmet />
</T.Group>

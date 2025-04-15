<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { Environment, interactivity } from '@threlte/extras';

	import background from '$lib/images/environment_background.jpeg';
	import DamagedHelmet from './DamagedHelmet.svelte';

	let rotationY = 0;
	useTask((delta) => {
		rotationY += 0.6 * delta;
	});

	interactivity();
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 40]} fov={4} />

<Environment url={background} />
<T.Group rotation.y={rotationY}>
	<DamagedHelmet />
</T.Group>

<script>
	import Icon from '@iconify/svelte';

	import Tooltip from '$lib/components/ui/Tooltip.svelte';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<Section title="Tech Stack">
	<p>
		I learn best by doing - diving into documentation, working through tutorials, and building
		real projects. My drive to create more complex solutions pushes me to explore new technologies,
		making each project a learning opportunity.
	</p>

	<p class="tech-row">
		<Tooltip content="TypeScript">
			<Icon icon="material-icon-theme:typescript" />
		</Tooltip>
		<Tooltip content="JavaScript">
			<Icon icon="material-icon-theme:javascript" />
		</Tooltip>
		<Tooltip content="React.js">
			<Icon icon="material-icon-theme:react" />
		</Tooltip>
		<Tooltip content="Gatsby.js">
			<Icon icon="material-icon-theme:gatsby" />
		</Tooltip>
		<Tooltip content="Svelte">
			<Icon icon="material-icon-theme:svelte" />
		</Tooltip>
		<Tooltip content="Tailwind">
			<Icon icon="material-icon-theme:tailwindcss" />
		</Tooltip>
		<Tooltip content="styled components">
			<Icon icon="vscode-icons:file-type-styled" />
		</Tooltip>
		<Tooltip content="Tanstack Query">
			<Icon icon="logos:react-query-icon" />
		</Tooltip>
	</p>

	<p class="tech-row">
		<Tooltip content="AJV">
			<Icon icon="simple-icons:ajv" />
		</Tooltip>
		<Tooltip content="Jest">
			<Icon icon="material-icon-theme:jest" />
		</Tooltip>
		<Tooltip content="Storybook">
			<Icon icon="material-icon-theme:storybook" />
		</Tooltip>
		<Tooltip content="Webpack">
			<Icon icon="material-icon-theme:webpack" />
		</Tooltip>
		<Tooltip content="Vite">
			<Icon icon="material-icon-theme:vite" />
		</Tooltip>
		<Tooltip content="Nx">
			<Icon icon="material-icon-theme:nx" />
		</Tooltip>
	</p>

	<p class="tech-row">
		<Tooltip content="Java">
			<Icon icon="material-icon-theme:java" />
		</Tooltip>
		<Tooltip content="Spring Boot">
			<Icon icon="simple-icons:springboot" color="green" />
		</Tooltip>
		<Tooltip content="Swagger">
			<Icon icon="simple-icons:swagger" color="green" />
		</Tooltip>
		<Tooltip content="SQL">
			<Icon icon="vscode-icons:file-type-pgsql" />
		</Tooltip>
		<Tooltip content="Python">
			<Icon icon="material-icon-theme:python" />
		</Tooltip>
		<Tooltip content="Node.js">
			<Icon icon="material-icon-theme:nodejs" />
		</Tooltip>
		<Tooltip content="Gitlab CI/CD">
			<Icon icon="material-icon-theme:gitlab" />
		</Tooltip>
		<Tooltip content="Docker">
			<Icon icon="material-icon-theme:docker" />
		</Tooltip>
	</p>
</Section>

<style>
    .tech-row {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        height: auto;
        gap: 12px;
    }
</style>

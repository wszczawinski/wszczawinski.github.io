<script>
	import Icon from '@iconify/svelte';
</script>

<section>
	<h4 class="title">Tech Stack</h4>
	<p>
		I learn best by doing - diving into documentation, working through tutorials, and building
		real projects. My drive to create more complex solutions pushes me to explore new technologies,
		making each project a learning opportunity.
	</p>
	<p class="tech">
		<i>
			<Icon icon="material-icon-theme:typescript" />
			<span class="tooltiptext">TypeScript</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:javascript" />
			<span class="tooltiptext">JavaScript</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:react" />
			<span class="tooltiptext">React.js</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:gatsby" />
			<span class="tooltiptext">Gatsby.js</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:svelte" />
			<span class="tooltiptext">Svelte</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:tailwindcss" />
			<span class="tooltiptext">Tailwind</span>
		</i>
		<i>
			<Icon icon="vscode-icons:file-type-styled" />
			<span class="tooltiptext">styled components</span>
		</i>
		<i>
			<Icon icon="logos:react-query-icon" />
			<span class="tooltiptext">Tanstack Query</span>
		</i>
	</p>
	<p class="tech">
		<i>
			<Icon icon="simple-icons:ajv" />
			<span class="tooltiptext">AJV</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:jest" />
			<span class="tooltiptext">Jest</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:storybook" />
			<span class="tooltiptext">Storybook</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:webpack" />
			<span class="tooltiptext">Webpack</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:vite" />
			<span class="tooltiptext">Vite</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:nx" />
			<span class="tooltiptext">Nx</span>
		</i>
	</p>
	<p class="tech">
		<i>
			<Icon icon="material-icon-theme:java" />
			<span class="tooltiptext">Java</span>
		</i>
		<i>
			<Icon icon="simple-icons:springboot" color="green" />
			<span class="tooltiptext">Spring Boot</span>
		</i>
		<i>
			<Icon icon="simple-icons:swagger" color="green" />
			<span class="tooltiptext">Swagger</span>
		</i>
		<i>
			<Icon icon="vscode-icons:file-type-pgsql" />
			<span class="tooltiptext">SQL</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:python" />
			<span class="tooltiptext">Python</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:nodejs" />
			<span class="tooltiptext">Node.	js</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:gitlab" />
			<span class="tooltiptext">Gitlab CI/CD</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:docker" />
			<span class="tooltiptext">Docker</span>
		</i>
	</p>
</section>

<style>
    .tech {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        gap: 12px;
    }

    .tech i {
        position: relative;
        cursor: pointer;
    }

    .tech i .tooltiptext {
        font-family: 'Lato', sans-serif;
        font-weight: 600;
        font-size: 0.8rem;
        position: absolute;
        visibility: hidden;
        z-index: 1;
        top: 160%;
        left: 50%;
        border-radius: 4px;
        border: 1px solid #30bd1e;
        color: black;
        text-align: center;
        padding: 5px;
        width: 80px;
        margin-top: -30px;
        margin-left: -40px;
        line-height: 1;
    }

    .tech i:hover .tooltiptext {
        visibility: visible;
    }
</style>

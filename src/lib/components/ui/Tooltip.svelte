<script lang="ts">
	export let content: string;
	export let position: 'top' | 'bottom' = 'bottom';
</script>

<span>
	<slot />
	<i
		class="content"
		class:top={position === 'top'}
		class:bottom={position === 'bottom'}
	>
		{content}
	</i>
</span>

<style>
    span {
        position: relative;
        cursor: pointer;
    }

    span .content {
        font-family: 'Lato', sans-serif;
        font-weight: 600;
        font-size: 0.8rem;
        position: absolute;
        visibility: hidden;
        z-index: 1;
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
        background-color: white;
    }

    span .content.top {
        bottom: 40px;
    }

    span .content.bottom {
        top: 64px;
    }

    span:hover .content {
        visibility: visible;
    }
</style>

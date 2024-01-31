<script>
	import avatar from '$lib/images/avatar.png';
</script>

<section id="about" class="about">
	<p>
		In everything that surrounds me, I appreciate functionality that goes hand in hand with good
		design, so I try to keep this balance in the things I create. In addition, I like technological
		innovations, sports, books and quality coffee.
	</p>
	<p>
		Being able to think of ways to solve a problem and create things useful for other people gives
		me a sense of fulfillment. I consider it the most important because applying this mindset in
		different projects only requires the use of different tools.
	</p>
	<div class="about-content">
		<img id="avt" src={avatar} alt="Avatar" />
	</div>
</section>

<style>
	.about {
		padding-top: 50px;
	}

	.about-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.about-content img#avt {
		margin: 20px;
	}
</style>

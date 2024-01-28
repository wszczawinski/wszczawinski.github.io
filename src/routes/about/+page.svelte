<script>
	import avatar from '$lib/images/avatar.png';
</script>

<section id="about" class="about">
	<h3 class="title">About</h3>
	<div class="about-content">
		<div class="about-text">
			<span>
				I am a passionate engineer who is not afraid to learn and get to know new technologies. I
				have decided to dive deeper into web development world because it is still developing
				rapidly. I believe that there is still a lot of room for improvement and learning
				possibilities.
			</span>
			<span>
				Being able to think of ways to solve a problem and create things useful for other people
				gives me a sense of fulfillment. I consider it the most important because applying this
				mindset in different projects only requires the use of different tools.
			</span>
		</div>
		<img id="avt" src={avatar} alt="Avatar" />
	</div>
</section>

<style>
	.about-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.about-content img#avt {
		margin: 20px;
	}

	.about-text {
		width: 90%;
		margin: 30px auto;
		padding: 10px;
		border-radius: 8px;
		text-align: justify;
		text-justify: inter-word;
		border: 1px solid grey;
		background: rgba(247, 247, 247, 0.6);
		color: #333333;
	}

	span {
		display: block;
		padding-bottom: 0.5rem;
	}
</style>

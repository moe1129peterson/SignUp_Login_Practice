<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	function navigate() {
		goto('/signin');
	}
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
			<h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
				Sorry! This page is under constraction. Back to Log In Page.
			</h1>
			<button
				on:click={navigate}
				class="flex-shrink-0 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg mt-10 sm:mt-0"
				>Button</button
			>
		</div>
	</div>
</section>

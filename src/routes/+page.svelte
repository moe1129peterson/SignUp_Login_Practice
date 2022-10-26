<script>
	import supabase from '$lib/db';
	import { goto } from '$app/navigation';

	function navigate() {
		goto('/signin');
	}

	let email, password;

	async function signUp() {
		const {
			user,
			session: sesh,
			error
		} = await supabase.auth.signUp({
			email,
			password
		});

		// if (error) alert(error.message);
	}
</script>

<!-- <form on:submit|preventDefault={signUp}>
	<label for="email">Email</label>
	<input class="blocl p-2 rounded" id="email" bind:value={email} type="email" />
	<label for="password">Password</label>
	<input class="blocl p-2 rounded" id="password" bind:value={password} type="password" />
	<button class="p-2 bg-green-400 rounded block mx-auto">Sign Up</button>
</form> -->

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-12">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
				Welcome to UVU 3790!
			</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">Here is Sign Up Page</p>
		</div>
		<div
			class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end"
		>
			<form on:submit|preventDefault={signUp}>
				<label for="full-name" class="leading-7 text-sm text-gray-600">Email</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					name="email"
					class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<label for="email" class="leading-7 text-sm text-gray-600">Password</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					name="password"
					class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<button
					on:click={navigate}
					class="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
					>Sign Up</button
				>
			</form>
			<a href="/signin">Do you have an account?</a>
		</div>
	</div>
</section>

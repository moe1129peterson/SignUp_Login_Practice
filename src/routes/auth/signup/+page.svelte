<script>
	import supabase from '$lib/db';

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

		if (error) alert(error.message);
		console.log(user, session, error);
	}
</script>

<form on:submit|preventDefault={signUp}>
	<label for="email">Email</label>
	<input class="blocl p-2 rounded" id="email" bind:value={email} type="email" />
	<label for="password">Password</label>
	<input class="blocl p-2 rounded" id="password" bind:value={password} type="password" />
	<button class="p-2 bg-green-400 rounded block mx-auto">Sign Up</button>
</form>

<a href="/auth/login">Already have an account?</a>

<script>
	import supabase from '$lib/db.js';

	async function signUp() {
		const { user, error } = await supabase.auth.signUp({
			email: 'someone@email.com',
			password: 'NBPHovLbrdGEJjXWaqeS'
		});

		console.log(user, error);
	}
</script>

<button on:click={signUp}>Sign Up</button>

<script>
	import supabase from '$lib/db';

	async function signUp() {
		const { user, error } = await supabase.auth.signUp({
			email: 'moe1129tsuzuki@gmail.com',
			password: '10938666'
		});
		console.log(user, error);
	}
</script>

<button on:click={signUp}>Sign Up</button>

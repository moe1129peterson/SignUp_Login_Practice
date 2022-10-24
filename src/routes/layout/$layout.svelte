<script>
	import '../app.postcss';
	import supabase from '$lib/db';
	import { session } from '$app/stores';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	if (browser) {
		$session = supabase.auth.getSession();
		setTimeout(() => ($session ? goto('/') : goto('/signup')));
		supabase.auth.onAuthStateChange((event, sesh) => {
			$session = sesh;
			setTimeout(() => ($session ? goto('/') : goto('/signup')));
		});
	}
</script>

<div class="p-4 flex flex-col items-center justify-center">
	<slot />
	<pre class="w-96 overflow-scroll">
        {JSON.stringify($session, null, 2)}
    </pre>
</div>

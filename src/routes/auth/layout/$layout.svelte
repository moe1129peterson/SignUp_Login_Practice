<script>
	import '../app.postcss';
	import supabase from '$lib/db';
	import { session } from '$app/stores';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	if (browser) {
		$session = supabase.auth.session();
		setTimeout(() => ($session ? goto('/') : goto('/auth/signup')));
		supabase.auth.onAuthStateChange((event, sesh) => {
			$session = sesh;
		});
	}
</script>

<div clAA="p-4 flex flex-col items-center justify-center">
	<slot />
	<pre class="w-96 overflow-scroll">
        {JSON.stringify($session, null, 2)}
    </pre>
</div>

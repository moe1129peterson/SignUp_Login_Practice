<script context="module">
	export async function load({ page, fetch, session, context }) {
		if (!session) {
			return {
				status: 302,
				redirect: '/auth'
			};
		}
		return {
			props: {
				session
			}
		};
	}
</script>

<h1>Hi this is supposed to be dashboard</h1>

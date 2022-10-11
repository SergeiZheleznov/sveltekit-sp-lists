<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<table border={1} cellpadding={4} cellspacing={4}>
	{#each data.items as item}
		<tr>
			<td>
				{item.key}
			</td>
			<td>
				{item.value}
			</td>
		</tr>
	{/each}
</table>

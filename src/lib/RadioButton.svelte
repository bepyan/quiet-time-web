<script lang="ts">
	export let group: string;
	export let value: string;
</script>

<label for={value}>
	<input type="radio" id={value} name={group} {value} />
	{value}
</label>

<style>
	label {
		cursor: pointer;
		padding: 0.5rem;
		display: inline;
		border-radius: 0.5rem;
		transition: background-color 200ms ease-out;
	}
	label:hover {
		background-color: var(--accent-background);
	}
	label:hover input {
		border: 1px solid var(--accent-color);
	}

	input[type='radio'] {
		width: auto;
		appearance: none;
		border-radius: 50%;
		width: 1rem;
		height: 1rem;
		padding: 0rem;

		border: 2px solid var(--grey);
		transition: 0.2s all linear;
		margin-right: 5px;

		position: relative;
		top: 2px;
		cursor: pointer;
	}
	input[type='radio']:checked {
		border: 5px solid var(--accent-color);
	}
</style>

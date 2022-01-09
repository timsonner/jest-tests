import { render } from "@testing-library/svelte";
import Index from './index.svelte'

describe("Test if Jest is working", () => {
	test('Welcome', () => {
		const { getByText } = render(Index);
		expect(getByText('Welcome to SvelteKit')).toBeInTheDocument()
	});
});
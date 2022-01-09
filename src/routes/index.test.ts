import { render } from "@testing-library/svelte"
// extend-expect needs to be imported for .toBeInTheDocument()
// import '@testing-library/jest-dom/extend-expect'
import Index from './index.svelte'

describe("Test if Jest is working", () => {
	test('Welcome', () => {
		const { getByText } = render(Index)
		expect(getByText('Welcome to SvelteKit')).toBeInTheDocument()
	});
});
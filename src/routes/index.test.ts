// extend-expect needs to be imported for .toBeInTheDocument()
// import '@testing-library/jest-dom/extend-expect'
// now imported from ../../testSetupFile.ts

import { render, screen } from "@testing-library/svelte"
import Index from './index.svelte'

describe("Test if Jest is working", () => {
	test('Welcome', () => {
		const { getByText } = render(Index)
		expect(getByText('Welcome to SvelteKit')).toBeInTheDocument()
	});
});

describe("Query by title", () => {
	test("Does query have a title?", () => {
		render(Index)
		const node = screen.getByTitle('title')
		expect(node).toBeInTheDocument()
	})
})
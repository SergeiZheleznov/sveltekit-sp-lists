// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		msGraphClient: import('@microsoft/microsoft-graph-client').Client;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

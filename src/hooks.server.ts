import type { Handle } from '@sveltejs/kit';
import * as msal from '@azure/msal-node';
import { AUTHORITY, CLIENT_ID, CLIENT_SECRET } from '$env/static/private';
import {
	Client,
	type AuthProvider,
	type AuthProviderCallback
} from '@microsoft/microsoft-graph-client';

const authProvider: AuthProvider = async (done: AuthProviderCallback): Promise<void> => {
	const clientConfig = {
		auth: {
			clientId: CLIENT_ID,
			authority: AUTHORITY,
			clientSecret: CLIENT_SECRET
		}
	};
	const cca = new msal.ConfidentialClientApplication(clientConfig);

	const response = await cca.acquireTokenByClientCredential({
		scopes: ['https://graph.microsoft.com/.default']
	});

	const accessToken = response?.accessToken || null;

	done(undefined, accessToken);
};

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.msGraphClient = Client.init({ authProvider });
	const response = await resolve(event);
	return response;
};


// Dependencies
import ConditionChecker from '@/util/ConditionChecker';
import Endpoint from '@/Endpoint';
import PublicError from '@/PublicError';
import * as uuidv4 from 'uuid/v4';
import { APIGatewayEvent, Context, Callback } from 'aws-lambda';

// Constants
const DEFAULT_ERROR_MESSAGE = 'Error interno';
const HEADERS = { 'Access-Control-Allow-Origin': '*' };

// Export
export default (Class: new () => Endpoint) => (event: APIGatewayEvent, context: Context, callback: Callback) =>
{
	(async () =>
	{
		try
		{
			// Create
			const instance = new Class ();
			instance.event = event;
			instance.context = context;

			// Check conditions
			await ConditionChecker.check (Class, instance);

			// Run
			const runResult = instance.run (event, context);
			const result = await Promise.resolve (runResult);
			callback (null, {
				body: JSON.stringify ({ result }),
				headers: HEADERS,
				statusCode: 200
			});
		}
		catch (error)
		{
			const errorCode = uuidv4 ();
			const errorMessage = error instanceof PublicError ?
				error.message :
				DEFAULT_ERROR_MESSAGE;

			console.log (errorCode);
			console.log (error.stack);
			callback (null, {
				body: JSON.stringify ({
					error:
					{
						code: errorCode,
						message: errorMessage
					}
				}),
				headers: HEADERS,
				statusCode: 200
			});
		}
	})();
};

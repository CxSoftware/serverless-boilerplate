
// Dependencies
import { APIGatewayEvent, Context } from 'aws-lambda';

// Local
import Endpoint from '@/Endpoint';

export default class Echo extends Endpoint
{
	public run (event: APIGatewayEvent, context: Context)
	{
		return { event: event, context: context };
	}
}



import { APIGatewayEvent, Context } from 'aws-lambda';

export default class Endpoint
{
	// Fields

	public body: any;
	public context: Context | null = null;
	public event: APIGatewayEvent | null = null;
	public user: any;



	// Constructor

	constructor ()
	{
	}



	// Methods

	public run (event: APIGatewayEvent, context: Context)
	{
		throw Error ('Run method not defined for this endpoint');
	}
}

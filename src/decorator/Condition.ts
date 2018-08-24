
// Dependencies
import Decorator from '@/util/Decorator';
import Endpoint from '@/Endpoint';
import PublicError from '@/PublicError';

export class Condition
{
	// Fields

	public errorMessage = `Doesn't fullfill condition`;
	public lambda: any;



	// Constructor

	constructor (lambda: any = null, errorMessage: string | null = null)
	{
		this.lambda = lambda;
		if (errorMessage)
			this.errorMessage = errorMessage;
	}



	// Methods

	public async check (endpoint: Endpoint)
	{
		// Check
		if (!this.lambda)
			throw Error ('No condition defined');

		// Run
		const result = await Promise.resolve (this.lambda (endpoint));
		if (!result)
			throw new PublicError (this.errorMessage);
	}
}

export default Decorator.export (Condition);

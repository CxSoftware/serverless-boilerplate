
import { Condition } from './Condition';
import Decorator from '@/util/Decorator';
import Endpoint from '@/Endpoint';

export class RequireBody extends Condition
{
	constructor ()
	{
		super ();
	}

	public async check (endpoint: Endpoint)
	{
		if (endpoint.event == null)
			throw new Error ('Event is null');
		if (endpoint.event.body == null)
			throw new Error ('Body is null');

		endpoint.body = JSON.parse (endpoint.event.body);
	}
}

export default Decorator.export (RequireBody);

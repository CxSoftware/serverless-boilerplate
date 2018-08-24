
// Dependencies
import { Condition } from '@/decorator/Condition';
import Endpoint from '@/Endpoint';
import Decorator from '@/util/Decorator';

export default class ConditionChecker
{
	public static async check (EndpointClass: any, endpoint: Endpoint)
	{
		// Get all conditions
		const conditions = Decorator.getAll <Condition> (
			EndpointClass, Condition);

		// Check
		for (const condition of conditions)
			await condition.check (endpoint);
	}
}

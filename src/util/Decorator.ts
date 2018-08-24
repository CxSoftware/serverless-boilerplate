
export default class Decorator
{
	public static export (DecoratorClass: any)
	{
		return (...args : any[]) => (target: any) =>
		{
			if (!target.decorators)
				target.decorators = [];
			target.decorators.unshift (new DecoratorClass (...args));
		};
	}

	public static get <T> (target: any, ctor: { new () : T }) : T | null
	{
		if (!target.decorators)
			return null;
		if (!Array.isArray (target.decorators))
			return null;

		return target.decorators.find (
			(d: any) => d instanceof ctor);
	}

	public static getAll <T> (target: any, ctor: { new () : T }) : T[]
	{
		if (!target.decorators)
			return [];
		if (!Array.isArray (target.decorators))
			return [];

		const found = target.decorators.filter ((d: any) =>
			d instanceof ctor);
		return found;
	}
}

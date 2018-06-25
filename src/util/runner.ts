
// Constants
const headers = { 'Access-Control-Allow-Origin': '*' };

// Export
export default (f: any) => async (event: any, context: any, callback: any) =>
{
	try
	{
		const result = await Promise.resolve ((f.default || f) (event, context));
		callback (null, {
			body: JSON.stringify ({ result }),
			headers: headers,
			statusCode: 200
		});
	}
	catch (error)
	{
		callback (null, {
			body: JSON.stringify ({ error: error.stack }),
			headers: headers,
			statusCode: 200
		});
	}
};

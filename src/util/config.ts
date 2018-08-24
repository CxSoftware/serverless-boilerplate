
// Permissions
const PERMISSIONS : { [index : string] : string } =
{
	'/user/*': 'admin',
	'/cause/*': 'admin'
};
const TAGS : { [index: string] : (a : any) => boolean } =
{
	// TODO: Check permission
	'admin': u => true
};

// Module
export default {
	authentication :
	{
		privateKey: '63ce5e0c-cfb2-43c3-8605-11b2f8c0e6fc',
		sessionTimeout: 3600 * 24 * 7 // 7 days
	},
	security:
	{
		permissions : PERMISSIONS,
		tags: TAGS
	},
	salt:
	{
		iterations: 10000,
		keylength: 512,
		digest: 'sha512'
	}
};

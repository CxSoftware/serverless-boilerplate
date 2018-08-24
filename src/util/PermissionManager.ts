
// Dependencies
import config from '@/util/config';

// @ts-ignore
import * as wildcard from 'wildcard';

// Constants
const PERMISSIONS = config.security.permissions;
const PERMISSION_KEYS = Object.keys (PERMISSIONS);
const TAGS = config.security.tags;

export default class PermissionMaanger
{
	public static check (user: any, path: string)
	{
		// Get key
		const key = PERMISSION_KEYS.find (
			pk => wildcard (pk, path));
		if (!key)
			return false;

		// Check tags
		return PermissionMaanger.hasTag (user, PERMISSIONS [key]);
	}

	public static hasTag (user: any, tag: string)
	{
		const f = TAGS [tag];
		return f (user);
	}

	public static list (user: any)
	{
		return PERMISSION_KEYS.filter (
			pk => PermissionMaanger.hasTag (
				user, PERMISSIONS [pk]));
	}
}

import {expectType} from 'tsd';
import * as helpUrl from './index.js';

expectType<Record<string, string>>(
	helpUrl.getParameters('https://pnodet.com?firstname=paul&lastname=nodet'),
);

expectType<string>(
	helpUrl.getQueryString('firstname', 'https://pnodet.com?firstname=paul'),
);

expectType<string>(
	helpUrl.queryFromObject({firstname: 'paul', lastname: 'nodet'}),
);

expectType<Record<string, unknown>>(
	helpUrl.queryToObject('https://pnodet.com?firstname=paul&lastname=nodet'),
);

expectType<string>(
	helpUrl.queryUpdateParameter(
		'https://pnodet.com?firstname=paul&lastname=echo',
		'lastname',
		'delta',
	),
);

import test from 'ava';
import * as helpUrl from './index.js';

test('getParameters()', t => {
	helpUrl.getParameters('https://pnodet.com?firstname=paul&lastname=nodet');
	t.pass();
});

test('getQueryString()', t => {
	helpUrl.getQueryString('firstname', 'https://pnodet.com?firstname=paul');
	t.pass();
});

test('queryFromObject()', t => {
	helpUrl.queryFromObject({firstname: 'paul', lastname: 'nodet'});
	t.pass();
});

test('queryToObject()', t => {
	helpUrl.queryToObject('https://pnodet.com?firstname=paul&lastname=nodet');
	t.pass();
});

test('queryUpdateParameter()', t => {
	helpUrl.queryUpdateParameter(
		'https://pnodet.com?firstname=paul&lastname=echo',
		'lastname',
		'delta',
	);
	t.pass();
});

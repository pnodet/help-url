/**
 * Get the URL parameters
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
export function getParameters(url?: string): Record<string, string>;

/**
 * Get the value of a query string from a URL
 * @param  {String} parameter The parameter to get the value of
 * @param  {String} url   The URL to get the value from [optional]
 * @return {String}       The value
 */
export function getQueryString(parameter: string, url?: string): string;

/**
 * Get the value of a query string from an object
 * @link https://code.area17.com/a17/a17-helpers/wikis/queryStringHandler-fromObject
 * @param  {{}} object  The object to get the parameters from
 * @returns {String}  An url returned with the param from the object
 *
 * @example
 *
 * let query = _Url.queryFromObject({
 *   param1: 'param1value',
 *   param2: 'param2value'
 * });
 * //=> returns: ?param1=param1value&param2=param2value
 */
export function queryFromObject(object: Record<string, unknown>): string;

/**
 * Takes the passed URL, or the current browser URL and returns an object of query string parameters.
 * [URLSearchParams doesn't work](https://caniuse.com/#search=URLSearchParams)
 * @link https://code.area17.com/a17/a17-helpers/wikis/queryStringHandler-toObject
 * @param  {String} url   The URL to get the value from [optional]
 * @return {{}}   An object returned with the url params
 *
 * @example
 *
 * let params = _Url.queryToObject(url);
 * //=> { param1: 'param1value', param2: 'param2value' }
 */
export function queryToObject(url: string): Record<string, unknown>;

/**
 * Updates a specified key's value in a query string.
 * @link https://code.area17.com/a17/a17-helpers/wikis/queryStringHandler-updateParameter
 * @param  {String} url   URL to update
 * @param  {String} key   key to update, if the key doesn't exist, it gets added
 * @param  {String} value value to update, can handle ''
 * @returns {String}  new URL string with updated parameter
 *
 * @example
 *
 * let url = 'https://example.com?foo=bar&baz=qux'
 * newURL = _Url.queryupdateParameter(initialURL, 'baz', 'foo');
 * //=> returns 'https://example.com?foo=bar&baz=foo'
 */
export function queryUpdateParameter(
	url: string,
	key: string,
	value: string,
): string;

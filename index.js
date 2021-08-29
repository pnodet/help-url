export const getParameters = (url = window.location) => {
	const parameters = {};
	for (const [key, value] of new URL(url).searchParams.entries()) {
		if (parameters[key] !== undefined) {
			if (!Array.isArray(parameters[key])) {
				parameters[key] = [parameters[key]];
			}

			parameters[key].push(value);
		} else {
			parameters[key] = value;
		}
	}

	return parameters;
};

export const getQueryString = (parameter, url = window.location) => {
	const parameters = new URL(url).searchParams;
	const value = parameters.getAll(parameter);
	if (value.length > 1) return value;
	return value[0];
};

export const queryFromObject = (object) => {
	let queryString = '';
	let count = 0;

	if (Object.getOwnPropertyNames(object).length > 0) {
		queryString = '?';
		for (const key in object) {
			if (!object.hasOwnProperty(key)) {
				continue;
			}

			queryString += `${(count > 0 ? '&' : '') + key}=${encodeURIComponent(
				object[key],
			).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16)}`)}`;
			count++;
		}
	}

	return queryString;
};

export const queryToObject = (url) => {
	if (typeof url !== 'string') {
		return {};
	}

	const qsObject = {};
	const search = url && url.includes('?') ? url.split('?')[1] : location.search;
	search.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0, $1, $2, $3) => {
		qsObject[$1] = $3;
	});
	return qsObject;
};

export const queryUpdateParameter = (url, key, value) => {
	const re = new RegExp(`([?&])${key}=.*?(&|#|$)`, 'i');
	if (re.test(url)) {
		return url.replace(re, `$1${key}=${value}$2`);
	}

	let hash = '';
	if (url.includes('#')) {
		hash = url.replace(/.*#/, '#');
		url = url.replace(/#.*/, '');
	}

	const separator = url.includes('?') ? '&' : '?';
	return `${url + separator + key}=${value}${hash}`;
};

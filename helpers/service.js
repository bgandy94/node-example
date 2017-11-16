'use strict';

module.exports = {
    generateBrowseSearch: generateBrowseSearch
}


function generateBrowseSearch(params, keysToIgnore = KeysToIgnore) {
    let keys = Object.keys(params);
    let search = { where: {} };
    keys.forEach(key => {
        if (!ignoreKey(key, keysToIgnore)) {
            search.where[key] = params[key];
        }
    });
    return search;
}
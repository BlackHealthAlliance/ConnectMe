import { getOrganizations } from "./data";

/**
 * 
 * @param {} searchCriteria 
 * sample searchCriteria goes below
 * {
 *    "city": "toronto",
 *    "cost": "low",
 *    "serviceOffered": ["black-led", "free"],
 *    "populationServed": ["insurance", "no-insurance"],
 *    "languageProvided": "English"
 * }
 */
export function searchOrganizations(searchCriteria) {
    return getOrganizations().filter( org => 
        isMatch(searchCriteria.city, org.address.city) && 
        isMatch(searchCriteria.cost, org.cost) &&
        contains(org.services, searchCriteria.serviceOffered)
    );
}

function isMatch(val1, val2) {
    return isUnDefined(val1) || isUnDefined(val2) || val1.toUpperCase() === val2.toUpperCase();
}

function contains(arr, val) {
    return isUnDefined(val) || arr.find( elem => elem.toUpperCase() === val.toUpperCase());
}

function isUnDefined(obj) {
    return typeof obj === 'undefined';
}
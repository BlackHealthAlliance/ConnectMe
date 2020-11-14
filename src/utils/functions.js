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

    var result = [];
    const organizations = getOrganizations(); 

    console.log('ready to output');
    
    return getOrganizations().map( org => {
        {city: org.address.city}
    });
}
let cities = new Map();
cities.set("Toronto", "Toronto");

export function getCities() {
    let allCities = [];
    for (let city of cities.keys()) {
        allCities.push(city);
    }
    return allCities;
}

let languages = ["English", "Bengali", "Farsi", "Hungarian", "Hindi", "Spanish", "Urdu"];

export function getLanguages() {
    return languages;
}


// main data
var organizations = new Map();
organizations.set("The 519", 
    {
        crisis: false,
        cost: "N/A",
        languages: ["English"],
        address: {
            city: cities.get("Toronto"),
            streetAddress: "161 Bay street",
            postalCode: "A1B2C3",
            province: "ON"
        }
    }
);
organizations.set("Sherbourne Health centre",
    {
        crisis: false,
        cost: 0,
        languages: ["English", "Bengali", "Farsi", "Hungarian", "Hindi", "Spanish", "Urdu"],
        address: {
            city: cities.get("Toronto"),
            streetAddress: "100 Bay street",
            postalCode: "D1E2F3",
            province: "ON"
        }
    }
);

export function getOrganization(name) {
    return organizations.get(name);
}
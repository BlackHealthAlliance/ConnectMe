let cities = [
    "Toronto", "Ottawa", "Hamilton", "Scarborough", "North York", "York", "Brampton",
    "Oshawa", "Etobicoke", "Whitby", "Mississauga", 
];

export function getCities() {
    return cities;
}

let languages = [
    "English", "French", "Italian", "Cantonese", "Panjabi (Punjabi)", "Chinese",
    "Tamil", "Portuguese", "Mandarin", "Tagalog (Pilipino, Filipino)", "Spanish", "Urdu"
];


export function getLanguages() {
    return languages;
}

let cost = ["Free", "Paid", "Covered by OHIP", "Accepts Insurance"];

export function getCost() {
    return cost;
}

let insurance = [
    "Takes private insurance", "No insurance necessary", "No OHIP card necessary", "Services covered by OHIP",
];

export function getInsurance() {
    return insurance;
}

let services = [
    "Counselling", "Peer Support", "Crisis services", "Religion-based programs",
    "Psychotherapy programs/services", "In-patient programs", "Out-patient services", 
    "12-step programs", "Hospital-based programs", "Supportive housing ", "Physical activity",
    "Residential", "Substance Abuse", "Recreation/Leisure/Art & Crafts", "Education and Stress Management",
    "Youth Programs", "Homework Club", "Cooking Skills", "Camp", "Personal Development",
    "Other services"
];

export function getServices() {
    return services;
}


let population = [
    "Priority populations", "Black populations", "2SLGBTQ+", "Newcomers/Immigrants",
    "Deaf services", "People with disabilities", "People experiencing homelessness or being underhoused", 
    "Indigenous populations"
];

export function getPopulation() {
    return population;
}


let lengthOfService = ["Crisis", "Short-term", "Long-term"];

export function getLengthOfService() {
    return lengthOfService;
}

// main data
let organizations = [
    {
        name: "Across Boundaries",
        cost: "Free",
        languages: ["English"],
        services: ["Peer Support"],
        population: ["2SLGBTQ+"],
        address: {
            city: "Toronto",
            streetAddress: "51 Clarkson Avenue",
            postalCode: "M6E 2T5",
            province: "ON"
        },
        contact: {
            phone: "(416) 787- 3007",
            email: "info@acrossboundaries.ca",
            web: "https://www.acrossboundaries.ca/"
        }
    },
    {
        name: "Access Alliance",
        cost: "Paid",
        languages: ["French"],
        services: ["Counselling"],
        population: ["Newcomers/Immigrants"],
        address: {
            city: "Toronto",
            streetAddress: "51 Clarkson Avenue",
            postalCode: "M6E 2T5",
            province: "ON"
        },
        contact: {
            phone: "416-324-8677",
            email: "languages@accessalliance.ca",
            web: "https://accessalliance.ca/"
        }
    }
];

export function getOrganizations() {
    return organizations;
}
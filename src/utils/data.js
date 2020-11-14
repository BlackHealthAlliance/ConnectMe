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

let cost = ["Free", "Paid", "Both"];

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
    "Individual counselling", "Peer counselling", "Crisis services", "Religion-based programs",
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
    "Priority populations", "Black populations", "2SLGBTQ+ Friendly", "Newcomer and Refugee services",
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
var organizations = new Map();
organizations.set("Kennedy House Youth Services", 
    {
        crisis: false,
        cost: "N/A",
        languages: ["English"],
        address: {
            city: "Scarborough",
            streetAddress: "10 Milner Business Court",
            postalCode: "A1B2C3",
            province: "ON"
        },
        contact: {
            phone: "(416) 299-3157",
            email: "info@kennedyhouse.org",
            web: "http://www.khys.org/"
        },
        blackLed: false,
        services: ["Residential", "Substance Abuse", "Recreation/Leisure/Art & Crafts", "Education and Stress Management"]

    }
);

organizations.set("Frontlines", 
    {
        crisis: false,
        cost: "N/A",
        languages: ["English"],
        address: {
            city: "York",
            streetAddress: "1844 Weston Road",
            postalCode: "A1B2C3",
            province: "ON"
        },
        contact: {
            phone: "(416) 244-7017",
            email: "info@frontlines.to",
            web: "http://frontlines.to/"
        },
        blackLed: true,
        services: ["Youth Programs", "Homework Club", "Cooking Skills", "Camp", "Personal Development"]

    }
);



export function getOrganization(name) {
    return organizations.get(name);
}

let cities = ["Toronto (GTA)", "Ottawa (NCR)", "Hamilton", "Kitchener-Waterloo-Cambridge", "London", "Windsor"];

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
    "Psychotherapy programs/services", "In-patient programs", "Residential programs", "Out-patient services",
    "12-step programs", "Hospital-based programs", "Supportive housing ", "Physical activity", "Other services"
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

export function getPopulation() {
    return lengthOfService;
}

// main data
var organizations = new Map();
organizations.set("The 519", 
    {
        crisis: false,
        cost: "N/A",
        languages: ["English"],
        address: {
            city: "Toronto",
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
        languages: ["English", "Spanish", "Urdu"],
        address: {
            city: "Toronto",
            streetAddress: "100 Bay street",
            postalCode: "D1E2F3",
            province: "ON"
        }
    }
);

export function getOrganization(name) {
    return organizations.get(name);
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

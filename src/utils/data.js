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
    "Counselling", "Individual Counselling", "Peer Support", "Crisis Support", "Religion-based programs",
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
    "Priority populations", "Black-led", "2SLGBTQ+", "Newcomers/Immigrants",
    "Deaf services", "People with disabilities", "People experiencing homelessness or being underhoused", 
    "Indigenous populations", "Faith-based"
];

export function getPopulation() {
    return population;
}


let lengthOfService = ["Crisis", "Short-term", "Long-term"];

export function getLengthOfService() {
    return lengthOfService;
}

// main data
var organizations = [
    {
        name: "Across Boundaries",
        cost: ["Free"],
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
        cost: ["Paid"],
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
    },
    {
        name: "Regent Park Community Health Centre",
        cost: ["Paid", "Covered by OHIP"],
        languages: ["English", "French"],
        services: ["Crisis Support", "Individual Counselling", "Peer Support"],
        population: ["Newcomers/Immigrants"],
        address: {
            city: "Toronto",
            streetAddress: "465 Dundas Street East",
            postalCode: "N/A",
            province: "ON"
        },
        contact: {
            phone: "(416) 364-2261",
            email: "info@regentparkchc.org",
            web: "http://www.regentparkchc.org/"
        }
    },
    {
        name: "Frontlines",
        cost: ["Accepts Insurance"],
        languages: ["English", "French", "Spanish"],
        services: ["Counselling", "Peer Support"],
        population: ["Black-led"],
        address: {
            city: "York",
            streetAddress: "1844 Weston Road",
            postalCode: "N/A",
            province: "ON"
        },
        contact: {
            phone: "(416) 244-7017",
            email: "info@frontlines.to",
            web: "http://frontlines.to"
        }
    },
    {
        name: "Afri-Can Food Basket",
        cost: ["Free", "Paid"],
        languages: ["English"],
        services: ["Individual Counselling"],
        population: ["Black-led"],
        address: {
            city: "North York",
            streetAddress: "4929 Jane Street",
            postalCode: "N/A",
            province: "ON"
        },
        contact: {
            phone: "647-896-0641",
            email: "info@africanfoodbasket.ca",
            web: "https://africanfoodbasket.ca"
        }
    },
    {
        name: "Harriet Tubman Community Organization",
        cost: ["Covered by OHIP", "Accepts Insurance"],        
        languages: ["French"],
        services: ["Peer Support"],
        population: ["Black-led"],
        address: {
            city: "Toronto",
            streetAddress: "1761 Sheppard Avenue",
            postalCode: "N/A",
            province: "ON"
        },
        contact: {
            phone: "(416) 496-2042",
            email: "info@tubmancommunity.org",
            web: "https://www.tubmancommunity.org"
        }
    }
];

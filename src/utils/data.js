import firebase from "gatsby-plugin-firebase";

export function getFromFirebase(key) {
    return firebase
    .database()
    .ref(`/${key}`)
    .once("value")
    .then(snapshot => snapshot.val());
}

export function getCities() {
    return getFromFirebase("cities")
}

export function getLanguages() {
    return getFromFirebase("languages");
}

export function getCost() {
    return getFromFirebase("cost")
}

export function getServices() {
    return getFromFirebase("services");
}

export function getPopulation() {
    return getFromFirebase("population");;
}

// main data
let organizations = [
    {
        name: "Across Boundaries",
        cost: ["Free"],
        languages: ["English"],
        services: ["Peer Support"],
        population: ["2SLGBTQ+"],
        spotlight: false,
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
        spotlight: false,
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
        spotlight: false,
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
        spotlight: true,
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
        spotlight: true,
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
        spotlight: true,
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
    },
    {
        name: "Hope Christian Ministries",
        cost: ["Covered by OHIP", "Free"],        
        languages: ["English", "French"],
        services: ["Counselling"],
        population: ["Black-led", "Faith-based"],
        spotlight: true,
        address: {
            city: "Brampton",
            streetAddress: "4316 Ebenezer Road",
            postalCode: "N/A",
            province: "ON"
        },
        contact: {
            phone: "(905) 487-4673",
            email: "info@hopecministries.com",
            web: "www.hopecministries.com"
        }
    },
    {
        name: "Caribbean African Canadian Social Services",
        cost: ["Accepts Insurance", "Paid"],        
        languages: ["English", "French", "Spanish"],
        services: ["Counselling"],
        population: ["Black-led"],
        spotlight: true,
        address: {
            city: "North York",
            streetAddress: "99 Arrow Road",
            postalCode: "N/A",
            province: "ON"
        },
        contact: {
            phone: "(416) 740-1056",
            email: "Info@cafcan.org",
            web: "https://cafcan.org/"
        }
    },
    {
        name: "Bangladeshi-Canadian Community Services",
        cost: ["Free", "Paid"],        
        languages: ["English"],
        services: ["Peer Support"],
        population: ["Newcomers/Immigrants"],
        spotlight: false,
        address: {
            city: "Toronto",
            streetAddress: "2899 Danforth Ave",
            postalCode: "M4C 1M3",
            province: "ON"
        },
        contact: {
            phone: "(416) 699-4484",
            email: "info@bangladeshi.ca",
            web: "https://www.bangladeshi.ca/"
        }
    },
    {
        name: "Skylark Children, Youth & Families",
        cost: ["Free"],        
        languages: ["French"],
        services: ["Counselling"],
        population: ["2SLGBTQ+"],
        spotlight: false,
        address: {
            city: "Toronto",
            streetAddress: "40 Orchard View Blvd",
            postalCode: "M4R 1B9",
            province: "ON"
        },
        contact: {
            phone: "416-482-0081",
            email: "info@skylarkyouth.org",
            web: "skylarkyouth.org"
        }
    }
];


export function getOrganizations() {
    return organizations;
}

/**
 * Target metros for the local-SEO push (plan §9). Each entry carries genuinely
 * localized copy and a real geo center so the city pages are not thin
 * duplicates. Communities lists feed areaServed schema and the "areas we serve"
 * sections. No invented statistics — claims are qualitative and verifiable.
 */

export type Metro = {
  slug: string;
  name: string; // used in H1 / "surety bonds in {name}"
  region: string; // county / area descriptor
  /** One-line hero subhead, unique per metro. */
  blurb: string;
  /** 2-3 sentences of real local context for the body. */
  context: string;
  /** Communities served, for areaServed + an "areas we serve" chip list. */
  communities: string[];
  geo: { lat: number; lng: number };
};

export const metros: Metro[] = [
  {
    slug: "los-angeles",
    name: "Los Angeles",
    region: "Los Angeles County",
    blurb:
      "From a kitchen remodel in the Valley to a downtown high-rise, LA runs on permits, and permits run on bonds.",
    context:
      "Los Angeles is the largest contractor market in the largest licensing state in the country. That means volume, competition, and a lot of permit-driven license bonds. It also means more contractors who get squeezed out by automated underwriting. We quote the routine $25,000 license bond fast and place the credit-challenged files the instant-issue sites turn away.",
    communities: [
      "Long Beach",
      "Glendale",
      "Pasadena",
      "Santa Clarita",
      "Torrance",
      "Pomona",
      "Downey",
      "Burbank",
      "El Monte",
      "West Covina",
    ],
    geo: { lat: 34.0522, lng: -118.2437 },
  },
  {
    slug: "orange-county",
    name: "Orange County",
    region: "Orange County",
    blurb:
      "High-end residential, master-planned communities, and tight competition. Your bond should not slow you down.",
    context:
      "Orange County contractors work some of the most demanding residential and commercial jobs in the state, and clients expect a licensed, bonded operator. We handle the license and qualifier bonds that keep you compliant, and the contract bonds you need to win bigger OC projects.",
    communities: [
      "Anaheim",
      "Santa Ana",
      "Irvine",
      "Huntington Beach",
      "Garden Grove",
      "Fullerton",
      "Costa Mesa",
      "Mission Viejo",
      "Newport Beach",
      "Orange",
    ],
    geo: { lat: 33.7175, lng: -117.8311 },
  },
  {
    slug: "inland-empire",
    name: "the Inland Empire",
    region: "Riverside & San Bernardino Counties",
    blurb:
      "Warehouses, logistics, and new construction are booming. New and growing contractors are our specialty.",
    context:
      "The Inland Empire is one of the fastest-growing construction markets in California, full of newer contractors scaling up fast. Newer businesses and thinner credit files get declined by vending-machine bond sites. We build bonding programs for growth, including contractors who are just getting established.",
    communities: [
      "Riverside",
      "San Bernardino",
      "Ontario",
      "Rancho Cucamonga",
      "Fontana",
      "Moreno Valley",
      "Corona",
      "Temecula",
      "Victorville",
      "Murrieta",
    ],
    geo: { lat: 34.0633, lng: -117.6509 },
  },
  {
    slug: "san-diego",
    name: "San Diego",
    region: "San Diego County",
    blurb:
      "Coastal builds, public works, and a steady defense and biotech pipeline. Get bonded without the wait.",
    context:
      "San Diego contractors juggle coastal residential, commercial tenant improvements, and a deep bench of public and institutional work. We move the routine license bonds quickly and help San Diego contractors build the contract-bond capacity that public and private projects require.",
    communities: [
      "Chula Vista",
      "Oceanside",
      "Escondido",
      "Carlsbad",
      "El Cajon",
      "Vista",
      "San Marcos",
      "Encinitas",
      "National City",
      "La Mesa",
    ],
    geo: { lat: 32.7157, lng: -117.1611 },
  },
  {
    slug: "bay-area",
    name: "the Bay Area",
    region: "San Francisco Bay Area",
    blurb:
      "Higher contract values mean bonding capacity matters. We build programs that scale with the work.",
    context:
      "From San Jose tech campuses to San Francisco public works, Bay Area contracts run large, and that puts bonding capacity front and center. We do more than issue a license bond here: we build performance and payment bond programs sized for high-value Bay Area work.",
    communities: [
      "San Jose",
      "San Francisco",
      "Oakland",
      "Fremont",
      "Hayward",
      "Sunnyvale",
      "Concord",
      "Santa Rosa",
      "Berkeley",
      "Walnut Creek",
    ],
    geo: { lat: 37.7749, lng: -122.4194 },
  },
  {
    slug: "sacramento",
    name: "Sacramento",
    region: "Sacramento & the Capital Region",
    blurb:
      "The state capital runs on public works. Bid, performance, and payment bonds are our bread and butter here.",
    context:
      "As the seat of state government, the Sacramento region sees heavy public-works and state contracting, which means a constant need for bid, performance, and payment bonds. We help Capital Region contractors get bonded for public bids and keep their license bonds current.",
    communities: [
      "Elk Grove",
      "Roseville",
      "Folsom",
      "Citrus Heights",
      "Rancho Cordova",
      "Davis",
      "West Sacramento",
      "Carmichael",
      "Woodland",
      "El Dorado Hills",
    ],
    geo: { lat: 38.5816, lng: -121.4944 },
  },
  {
    slug: "fresno",
    name: "Fresno",
    region: "Fresno County & the Central Valley",
    blurb:
      "Central Valley construction and ag infrastructure. Practical bonding from people who pick up the phone.",
    context:
      "Fresno and the Central Valley combine residential and commercial construction with agricultural and water-infrastructure work. We give Valley contractors fast license bonds and real human help with contract bonds, including the credit-challenged and newer operators other brokers pass on.",
    communities: [
      "Clovis",
      "Madera",
      "Visalia",
      "Hanford",
      "Selma",
      "Reedley",
      "Sanger",
      "Kerman",
      "Kingsburg",
    ],
    geo: { lat: 36.7378, lng: -119.7871 },
  },
];

export function getMetro(slug: string): Metro | undefined {
  return metros.find((m) => m.slug === slug);
}

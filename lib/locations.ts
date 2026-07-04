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
  {
    slug: "bakersfield",
    name: "Bakersfield",
    region: "Kern County",
    blurb:
      "Energy, agriculture, and steady residential growth. Practical bonding without the runaround.",
    context:
      "Kern County construction spans energy and oil-field work, large-scale agriculture, and a growing residential base around Bakersfield. We give Kern contractors fast license bonds and real help with contract bonds, including the credit-challenged and newer operators other brokers wave off.",
    communities: ["Delano", "Wasco", "Shafter", "Arvin", "Tehachapi", "Ridgecrest", "Taft", "McFarland"],
    geo: { lat: 35.3733, lng: -119.0187 },
  },
  {
    slug: "stockton",
    name: "Stockton",
    region: "San Joaquin County",
    blurb:
      "Port logistics and housing growth are driving demand. We keep your bonds from slowing the build.",
    context:
      "San Joaquin County pairs Northern California's logistics and port activity with fast residential growth around Stockton, Tracy, and Manteca. We bond Valley contractors quickly and build the contract-bond capacity that warehouse and public work calls for.",
    communities: ["Tracy", "Manteca", "Lodi", "Lathrop", "Ripon", "Escalon"],
    geo: { lat: 37.9577, lng: -121.2908 },
  },
  {
    slug: "modesto",
    name: "Modesto",
    region: "Stanislaus County",
    blurb:
      "The ag heartland builds, too. Fast license bonds and contract bonds from people who answer the phone.",
    context:
      "Stanislaus County construction runs alongside one of the most productive agricultural regions in the country. Modesto-area contractors get the same thing from us as the big-city ones: fast license bonds, real contract-bond help, and a yes on tough credit when it is possible.",
    communities: ["Turlock", "Ceres", "Riverbank", "Oakdale", "Patterson", "Newman"],
    geo: { lat: 37.6391, lng: -120.9969 },
  },
  {
    slug: "ventura-county",
    name: "Ventura County",
    region: "Ventura County",
    blurb:
      "Coastal residential, agriculture, and tight permitting. Get bonded without adding delay.",
    context:
      "From the Oxnard plain to Thousand Oaks, Ventura County mixes coastal residential, commercial, and agricultural construction under demanding local permitting. We move the routine license bonds fast and help county contractors build contract-bond capacity for larger work.",
    communities: ["Oxnard", "Thousand Oaks", "Simi Valley", "Camarillo", "Ventura", "Moorpark", "Santa Paula"],
    geo: { lat: 34.2746, lng: -119.229 },
  },
  {
    slug: "santa-barbara",
    name: "Santa Barbara",
    region: "Santa Barbara County & the Central Coast",
    blurb:
      "High-end coastal work and strict permitting. A bond should be the easy part, and with us it is.",
    context:
      "Santa Barbara and the Central Coast are known for high-end residential, hospitality, and careful permitting. Contractors here need to show they are licensed and bonded to win work, and we make the bond the simplest item on the list, credit challenges included.",
    communities: ["Santa Maria", "Goleta", "Carpinteria", "Lompoc", "Montecito", "Buellton"],
    geo: { lat: 34.4208, lng: -119.6982 },
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    region: "Long Beach & the South Bay",
    blurb:
      "Port logistics, waterfront development, and dense residential. Your bond should keep pace with the work.",
    context:
      "Long Beach pairs one of the busiest ports in the country with steady commercial and residential construction across the South Bay. Contractors here move fast, and we make the license and contract bonds the easy part, including for credit-challenged and newer operators.",
    communities: ["Signal Hill", "Lakewood", "Carson", "Seal Beach", "San Pedro", "Wilmington"],
    geo: { lat: 33.7701, lng: -118.1937 },
  },
  {
    slug: "anaheim",
    name: "Anaheim",
    region: "Anaheim & North Orange County",
    blurb:
      "Resort-district hospitality and the Platinum Triangle keep the cranes busy. Get bonded without the wait.",
    context:
      "Anaheim's tourism and resort district, plus the ongoing Platinum Triangle build-out, drive a steady stream of hospitality, commercial, and residential work. We bond North OC contractors quickly and build the contract-bond capacity larger projects require.",
    communities: ["Fullerton", "Garden Grove", "Orange", "Buena Park", "Placentia", "Yorba Linda"],
    geo: { lat: 33.8366, lng: -117.9143 },
  },
  {
    slug: "coachella-valley",
    name: "the Coachella Valley",
    region: "Riverside County desert",
    blurb:
      "Resort, hospitality, and seasonal residential across the desert. Practical bonding, no runaround.",
    context:
      "From Palm Springs to Indio, the Coachella Valley runs on resort, hospitality, and second-home residential construction, with a seasonal rhythm all its own. We give desert contractors fast license bonds and real help with contract bonds for the valley's bigger projects.",
    communities: ["Palm Springs", "Palm Desert", "Indio", "Cathedral City", "La Quinta", "Rancho Mirage", "Coachella"],
    geo: { lat: 33.8303, lng: -116.5453 },
  },
  {
    slug: "redding",
    name: "Redding",
    region: "Shasta County & the North State",
    blurb:
      "North State rebuilding and residential growth. Fast license bonds from people who pick up the phone.",
    context:
      "Redding anchors the North State, where residential rebuilding, forestry, and commercial work keep contractors busy across Shasta County and beyond. We bond North State contractors quickly and place the tougher files other brokers pass on.",
    communities: ["Anderson", "Red Bluff", "Shasta Lake", "Cottonwood", "Palo Cedro"],
    geo: { lat: 40.5865, lng: -122.3917 },
  },
  {
    slug: "salinas",
    name: "Salinas",
    region: "Monterey County & the Central Coast",
    blurb:
      "Agriculture and Central Coast residential. Bonding that fits the way Monterey County builds.",
    context:
      "Salinas and Monterey County combine some of the most productive agriculture in the world with coastal residential and commercial construction. We give Central Coast contractors fast license bonds and human help with contract bonds, credit challenges welcome.",
    communities: ["Monterey", "Seaside", "Marina", "Soledad", "Gonzales", "Greenfield", "King City"],
    geo: { lat: 36.6777, lng: -121.6555 },
  },
  {
    slug: "riverside",
    name: "Riverside",
    region: "Riverside County",
    blurb:
      "The county seat, from historic downtown to new residential. Fast license bonds and real contract-bond help.",
    context:
      "Riverside anchors its county with a mix of institutional, commercial, and residential construction, from the historic core around the Mission Inn to fast-growing suburbs. We bond Riverside contractors quickly and place the tougher files other brokers turn away.",
    communities: ["Moreno Valley", "Jurupa Valley", "Eastvale", "Norco", "Rubidoux", "Woodcrest"],
    geo: { lat: 33.9533, lng: -117.3962 },
  },
  {
    slug: "san-bernardino",
    name: "San Bernardino",
    region: "San Bernardino County",
    blurb:
      "A logistics and warehousing powerhouse near the Cajon Pass. We keep your bonds from slowing the build.",
    context:
      "San Bernardino sits at the heart of the largest county in the lower 48 and one of the busiest logistics corridors in the country. Warehouse, industrial, and residential work keep contractors busy, and we give them fast license bonds plus contract-bond capacity for bigger jobs.",
    communities: ["Highland", "Rialto", "Colton", "Loma Linda", "Redlands", "Grand Terrace"],
    geo: { lat: 34.1083, lng: -117.2898 },
  },
  {
    slug: "corona",
    name: "Corona",
    region: "Riverside County",
    blurb:
      "The Circle City on the Orange County line. Manufacturing, industry, and steady residential growth.",
    context:
      "Corona blends a strong manufacturing and industrial base with heavy commuter-driven residential growth on the Riverside and Orange County border. We bond Corona contractors fast and build the contract-bond programs growing firms need.",
    communities: ["Norco", "Eastvale", "Jurupa Valley", "El Cerrito", "Home Gardens"],
    geo: { lat: 33.8753, lng: -117.5664 },
  },
  {
    slug: "temecula",
    name: "Temecula",
    region: "Southwest Riverside County",
    blurb:
      "Wine country, tourism, and master-planned residential. A bond should be the easy part, and here it is.",
    context:
      "Temecula pairs the Temecula Valley wine country and its tourism economy with fast-growing master-planned residential and hospitality construction. We move the routine license bonds quickly and help Southwest Riverside contractors build contract-bond capacity.",
    communities: ["Murrieta", "Wildomar", "Wine Country", "Vail Ranch", "Redhawk"],
    geo: { lat: 33.4936, lng: -117.1484 },
  },
  {
    slug: "menifee",
    name: "Menifee",
    region: "Southwest Riverside County",
    blurb:
      "One of California's fastest-growing cities. New construction is everywhere, and we bond the builders.",
    context:
      "Menifee is among the fastest-growing cities in California, a young city built on wave after wave of new master-planned residential and the commercial work that follows it. Newer and growing contractors get declined by vending-machine bond sites; we build programs for exactly that.",
    communities: ["Sun City", "Romoland", "Quail Valley", "Paloma Valley", "Menifee Lakes"],
    geo: { lat: 33.6971, lng: -117.185 },
  },
  {
    slug: "lake-elsinore",
    name: "Lake Elsinore",
    region: "Southwest Riverside County",
    blurb:
      "Lakefront recreation and fast residential growth. Practical bonding from people who pick up the phone.",
    context:
      "Built around Southern California's largest natural lake, Lake Elsinore combines outdoor recreation with rapid residential growth across Southwest Riverside County. We give local contractors fast license bonds and human help with contract bonds, credit challenges welcome.",
    communities: ["Wildomar", "Canyon Lake", "Lakeland Village", "Horsethief Canyon"],
    geo: { lat: 33.6681, lng: -117.3273 },
  },
  {
    slug: "moreno-valley",
    name: "Moreno Valley",
    region: "Riverside County",
    blurb:
      "A logistics and distribution center with fast residential growth. We bond the builders who keep it moving.",
    context:
      "Moreno Valley has become a major logistics and distribution hub, anchored by huge warehouse projects and steady residential growth. We give local contractors fast license bonds and the contract-bond capacity that big industrial work demands.",
    communities: ["Perris", "Riverside", "Beaumont", "Banning", "Nuevo", "March ARB"],
    geo: { lat: 33.9425, lng: -117.2297 },
  },
  {
    slug: "ontario",
    name: "Ontario",
    region: "San Bernardino County",
    blurb:
      "Airport, distribution, and convention construction. Keep your bonds from slowing the build.",
    context:
      "Ontario pairs Ontario International Airport with one of the densest distribution and convention economies in the region, plus ongoing commercial and residential work. We bond Ontario-area contractors quickly and build programs for larger jobs.",
    communities: ["Montclair", "Upland", "Chino", "Rancho Cucamonga", "Fontana", "Chino Hills"],
    geo: { lat: 34.0633, lng: -117.6509 },
  },
  {
    slug: "rancho-cucamonga",
    name: "Rancho Cucamonga",
    region: "San Bernardino County",
    blurb:
      "An affluent suburb with strong commercial and residential building. A bond should be the easy part.",
    context:
      "Rancho Cucamonga combines upscale residential neighborhoods with major commercial centers like Victoria Gardens. We move the routine license bonds fast and help local contractors build contract-bond capacity for bigger work.",
    communities: ["Upland", "Fontana", "Ontario", "Alta Loma", "Etiwanda", "Rialto"],
    geo: { lat: 34.1064, lng: -117.5931 },
  },
  {
    slug: "fontana",
    name: "Fontana",
    region: "San Bernardino County",
    blurb:
      "A former steel town reinvented as a logistics hub. Heavy industrial and residential, fast bonds.",
    context:
      "Once known for its Kaiser steel mill, Fontana is now one of the busiest warehouse and logistics markets in California, with strong residential growth alongside it. We bond Fontana contractors quickly, credit challenges included.",
    communities: ["Rialto", "Bloomington", "Rancho Cucamonga", "Ontario", "Colton"],
    geo: { lat: 34.0922, lng: -117.435 },
  },
  {
    slug: "victorville",
    name: "Victorville",
    region: "Victor Valley & the High Desert",
    blurb:
      "The High Desert's hub, growing on logistics and residential. Practical bonding from people who answer.",
    context:
      "Victorville anchors the Victor Valley, where logistics, energy, and affordable residential development drive High Desert construction. We give local contractors fast license bonds and human help with contract bonds.",
    communities: ["Hesperia", "Apple Valley", "Adelanto", "Barstow", "Phelan", "Oak Hills"],
    geo: { lat: 34.5362, lng: -117.2928 },
  },
  {
    slug: "murrieta",
    name: "Murrieta",
    region: "Southwest Riverside County",
    blurb:
      "A fast-growing, family-focused suburb next to Temecula. New construction everywhere, and we bond it.",
    context:
      "Murrieta is one of Southwest Riverside County's fastest-growing communities, full of master-planned residential and the commercial work that follows. Newer and growing contractors get declined elsewhere; we build programs for exactly that.",
    communities: ["Temecula", "Wildomar", "Menifee", "French Valley", "Lake Elsinore"],
    geo: { lat: 33.5539, lng: -117.2139 },
  },
  {
    slug: "santa-clarita",
    name: "Santa Clarita",
    region: "Los Angeles County, Santa Clarita Valley",
    blurb:
      "Master-planned communities and a film economy north of LA. Get bonded without the wait.",
    context:
      "The Santa Clarita Valley blends master-planned communities like Valencia with a busy film-industry economy, driving residential and commercial construction. We bond SCV contractors fast and place the tougher files other brokers skip.",
    communities: ["Valencia", "Newhall", "Saugus", "Canyon Country", "Stevenson Ranch", "Castaic"],
    geo: { lat: 34.3917, lng: -118.5426 },
  },
  {
    slug: "antelope-valley",
    name: "the Antelope Valley",
    region: "Los Angeles County High Desert",
    blurb:
      "Aerospace, solar, and residential across Lancaster and Palmdale. Fast bonds, tough cases welcome.",
    context:
      "The Antelope Valley runs on aerospace (Air Force Plant 42 and Edwards), utility-scale solar, and steady residential growth across Lancaster and Palmdale. We give High Desert contractors fast license bonds and real contract-bond help.",
    communities: ["Lancaster", "Palmdale", "Quartz Hill", "Rosamond", "Lake Los Angeles", "Acton"],
    geo: { lat: 34.6868, lng: -118.1542 },
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    region: "Los Angeles County, San Gabriel Valley",
    blurb:
      "Historic, institutional, and high-end remodels. A bond should be the simplest item on the list.",
    context:
      "Pasadena combines historic architecture and major institutions like Caltech and JPL with a steady stream of high-end residential remodels across the San Gabriel Valley. We move the routine license bonds fast and quote credit challenges honestly.",
    communities: ["Altadena", "Arcadia", "South Pasadena", "San Marino", "Sierra Madre", "Glendale"],
    geo: { lat: 34.1478, lng: -118.1445 },
  },
  {
    slug: "santa-rosa",
    name: "Santa Rosa",
    region: "Sonoma County & the North Bay",
    blurb:
      "Wine-country construction and ongoing rebuilding. Bonding that fits how the North Bay builds.",
    context:
      "Santa Rosa anchors the North Bay, balancing wine-country and residential construction with years of wildfire rebuilding across Sonoma County. We bond local contractors fast and place the credit-challenged and newer operators other brokers pass on.",
    communities: ["Petaluma", "Rohnert Park", "Windsor", "Sebastopol", "Healdsburg", "Sonoma"],
    geo: { lat: 38.4404, lng: -122.7141 },
  },
  {
    slug: "visalia",
    name: "Visalia",
    region: "Tulare County & the Central Valley",
    blurb:
      "Central Valley agriculture and residential, gateway to the Sequoias. Practical, fast bonding.",
    context:
      "Visalia is a Central Valley center for agriculture and residential construction and the gateway to the Sequoias. We give Tulare County contractors fast license bonds and human help with contract bonds, credit challenges welcome.",
    communities: ["Tulare", "Hanford", "Porterville", "Exeter", "Farmersville", "Dinuba"],
    geo: { lat: 36.3302, lng: -119.2921 },
  },
  {
    slug: "san-luis-obispo",
    name: "San Luis Obispo",
    region: "San Luis Obispo County & the Central Coast",
    blurb:
      "Coastal, college-town, and wine-country work with careful permitting. We make the bond the easy part.",
    context:
      "San Luis Obispo pairs Cal Poly and a college-town economy with coastal and wine-country construction under careful local permitting. We move the routine license bonds quickly and help Central Coast contractors with contract bonds.",
    communities: ["Pismo Beach", "Atascadero", "Paso Robles", "Arroyo Grande", "Morro Bay", "Grover Beach"],
    geo: { lat: 35.2828, lng: -120.6596 },
  },
  {
    slug: "chula-vista",
    name: "Chula Vista",
    region: "San Diego County, South Bay",
    blurb:
      "One of California's fastest-growing cities, from Otay Ranch to the border. New builds, fast bonds.",
    context:
      "Chula Vista is among the fastest-growing cities in California, with master-planned Otay Ranch development and busy South Bay and border commerce. We bond local contractors quickly and build programs for growing and newer firms.",
    communities: ["National City", "Imperial Beach", "Bonita", "Eastlake", "Otay Ranch", "San Ysidro"],
    geo: { lat: 32.6401, lng: -117.0842 },
  },
  {
    slug: "oceanside",
    name: "Oceanside",
    region: "San Diego County, North County coastal",
    blurb:
      "North County coastal living next to Camp Pendleton. Steady residential and commercial work.",
    context:
      "Oceanside blends North County San Diego coastal residential with the steady activity around Camp Pendleton and a revitalizing downtown. We give local contractors fast license bonds and real contract-bond help.",
    communities: ["Carlsbad", "Vista", "San Marcos", "Encinitas", "Camp Pendleton"],
    geo: { lat: 33.1959, lng: -117.3795 },
  },
  {
    slug: "san-jose",
    name: "San Jose",
    region: "Santa Clara County, Silicon Valley",
    blurb:
      "The capital of Silicon Valley, where high-value contracts make bonding capacity matter most.",
    context:
      "San Jose is the heart of Silicon Valley, where tech-campus, commercial, and high-value residential contracts put bonding capacity front and center. We do more than issue a license bond here: we build performance and payment bond programs sized for the work.",
    communities: ["Santa Clara", "Sunnyvale", "Milpitas", "Campbell", "Cupertino", "Morgan Hill"],
    geo: { lat: 37.3382, lng: -121.8863 },
  },
  {
    slug: "elk-grove",
    name: "Elk Grove",
    region: "Sacramento County",
    blurb:
      "One of the region's largest, fastest-growing suburbs. New construction everywhere, and we bond it.",
    context:
      "Elk Grove is one of the largest and fastest-growing suburbs in the Sacramento region, full of new residential and the commercial work that follows. Newer and growing contractors get declined by automated sites; we build programs for exactly that.",
    communities: ["Sacramento", "Galt", "Wilton", "Laguna", "Franklin"],
    geo: { lat: 38.4088, lng: -121.3716 },
  },
  {
    slug: "roseville",
    name: "Roseville",
    region: "Placer County",
    blurb:
      "Placer County's retail and residential engine. Fast license bonds, real contract-bond help.",
    context:
      "Roseville anchors fast-growing Placer County with major retail, commercial, and residential construction. We give local contractors quick license bonds and the contract-bond capacity bigger projects require.",
    communities: ["Rocklin", "Lincoln", "Citrus Heights", "Granite Bay", "Antelope"],
    geo: { lat: 38.7521, lng: -121.288 },
  },
  {
    slug: "folsom",
    name: "Folsom",
    region: "Sacramento County",
    blurb:
      "Affluent, tech-driven, and master-planned. A bond should be the easy part, and with us it is.",
    context:
      "Folsom blends a strong tech employment base with historic charm and master-planned residential growth east of Sacramento. We move the routine license bonds fast and quote credit challenges honestly.",
    communities: ["El Dorado Hills", "Orangevale", "Rancho Cordova", "Granite Bay", "Cameron Park"],
    geo: { lat: 38.6779, lng: -121.1761 },
  },
  {
    slug: "hayward",
    name: "Hayward",
    region: "Alameda County, East Bay",
    blurb:
      "East Bay industry and dense residential. Keep your bonds from slowing the build.",
    context:
      "Hayward sits at the center of the East Bay with a deep industrial base and busy residential and commercial construction. We bond Hayward-area contractors fast and place the tougher files other brokers turn away.",
    communities: ["San Leandro", "Union City", "Castro Valley", "Fremont", "San Lorenzo"],
    geo: { lat: 37.6688, lng: -122.0808 },
  },
  {
    slug: "concord",
    name: "Concord",
    region: "Contra Costa County, East Bay",
    blurb:
      "The largest city in Contra Costa, with a major redevelopment pipeline. Fast bonds, tough cases welcome.",
    context:
      "Concord is the largest city in Contra Costa County, with suburban growth and a major reuse pipeline at the former Naval Weapons Station. We give local contractors fast license bonds and contract-bond capacity for larger work.",
    communities: ["Walnut Creek", "Pleasant Hill", "Martinez", "Pittsburg", "Clayton", "Antioch"],
    geo: { lat: 37.978, lng: -122.0311 },
  },
  {
    slug: "vallejo",
    name: "Vallejo",
    region: "Solano County, North Bay",
    blurb:
      "Waterfront, Mare Island redevelopment, and affordable North Bay growth. Practical bonding, fast.",
    context:
      "Vallejo combines a working waterfront and the ongoing Mare Island redevelopment with some of the most affordable housing growth in the North Bay. We bond local contractors quickly, credit challenges included.",
    communities: ["Benicia", "American Canyon", "Fairfield", "Crockett"],
    geo: { lat: 38.1041, lng: -122.2566 },
  },
  {
    slug: "fairfield",
    name: "Fairfield",
    region: "Solano County",
    blurb:
      "Midway between Sacramento and San Francisco, anchored by Travis AFB. Fast license and contract bonds.",
    context:
      "Fairfield sits midway between Sacramento and the Bay Area, with Travis Air Force Base and steady industrial and residential construction. We give Solano County contractors fast license bonds and real contract-bond help.",
    communities: ["Suisun City", "Vacaville", "Travis AFB", "Cordelia", "Green Valley"],
    geo: { lat: 38.2494, lng: -122.04 },
  },
  {
    slug: "merced",
    name: "Merced",
    region: "Merced County & the Central Valley",
    blurb:
      "UC Merced growth plus agriculture. Fast bonds from people who pick up the phone.",
    context:
      "Merced is growing around UC Merced and a strong agricultural base, with new residential and institutional construction. We give Central Valley contractors fast license bonds and human help with contract bonds.",
    communities: ["Atwater", "Los Banos", "Livingston", "Winton", "Gustine"],
    geo: { lat: 37.3022, lng: -120.483 },
  },
  {
    slug: "chico",
    name: "Chico",
    region: "Butte County & the North Valley",
    blurb:
      "A college town and North Valley hub still rebuilding nearby. Practical, fast bonding.",
    context:
      "Chico anchors the North Valley with Chico State, agriculture, and significant rebuilding across Butte County after recent wildfires. We bond local contractors fast and place the credit-challenged and newer operators others pass on.",
    communities: ["Paradise", "Oroville", "Durham", "Hamilton City", "Gridley"],
    geo: { lat: 39.7285, lng: -121.8375 },
  },
  {
    slug: "hanford",
    name: "Hanford",
    region: "Kings County & the Central Valley",
    blurb:
      "Kings County agriculture and NAS Lemoore. Bonding that fits how the Valley builds.",
    context:
      "Hanford and Kings County pair productive agriculture with the activity around Naval Air Station Lemoore. We give local contractors fast license bonds and real contract-bond help, credit challenges welcome.",
    communities: ["Lemoore", "Visalia", "Corcoran", "Armona", "Stratford"],
    geo: { lat: 36.3275, lng: -119.6457 },
  },
  {
    slug: "escondido",
    name: "Escondido",
    region: "San Diego County, North County inland",
    blurb:
      "North County inland's hub, from residential to commercial. Get bonded without the wait.",
    context:
      "Escondido anchors inland North County San Diego with steady residential and commercial construction. We move the routine license bonds fast and help local contractors build contract-bond capacity.",
    communities: ["San Marcos", "Vista", "Valley Center", "Rancho Bernardo", "Poway"],
    geo: { lat: 33.1192, lng: -117.0864 },
  },
  {
    slug: "carlsbad",
    name: "Carlsbad",
    region: "San Diego County, North County coastal",
    blurb:
      "Coastal, biotech, and upscale residential. A bond should be the simplest item on the list.",
    context:
      "Carlsbad blends North County coastal living with biotech, tourism, and upscale residential construction. We give local contractors fast license bonds and quote credit challenges honestly.",
    communities: ["Oceanside", "Vista", "Encinitas", "San Marcos", "Cardiff"],
    geo: { lat: 33.1581, lng: -117.3506 },
  },
  {
    slug: "el-cajon",
    name: "El Cajon",
    region: "San Diego County, East County",
    blurb:
      "East County's hub, diverse and busy. Fast license bonds and contract-bond help.",
    context:
      "El Cajon anchors East County San Diego with a diverse economy and steady residential and commercial work. We bond local contractors fast and place the tougher files other brokers skip.",
    communities: ["La Mesa", "Santee", "Lakeside", "Spring Valley", "Lemon Grove"],
    geo: { lat: 32.7948, lng: -116.9625 },
  },
  {
    slug: "irvine",
    name: "Irvine",
    region: "Orange County",
    blurb:
      "Master-planned, business-driven, and high-value. We build the bonding capacity bigger work needs.",
    context:
      "Irvine is one of the most carefully master-planned cities in the country, with a deep business and tech base and high-value commercial and residential work. We do more than issue a license bond here: we build contract-bond programs sized for the work.",
    communities: ["Tustin", "Lake Forest", "Newport Beach", "Costa Mesa", "Laguna Hills"],
    geo: { lat: 33.6846, lng: -117.8265 },
  },
  {
    slug: "santa-ana",
    name: "Santa Ana",
    region: "Orange County",
    blurb:
      "The OC county seat, dense and diverse. Fast license bonds, tough cases welcome.",
    context:
      "Santa Ana is the Orange County seat, a dense and diverse city with constant commercial and residential construction. We give local contractors fast license bonds and work the credit-challenged files automated sites decline.",
    communities: ["Garden Grove", "Tustin", "Orange", "Fountain Valley", "Costa Mesa"],
    geo: { lat: 33.7455, lng: -117.8677 },
  },
  {
    slug: "huntington-beach",
    name: "Huntington Beach",
    region: "Orange County",
    blurb:
      "Surf City coastal living, residential and commercial. Get bonded without the wait.",
    context:
      "Huntington Beach pairs Surf City coastal residential with steady commercial work along the Orange County coast. We move the routine license bonds fast and help local contractors with contract bonds.",
    communities: ["Fountain Valley", "Westminster", "Costa Mesa", "Seal Beach", "Newport Beach"],
    geo: { lat: 33.6595, lng: -117.9988 },
  },
  {
    slug: "hesperia",
    name: "Hesperia",
    region: "Victor Valley & the High Desert",
    blurb:
      "Affordable High Desert growth in the Victor Valley. Practical bonding from people who answer.",
    context:
      "Hesperia is one of the Victor Valley's fast-growing High Desert cities, built on affordable residential and the commercial work that follows. We give local contractors fast license bonds and place the tougher files other brokers pass on.",
    communities: ["Victorville", "Apple Valley", "Oak Hills", "Phelan", "Adelanto"],
    geo: { lat: 34.4264, lng: -117.3009 },
  },
  {
    slug: "apple-valley",
    name: "Apple Valley",
    region: "Victor Valley & the High Desert",
    blurb:
      "A High Desert town with steady residential growth. Fast license bonds, real contract-bond help.",
    context:
      "Apple Valley anchors the High Desert alongside Victorville, with steady residential growth and commercial construction. We bond local contractors quickly, credit challenges included.",
    communities: ["Victorville", "Hesperia", "Lucerne Valley", "Spring Valley Lake", "Adelanto"],
    geo: { lat: 34.5008, lng: -117.1858 },
  },
  {
    slug: "glendale",
    name: "Glendale",
    region: "Los Angeles County",
    blurb:
      "Dense residential and commercial near the studios. Fast license bonds, real contract-bond help.",
    context:
      "Glendale blends a busy commercial core around Americana and Brand with dense residential and proximity to the LA media economy. We bond Glendale-area contractors fast and place the tougher files other brokers turn away.",
    communities: ["Burbank", "Pasadena", "La Cañada Flintridge", "Eagle Rock", "Montrose", "La Crescenta"],
    geo: { lat: 34.1425, lng: -118.2551 },
  },
  {
    slug: "burbank",
    name: "Burbank",
    region: "Los Angeles County",
    blurb:
      "The media capital, with studios, industry, and residential. A bond should be the easy part.",
    context:
      "Burbank pairs the major studios with a strong industrial base and steady residential work. We move the routine license bonds fast and help Burbank contractors with contract bonds for larger projects.",
    communities: ["Glendale", "North Hollywood", "Toluca Lake", "Sun Valley", "Studio City"],
    geo: { lat: 34.1808, lng: -118.309 },
  },
  {
    slug: "pomona",
    name: "Pomona",
    region: "Los Angeles County, Pomona Valley",
    blurb:
      "The Pomona Valley's hub, industrial and residential. Get bonded without the wait.",
    context:
      "Pomona anchors the Pomona Valley with the Fairplex, Cal Poly Pomona, and a deep industrial and residential base. We give local contractors fast license bonds and place the credit-challenged files automated sites decline.",
    communities: ["Claremont", "La Verne", "San Dimas", "Diamond Bar", "Walnut", "Chino"],
    geo: { lat: 34.0552, lng: -117.7499 },
  },
  {
    slug: "torrance",
    name: "Torrance",
    region: "Los Angeles County, South Bay",
    blurb:
      "South Bay aerospace and industry plus coastal residential. Fast, practical bonding.",
    context:
      "Torrance is a South Bay center for aerospace, manufacturing, and corporate headquarters, with steady coastal-adjacent residential work. We bond Torrance contractors fast and build contract-bond capacity for bigger jobs.",
    communities: ["Redondo Beach", "Gardena", "Carson", "Lomita", "Hawthorne", "Palos Verdes"],
    geo: { lat: 33.8358, lng: -118.3406 },
  },
  {
    slug: "downey",
    name: "Downey",
    region: "Los Angeles County, Gateway Cities",
    blurb:
      "Gateway Cities residential and commercial with an aerospace heritage. Fast license bonds.",
    context:
      "Downey anchors the Gateway Cities with dense residential, commercial corridors, and a proud aerospace history. We give local contractors fast license bonds and human help with contract bonds.",
    communities: ["Norwalk", "Bellflower", "Paramount", "South Gate", "Pico Rivera", "Bell Gardens"],
    geo: { lat: 33.9401, lng: -118.1332 },
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    region: "Orange County",
    blurb:
      "North OC with a historic downtown and university base. Fast bonds, tough cases welcome.",
    context:
      "Fullerton blends Cal State Fullerton, a historic downtown, and steady North Orange County residential and commercial construction. We bond local contractors fast and place the files other brokers skip.",
    communities: ["Brea", "Placentia", "Anaheim", "Buena Park", "La Habra", "Yorba Linda"],
    geo: { lat: 33.8704, lng: -117.9242 },
  },
  {
    slug: "costa-mesa",
    name: "Costa Mesa",
    region: "Orange County",
    blurb:
      "Business, retail, and the arts at the heart of OC. Get bonded without the wait.",
    context:
      "Costa Mesa pairs South Coast Plaza and a strong business and arts economy with steady commercial and residential work. We move the routine license bonds fast and help local contractors with contract bonds.",
    communities: ["Newport Beach", "Santa Ana", "Huntington Beach", "Fountain Valley", "Irvine"],
    geo: { lat: 33.6411, lng: -117.9187 },
  },
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    region: "Orange County, South County",
    blurb:
      "Master-planned South OC, affluent and residential. A bond should be the simplest item.",
    context:
      "Mission Viejo is a model master-planned community in South Orange County, with upscale residential and supporting commercial work. We give local contractors fast license bonds and quote credit challenges honestly.",
    communities: ["Lake Forest", "Laguna Hills", "Aliso Viejo", "Rancho Santa Margarita", "Laguna Niguel"],
    geo: { lat: 33.6, lng: -117.672 },
  },
  {
    slug: "garden-grove",
    name: "Garden Grove",
    region: "Orange County",
    blurb:
      "Dense, diverse, and busy in central OC. Fast license bonds and contract-bond help.",
    context:
      "Garden Grove is a dense, diverse central Orange County city with constant residential and commercial construction. We bond local contractors fast and work the credit-challenged files automated sites decline.",
    communities: ["Westminster", "Santa Ana", "Anaheim", "Stanton", "Fountain Valley"],
    geo: { lat: 33.7739, lng: -117.9414 },
  },
  {
    slug: "oakland",
    name: "Oakland",
    region: "Alameda County, East Bay",
    blurb:
      "Port city and urban core, high-value work. We build the bonding capacity it needs.",
    context:
      "Oakland combines the Port of Oakland, a dense urban core, and high-value commercial and residential construction. We do more than issue a license bond here: we build contract-bond programs sized for the work.",
    communities: ["Berkeley", "Alameda", "Emeryville", "San Leandro", "Piedmont"],
    geo: { lat: 37.8044, lng: -122.2712 },
  },
  {
    slug: "fremont",
    name: "Fremont",
    region: "Alameda County, East Bay",
    blurb:
      "Tech, manufacturing, and large residential. Keep your bonds from slowing the build.",
    context:
      "Fremont anchors the East Bay's tech and advanced-manufacturing economy, with the Tesla factory and large residential growth. We give local contractors fast license bonds and contract-bond capacity for bigger jobs.",
    communities: ["Union City", "Newark", "Hayward", "Milpitas", "Pleasanton"],
    geo: { lat: 37.5485, lng: -121.9886 },
  },
  {
    slug: "berkeley",
    name: "Berkeley",
    region: "Alameda County, East Bay",
    blurb:
      "University town with historic homes and strict permitting. We make the bond the easy part.",
    context:
      "Berkeley pairs UC Berkeley with historic residential neighborhoods and careful, seismic-aware permitting. We move the routine license bonds fast and place the tougher files other brokers pass on.",
    communities: ["Oakland", "Albany", "Emeryville", "El Cerrito", "Kensington"],
    geo: { lat: 37.8715, lng: -122.273 },
  },
  {
    slug: "sunnyvale",
    name: "Sunnyvale",
    region: "Santa Clara County, Silicon Valley",
    blurb:
      "Silicon Valley campuses and high-value residential. Bonding capacity that matters here.",
    context:
      "Sunnyvale sits in the heart of Silicon Valley, where tech-campus and high-value residential contracts put bonding capacity front and center. We build performance and payment bond programs sized for the work.",
    communities: ["Mountain View", "Santa Clara", "Cupertino", "Milpitas", "Los Altos"],
    geo: { lat: 37.3688, lng: -122.0363 },
  },
  {
    slug: "vista",
    name: "Vista",
    region: "San Diego County, North County",
    blurb:
      "North County business parks and residential. Fast license bonds, real contract-bond help.",
    context:
      "Vista blends North County San Diego business parks with steady residential construction between the coast and inland. We bond local contractors quickly, credit challenges included.",
    communities: ["Oceanside", "Carlsbad", "San Marcos", "Escondido", "Bonsall"],
    geo: { lat: 33.2, lng: -117.2425 },
  },
  {
    slug: "san-marcos",
    name: "San Marcos",
    region: "San Diego County, North County",
    blurb:
      "A fast-growing university town in North County. Get bonded without the wait.",
    context:
      "San Marcos is growing around CSU San Marcos with strong residential and commercial construction in inland North County. We give local contractors fast license bonds and help with contract bonds.",
    communities: ["Escondido", "Vista", "Carlsbad", "Encinitas", "Rancho Bernardo"],
    geo: { lat: 33.1434, lng: -117.1661 },
  },
  {
    slug: "hemet",
    name: "Hemet",
    region: "Riverside County, San Jacinto Valley",
    blurb:
      "Affordable San Jacinto Valley growth. Practical bonding from people who pick up the phone.",
    context:
      "Hemet and the San Jacinto Valley are growing on affordable residential development for new families and retirees. We give local contractors fast license bonds and place the credit-challenged and newer operators others pass on.",
    communities: ["San Jacinto", "Menifee", "Perris", "Beaumont", "Winchester"],
    geo: { lat: 33.7475, lng: -116.9719 },
  },
  {
    slug: "tracy",
    name: "Tracy",
    region: "San Joaquin County, Central Valley",
    blurb:
      "A logistics hub and commuter boomtown. New construction everywhere, and we bond it.",
    context:
      "Tracy has boomed as a logistics and distribution center and a Bay Area commuter community, driving heavy warehouse and residential construction. Newer and growing contractors get declined elsewhere; we build programs for exactly that.",
    communities: ["Mountain House", "Manteca", "Lathrop", "Stockton", "Livermore"],
    geo: { lat: 37.7397, lng: -121.4252 },
  },
  {
    slug: "turlock",
    name: "Turlock",
    region: "Stanislaus County, Central Valley",
    blurb:
      "Agriculture, food processing, and a university. Fast bonds from people who answer.",
    context:
      "Turlock combines dairy and food processing, a strong agricultural base, and CSU Stanislaus, with steady residential construction. We give Central Valley contractors fast license bonds and human help with contract bonds.",
    communities: ["Modesto", "Ceres", "Hughson", "Denair", "Hilmar"],
    geo: { lat: 37.4947, lng: -120.8466 },
  },
];

export function getMetro(slug: string): Metro | undefined {
  return metros.find((m) => m.slug === slug);
}

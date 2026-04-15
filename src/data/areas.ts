export interface Area {
  slug: string;
  name: string;
  province: string;
  type: "cbd" | "northern" | "eastern" | "western" | "southern" | "tshwane";
  tagline: string;
  description: string;
  longDescription: string;
  businessContext: string;
  residentialContext: string;
  landmarks: string[];
  businessHubs: string[];
  knownFor: string;
  heroImage: string;
  heroImageAlt: string;
  nearbyAreas: string[];
  coordinates: { lat: number; lng: number };
}

export const areas: Area[] = [
  {
    slug: "johannesburg",
    name: "Johannesburg",
    province: "Gauteng",
    type: "cbd",
    tagline: "South Africa's City of Gold",
    description:
      "Johannesburg is South Africa's largest city and economic powerhouse, home to towering office blocks, vibrant residential neighbourhoods, and a workforce that demands the very best from its service providers.",
    longDescription:
      "From the glass towers of the CBD to the leafy streets of the suburbs that fan outwards in every direction, Johannesburg is a city that never slows down. Whether you manage a high-rise office on Commissioner Street, run a hospitality venue in Newtown, or own a home in one of the city's established residential pockets, cleanliness and professionalism go hand in hand with reputation here.",
    businessContext:
      "Johannesburg is the commercial heart of sub-Saharan Africa, housing the headquarters of banks, law firms, media companies, and multinationals. Offices along Main Street, Diagonal Street, and the Rosebank strip expect supplier standards that match their own.",
    residentialContext:
      "The city's residential landscape ranges from compact apartments in the inner city to large family homes with established gardens. Regular, reliable cleaning is as much a lifestyle staple as it is a necessity.",
    landmarks: [
      "Carlton Centre",
      "Nelson Mandela Bridge",
      "Constitution Hill",
      "Newtown Cultural Precinct",
      "Mary Fitzgerald Square",
    ],
    businessHubs: ["Marshalltown", "Newtown", "Braamfontein", "Maboneng Precinct"],
    knownFor: "finance, mining, and the arts",
    heroImage:
      "https://images.unsplash.com/photo-1577285733594-d50b03e43cd4?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Johannesburg city skyline at dawn",
    nearbyAreas: ["sandton", "rosebank", "randburg", "soweto", "germiston"],
    coordinates: { lat: -26.2041, lng: 28.0473 },
  },
  {
    slug: "sandton",
    name: "Sandton",
    province: "Gauteng",
    type: "northern",
    tagline: "Africa's Richest Square Mile",
    description:
      "Sandton is Johannesburg's premier business and lifestyle district — a skyline of glass towers, luxury hotels, and world-class retail that sets the standard for professional services across the continent.",
    longDescription:
      "From the gleaming facade of the Sandton Convention Centre to the corridors of Sandton City and the square that bears Nelson Mandela's name, this is a precinct where first impressions are everything. The companies, hotels, and apartment blocks that fill Sandton's address books demand cleaning contractors who are every bit as professional as they are.",
    businessContext:
      "Sandton is home to the JSE, four-star and five-star hotels, the offices of every major South African bank, and more corporate headquarters per square kilometre than almost anywhere else on the continent. Cleaning standards must be impeccable.",
    residentialContext:
      "Sandton's residential side — from the townhouse complexes off Rivonia Road to the upmarket apartment buildings near Benmore — is home to executives and professionals who expect the same standard in their homes as in their offices.",
    landmarks: [
      "Sandton City",
      "Nelson Mandela Square",
      "the JSE",
      "Sandton Convention Centre",
      "Michelangelo Hotel",
    ],
    businessHubs: ["Sandton CBD", "Rivonia Road Corridor", "Katherine Street", "Benmore"],
    knownFor: "finance, luxury retail, and corporate headquarters",
    heroImage:
      "https://images.unsplash.com/photo-1614521084416-41d9d6b59bf3?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Sandton CBD skyline with glass towers",
    nearbyAreas: ["johannesburg", "rosebank", "fourways", "midrand", "randburg"],
    coordinates: { lat: -26.1054, lng: 28.0567 },
  },
  {
    slug: "rosebank",
    name: "Rosebank",
    province: "Gauteng",
    type: "northern",
    tagline: "Johannesburg's Creative Business Hub",
    description:
      "Rosebank is where creative agencies, boutique offices, fine dining restaurants, and stylish apartment living intersect — a precinct that blends business gravitas with an unmistakably cosmopolitan character.",
    longDescription:
      "The stretch of Oxford Road that runs through Rosebank is one of Johannesburg's most dynamic commercial corridors. Independent restaurants, gallery spaces, co-working facilities, and the Rosebank Mall sit alongside the offices of media houses, consulting firms, and tech startups. Maintaining a spotless environment in a precinct this visible matters enormously.",
    businessContext:
      "Rosebank hosts a dense cluster of boutique businesses, agency offices, and hospitality venues. The standard expected of cleaning contractors here is driven by the high foot traffic and the visible, cosmopolitan nature of the precinct.",
    residentialContext:
      "Rosebank and the surrounding streets — Westcliff, Dunkeld, Parktown North — are among Johannesburg's most sought-after residential addresses, where homes are well-kept and residents expect reliability above all else.",
    landmarks: [
      "The Zone@Rosebank",
      "The Rosebank Mall",
      "Oxford Road strip",
      "Rosebank Art and Craft Market",
      "Keyes Art Mile",
    ],
    businessHubs: ["Oxford Road", "Baker Street", "The Zone", "Tyrwhitt Avenue"],
    knownFor: "boutique retail, the arts, and agency offices",
    heroImage:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Modern urban precinct with glass buildings and retail",
    nearbyAreas: ["sandton", "johannesburg", "randburg", "midrand"],
    coordinates: { lat: -26.1467, lng: 28.0437 },
  },
  {
    slug: "randburg",
    name: "Randburg",
    province: "Gauteng",
    type: "northern",
    tagline: "A Thriving Northern Suburb",
    description:
      "Randburg is one of Johannesburg's most established northern suburbs — a busy commercial and residential node that stretches from Ferndale to Bordeaux and serves tens of thousands of households and businesses.",
    longDescription:
      "Randburg's commercial centre along Main Road and the Ferndale area bustles with small to medium businesses, retail centres, restaurants, and medical suites. The residential suburbs that fan out around it — Northcliff, Fontainebleau, Linden — are home to long-established families who take genuine pride in their properties.",
    businessContext:
      "Randburg's business landscape is characterised by SMEs, medical and dental practices, retail outlets, and light industrial properties. Regular, professional cleaning keeps these businesses running at their best.",
    residentialContext:
      "Randburg's established residential suburbs feature large family homes, cluster developments, and garden flats. Domestic and periodic deep-cleaning services are in high demand across the area.",
    landmarks: [
      "Cresta Shopping Centre",
      "Brightwater Commons",
      "Northcliff Hill viewpoint",
      "Ferndale Village",
      "Monte Casino Boulevard",
    ],
    businessHubs: ["Main Road", "Ferndale", "Ontdekkers Road", "Republic Road"],
    knownFor: "established residential living and a thriving local business community",
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Suburban commercial street with shops and trees",
    nearbyAreas: ["johannesburg", "rosebank", "roodepoort", "fourways"],
    coordinates: { lat: -26.0931, lng: 27.9952 },
  },
  {
    slug: "roodepoort",
    name: "Roodepoort",
    province: "Gauteng",
    type: "western",
    tagline: "Gateway to the West Rand",
    description:
      "Roodepoort is a large, established city on Johannesburg's western edge — a blend of industrial activity, commercial zones, and family-friendly residential suburbs that together form one of Gauteng's most self-sufficient communities.",
    longDescription:
      "From the factories and warehouses along Ontdekkers Road to the quiet family homes of Weltevreden Park and the natural beauty of the Walter Sisulu Botanical Garden in Witpoortjie, Roodepoort's character is proudly practical and family-oriented. Businesses and homeowners here value service providers they can rely on month after month.",
    businessContext:
      "Roodepoort hosts a significant light industrial and commercial corridor along Ontdekkers Road and the N14, with warehouses, factories, and trade businesses that require regular industrial-grade cleaning.",
    residentialContext:
      "The residential areas of Weltevreden Park, Honeydew, Wilropark, and Florida are home to middle-class families who value consistent, trustworthy domestic cleaning services.",
    landmarks: [
      "Walter Sisulu National Botanical Garden",
      "Clearwater Mall",
      "Florida Lake",
      "Ontdekkers Road corridor",
      "Roodepoort CBD",
    ],
    businessHubs: ["Ontdekkers Road", "N14 Industrial Zone", "Roodepoort CBD", "Florida Business Park"],
    knownFor: "industrial activity, family suburbs, and the Walter Sisulu Botanical Garden",
    heroImage:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Industrial and residential suburb in Gauteng",
    nearbyAreas: ["johannesburg", "randburg", "soweto", "centurion"],
    coordinates: { lat: -26.1625, lng: 27.8693 },
  },
  {
    slug: "fourways",
    name: "Fourways",
    province: "Gauteng",
    type: "northern",
    tagline: "North Johannesburg's Lifestyle Capital",
    description:
      "Fourways has transformed from a quiet crossroads into one of Johannesburg's fastest-growing lifestyle and business nodes — anchored by Fourways Mall and Monte Casino, and surrounded by some of the city's most aspirational residential estates.",
    longDescription:
      "The intersection of William Nicol Drive and Witkoppen Road that gives Fourways its name is now surrounded by office parks, upmarket shopping centres, restaurants, luxury estate developments, and the entertainment complex of Monte Casino. It's an area where the bar for quality — in every service — is set exceptionally high.",
    businessContext:
      "Fourways hosts a growing cluster of corporate office parks, medical suites, and hospitality venues. The area's rapid commercial development makes professional cleaning contracts an operational essential.",
    residentialContext:
      "The gated estates and cluster homes of Douglasdale, Lonehill, Norwood, and the Fourways Gardens area are premium residential addresses where high standards of upkeep are expected as standard.",
    landmarks: [
      "Fourways Mall",
      "Monte Casino",
      "William Nicol Drive",
      "Witkoppen Road",
      "Cedar Park Shopping Centre",
    ],
    businessHubs: ["William Nicol Office Park", "Fourways Business Park", "Monte Casino Boulevard"],
    knownFor: "lifestyle retail, entertainment, and premium residential estates",
    heroImage:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Busy modern suburb with commercial buildings and shopping",
    nearbyAreas: ["sandton", "randburg", "midrand", "johannesburg"],
    coordinates: { lat: -26.0197, lng: 28.0119 },
  },
  {
    slug: "midrand",
    name: "Midrand",
    province: "Gauteng",
    type: "northern",
    tagline: "The Business Gateway Between Two Cities",
    description:
      "Midrand sits precisely at the midpoint between Johannesburg and Pretoria on the N1 — a strategic position that has made it one of Gauteng's fastest-growing commercial and residential nodes, anchored by the Mall of Africa and Gallagher Estate.",
    longDescription:
      "Midrand's position along the N1 highway made it the natural home for technology parks, logistics companies, and corporate campuses. Today, it houses the African headquarters of some of the world's largest corporations alongside rapidly developing residential townships and luxury cluster estates. Gallagher Estate alone hosts hundreds of events and conferences each year.",
    businessContext:
      "Midrand is home to the African headquarters of Microsoft, Huawei, Nokia, and dozens of other technology and logistics companies. The corporate office parks along New Road and the N1 service corridor represent some of the most professionally demanding cleaning environments in Gauteng.",
    residentialContext:
      "Midrand's residential zones — from Vorna Valley to Waterfall Estate and Carlswald — are growing rapidly. Newer developments attract young professionals and families who want modern homes maintained to the same standard.",
    landmarks: [
      "Mall of Africa",
      "Gallagher Estate",
      "Waterfall City",
      "N1 Technology Park",
      "Midrand Conference Centre",
    ],
    businessHubs: ["New Road Corridor", "Waterfall Business Estate", "Midrand CBD", "N1 Tech Park"],
    knownFor: "technology companies, conference facilities, and the Mall of Africa",
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Modern office parks and commercial buildings in Midrand",
    nearbyAreas: ["sandton", "centurion", "fourways", "pretoria"],
    coordinates: { lat: -25.9989, lng: 28.1284 },
  },
  {
    slug: "centurion",
    name: "Centurion",
    province: "Gauteng",
    type: "tshwane",
    tagline: "Where Johannesburg Meets Pretoria",
    description:
      "Centurion is the sprawling city that bridges Johannesburg and Pretoria — a well-established mix of corporate head offices, major retail, and some of Gauteng's most in-demand family suburbs, all centred around SuperSport Park.",
    longDescription:
      "Centurion's lakeside precinct, anchored by Centurion Mall and the world-famous SuperSport Park cricket ground, is one of Gauteng's great meeting points. The city's office parks along John Vorster Drive and Hendrik Verwoerd Drive house significant corporate presences, while suburbs like Eldoraigne, Irene, and Thatchfield are beloved by families who want space without sacrificing convenience.",
    businessContext:
      "Centurion's office parks and corporate campuses along the N14 and John Vorster Drive are home to some of South Africa's largest insurance companies, financial institutions, and government contractors. Commercial cleaning services are in constant demand.",
    residentialContext:
      "Centurion's large family homes, security estates, and well-maintained complexes are among Gauteng's most desirable. Domestic cleaning services are a natural part of life for families juggling careers and household management.",
    landmarks: [
      "SuperSport Park",
      "Centurion Mall",
      "Centurion Lake",
      "Irene Village Mall",
      "John Vorster Drive",
    ],
    businessHubs: ["John Vorster Drive", "Olievenhoutbosch Business Park", "N14 Corridor", "Lakeside"],
    knownFor: "SuperSport Park, corporate office parks, and established family suburbs",
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Centurion city skyline with lake and buildings",
    nearbyAreas: ["pretoria", "midrand", "roodepoort", "johannesburg"],
    coordinates: { lat: -25.8601, lng: 28.1885 },
  },
  {
    slug: "pretoria",
    name: "Pretoria",
    province: "Gauteng",
    type: "tshwane",
    tagline: "South Africa's Administrative Capital",
    description:
      "Pretoria — officially part of the City of Tshwane — is South Africa's executive capital and home to government departments, foreign embassies, top universities, and an established business community that values reliability and professionalism above all.",
    longDescription:
      "The jacaranda trees that line Pretoria's avenues in October are one of South Africa's most iconic sights, but it is the city's year-round role as the seat of government that truly defines its character. From the Union Buildings on Meintjieskop to Church Square's historic facades, from the embassies of Waterkloof Ridge to the office parks of Menlyn, Pretoria demands the highest standards from its contractors.",
    businessContext:
      "Pretoria houses the Union Buildings, all government departments, hundreds of foreign embassies and consulates, and a major university town (the University of Pretoria). Office environments here are formal and standards-driven.",
    residentialContext:
      "Pretoria's suburbs — Brooklyn, Waterkloof, Lynnwood, Hatfield — are well-established, mature residential areas. The steady population of government employees, academics, and diplomats creates consistent demand for reliable domestic cleaning.",
    landmarks: [
      "Union Buildings",
      "Church Square",
      "Voortrekker Monument",
      "National Zoological Gardens",
      "Menlyn Maine precinct",
    ],
    businessHubs: ["Hatfield", "Menlyn", "Waterkloof", "Pretoria CBD", "Lynnwood Road"],
    knownFor: "government, academia, jacaranda trees, and the Union Buildings",
    heroImage:
      "https://images.unsplash.com/photo-1568625365131-079e026a927d?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Pretoria city skyline and administrative buildings",
    nearbyAreas: ["centurion", "midrand", "johannesburg"],
    coordinates: { lat: -25.7479, lng: 28.2293 },
  },
  {
    slug: "soweto",
    name: "Soweto",
    province: "Gauteng",
    type: "southern",
    tagline: "South Africa's Most Iconic Township",
    description:
      "Soweto is one of South Africa's most historically significant and vibrant communities — a growing economy of SMEs, tourism venues, schools, and a rapidly expanding middle-class residential base that is fast becoming one of Johannesburg's most dynamic areas.",
    longDescription:
      "Soweto's streets have shaped South African history, and today the township is alive with enterprise, pride, and aspiration. Vilakazi Street in Orlando West draws tourists from around the world; the Orlando Towers have become a landmark of adventure tourism; and the growing number of restaurants, business offices, and event venues across Soweto demand professional cleaning services that match their ambitions.",
    businessContext:
      "Soweto's commercial nodes in Dobsonville, Diepkloof, and Mofolo host a growing number of SMEs, retail businesses, government offices, and schools. Cleaning contracts in these areas are a growing market.",
    residentialContext:
      "Soweto's residential areas range from long-established family homes in Diepkloof Extension and Protea Glen to modern developments in newer nodes. Domestic cleaning services are increasingly in demand.",
    landmarks: [
      "Vilakazi Street",
      "Orlando Towers",
      "Hector Pieterson Memorial",
      "Walter Sisulu Square",
      "Maponya Mall",
    ],
    businessHubs: ["Vilakazi Street Business Node", "Maponya Mall", "Dobsonville Mall", "Walter Sisulu Square"],
    knownFor: "history, community spirit, and a rapidly growing local economy",
    heroImage:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Vibrant South African urban community and streets",
    nearbyAreas: ["johannesburg", "roodepoort", "alberton"],
    coordinates: { lat: -26.2677, lng: 27.8585 },
  },
  {
    slug: "germiston",
    name: "Germiston",
    province: "Gauteng",
    type: "eastern",
    tagline: "Ekurhuleni's Industrial and Commercial Hub",
    description:
      "Germiston is one of Ekurhuleni's most established cities — a major logistics and industrial hub that sits at the confluence of South Africa's rail network, with a growing commercial retail and residential base.",
    longDescription:
      "Germiston's position at the hub of South Africa's rail network made it one of the country's most important industrial cities. Today, the city's warehouses, factories, and logistics depots continue to hum with activity, while the residential suburbs around Germiston Lake and Primrose attract families who value its central position between Johannesburg and the East Rand.",
    businessContext:
      "Germiston hosts major warehousing, logistics, and light industrial operations along its rail corridors. These facilities require regular industrial-grade cleaning to maintain hygiene and safety standards.",
    residentialContext:
      "The established suburbs of Primrose, Bedfordview, and Germiston Lake offer comfortable family homes where domestic cleaning services enjoy consistent demand.",
    landmarks: [
      "Germiston Lake",
      "Rand Airport",
      "East Rand Mall",
      "Primrose industrial area",
      "Germiston CBD",
    ],
    businessHubs: ["Germiston Industrial Zone", "Rand Airport precinct", "Cleveland area"],
    knownFor: "logistics, rail infrastructure, and light industrial activity",
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Industrial and commercial buildings near Germiston",
    nearbyAreas: ["johannesburg", "boksburg", "benoni", "alberton"],
    coordinates: { lat: -26.2198, lng: 28.1678 },
  },
  {
    slug: "boksburg",
    name: "Boksburg",
    province: "Gauteng",
    type: "eastern",
    tagline: "East Rand's Commercial Anchor",
    description:
      "Boksburg is one of the East Rand's most established commercial cities — home to East Rand Mall, a growing hospitality sector, and the sprawling residential suburbs and estates that make it a centrepiece of Ekurhuleni.",
    longDescription:
      "From the shores of Boksburg Lake to the busy retail corridors around East Rand Mall, Boksburg has grown into one of the East Rand's most complete urban environments. The city's mix of commercial zones, event venues, schools, and residential estates creates strong and consistent demand for professional cleaning across all categories.",
    businessContext:
      "Boksburg's commercial activity is centred around the East Rand Mall precinct, the industrial zones along the R21, and the growing hospitality sector around the lake area. Office, retail, and venue cleaning are all well-established markets.",
    residentialContext:
      "Boksburg's suburbs — Bart Park, Parkrand, Windmill Park, and the Boksburg North area — are well-established family residential areas with strong demand for reliable domestic cleaning.",
    landmarks: [
      "East Rand Mall",
      "Boksburg Lake",
      "Angelo's Restaurant strip",
      "R21 commercial corridor",
      "Boksburg CBD",
    ],
    businessHubs: ["East Rand Mall precinct", "R21 Corridor", "Boksburg North industrial area"],
    knownFor: "East Rand Mall, Boksburg Lake, and established residential suburbs",
    heroImage:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "East Rand suburban area with commercial buildings",
    nearbyAreas: ["germiston", "benoni", "kempton-park", "johannesburg"],
    coordinates: { lat: -26.2141, lng: 28.2613 },
  },
  {
    slug: "benoni",
    name: "Benoni",
    province: "Gauteng",
    type: "eastern",
    tagline: "East Rand's Lakeside City",
    description:
      "Benoni is a well-loved East Rand city known for its beautiful lake, strong community character, and an established economy of businesses, schools, and residences that give it a distinctly settled, family-oriented feel.",
    longDescription:
      "The Benoni lakes district is one of the East Rand's most pleasant environments, and the city that surrounds it has developed a strong local economy built on manufacturing, retail, and the services sector. Benoni's residents are community-minded, loyal to local service providers who deliver consistent quality.",
    businessContext:
      "Benoni's commercial and light industrial sector is centred around the Rynfield and Crystal Park areas, with significant manufacturing and logistics activity. Regular contract cleaning is a core requirement for these operations.",
    residentialContext:
      "Benoni's residential suburbs — Northmead, Rynfield, Farrarmere, and Lakefield — are populated by long-established families. Domestic cleaning services are a trusted and valued part of household management here.",
    landmarks: [
      "Benoni Lake",
      "Lakefield Golf Club",
      "Rynfield Mall",
      "Benoni CBD",
      "Civic Theatre",
    ],
    businessHubs: ["Rynfield Business Park", "Crystal Park industrial area", "Benoni CBD"],
    knownFor: "the lakes, strong community values, and established residential suburbs",
    heroImage:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Peaceful suburban lake area in the East Rand",
    nearbyAreas: ["boksburg", "germiston", "kempton-park"],
    coordinates: { lat: -26.1862, lng: 28.3183 },
  },
  {
    slug: "kempton-park",
    name: "Kempton Park",
    province: "Gauteng",
    type: "eastern",
    tagline: "The Gateway to O.R. Tambo International",
    description:
      "Kempton Park is Gauteng's aviation gateway — home to O.R. Tambo International Airport, the Emperors Palace hospitality complex, and an established city that balances heavy commercial and light industrial activity with well-serviced residential suburbs.",
    longDescription:
      "No city in Gauteng has a more transient population than Kempton Park, and that creates unique demands on cleaning services. Hotels, guesthouses, and airport-adjacent businesses require rapid turnaround and consistently immaculate environments. At the same time, the city's established suburbs — Edenvale, Norkem Park, Kempton Park North — are home to families who want reliable and professional domestic cleaning.",
    businessContext:
      "Kempton Park's economy is defined by aviation, logistics, and hospitality. The massive hotel cluster around O.R. Tambo Airport and the Emperors Palace complex alone generates significant demand for professional hotel and commercial cleaning services.",
    residentialContext:
      "The residential suburbs of Kempton Park proper — Norkem Park, Birchleigh, Pomona — are solid, established communities with consistent demand for domestic cleaning contracts.",
    landmarks: [
      "O.R. Tambo International Airport",
      "Emperors Palace",
      "East Rand Galleria",
      "Kempton Park CBD",
      "Birchwood Hotel & Conference Centre",
    ],
    businessHubs: ["Airport precinct", "Emperors Palace", "East Rand Galleria", "Isando industrial area"],
    knownFor: "O.R. Tambo Airport, Emperors Palace, and aviation logistics",
    heroImage:
      "https://images.unsplash.com/photo-1568625365131-079e026a927d?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Kempton Park commercial and aviation precinct",
    nearbyAreas: ["boksburg", "germiston", "benoni", "midrand"],
    coordinates: { lat: -26.1003, lng: 28.2286 },
  },
  {
    slug: "alberton",
    name: "Alberton",
    province: "Gauteng",
    type: "southern",
    tagline: "South of Johannesburg, Strong Community Spirit",
    description:
      "Alberton is a well-established city on Johannesburg's southern flank — a strong blend of industrial activity, retail centres, and some of Ekurhuleni's most proudly maintained residential suburbs, known for community values and reliability.",
    longDescription:
      "Alberton's identity is built on hard work and community pride. From the commercial strip along the R59 to the residential streets of New Redruth, Meyersdal, and Eden Glen, this is an area where businesses and homeowners alike expect their service providers to show up, do the job properly, and come back when needed.",
    businessContext:
      "Alberton's commercial zones along the R59 and Voortrekker Road host retail, medical, and office businesses alongside a significant light industrial base. Regular cleaning contracts are well-established in the area.",
    residentialContext:
      "Alberton's residential character — New Redruth, Meyersdal Eco Estate, Eden Glen — is family-oriented and well-maintained. Domestic cleaning services are a valued, trusted service across the area.",
    landmarks: [
      "Alberton City Shopping Centre",
      "Meyersdal Eco Estate",
      "R59 commercial corridor",
      "Eden Meander Lifestyle Centre",
      "Alberton CBD",
    ],
    businessHubs: ["R59 Corridor", "Alberton North industrial area", "Voortrekker Road"],
    knownFor: "community pride, light industrial activity, and well-maintained suburbs",
    heroImage:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1920&q=80",
    heroImageAlt: "Alberton suburban street with commercial buildings",
    nearbyAreas: ["johannesburg", "germiston", "soweto"],
    coordinates: { lat: -26.2672, lng: 28.1218 },
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAreaName(slug: string): string {
  return getArea(slug)?.name ?? slug;
}

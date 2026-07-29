export type ProductSpec = Record<string, string | number>;

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  image: string;
  accent: string;
  summary: string;
  description: string;
  applications: string[];
  features: string[];
  specColumns: { key: string; label: string }[];
  specs: ProductSpec[];
};

export const products: Product[] = [
  {
    slug: "round-bowls",
    name: "Round Bagasse Bowls",
    shortName: "Round Bowls",
    category: "Bowls",
    image: "assets/bowl.png",
    accent: "#8ea85d",
    summary: "Compact plant-fiber bowls for gravies, desserts, snacks and portion service.",
    description:
      "A clean, natural-looking bowl range designed for modern food service. Three capacities cover small portions, sides, desserts, curries and takeaway applications.",
    applications: ["Desserts", "Curries", "Snacks", "Side portions", "Institutional catering"],
    features: ["Stackable form", "Natural plant-fiber finish", "Microwaveable", "Water and oil resistance"],
    specColumns: [
      { key: "capacity", label: "Capacity" },
      { key: "volume", label: "Volume" },
      { key: "top", label: "Top dia." },
      { key: "bottom", label: "Bottom dia." },
      { key: "depth", label: "Depth" },
    ],
    specs: [
      { capacity: "180 ml", volume: "6 oz", top: "100 mm", bottom: "47.4 mm", depth: "45 mm" },
      { capacity: "240 ml", volume: "8 oz", top: "110 mm", bottom: "54.5 mm", depth: "45 mm" },
      { capacity: "360 ml", volume: "12 oz", top: "150 mm", bottom: "90 mm", depth: "30 mm" },
    ],
  },
  {
    slug: "round-plates",
    name: "Round Bagasse Plates",
    shortName: "Round Plates",
    category: "Plates",
    image: "assets/dish.png",
    accent: "#c39b5b",
    summary: "Classic round plates in five sizes for snacks, meals, events and high-volume catering.",
    description:
      "A versatile plate family with a familiar silhouette, raised edge and balanced rigidity for everyday food-service requirements.",
    applications: ["Restaurants", "Caterers", "Events", "Food courts", "Institutional dining"],
    features: ["Five useful diameters", "Food-safe design", "Microwaveable", "Plastic-free material"],
    specColumns: [
      { key: "size", label: "Size" },
      { key: "diameter", label: "Diameter" },
      { key: "depth", label: "Depth" },
      { key: "shape", label: "Shape" },
    ],
    specs: [
      { size: '6"', diameter: "153 mm", depth: "15 mm", shape: "Round" },
      { size: '7"', diameter: "178 mm", depth: "17 mm", shape: "Round" },
      { size: '9"', diameter: "230 mm", depth: "20 mm", shape: "Round" },
      { size: '10"', diameter: "254 mm", depth: "20 mm", shape: "Round" },
      { size: '11"', diameter: "280 mm", depth: "24 mm", shape: "Round" },
    ],
  },
  {
    slug: "meal-plates",
    name: "Meal & Lunch Plates",
    shortName: "Meal Plates",
    category: "Compartment Tableware",
    image: "assets/meal.png",
    accent: "#5d8e5a",
    summary: "Two, three, five and six-compartment formats for organized meal service.",
    description:
      "Purpose-built compartment plates for thalis, institutional meals and food-service operations where neat separation and reliable handling matter.",
    applications: ["Corporate cafeterias", "Hospitals", "Schools", "Catering", "Meal programs"],
    features: ["Multiple compartment options", "Stackable", "Ovenable", "Water and oil resistance"],
    specColumns: [
      { key: "product", label: "Product" },
      { key: "shape", label: "Shape" },
      { key: "compartments", label: "Compartments" },
      { key: "dimensions", label: "L × W × H" },
    ],
    specs: [
      { product: "2 CP Meal Plate", shape: "Square", compartments: "2", dimensions: "175 × 125 × 25 mm" },
      { product: "3 CP Meal Plate", shape: "Square", compartments: "3", dimensions: "221 × 221 × 23.5 mm" },
      { product: "5 CP Lunch Plate", shape: "Rectangle", compartments: "5", dimensions: "270 × 218 × 26.5 mm" },
      { product: "6 CP Lunch Plate", shape: "Rectangle", compartments: "6", dimensions: "318 × 240 × 40 mm" },
    ],
  },
  {
    slug: "compartment-plates",
    name: "Round Compartment Plates",
    shortName: "Compartment Plates",
    category: "Compartment Tableware",
    image: "assets/compart.png",
    accent: "#8aa06a",
    summary: "Round three and four-compartment plates for balanced meal presentation.",
    description:
      "A refined alternative to conventional thali formats, combining the familiarity of a round plate with practical food separation.",
    applications: ["Indian meals", "Buffets", "Caterers", "Banquets", "Quick-service restaurants"],
    features: ["Three and four compartment formats", "Natural look", "Microwaveable", "Eco-conscious material"],
    specColumns: [
      { key: "size", label: "Size" },
      { key: "compartments", label: "Compartments" },
      { key: "diameter", label: "Diameter" },
      { key: "depth", label: "Depth" },
    ],
    specs: [
      { size: '9"', compartments: "3", diameter: "230 mm", depth: "20 mm" },
      { size: '10"', compartments: "3", diameter: "254 mm", depth: "22 mm" },
      { size: '11"', compartments: "4", diameter: "280 mm", depth: "24 mm" },
      { size: '12"', compartments: "4", diameter: "305 mm", depth: "24 mm" },
    ],
  },
  {
    slug: "clamshells",
    name: "Bagasse Clamshell Containers",
    shortName: "Clamshells",
    category: "Takeaway Packaging",
    image: "assets/clamshell.png",
    accent: "#b18a55",
    summary: "Hinged takeaway containers in plain and compartment formats for delivery and grab-and-go service.",
    description:
      "A broad clamshell family developed for practical food packing, takeaway counters and delivery-led businesses, including single and three-compartment options.",
    applications: ["Takeaway", "Cloud kitchens", "Meal delivery", "Cafés", "Events"],
    features: ["Integrated hinged lid", "Multiple sizes", "Compartment options", "Food-service ready"],
    specColumns: [
      { key: "size", label: "Size" },
      { key: "length", label: "Length" },
      { key: "width", label: "Width" },
      { key: "height", label: "Height" },
      { key: "depth", label: "Depth" },
    ],
    specs: [
      { size: '6"', length: "155 mm", width: "155 mm", height: "49 mm", depth: "87 mm" },
      { size: '8"', length: "205 mm", width: "205 mm", height: "49 mm", depth: "90 mm" },
      { size: '9"', length: "229 mm", width: "229 mm", height: "53 mm", depth: "91 mm" },
      { size: '8" - 3 CP', length: "205 mm", width: "205 mm", height: "46 mm", depth: "87 mm" },
      { size: '9" - 3 CP', length: "229 mm", width: "229 mm", height: "51 mm", depth: "89 mm" },
      { size: '9 × 6 × 3"', length: "232 mm", width: "155 mm", height: "47.6 mm", depth: "85.1 mm" },
    ],
  },
  {
    slug: "cups-and-lids",
    name: "Drink Cups & Lids",
    shortName: "Cups & Lids",
    category: "Beverage Packaging",
    image: "assets/cup.png",
    accent: "#7fa867",
    summary: "Plant-fiber drink cups with matching lid formats for practical beverage service.",
    description:
      "A compact beverage range for cafés, events, institutional counters and takeaway operations seeking coordinated cups and lids.",
    applications: ["Hot beverages", "Cafés", "Events", "Office pantries", "Food courts"],
    features: ["220 ml and 250 ml cups", "80 mm and 90 mm lids", "Natural finish", "Food-safe design"],
    specColumns: [
      { key: "product", label: "Product" },
      { key: "top", label: "Top dia." },
      { key: "bottom", label: "Bottom dia." },
      { key: "height", label: "Height" },
      { key: "volume", label: "Volume" },
    ],
    specs: [
      { product: "220 ml Cup", top: "78 mm", bottom: "50.8 mm", height: "80 mm", volume: "220 ml" },
      { product: "250 ml Cup", top: "89 mm", bottom: "54 mm", height: "80 mm", volume: "250 ml" },
      { product: "80 mm Lid", top: "83.8 mm", bottom: "76 mm", height: "22 mm", volume: "-" },
      { product: "90 mm Lid", top: "94 mm", bottom: "87 mm", height: "22.2 mm", volume: "-" },
    ],
  },
  {
    slug: "cutlery",
    name: "Plant-Fiber Cutlery",
    shortName: "Cutlery",
    category: "Cutlery",
    image: "assets/cuttlery.png",
    accent: "#aa935e",
    summary: "Coordinated spoon, fork and knife formats for complete sustainable meal service.",
    description:
      "A clean white cutlery family that complements the HaraViba tableware range and supports single-source procurement for food-service buyers.",
    applications: ["Meal kits", "Caterers", "Takeaway", "Events", "Institutional dining"],
    features: ["Small spoon option", "Standard spoon, fork and knife", "Coordinated natural appearance", "Bulk-order ready"],
    specColumns: [
      { key: "product", label: "Product" },
      { key: "length", label: "Length" },
      { key: "width", label: "Width" },
      { key: "height", label: "Height" },
    ],
    specs: [
      { product: "Small Spoon", length: "80 mm", width: "30 mm", height: "1.2 mm" },
      { product: "Spoon", length: "158 mm", width: "35.5 mm", height: "7 mm" },
      { product: "Fork", length: "158 mm", width: "35 mm", height: "6 mm" },
      { product: "Knife", length: "158 mm", width: "26 mm", height: "6 mm" },
    ],
  },
  {
    slug: "extended-range",
    name: "Extended Food-Service Range",
    shortName: "Extended Range",
    category: "Custom & Extended Range",
    image: "assets/extand.png",
    accent: "#70936a",
    summary: "Takeaway boxes, pizza boxes and broader tableware concepts for custom programs.",
    description:
      "Beyond the standard catalogue, HaraViba presents an extended product direction covering takeaway boxes, pizza boxes, drinkware and broader tableware solutions.",
    applications: ["Private label", "Distributor programs", "Custom packaging", "Food brands", "Export enquiries"],
    features: ["Custom printing", "Product design", "Prototyping support", "Low-volume development support"],
    specColumns: [
      { key: "range", label: "Range" },
      { key: "availability", label: "Availability" },
    ],
    specs: [
      { range: "Takeaway Boxes", availability: "On enquiry" },
      { range: "Drink Cups", availability: "Catalogue / custom" },
      { range: "Drink Lids", availability: "Catalogue / custom" },
      { range: "Pizza Boxes", availability: "Custom programme" },
      { range: "Tableware Solutions", availability: "On enquiry" },
    ],
  },
];

export const industries = [
  "Restaurants & QSRs",
  "Hotels & Banquets",
  "Caterers",
  "Cloud Kitchens",
  "Institutions",
  "Distributors",
  "Private Labels",
  "Export Buyers",
];

export const cataloguePages = [
  "Brand overview",
  "About HaraViba",
  "Sustainability & certifications",
  "Round bowls & plates",
  "Meal & compartment plates",
  "Clamshells, cups & lids",
  "Cutlery & brand support",
  "Contact information",
];

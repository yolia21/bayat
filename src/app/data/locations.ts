import { LocationMarker, TimelineEvent, ClanBranch } from "../types";

export const locations: LocationMarker[] = [
  {
    id: "china",
    title: "Northern China",
    subtitle: "Qaramouran River (Yellow River Origins)",
    lat: 40.5000,
    lng: 109.5000,
    historicalPeriod: "Before 10th Century",
    description: "The earliest ancestral roots of the Bayat clan are traced to Northern China, particularly along the Qaramouran (Yellow River) region. Historically referred to as the 'Bavayet' in early records, they lived in proximity to and interacted with early Mongol and other Turkic factions.",
    significance: "Original homeland of the Bayat clan. Mentioned in early records as part of the Oghuz tribal federation before their historic westward migrations.",
    branches: ["Bavayet", "Ak-Bayat"],
    empires: ["Oghuz Yabgu State", "Early Mongol Factions"]
  },
  {
    id: "khorasan",
    title: "Khorasan / Nishapur",
    subtitle: "Safavid Border Guardians",
    lat: 36.2133,
    lng: 58.7958,
    historicalPeriod: "11th - 17th Century",
    description: "During the massive Seljuk westward migration, a major division of the tribe settled in Khorasan, primarily around Nishapur (North-East Iran). Known as the Kara-Bayat (Black Bayat) faction, they became a crucial military force, guarding the Safavid Empire's northeastern borders against nomadic raids.",
    significance: "Established the Kara-Bayat dynasty of Nishapur. Provided key military commanders and regional governors to the Safavid rulers.",
    branches: ["Kara-Bayat"],
    empires: ["Seljuk Empire", "Safavid Empire"]
  },
  {
    id: "caucasus",
    title: "Caucasus",
    subtitle: "Aghjabadi & Shamakhi Regions",
    lat: 40.3500,
    lng: 47.9000,
    historicalPeriod: "15th - 19th Century",
    description: "A substantial branch of the Bayats moved into the Caucasus region, settling in present-day Azerbaijan, specifically around the Shamakhi and Aghjabadi plains. Here, they integrated deeply into the regional Turkic population and contributed to the Azerbaijani cultural and political sphere.",
    significance: "Deeply impacted the demography of Azerbaijan; key figures in the Shirvan region and the Shusha/Karabakh khanates emerged from this branch.",
    branches: ["Kara-Bayat", "Ak-Bayat"],
    empires: ["Safavid Empire", "Shirvanshahs", "Karabakh Khanate"]
  },
  {
    id: "anatolia",
    title: "Anatolia",
    subtitle: "Pehlivanlı & Westward Settlements",
    lat: 39.8468,
    lng: 33.5153,
    historicalPeriod: "11th - 18th Century",
    description: "Following the Seljuk conquests, massive waves of Bayats settled throughout Anatolia. Key concentration hubs emerged in Afyonkarahisar, Çorum, Yozgat, and the Kırıkkale region, where the Pehlivanlı sub-tribe established significant autonomy and influence.",
    significance: "One of the most populated Bayat settlements. The Turkish national poet Fuzûlî is historically attributed to have belonged to the Anatolian Bayat branch.",
    branches: ["Ak-Bayat", "Pehlivanlı"],
    empires: ["Seljuk Empire", "Ottoman Empire", "Dulkadirids"]
  },
  {
    id: "syria",
    title: "Syria",
    subtitle: "Šām Bayātī (Aleppo & Damascus)",
    lat: 36.2021,
    lng: 37.1343,
    historicalPeriod: "13th - 16th Century",
    description: "Settled in northern Syria (primarily the Aleppo region), this branch was known as the Šām Bayātī (Syrian Bayats) and the Pahlavānlū. They guarded the frontiers of the Dulkadir Emirate and later the Ottoman Empire, playing a buffer role between Anatolia and Arab domains.",
    significance: "Formed a prominent military aristocracy in Syria and Southern Anatolia, protecting trade routes and regional security.",
    branches: ["Šām Bayātī", "Pahlavānlū"],
    empires: ["Mamluk Sultanate", "Dulkadirids", "Ottoman Empire"]
  },
  {
    id: "afghanistan",
    title: "Afghanistan",
    subtitle: "Kabul & Mazar-i Sharif (Qezelbash)",
    lat: 34.5553,
    lng: 69.1779,
    historicalPeriod: "18th Century - Present",
    description: "During the reign of Nader Shah Afshar (1736-1747), several Bayat divisions from Khorasan and Azerbaijan were relocated to Kabul, Mazar-i Sharif, and Herat. They formed part of the elite Qezelbash military and administrative force, establishing permanent communities in Afghanistan.",
    significance: "Became a cornerstone of the Afghan Qezelbash community, serving as administrators, writers, and military officials in the Durrani Empire.",
    branches: ["Kara-Bayat", "Qezelbash Bayat"],
    empires: ["Afsharid Empire", "Durrani Empire"]
  },
  {
    id: "sindh",
    title: "Sindh & Delhi Sultanate",
    subtitle: "Entry to the Subcontinent (Refuge from Mongols)",
    lat: 24.8607,
    lng: 67.0011,
    historicalPeriod: "1225 AD",
    description: "Driven by Mongol expansion, the Bayat clan defended Nishapur in the 12th century, killing Genghis Khan's son-in-law, Toghuchar. Angered, the Khan destroyed the city, forcing the Bayat to flee. In 1225, this branch reached India to seek refuge and join the Delhi Sultanate under the rule of Sultan Shams ud-din Iltutmish.",
    significance: "First subcontinent entry point. Seeking refuge from the Mongol onslaught, they offered military service to the Delhi Sultanate before migrating south.",
    branches: ["Bayat"],
    empires: ["Delhi Sultanate"]
  },
  {
    id: "gujarat",
    title: "Gujarat",
    subtitle: "Surat & Rander Trading Hubs",
    lat: 21.1702,
    lng: 72.8311,
    historicalPeriod: "14th Century - Present",
    description: "Following Alauddin Khilji's conquest of Gujarat in the 14th century, the Bayats migrated south, settling in the major trading hubs of Surat and Rander. Over generations of integration with the Sunni Vohra and Bohra merchant classes, the Turkic tribal name 'Bayat' gradually localized into 'Bhayat'.",
    significance: "Primary settlement of the Bhayat branch. Shifted from frontier warriors to commercial leaders, establishing deep mercantile roots in Rander and Surat.",
    branches: ["Bhayat"],
    empires: ["Delhi Sultanate", "Mughal Empire"]
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t1",
    year: "c. 950 AD",
    title: "The Oghuz Federation",
    subtitle: "Northern China & Mongolia",
    description: "The Bayat tribe is documented as one of the 22 original Oghuz Turkic clans by Mahmud al-Kashgari in Compendium of the Languages of the Turks. They inhabit the edges of Mongolia and Northern China.",
    branch: "Bavayet",
    empire: "Oghuz Yabgu State",
    locationId: "china"
  },
  {
    id: "t2",
    year: "1040 AD",
    title: "Seljuk Conquests & Westward Migration",
    subtitle: "Entry into Khorasan",
    description: "Following the Battle of Dandanaqan, the Bayats migrate westward under the Seljuk banner, settling heavily in Khorasan and Nishapur, establishing themselves as frontier guards.",
    branch: "Kara-Bayat",
    empire: "Seljuk Empire",
    locationId: "khorasan"
  },
  {
    id: "t3",
    year: "c. 1380 AD",
    title: "Rise of the Syrian Bayat (Šām Bayātī)",
    subtitle: "Frontiers of Anatolia & Syria",
    description: "The Šām Bayātī branches establish themselves in Northern Syria (Aleppo) and Southern Anatolia. They form the backbone of the Dulkadirids and buffer the borders against the Mamluks.",
    branch: "Šām Bayātī",
    empire: "Dulkadirids",
    locationId: "syria"
  },
  {
    id: "t4",
    year: "1501 AD",
    title: "Safavid Coalition & Caucasus Settlements",
    subtitle: "Integration into Azerbaijan",
    description: "The Bayats join the Qezelbash coalition supporting Shah Ismail I. Significant settlements are granted in Shamakhi, Aghjabadi, and Karabakh (Caucasus).",
    branch: "Kara-Bayat / Ak-Bayat",
    empire: "Safavid Empire",
    locationId: "caucasus"
  },
  {
    id: "t5",
    year: "1550 AD",
    title: "Anatolian Pehlivanlı Autonomy",
    subtitle: "Central Anatolian Consolidation",
    description: "The Pehlivanlı branch of the Bayats consolidates power in the Kırıkkale, Çorum, and Yozgat regions of Turkey, serving as local gentry under Ottoman rule.",
    branch: "Pehlivanlı",
    empire: "Ottoman Empire",
    locationId: "anatolia"
  },
  {
    id: "t6",
    year: "1738 AD",
    title: "Nader Shah's Relocations to Kabul",
    subtitle: "Forming the Afghan Qezelbash",
    description: "Nader Shah Afshar relocates thousands of Bayat warriors and administrators to Kabul and Mazar-i Sharif to secure his newly conquered Afghan territories.",
    branch: "Qezelbash Bayat",
    empire: "Afsharid Empire",
    locationId: "afghanistan"
  },
  {
    id: "t7",
    year: "1225 AD",
    title: "Subcontinent Entry & Delhi Sultanate",
    subtitle: "Refuge from Mongol Destruction",
    description: "Following their resistance in Nishapur—where they killed Genghis Khan's son-in-law Toghuchar, prompting a brutal Mongol sack—the Bayats flee to India. They join the Delhi Sultanate under Sultan Iltutmish's rule.",
    branch: "Bayat",
    empire: "Delhi Sultanate",
    locationId: "sindh"
  },
  {
    id: "t8",
    year: "14th Century",
    title: "Southward Migration & Bhayat Localization",
    subtitle: "Settling in Gujarat Ports",
    description: "Following Alauddin Khilji's conquests, the Bayat migrate south to Gujarat (Surat and Rander), where their Turkic tribal name gradually morphs into the localized surname 'Bhayat' among merchant communities.",
    branch: "Bhayat",
    empire: "Delhi Sultanate / Gujarat Sultanate",
    locationId: "gujarat"
  }
];

export const branchesInfo: ClanBranch[] = [
  {
    id: "ak-bayat",
    name: "Ak-Bayat",
    translation: "White Bayat",
    regions: ["Anatolia (Turkey)", "Caucasus (Azerbaijan)"],
    history: "The 'White' Bayats represented the western-most vanguard of the tribe, settling in Anatolia and the Caucasus during the early Seljuk periods. They were traditionally pastoralist elites who later integrated into Ottoman and Azerbaijani administrative structures.",
    significance: "Known for establishing numerous agricultural villages in Central Turkey and preserving Oghuz Turkic cultural dialects."
  },
  {
    id: "kara-bayat",
    name: "Kara-Bayat",
    translation: "Black Bayat / Strong Bayat",
    regions: ["Khorasan (Iran)", "Kabul (Afghanistan)", "Nishapur"],
    history: "Settled in Khorasan, the 'Black' (historically representing power or south) Bayats formed a powerful autonomous emirate in Nishapur. They served as frontline defenders of the Safavid Empire against Central Asian nomadic invasions.",
    significance: "Eminent military commanders, diplomats, and regional rulers in eastern Iran and later relocated to Afghanistan under Nader Shah."
  },
  {
    id: "sam-bayati",
    name: "Šām Bayātī & Pahlavānlū",
    translation: "Syrian Bayat & Heroic Clan",
    regions: ["Aleppo (Syria)", "Kilis (Turkey)", "Caucasus"],
    history: "Living along the borderlands of Syria and Turkey, the Šām Bayātī were a vital border defense force. In close partnership with the Pehlivanlı branch, they maintained control over trade caravans and pilgrim routes.",
    significance: "Played a pivotal role in the buffer zones of the Mamluk-Ottoman conflicts and Dulkadir Emirate governance."
  },
  {
    id: "bhayat",
    name: "Bhayat Branch",
    translation: "Subcontinental Adaptation",
    regions: ["Delhi / Sindh", "Gujarat (Surat & Rander)"],
    history: "The lineage's migration to India was driven by Mongol expansion. The Bayats in Nishapur declared war on the Mongols, killing Genghis Khan's son-in-law Toghuchar in 1221. Following the city's destruction, they fled, reaching the subcontinent in 1225 to seek refuge and join the Delhi Sultanate under Sultan Iltutmish.",
    significance: "Following Alauddin Khilji's 14th-century conquest, they migrated south to Gujarat, where the Turkic name 'Bayat' gradually localized into 'Bhayat' within Sunni Vohra and Bohra merchant classes."
  }
];

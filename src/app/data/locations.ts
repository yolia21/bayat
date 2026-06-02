import { LocationMarker, TimelineEvent, ClanBranch, FamousFigure } from "../types";

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
    id: "turkmenistan",
    title: "Turkmenistan",
    subtitle: "Amu Darya & Merv Region (Bozok Lands)",
    lat: 39.1500,
    lng: 63.2667,
    historicalPeriod: "10th - 11th Century",
    description: "Following their consolidation in Central Asia, the Bayat clan settled along the Amu Darya river and Merv regions of Turkmenistan. Part of the Bozok division, they were highly prestigious, immortalized in the ancient Turkmen proverb: 'The Kayı and Bayat tribes shall lead the people.'",
    significance: "Ancestral Oghuz homeland and the base for the westward Seljuk expansion into Iran, Iraq, and Anatolia.",
    branches: ["Bozok Bayat", "Turkmen Bayat"],
    empires: ["Oghuz Yabgu State", "Seljuk Empire"]
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
    id: "iraq",
    title: "Iraq",
    subtitle: "Kirkuk Region (Mesopotamian Settlements)",
    lat: 35.4681,
    lng: 44.3922,
    historicalPeriod: "11th - 16th Century",
    description: "Following the Seljuk conquests, a major division of the Bayats settled in northern Iraq, primarily Kirkuk, Erbil, and Mosul. By the 16th century, Ottoman records registered 13 distinct Bayat clans here. The famous 16th-century classical poet Fuzûlî belonged to this Iraqi Bayat branch.",
    significance: "Layed the foundation for the Mesopotamian Turkic presence. Provided military commanders to the Aq Qoyunlu, Safavid, and Ottoman states.",
    branches: ["Iraqi Bayat", "Šām Bayātī"],
    empires: ["Seljuk Empire", "Aq Qoyunlu", "Ottoman Empire"]
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
    id: "t_turkmenistan",
    year: "1030 AD",
    title: "Consolidation in Turkmenistan",
    subtitle: "Amu Darya & Merv Settlements",
    description: "The Bayats establish massive settlements along the Amu Darya river and Merv in Turkmenistan. They become a dominant political faction of the Oghuz Bozok branch, driving early Seljuk governance.",
    branch: "Bozok Bayat",
    empire: "Oghuz Yabgu State / Early Seljuks",
    locationId: "turkmenistan"
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
    id: "t_iraq",
    year: "1534 AD",
    title: "Ottoman Iraq & 13 Clans of Kirkuk",
    subtitle: "Fuzuli's Classical Poetry Era",
    description: "With the Ottoman conquest of Iraq, the Bayats of Kirkuk are recorded in imperial registers as comprising 13 distinct clans. During this era, the legendary poet Fuzûlî, belonging to the Iraqi Bayat branch, writes his classical divans.",
    branch: "Iraqi Bayat",
    empire: "Ottoman Empire",
    locationId: "iraq"
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
    regions: ["Aleppo (Syria)", "Kirkuk (Iraq)", "Caucasus"],
    history: "Living along the borderlands of Iraq, Syria, and Turkey, the Šām Bayātī and Iraqi Bayats were vital frontier guardians. In close partnership with the Pehlivanlı branch, they maintained control over trade caravans, borders, and pilgrim routes.",
    significance: "Played a pivotal role in the buffer zones of the Mamluk-Ottoman conflicts, Aq Qoyunlu control, and Dulkadir Emirate governance."
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

export const famousFigures: FamousFigure[] = [
  {
    id: "korkut",
    name: "Dede Korkut",
    century: "c. 10th Century",
    role: "Legendary Sage, Storyteller & Bard",
    locationId: "turkmenistan",
    branch: "Bozok Bayat",
    quote: "Unless one calls on God, no work prospereth. Unless the Almighty granteth, no man groweth rich.",
    bio: "Dede Korkut (Grandfather Korkut) is the legendary sage, storyteller, and spiritual advisor of the Oghuz Turks, traditionally attributed to the Bayat tribe. He is the central figure and narrator of the Book of Dede Korkut, the foundational epic of Turkic literature containing stories of Oghuz valor, ethics, and tribal wars. As a shamanic bard, he is credited with the invention of the Qobuz (Turkic lute) and was historically consulted by Oghuz Khans for his foresight and wisdom.",
    legacy: "Revered as the patron sage of Turkmen, Turkish, and Azerbaijani folk literature; his tales are inscribed on UNESCO's Intangible Cultural Heritage list."
  },
  {
    id: "fuzuli",
    name: "Muhammad Fuzûlî",
    century: "1494 – 1556 AD",
    role: "Poet, Philosopher & Classical Scholar",
    locationId: "iraq",
    branch: "Iraqi Bayat",
    quote: "If the heart were not a mirror for the light of divine beauty, then love's sorrow would never find a home inside it.",
    bio: "Muhammad bin Suleyman, universally known by his pen name Fuzûlî, was a 16th-century classical poet and philosopher who belonged to the Iraqi Bayat branch in Kirkuk. Writing masterfully in Azerbaijani Turkic, Persian, and Arabic, he is regarded as one of the greatest poets of the Divan tradition. His masterpiece, 'Leyla and Mecnun', is a profound allegorical exploration of spiritual love and sorrow, blending Sufi mysticism with classical Islamic romantic narrative.",
    legacy: "Considered the national poet of Azerbaijan and a major pillar of Turkish and Persian classical literature. His works deeply shaped the Azerbaijani literary language."
  },
  {
    id: "bayati_hasan",
    name: "Hasan bin Mahmûd-ı Bayatî",
    century: "15th Century",
    role: "Ottoman Historian & Scholar",
    locationId: "anatolia",
    branch: "Anatolian Bayat",
    quote: "The lineage of the Oghuz is a tree whose roots run deep into the soil of honor, and whose branches shade the history of kings.",
    bio: "Hasan bin Mahmûd-ı Bayatî was a 15th-century Ottoman historian, scholar, and member of the Bayat tribe. Before his fame as a chronicler, he was a dervish under the mystic Dede Ömer Rûşenî in Tabriz. In 1481, during a pilgrimage to the Hejaz, he encountered the Ottoman Prince Cem Sultan. The prince commissioned him to write a genealogical history of the Oghuz and the Ottoman dynasty, which Hasan completed in a single week.",
    legacy: "Author of 'Câm-ı Cem-Âyîn' (The Cup of Jamshid), one of the earliest and most vital chronicles connecting the Ottoman lineage to the legendary Oghuz Khan, drawing from a now-lost ancient 'Oğuz-nâme'."
  },
  {
    id: "oruj_beg",
    name: "Oruj Beg Bayat",
    century: "c. 1560 – 1604 AD",
    role: "Safavid Ambassador & Writer",
    locationId: "khorasan",
    branch: "Kara-Bayat",
    quote: "The courage of a Bayat is like the standard of the Shah; it stands tallest when the winds of adversity blow hardest.",
    bio: "Oruj Beg Bayat was a Safavid military officer and diplomat belonging to the Kara-Bayat clan. In 1599, Shah Abbas I appointed him as a secretary to the first Persian embassy sent to Europe to establish an alliance against the Ottoman Empire. He traveled extensively through Europe, eventually converting to Catholicism in Spain where he adopted the name 'Don Juan of Persia'. He wrote a famous memoir in Spanish documenting Safavid Persia's society and administration.",
    legacy: "Author of 'Don Juan of Persia: A Shi'ah Catholic', providing Europe with one of its first comprehensive eye-witness accounts of Safavid Persian history and administration."
  },
  {
    id: "fath_ali_shah",
    name: "Fath-Ali Shah Qajar",
    century: "1772 – 1834 AD",
    role: "Shah of Qajar Iran",
    locationId: "khorasan",
    branch: "Qajar Oghuz",
    quote: "A kingdom is maintained by the sword, but its memory is preserved by the arts and the chronicle of its dynasties.",
    bio: "Fath-Ali Shah was the second Qajar king of Iran. The Qajars were an Oghuz Turkic tribe who rose to power following the fall of the Safavids. His reign was marked by significant diplomatic encounters with Europe and the Russo-Persian wars. He was a great patron of the arts, leading to a major revival of Persian court painting and literature.",
    legacy: "Standardized the Qajar dynasty's administration and oversaw a major cultural renaissance in Iran, leaving behind iconic monuments and court portraitures."
  },
  {
    id: "javad_khan",
    name: "Javad Khan-e Qajar",
    century: "1748 – 1804 AD",
    role: "Khan of the Ganja Khanate",
    locationId: "caucasus",
    branch: "Qajar Oghuz / Qezelbash",
    quote: "Ganja is my homeland, and its keys shall only be surrendered when my dead body is dragged from its battlements.",
    bio: "Javad Khan-e Qajar was the last sovereign ruler of the Ganja Khanate in Azerbaijan (Caucasus). Belonging to the Qajar branch of the Oghuz Turks, he was a staunch defender against Tsarist Russian expansion. During the Russian Siege of Ganja in 1804, Javad Khan refused to surrender the fortress, replying famously that he would die defending his homeland. He was killed on the city walls during the final assault.",
    legacy: "Revered as a national hero of Azerbaijan for his valiant resistance against imperial expansion and his defense of Ganja."
  }
];

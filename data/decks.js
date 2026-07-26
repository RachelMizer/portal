// PORTAL build data
//
// This file is the single source of truth for the "Builds" page and the
// individual deck-detail pages. It's loaded as a plain <script> (not fetched
// as JSON) so the site keeps working when opened straight from disk, with no
// local server required.
//
// Source content lives in dev/decks/<category folder>/*.txt (gitignored) and
// is hand-transcribed into the structure below. See a deck object's shape:
//
//   {
//     slug: "kebab-case-unique-id",     // used in the URL: deck.html?slug=...
//     name: "Deck Display Name",         // may include flavor emoji
//     category: "Category Name",         // groups decks on builds.html
//     tagline: "Color identity / archetype line",
//     description: ["Paragraph one.", "Paragraph two."],
//     costNote: "Estimated total deck cost: $X" | null,
//     structure: { creatures, spells, artifacts, planeswalkers, healer },
//     creatureGroups: [ { label, note?, cards: [{ name, qty, note? }] } ],
//     spellGroups: [ { label, cards: [{ name, qty, note? }] } ],
//     artifacts: [{ name, qty }],
//     planeswalkers: [{ name, qty }],
//     healer: { name, cost, type, pt, keywords?, rules: [...], flavor? } | null,
//     closing: { title, items: [...], note? } | null,
//     incomplete: true | false,          // true if the source .txt cuts off
//     incompleteNote: "..."              // shown when incomplete is true
//   }
window.PORTAL_DECKS = [
  {
    slug: "stormfire-engine",
    name: "Portal of the Stormfire Engine",
    category: "Combo Decks",
    tagline: "Izzet (Blue-Red) Portal Combo Deck",
    description: [
      "Spell-slinging, tempo, bounce, burn, and explosive synergy.",
      "All creatures cost 4 or less and follow Portal's strict two-color rules."
    ],
    costNote: null,
    structure: { creatures: 80, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Stormchaser Mage" },
    creatureGroups: [
      {
        label: "Low-Cost Creatures (30)",
        cards: [
          { name: "Stormchaser Mage", qty: 4, note: "Healer — UR legal" },
          { name: "Ghitu Lavarunner", qty: 4 },
          { name: "Siren Stormtamer", qty: 4 },
          { name: "Faerie Seer", qty: 4 },
          { name: "Merfolk Windrobber", qty: 4 },
          { name: "Hypnotic Sprite", qty: 4 },
          { name: "Viashino Pyromancer", qty: 4 },
          { name: "Spellweaver Eternal", qty: 2 }
        ]
      },
      {
        label: "Mid-Cost Creatures (35)",
        cards: [
          { name: "Aether Adept", qty: 4 },
          { name: "Exclusion Mage", qty: 4 },
          { name: "Young Pyromancer", qty: 4 },
          { name: "Crackling Drake", qty: 4 },
          { name: "Riddleform", qty: 4 },
          { name: "Aven Wind Mage", qty: 4 },
          { name: "Thunder Drake", qty: 3 },
          { name: "Spellgorger Weird", qty: 2 },
          { name: "Cloudkin Seer", qty: 2 }
        ]
      },
      {
        label: "High-Cost Creatures (15)",
        note: "All ≤ 4 mana and UR-legal",
        cards: [
          { name: "Wee Dragonauts", qty: 3 },
          { name: "Erratic Cyclops", qty: 3 },
          { name: "Izzet Chronarch", qty: 3 },
          { name: "Sphinx of Foresight", qty: 3 },
          { name: "Stormwing Entity", qty: 3 }
        ]
      }
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Lightning Bolt", qty: 4 },
        { name: "Unsummon", qty: 4 },
        { name: "Essence Scatter", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Flamebreak", qty: 4 },
        { name: "Sea God's Revenge", qty: 4 },
        { name: "Mizzium Mortars", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Improbable Alliance", qty: 4 },
        { name: "Curious Obsession", qty: 2 }
      ]}
    ],
    artifacts: [
      { name: "Sky Diamond", qty: 4 },
      { name: "Fire Diamond", qty: 4 },
      { name: "Mind Stone", qty: 4 },
      { name: "Midnight Clock", qty: 4 },
      { name: "Traveler's Amulet", qty: 4 }
    ],
    planeswalkers: [
      { name: "Ral, Izzet Viceroy", qty: 2 },
      { name: "Ral, Storm Conduit", qty: 2 },
      { name: "Jace, Mirror Mage", qty: 2 },
      { name: "Chandra, Fire Artisan", qty: 2 },
      { name: "Saheeli, Sublime Artificer", qty: 2 }
    ],
    healer: {
      name: "Stormchaser Mage",
      cost: "UR",
      type: "Creature — Human Wizard",
      pt: "1/3",
      keywords: "Flying, Haste, Prowess",
      rules: [
        "Healer Surge Action: Heal 3 life or 3 toughness.",
        "Passive: Whenever you cast a noncreature spell, Stormchaser Mage gets +1/+1 until end of turn.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ]
    },
    closing: {
      title: "Combo Themes",
      items: [
        "Spell-slinging prowess loops (Stormchaser Mage, Spellgorger Weird)",
        "Bounce-tempo engines (Aether Adept, Exclusion Mage)",
        "Token generation (Young Pyromancer, Improbable Alliance)",
        "Draw-filter engines (Cloudkin Seer, Sphinx of Foresight)",
        "Crackling Drake power scaling",
        "Burn finishers (Lightning Bolt, Mizzium Mortars)",
        "UR wizard/elemental synergy"
      ]
    },
    incomplete: false
  },

  {
    slug: "bloomlight-cove",
    name: "Portal of the Bloomlight Cove",
    category: "Combo Decks",
    tagline: "Mono-Green Portal Combo Deck",
    description: [
      "A mono-green combo deck focused on ETB value loops, token engines, recursion, and slot-based growth. All creatures cost 4 or less and follow Portal's strict creature rules."
    ],
    costNote: null,
    structure: { creatures: 80, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Essence Warden" },
    creatureGroups: [
      { label: "Low-Cost Creatures (30)", cards: [
        { name: "Essence Warden", qty: 4 },
        { name: "Elvish Visionary", qty: 4 },
        { name: "Llanowar Visionary", qty: 4 },
        { name: "Nest Invader", qty: 4 },
        { name: "Young Wolf", qty: 4 },
        { name: "Sakura-Tribe Elder", qty: 4 },
        { name: "Scavenging Ooze", qty: 4 },
        { name: "Nettle Sentinel", qty: 2, note: "replaces illegal Avacyn's Pilgrim" }
      ]},
      { label: "Mid-Cost Creatures (35)", cards: [
        { name: "Wood Elves", qty: 4 },
        { name: "Reclamation Sage", qty: 4 },
        { name: "Eternal Witness", qty: 4 },
        { name: "Conclave Naturalists", qty: 4 },
        { name: "Sporemound", qty: 4 },
        { name: "Ivy Lane Denizen", qty: 4 },
        { name: "Leafkin Druid", qty: 3 },
        { name: "Fertilid", qty: 2 },
        { name: "Thrashing Brontodon", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Krosan Tusker", qty: 3 },
        { name: "Somberwald Stag", qty: 3 },
        { name: "Howling Giant", qty: 3 },
        { name: "Ironscale Hydra", qty: 3 },
        { name: "Wolfbriar Elemental", qty: 3 }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Giant Growth", qty: 4 },
        { name: "Vines of Vastwood", qty: 4 },
        { name: "Return to Nature", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Cultivate", qty: 4 },
        { name: "Harmonize", qty: 4 },
        { name: "Primal Command", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Elemental Bond", qty: 4 },
        { name: "Hardened Scales", qty: 2 }
      ]}
    ],
    artifacts: [
      { name: "Sol Ring", qty: 4 },
      { name: "Mind Stone", qty: 4 },
      { name: "Heraldic Banner", qty: 4 },
      { name: "Bonder's Ornament", qty: 4 },
      { name: "Traveler's Amulet", qty: 4 }
    ],
    planeswalkers: [
      { name: "Nissa, Voice of Zendikar", qty: 2 },
      { name: "Nissa, Who Shakes the World", qty: 2 },
      { name: "Nissa, Vital Force", qty: 2 },
      { name: "Garruk Wildspeaker", qty: 2 },
      { name: "Vivien, Arkbow Ranger", qty: 2 }
    ],
    healer: {
      name: "Essence Warden",
      cost: "G",
      type: "Creature — Elf Shaman",
      pt: "1/1",
      rules: [
        "Surge Action: Heal 3 life or 3 toughness.",
        "Passive: Whenever another creature enters the battlefield, you gain 1 life.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ]
    },
    closing: {
      title: "Combo Themes",
      items: [
        "ETB draw loops (Visionary, Llanowar Visionary, Wood Elves)",
        "Recursion engines (Eternal Witness, Primal Command)",
        "Token-based slot growth (Nest Invader, Sporemound, Wolfbriar Elemental)",
        "Denizen counters + Hardened Scales synergy",
        "Healer life-gain loops with token swarms"
      ]
    },
    incomplete: false
  },

  {
    slug: "deepwild-ascent",
    name: "Portal of the Deepwild Ascent",
    category: "Combo Decks",
    tagline: "Mono-Blue Portal Combo Deck",
    description: [
      "A mono-blue combo deck focused on bounce loops, ETB draw triggers, spell recursion, slot manipulation, and artifact-supported tempo. All creatures cost 4 or less and follow Portal's strict creature rules."
    ],
    costNote: null,
    structure: { creatures: 80, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Merfolk Looter" },
    creatureGroups: [
      { label: "Low-Cost Creatures (30)", cards: [
        { name: "Merfolk Looter", qty: 4 },
        { name: "Cloudkin Seer", qty: 4 },
        { name: "Faerie Miscreant", qty: 4 },
        { name: "Omenspeaker", qty: 4 },
        { name: "Sea Gate Oracle", qty: 4 },
        { name: "Siren Stormtamer", qty: 4 },
        { name: "Spectral Sailor", qty: 4 },
        { name: "Winged Words Adept", qty: 2 }
      ]},
      { label: "Mid-Cost Creatures (35)", cards: [
        { name: "Aether Adept", qty: 4 },
        { name: "Exclusion Mage", qty: 4 },
        { name: "Barrin, Tolarian Archmage", qty: 4 },
        { name: "Archaeomancer", qty: 4 },
        { name: "Thassa's Emissary", qty: 4 },
        { name: "Thassa's Devourer", qty: 4 },
        { name: "Thassa's Oracle", qty: 3 },
        { name: "Dream Stalker", qty: 2 },
        { name: "Eldrazi Skyspawner", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Aethersnipe", qty: 3 },
        { name: "Mulldrifter", qty: 3 },
        { name: "Scrivener", qty: 3 },
        { name: "Sphinx of Foresight", qty: 3 },
        { name: "Stitched Drake", qty: 3 }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Unsummon", qty: 4 },
        { name: "Opt", qty: 4 },
        { name: "Blink of an Eye", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Ponder", qty: 4 },
        { name: "Preordain", qty: 4 },
        { name: "Time Warp Echo", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Curiosity", qty: 4 },
        { name: "Teferi's Tutelage", qty: 2 }
      ]}
    ],
    artifacts: [
      { name: "Sol Ring", qty: 4 },
      { name: "Mind Stone", qty: 4 },
      { name: "Heraldic Banner", qty: 4 },
      { name: "Bonder's Ornament", qty: 4 },
      { name: "Traveler's Amulet", qty: 4 }
    ],
    planeswalkers: [
      { name: "Jace Beleren", qty: 2 },
      { name: "Jace, Mirror Mage", qty: 2 },
      { name: "Jace, Architect of Thought", qty: 2 },
      { name: "Teferi, Time Raveler", qty: 2 },
      { name: "Narset, Parter of Veils", qty: 2 }
    ],
    healer: {
      name: "Merfolk Looter",
      cost: "1U",
      type: "Creature — Merfolk Rogue",
      pt: "1/1",
      rules: [
        "Surge Action: Heal 3 life or 3 toughness.",
        "Passive: Draw a card, then exile a card.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ]
    },
    closing: {
      title: "Combo Themes",
      items: [
        "Bounce loops (Aether Adept, Exclusion Mage, Barrin)",
        "ETB draw engines (Cloudkin Seer, Mulldrifter, Sea Gate Oracle)",
        "Spell recursion (Archaeomancer, Scrivener)",
        "Scry and top-deck manipulation (Omenspeaker, Sphinx of Foresight)",
        "Tutelage mill combo with repeated draw triggers",
        "Looter-based draw/exile filtering",
        "Token support (Eldrazi Skyspawner)"
      ]
    },
    incomplete: false
  },

  {
    slug: "nightglass-assembly",
    name: "Portal of the Nightglass Assembly",
    category: "Combo Decks",
    tagline: "Dimir (Blue-Black) Portal Deck — Budget Build (< $200)",
    description: [
      "A tactical, evasive Dimir Portal deck built to stay under $200 total.",
      "This list emphasizes flying creatures, death triggers, bounce effects, discard, and battlefield manipulation."
    ],
    costNote: "Estimated total deck cost: $155–$185",
    structure: { creatures: 80, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Cleric of Chill Depths" },
    creatureGroups: [
      { label: "Low-Cost Creatures (30)", cards: [
        { name: "Cleric of Chill Depths", qty: 4, note: "Healer" },
        { name: "Siren Stormtamer", qty: 4 },
        { name: "Merfolk Windrobber", qty: 4 },
        { name: "Faerie Seer", qty: 4 },
        { name: "Mistwalker", qty: 4 },
        { name: "Vampire Cutthroat", qty: 4 },
        { name: "Burglar Rat", qty: 4 },
        { name: "Hypnotic Sprite", qty: 2 }
      ]},
      { label: "Mid-Cost Creatures (35)", cards: [
        { name: "Aether Adept", qty: 4 },
        { name: "Exclusion Mage", qty: 4 },
        { name: "Cloudkin Seer", qty: 4 },
        { name: "Fell Specter", qty: 4 },
        { name: "Murderous Rider", qty: 4 },
        { name: "Risen Reef", qty: 4 },
        { name: "Aven Wind Mage", qty: 3 },
        { name: "Dream Stalker", qty: 2 },
        { name: "Phyrexian Rager", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Sphinx of Foresight", qty: 3 },
        { name: "Archfiend of Depravity", qty: 3 },
        { name: "Aethersquall Ancient", qty: 3 },
        { name: "Nezahal, Primal Tide", qty: 3 },
        { name: "Gravewaker", qty: 3 }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Heartless Act", qty: 4 },
        { name: "Essence Scatter", qty: 4 },
        { name: "Unsummon", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Read the Bones", qty: 4 },
        { name: "Sea God's Revenge", qty: 4 },
        { name: "Crippling Fear", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Dead Weight", qty: 4 },
        { name: "Improbable Alliance", qty: 2 }
      ]}
    ],
    artifacts: [
      { name: "Sky Diamond", qty: 4 },
      { name: "Charcoal Diamond", qty: 4 },
      { name: "Mind Stone", qty: 4 },
      { name: "Midnight Clock", qty: 4 },
      { name: "Traveler's Amulet", qty: 4 }
    ],
    planeswalkers: [
      { name: "Jace, Mirror Mage", qty: 2 },
      { name: "Jace, Unraveler of Secrets", qty: 2 },
      { name: "Ashiok, Dream Render", qty: 2 },
      { name: "Ob Nixilis, the Hate-Twisted", qty: 2 },
      { name: "Liliana, Death's Majesty", qty: 2 }
    ],
    healer: {
      name: "Cleric of Chill Depths",
      cost: "1W",
      type: "Creature — Human Cleric",
      pt: "1/3",
      rules: [
        "Healer Surge Action: Heal 3 life or 3 toughness.",
        "Passive: When Cleric of Chill Depths blocks, it prevents combat damage from the blocked creature.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ],
      flavor: "Her calm freezes the panic of battle, turning fear into focus."
    },
    closing: {
      title: "Why This Deck Stays Under $200",
      items: [
        "Uses budget evasive creatures",
        "No premium mythic Dimir staples",
        "Bounce + removal spells are inexpensive",
        "Artifacts are simple and affordable",
        "Healer is cheap and defensive"
      ],
      note: "This deck is sneaky, tactical, and Portal-friendly — perfect for players who love evasion, discard, and battlefield control."
    },
    incomplete: false
  },

  {
    slug: "rotbloom-coven",
    name: "Portal of the Rotbloom Coven",
    category: "Combo Decks",
    tagline: "Golgari (Green-Black) Portal Combo Deck",
    description: [
      "Green primary, Black support — tokens, fungus engines, recursion, sacrifice loops.",
      "All creatures cost 4 or less and follow Portal's strict color rules."
    ],
    costNote: null,
    structure: { creatures: 80, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Golgari Brownscale" },
    creatureGroups: [
      { label: "Low-Cost Creatures (30)", cards: [
        { name: "Golgari Brownscale", qty: 4, note: "Healer" },
        { name: "Young Wolf", qty: 4 },
        { name: "Sakura-Tribe Elder", qty: 4 },
        { name: "Dusk Legion Zealot", qty: 4 },
        { name: "Festering Mummy", qty: 4 },
        { name: "Slitherhead", qty: 4 },
        { name: "Elvish Visionary", qty: 4 },
        { name: "Sporeback Troll", qty: 2 }
      ]},
      { label: "Mid-Cost Creatures (35)", cards: [
        { name: "Wood Elves", qty: 4 },
        { name: "Reclamation Sage", qty: 4 },
        { name: "Eternal Witness", qty: 4 },
        { name: "Putrid Leech", qty: 4 },
        { name: "Sultai Emissary", qty: 4 },
        { name: "Sporecap Spider", qty: 4 },
        { name: "Pharika's Chosen", qty: 3 },
        { name: "Pharika's Disciple", qty: 2 },
        { name: "Golgari Findbroker", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Conclave Naturalists", qty: 3 },
        { name: "Somberwald Stag", qty: 3 },
        { name: "Rot Shambler", qty: 3 },
        { name: "Moldervine Reclaimer", qty: 3 },
        { name: "Izoni, Thousand-Eyed", qty: 3, note: "BG, legal" }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Putrefy", qty: 4 },
        { name: "Vines of Vastwood", qty: 4 },
        { name: "Tragic Slip", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Cultivate", qty: 4 },
        { name: "Read the Bones", qty: 4 },
        { name: "Grisly Salvage", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Hardened Scales", qty: 4 },
        { name: "Dead Weight", qty: 2 }
      ]}
    ],
    artifacts: [
      { name: "Golgari Signet", qty: 4 },
      { name: "Mind Stone", qty: 4 },
      { name: "Heraldic Banner", qty: 4 },
      { name: "Bonder's Ornament", qty: 4 },
      { name: "Traveler's Amulet", qty: 4 }
    ],
    planeswalkers: [
      { name: "Vraska, Golgari Queen", qty: 2 },
      { name: "Vraska, Swarm's Eminence", qty: 2 },
      { name: "Garruk Wildspeaker", qty: 2 },
      { name: "Nissa, Voice of Zendikar", qty: 2 },
      { name: "Liliana, Waker of the Dead", qty: 2 }
    ],
    healer: {
      name: "Golgari Brownscale",
      cost: "1GG",
      type: "Creature — Lizard",
      pt: "2/3",
      rules: [
        "Surge Action: Heal 3 life or 3 toughness.",
        "Passive: When Golgari Brownscale is exiled or replaced, you gain 2 life.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ]
    },
    closing: {
      title: "Combo Themes",
      items: [
        "Fungus/token engines (Young Wolf, Izoni, Slitherhead)",
        "Sacrifice loops (Festering Mummy, Rot Shambler, Findbroker)",
        "Recursion engines (Eternal Witness, Golgari Findbroker)",
        "Removal + counters synergy (Putrefy, Hardened Scales)",
        "Graveyard value (Grisly Salvage, Read the Bones)",
        "Healer life-gain loops with death triggers"
      ]
    },
    incomplete: false
  },

  {
    slug: "tidebinder",
    name: "Portal of the Tidebinder",
    category: "Mono-Blue",
    tagline: "Mono-Blue Portal Deck",
    description: [
      "A mono-blue Portal deck focused on illusions, tempo control, scrying, flying creatures, and battlefield manipulation."
    ],
    costNote: null,
    structure: { creatures: 80, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Sage of Epityr" },
    creatureGroups: [
      { label: "Low-Cost Creatures (30)", cards: [
        { name: "Sage of Epityr", qty: 4 },
        { name: "Mistwalker", qty: 4 },
        { name: "Phantasmal Bear", qty: 4 },
        { name: "Spectral Sailor", qty: 4 },
        { name: "Merfolk Windrobber", qty: 4 },
        { name: "Faerie Miscreant", qty: 4 },
        { name: "Siren Stormtamer", qty: 4 },
        { name: "Hypnotic Sprite", qty: 2 }
      ]},
      { label: "Mid-Cost Creatures (35)", cards: [
        { name: "Cloudreader Sphinx", qty: 4 },
        { name: "Aven Wind Mage", qty: 4 },
        { name: "Barrin, Tolarian Archmage", qty: 4 },
        { name: "Aether Adept", qty: 4 },
        { name: "Illusionary Ambusher", qty: 4 },
        { name: "Watcher of the Spheres", qty: 4 },
        { name: "Nebelgast Herald", qty: 3 },
        { name: "Rattlechains", qty: 2 },
        { name: "Sphinx of Foresight", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Aethersnipe", qty: 3 },
        { name: "Dream Stalker", qty: 3 },
        { name: "Cloud Elemental", qty: 3 },
        { name: "Phantom Warrior", qty: 3 },
        { name: "Illusionary Servant", qty: 3 }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Blink of an Eye", qty: 4 },
        { name: "Essence Capture", qty: 4 },
        { name: "Unwind", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Sea God's Revenge", qty: 4 },
        { name: "Aetherize", qty: 4 },
        { name: "Flood of Tears", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Claustrophobia", qty: 4 },
        { name: "Deep Freeze", qty: 2 }
      ]}
    ],
    artifacts: [
      { name: "Sky Diamond", qty: 4 },
      { name: "Mind Stone", qty: 4 },
      { name: "Midnight Clock", qty: 4 },
      { name: "Traveler's Amulet", qty: 4 },
      { name: "Arcane Signet", qty: 4 }
    ],
    planeswalkers: [
      { name: "Jace, Cunning Castaway", qty: 2 },
      { name: "Jace, Memory Adept", qty: 2 },
      { name: "Jace, Unraveler of Secrets", qty: 2 },
      { name: "Narset, Parter of Veils", qty: 2 },
      { name: "Kasmina, Enigmatic Mentor", qty: 2 }
    ],
    healer: {
      name: "Sage of Epityr",
      cost: "U",
      type: "Creature — Human Wizard",
      pt: "1/1",
      rules: [
        "Surge Action: Heal 3 life or 3 toughness.",
        "Passive: When Sage of Epityr enters the battlefield, scry 4.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ]
    },
    closing: null,
    incomplete: false
  },

  {
    slug: "stormcallers-mirage",
    name: "Stormcaller's Mirage",
    category: "Mono-Blue",
    tagline: "Mono-Blue Portal Deck",
    description: [
      "A mono-blue Portal deck focused on card draw, tempo control, flying creatures, illusions, blink effects, and battlefield trickery."
    ],
    costNote: null,
    structure: { creatures: 80, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Sage of Epityr" },
    creatureGroups: [
      { label: "Low-Cost Creatures (30)", cards: [
        { name: "Sage of Epityr", qty: 4 },
        { name: "Spectral Sailor", qty: 4 },
        { name: "Siren Stormtamer", qty: 4 },
        { name: "Merfolk Trickster", qty: 4 },
        { name: "Faerie Seer", qty: 4 },
        { name: "Judge's Familiar", qty: 4 },
        { name: "Mist-Cloaked Herald", qty: 4 },
        { name: "Hypnotic Sprite", qty: 2 }
      ]},
      { label: "Mid-Cost Creatures (35)", cards: [
        { name: "Cloudkin Seer", qty: 4 },
        { name: "Exclusion Mage", qty: 4 },
        { name: "Barrin, Tolarian Archmage", qty: 4 },
        { name: "Aether Adept", qty: 4 },
        { name: "Watcher of the Spheres", qty: 4 },
        { name: "Dungeon Geists", qty: 4 },
        { name: "Nebelgast Herald", qty: 3 },
        { name: "Rattlechains", qty: 2 },
        { name: "Dream Stalker", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Sphinx of Foresight", qty: 3 },
        { name: "Illusionary Ambusher", qty: 3 },
        { name: "Cloud Elemental", qty: 3 },
        { name: "Phantom Warrior", qty: 3 },
        { name: "Illusionary Servant", qty: 3 }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Unsummon", qty: 4 },
        { name: "Essence Scatter", qty: 4 },
        { name: "Selective Snare", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Time Wipe", qty: 4 },
        { name: "Flood of Tears", qty: 4 },
        { name: "Aetherize", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Claustrophobia", qty: 4 },
        { name: "Capture Sphere", qty: 2 }
      ]}
    ],
    artifacts: [
      { name: "Sky Diamond", qty: 4 },
      { name: "Mind Stone", qty: 4 },
      { name: "Arcane Signet", qty: 4 },
      { name: "Midnight Clock", qty: 4 },
      { name: "Traveler's Amulet", qty: 4 }
    ],
    planeswalkers: [
      { name: "Jace, Mirror Mage", qty: 2 },
      { name: "Jace, Architect of Thought", qty: 2 },
      { name: "Jace, Unraveler of Secrets", qty: 2 },
      { name: "Narset, Parter of Veils", qty: 2 },
      { name: "Kasmina, Enigmatic Mentor", qty: 2 }
    ],
    healer: {
      name: "Sage of Epityr",
      cost: "U",
      type: "Creature — Human Wizard",
      pt: "1/1",
      rules: [
        "Surge Action: Heal 3 life or 3 toughness.",
        "Passive: When Sage of Epityr enters the battlefield, scry 4.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ]
    },
    closing: null,
    incomplete: false
  },

  {
    slug: "verdant-colossus",
    name: "Portal of the Verdant Colossus",
    category: "Mono-Green",
    tagline: "Mono-Green Portal Deck",
    description: [
      "A mono-green Portal deck focused on stompy creatures, fight spells, battlefield dominance, and overwhelming board presence."
    ],
    costNote: null,
    structure: { creatures: 80, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Essence Warden" },
    creatureGroups: [
      { label: "Low-Cost Creatures (30)", cards: [
        { name: "Essence Warden", qty: 4 },
        { name: "Elvish Mystic", qty: 4 },
        { name: "Llanowar Elves", qty: 4 },
        { name: "Pelt Collector", qty: 4 },
        { name: "Dryad Militant", qty: 4 },
        { name: "Wolfbitten Captive", qty: 4 },
        { name: "Narnam Renegade", qty: 4 },
        { name: "Scavenging Ooze", qty: 2 }
      ]},
      { label: "Mid-Cost Creatures (35)", cards: [
        { name: "Leatherback Baloth", qty: 4 },
        { name: "Thrashing Brontodon", qty: 4 },
        { name: "Steel Leaf Champion", qty: 4 },
        { name: "Renata, Called to the Hunt", qty: 4 },
        { name: "Barkhide Troll", qty: 4 },
        { name: "Old-Growth Troll", qty: 4 },
        { name: "Krosan Tusker", qty: 3 },
        { name: "Somberwald Stag", qty: 2 },
        { name: "Gargos, Vicious Watcher", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Bramble Wurm", qty: 3 },
        { name: "Sentinel Spider", qty: 3 },
        { name: "Nessian Asp", qty: 3 },
        { name: "Territorial Baloth", qty: 3 },
        { name: "Greater Sandwurm", qty: 3 }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Rabid Bite", qty: 4 },
        { name: "Prey Upon", qty: 4 },
        { name: "Titanic Growth", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Cultivate", qty: 4 },
        { name: "Primal Command", qty: 4 },
        { name: "Harmonize", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Gift of the Gargantuan", qty: 4 },
        { name: "Colossal Majesty", qty: 2 }
      ]}
    ],
    artifacts: [
      { name: "Moss Diamond", qty: 4 },
      { name: "Mind Stone", qty: 4 },
      { name: "Bonder's Ornament", qty: 4 },
      { name: "Traveler's Amulet", qty: 4 },
      { name: "Heraldic Banner", qty: 4 }
    ],
    planeswalkers: [
      { name: "Garruk Wildspeaker", qty: 2 },
      { name: "Garruk, Primal Hunter", qty: 2 },
      { name: "Nissa, Voice of Zendikar", qty: 2 },
      { name: "Nissa, Vital Force", qty: 2 },
      { name: "Vivien, Arkbow Ranger", qty: 2 }
    ],
    healer: {
      name: "Essence Warden",
      cost: "G",
      type: "Creature — Elf Shaman",
      pt: "1/1",
      rules: [
        "Surge Action: Heal 3 life or 3 toughness.",
        "Passive: Whenever another creature enters the battlefield, you gain 1 life.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ]
    },
    closing: null,
    incomplete: false
  },

  {
    slug: "wildheart-convergence",
    name: "Portal of the Wildheart Convergence",
    category: "Mono-Green",
    tagline: "Mono-Green Portal Deck",
    description: [
      "A synergy-driven mono-green Portal deck focused on elves, lifegain, creature swarms, and explosive battlefield scaling."
    ],
    costNote: null,
    structure: { creatures: 80, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Essence Warden" },
    creatureGroups: [
      { label: "Low-Cost Creatures (30)", cards: [
        { name: "Essence Warden", qty: 4 },
        { name: "Elvish Mystic", qty: 4 },
        { name: "Llanowar Elves", qty: 4 },
        { name: "Elvish Visionary", qty: 4 },
        { name: "Nissa's Chosen", qty: 4 },
        { name: "Joraga Treespeaker", qty: 4 },
        { name: "Elvish Branchbender", qty: 2 },
        { name: "Narnam Renegade", qty: 4 }
      ]},
      { label: "Mid-Cost Creatures (35)", cards: [
        { name: "Elvish Archdruid", qty: 4 },
        { name: "Dwynen's Elite", qty: 4 },
        { name: "Imperious Perfect", qty: 4 },
        { name: "Reclamation Sage", qty: 4 },
        { name: "Leaf-Crowned Elder", qty: 4 },
        { name: "Beast Whisperer", qty: 4 },
        { name: "Wildborn Preserver", qty: 3 },
        { name: "Timberwatch Elf", qty: 2 },
        { name: "Wren's Run Packmaster", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Bramble Wurm", qty: 3 },
        { name: "Sentinel Spider", qty: 3 },
        { name: "Nessian Asp", qty: 3 },
        { name: "Territorial Baloth", qty: 3 },
        { name: "Greater Sandwurm", qty: 3 }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Blossoming Defense", qty: 4 },
        { name: "Heroic Intervention", qty: 4 },
        { name: "Vines of Vastwood", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Lead the Stampede", qty: 4 },
        { name: "Overrun", qty: 4 },
        { name: "Nature's Spiral", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Growing Rites of Itlimoc", qty: 2 },
        { name: "Song of Freyalise", qty: 4 }
      ]}
    ],
    artifacts: [
      { name: "Moss Diamond", qty: 4 },
      { name: "Mind Stone", qty: 4 },
      { name: "Bonder's Ornament", qty: 4 },
      { name: "Traveler's Amulet", qty: 4 },
      { name: "Heraldic Banner", qty: 4 }
    ],
    planeswalkers: [
      { name: "Nissa, Who Shakes the World", qty: 2 },
      { name: "Nissa, Voice of Zendikar", qty: 2 },
      { name: "Garruk, Unleashed", qty: 2 },
      { name: "Vivien, Champion of the Wilds", qty: 2 },
      { name: "Freyalise, Llanowar's Fury", qty: 2 }
    ],
    healer: {
      name: "Essence Warden",
      cost: "G",
      type: "Creature — Elf Shaman",
      pt: "1/1",
      rules: [
        "Surge Action: Heal 3 life or 3 toughness.",
        "Passive: Whenever another creature enters the battlefield, you gain 1 life.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ]
    },
    closing: null,
    incomplete: false
  },

  {
    slug: "blazeborn-legion",
    name: "Portal of the Blazeborn Legion",
    category: "Mono-Red",
    tagline: "Mono-Red Portal Deck",
    description: [
      "A mono-red Portal deck focused on minotaurs, elementals, burn, haste, and explosive battlefield swings."
    ],
    costNote: null,
    structure: { creatures: 80, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Firebrand Archer" },
    creatureGroups: [
      { label: "Low-Cost Creatures (30)", cards: [
        { name: "Firebrand Archer", qty: 4 },
        { name: "Firedrinker Satyr", qty: 4 },
        { name: "Zurgo Bellstriker", qty: 4 },
        { name: "Rakdos Cackler", qty: 4 },
        { name: "Scorch Spitter", qty: 4 },
        { name: "Kargan Intimidator", qty: 4 },
        { name: "Rimrock Knight", qty: 4 },
        { name: "Goblin Motivator", qty: 2 }
      ]},
      { label: "Mid-Cost Creatures (35)", cards: [
        { name: "Minotaur Skullcleaver", qty: 4 },
        { name: "Rageblood Shaman", qty: 4 },
        { name: "Borderland Minotaur", qty: 4 },
        { name: "Lightning Visionary", qty: 4 },
        { name: "Chandra's Embercat", qty: 4 },
        { name: "Flamekin Harbinger", qty: 4 },
        { name: "Emberhorn Minotaur", qty: 3 },
        { name: "Fire Elemental", qty: 2 },
        { name: "Blistering Firecat", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Ahn-Crop Crasher", qty: 3 },
        { name: "Charging Monstrosaur", qty: 3 },
        { name: "Emberwilde Augur", qty: 3 },
        { name: "Hissing Iguanar", qty: 3 },
        { name: "Spitebellows", qty: 3 }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Incinerate", qty: 4 },
        { name: "Magma Jet", qty: 4 },
        { name: "Lightning Strike", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Slagstorm", qty: 4 },
        { name: "Flames of the Firebrand", qty: 4 },
        { name: "Mizzium Mortars", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Burning Vengeance", qty: 4 },
        { name: "Rage Reflection", qty: 2 }
      ]}
    ],
    artifacts: [
      { name: "Fire Diamond", qty: 4 },
      { name: "Mind Stone", qty: 4 },
      { name: "Heraldic Banner", qty: 4 },
      { name: "Bonder's Ornament", qty: 4 },
      { name: "Traveler's Amulet", qty: 4 }
    ],
    planeswalkers: [
      { name: "Chandra, Novice Pyromancer", qty: 2 },
      { name: "Chandra, Flame's Catalyst", qty: 2 },
      { name: "Chandra, Pyro Genius", qty: 2 },
      { name: "Tibalt, the Fiend-Blooded", qty: 2 },
      { name: "Sarkhan, the Dragonspeaker", qty: 2 }
    ],
    healer: {
      name: "Firebrand Archer",
      cost: "1R",
      type: "Creature — Human Archer",
      pt: "2/1",
      rules: [
        "Surge Action: Heal 3 life or 3 toughness.",
        "Passive: Whenever you cast a noncreature spell, Firebrand Archer deals 1 damage to each opponent.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ]
    },
    closing: null,
    incomplete: false
  },

  {
    slug: "emberheart",
    name: "Portal of the Emberheart",
    category: "Mono-Red",
    tagline: "Mono-Red Portal Deck",
    description: [
      "A mono-red Portal deck focused on haste, burn, dragons, aggressive tempo, and battlefield volatility."
    ],
    costNote: null,
    structure: { creatures: 80, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Firebrand Archer" },
    creatureGroups: [
      { label: "Low-Cost Creatures (30)", cards: [
        { name: "Firebrand Archer", qty: 4 },
        { name: "Ghitu Lavarunner", qty: 4 },
        { name: "Viashino Pyromancer", qty: 4 },
        { name: "Fanatical Firebrand", qty: 4 },
        { name: "Kessig Flamebreather", qty: 4 },
        { name: "Burning Prophet", qty: 4 },
        { name: "Kiln Fiend", qty: 4 },
        { name: "Fervent Champion", qty: 2 }
      ]},
      { label: "Mid-Cost Creatures (35)", cards: [
        { name: "Ahn-Crop Crasher", qty: 4 },
        { name: "Lightning Mauler", qty: 4 },
        { name: "Ember Hauler", qty: 4 },
        { name: "Keldon Raider", qty: 4 },
        { name: "Chandra's Phoenix", qty: 4 },
        { name: "Acolyte of the Inferno", qty: 4 },
        { name: "Flamewake Phoenix", qty: 3 },
        { name: "Hound of Griselbrand", qty: 2 },
        { name: "Territorial Hellkite", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Charging Monstrosaur", qty: 3 },
        { name: "Emberwilde Augur", qty: 3 },
        { name: "Hissing Iguanar", qty: 3 },
        { name: "Spitebellows", qty: 3 }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Lightning Bolt", qty: 4 },
        { name: "Shock", qty: 4 },
        { name: "Wild Slash", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Flamebreak", qty: 4 },
        { name: "Mizzium Mortars", qty: 4 },
        { name: "Anger of the Gods", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Fiery Emancipation", qty: 2 },
        { name: "Burning Anger", qty: 4 }
      ]}
    ],
    artifacts: [
      { name: "Fire Diamond", qty: 4 },
      { name: "Mind Stone", qty: 4 },
      { name: "Heraldic Banner", qty: 4 },
      { name: "Bonder's Ornament", qty: 4 },
      { name: "Traveler's Amulet", qty: 4 }
    ],
    planeswalkers: [
      { name: "Chandra, Pyromaster", qty: 2 },
      { name: "Chandra, Acolyte of Flame", qty: 2 },
      { name: "Chandra, Fire Artisan", qty: 2 },
      { name: "Tibalt, Rakish Instigator", qty: 2 },
      { name: "Sarkhan the Masterless", qty: 2 }
    ],
    healer: {
      name: "Firebrand Archer",
      cost: "1R",
      type: "Creature — Human Archer",
      pt: "2/1",
      rules: [
        "Surge Action: Heal 3 life or 3 toughness.",
        "Passive: Whenever you cast a noncreature spell, Firebrand Archer deals 1 damage to each opponent.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ]
    },
    closing: null,
    incomplete: false
  },

  {
    slug: "soul-warden",
    name: "Portal of the Soul Warden",
    category: "Mono-White",
    tagline: "Mono-White Portal Deck — Budget Build (< $200)",
    description: [
      "A fully playable, balanced Portal deck built to stay under $200 total.",
      "This list emphasizes efficiency, exile synergy, simple token interactions, and clean slot behavior."
    ],
    costNote: "Estimated total deck cost: $160–$190 (based on average NM non-foil market prices).",
    structure: { creatures: 76, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Soul Warden" },
    creatureGroups: [
      { label: "Low-Cost Creatures (30)", cards: [
        { name: "Soul Warden", qty: 4, note: "Healer" },
        { name: "Thraben Inspector", qty: 4 },
        { name: "Selfless Savior", qty: 4 },
        { name: "Giant Killer", qty: 4 },
        { name: "Loyal Warhound", qty: 4 },
        { name: "Savannah Lions", qty: 4 },
        { name: "Knight of Grace", qty: 4 },
        { name: "Benalish Marshal", qty: 2 }
      ]},
      { label: "Mid-Cost Creatures (31)", cards: [
        { name: "Blade Splicer", qty: 4 },
        { name: "Flickerwisp", qty: 4 },
        { name: "Banisher Priest", qty: 4 },
        { name: "Elite Spellbinder", qty: 4 },
        { name: "Guardian of Ghirapur", qty: 4 },
        { name: "Serra Angel", qty: 4 },
        { name: "Sunblast Angel", qty: 3 },
        { name: "Angel of Sanctions", qty: 2 },
        { name: "Archon of Emeria", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Emeria Shepherd", qty: 3 },
        { name: "Angel of Serenity", qty: 3 },
        { name: "Sun Titan", qty: 3 },
        { name: "Seraph of Dawn", qty: 3 },
        { name: "Dawnfeather Eagle", qty: 3 }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Swords to Plowshares", qty: 4 },
        { name: "Valorous Stance", qty: 4 },
        { name: "Blessed Alliance", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Day of Judgment", qty: 4 },
        { name: "Planar Outburst", qty: 4 },
        { name: "Fumigate", qty: 2 },
        { name: "Mass Calcify", qty: 2 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Oblivion Ring", qty: 4 },
        { name: "Stasis Snare", qty: 2 }
      ]}
    ],
    artifacts: [
      { name: "Mind Stone", qty: 4 },
      { name: "Golden Urn", qty: 4 },
      { name: "Healer's Heirloom", qty: 4 },
      { name: "Staff of the Sun Magus", qty: 4 },
      { name: "Marble Diamond", qty: 4 }
    ],
    planeswalkers: [
      { name: "Ajani Goldmane", qty: 2 },
      { name: "Ajani, Strength of the Pride", qty: 2 },
      { name: "Gideon Blackblade", qty: 2 },
      { name: "Elspeth Tirel", qty: 2 },
      { name: "The Eternal Wanderer", qty: 2 }
    ],
    healer: {
      name: "Soul Warden",
      cost: "W",
      type: "Creature — Human Cleric",
      pt: "1/1",
      rules: [
        "Healer Surge Action: If you spend your entire Surge healing, you heal 3 life or 3 toughness (Portal rule).",
        "Passive (Card's Original Ability): Whenever another creature enters the battlefield, you gain 1 life.",
        "Creator Slot Bonus (Portal rule): If Soul Warden is in the Creator Slot, healing also restores 1 life to you."
      ],
      flavor: "Her presence brings calm to the chaos of the Portal."
    },
    closing: null,
    incomplete: false
  },

  {
    slug: "white-knight",
    name: "Portal of the White Knight",
    category: "Mono-White",
    tagline: "Mono-White Portal Deck",
    description: [
      "A mono-white Portal deck focused on lifegain, soldiers, blink synergy, and holy battlefield control."
    ],
    costNote: null,
    structure: { creatures: 74, spells: 30, artifacts: 20, planeswalkers: 10, healer: "Auriok Champion" },
    creatureGroups: [
      { label: "Low-Cost Creatures (26)", cards: [
        { name: "Auriok Champion", qty: 4 },
        { name: "Auriok Steelshaper", qty: 4 },
        { name: "Giver of Runes", qty: 4 },
        { name: "Dauntless Bodyguard", qty: 4 },
        { name: "Student of Warfare", qty: 4 },
        { name: "Kor Skyfisher", qty: 4 },
        { name: "Luminarch Aspirant", qty: 2 }
      ]},
      { label: "Mid-Cost Creatures (33)", cards: [
        { name: "Wall of Omens", qty: 4 },
        { name: "Skyclave Cleric", qty: 4 },
        { name: "Militia Bugler", qty: 4 },
        { name: "Knight of the White Orchid", qty: 4 },
        { name: "Bishop of Wings", qty: 4 },
        { name: "Angel of Vitality", qty: 4 },
        { name: "Resplendent Marshal", qty: 3 },
        { name: "Bygone Bishop", qty: 2 },
        { name: "Attended Knight", qty: 2 },
        { name: "Guardian of the Guildpact", qty: 2 }
      ]},
      { label: "High-Cost Creatures (15)", cards: [
        { name: "Seraph of Dawn", qty: 3 },
        { name: "Dawnfeather Eagle", qty: 3 },
        { name: "Aerial Responder", qty: 3 },
        { name: "Blade Splicer", qty: 3 },
        { name: "Flickerwisp", qty: 3 }
      ]}
    ],
    spellGroups: [
      { label: "Instants (12)", cards: [
        { name: "Blessed Light", qty: 4 },
        { name: "Revoke Existence", qty: 4 },
        { name: "Make a Stand", qty: 4 }
      ]},
      { label: "Sorceries (12)", cards: [
        { name: "Cleansing Nova", qty: 4 },
        { name: "Rout", qty: 4 },
        { name: "Martial Coup", qty: 4 }
      ]},
      { label: "Enchantments (6)", cards: [
        { name: "Faith's Fetters", qty: 4 },
        { name: "Banishing Light", qty: 2 }
      ]}
    ],
    artifacts: [
      { name: "Marble Diamond", qty: 4 },
      { name: "Prismatic Lens", qty: 4 },
      { name: "Sun Droplet", qty: 4 },
      { name: "Bonder's Ornament", qty: 4 },
      { name: "Explorer's Scope", qty: 4 }
    ],
    planeswalkers: [
      { name: "Elspeth, Knight-Errant", qty: 2 },
      { name: "Elspeth, Sun's Nemesis", qty: 2 },
      { name: "Gideon Jura", qty: 2 },
      { name: "Ajani Steadfast", qty: 2 },
      { name: "Serra the Benevolent", qty: 2 }
    ],
    healer: {
      name: "Auriok Champion",
      cost: "WW",
      type: "Creature — Human Cleric",
      pt: "1/1",
      rules: [
        "Surge Action: Heal 3 life or 3 toughness.",
        "Passive: Gain 1 life whenever another creature enters the battlefield.",
        "Creator Slot Bonus: Healing also restores 1 life to you."
      ]
    },
    closing: null,
    incomplete: false
  }
];

// Display order for categories on builds.html — categories with no decks are skipped.
window.PORTAL_DECK_CATEGORY_ORDER = ["Combo Decks", "Mono-Blue", "Mono-Green", "Mono-Red", "Mono-White"];

/**
 * All image generation prompts, organized by phase.
 * Each prompt has an ID, dependency refs, output path, and the prompt text.
 */

export type ImagePrompt = {
  id: string;
  phase: number;
  refs: string[];
  outputDir: string;
  aspectRatio: "16:9" | "3:4" | "21:9" | "1:1";
  prompt: string;
};

const STYLE_SUFFIX = `\nCinematic still, photorealistic, shot on ARRI Alexa 65, anamorphic lens. Skin texture visible, natural imperfections, real fabric weight and drape. Color grading: warm gold undertones for interiors, cool steel blue for exteriors. Lighting: motivated source lighting, no flat fill. Depth of field with bokeh. Production design level: HBO Game of Thrones season 4+, ILM VFX compositing.`;

function withStyle(prompt: string, aspectRatio: string = "16:9"): string {
  return `${prompt.trim()}${STYLE_SUFFIX}\nAspect ratio: ${aspectRatio}.`;
}

// ─── PHASE 0: HERALDRY & MATERIALS ─────────────────────────────────────────

const phase0: ImagePrompt[] = [
  {
    id: "heraldry_cadifor_sigil",
    phase: 0,
    refs: [],
    outputDir: "heraldry",
    aspectRatio: "1:1",
    prompt: withStyle(
      `A royal coat of arms on aged parchment. The field is deep violet-purple, rich as Tyrian dye. At center, a stylized infinity symbol rendered in luminous cyan-azure, precise geometric linework, metallic leaf highlights. No animals, no text. The symbol radiates cold intellectual precision. The design transcends medieval heraldry — abstract, modern, timeless. Photographed as a museum piece under controlled gallery lighting, shallow depth of field on the embroidery threads.`,
      "1:1"
    ),
  },
  {
    id: "materials_imperial_palette",
    phase: 0,
    refs: [],
    outputDir: "heraldry",
    aspectRatio: "16:9",
    prompt: withStyle(
      `A material sample board photographed in a design studio. Six swatches arranged in grid: (1) pale veined marble with grey-gold veins and stellar mica inclusions, (2) blackened mithril metal — dark gunmetal with faint blue-silver sheen, (3) mineral crystal — transparent with internal light diffusion, (4) dense dark stone polished to matte — absorbs rather than reflects light, (5) night-black velvet with invisible embroidery only visible at angle, (6) white linen embroidered with silver thread in frost patterns. Studio lighting, macro detail, photorealistic textures.`
    ),
  },
];

// ─── PHASE 1: PORTRAITS ────────────────────────────────────────────────────

const phase1: ImagePrompt[] = [
  // 1.01 — Aberthol
  {
    id: "portrait_aberthol_bust",
    phase: 1,
    refs: ["heraldry_cadifor_sigil"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Bust portrait of an 80-year-old warrior king. Massive frame despite age, shoulders broad as a doorway. Face deeply weathered — decades of outdoor campaigning carved into every crease. White hair cropped military-short, thick white beard trimmed but not manicured. Eyes: pale blue-grey, still sharp as a blade, the gaze of a man who has killed and commanded for 50 years. Nose broken at least twice. Jaw set with habitual authority. Wearing heavy dark fur cloak over functional plate armor — not decorative, scarred from use. A small violet-and-cyan clasp at the throat (infinity sigil). Background: stone wall of a fortress, warm firelight from the left. Lighting: fire from left, cold blue window light from right.`,
      "3:4"
    ),
  },
  {
    id: "portrait_aberthol_throne",
    phase: 1,
    refs: ["portrait_aberthol_bust"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Full body portrait of the same elderly warrior king from the reference image, now seated on a rough-hewn stone throne. He sits forward, elbows on knees, not reclining — a man who has never relaxed on a throne in his life. Same weathered face, white cropped hair, pale blue-grey eyes. Heavy fur-and-plate armor. A greatsword leans against the throne beside him. The throne room is modest — not yet imperial, frontier-fortress architecture. Torchlight. Stone flags. Cold air visible. Camera angle: slightly low, looking up.`,
      "3:4"
    ),
  },
  // 1.02 — Viki
  {
    id: "portrait_viki_bust",
    phase: 1,
    refs: ["heraldry_cadifor_sigil"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Bust portrait of a woman warrior in her late 30s at peak physical condition. Lean, muscular build visible even through armor — built for speed and fury, not tank defense. Auburn-brown hair pulled back in a practical warrior's knot, loose strands framing her face. Eyes: bright amber-brown, alive with mischief and intelligence — this is a woman who laughs before she kills. Expression: half-smile, confident, the look of someone who finds combat genuinely enjoyable. Skin tanned and lightly scarred — a nick on her left cheekbone, calluses visible on her sword hand. Wearing functional steel plate over leather, well-maintained but clearly used. No decorative flourishes except a small infinity clasp at her gorget. Background: overcast battlefield sky, wind in her hair. Warm skin tones against cool sky.`,
      "3:4"
    ),
  },
  // 1.03 — Andrea Rougissante
  {
    id: "portrait_andrea_rougissante_bust",
    phase: 1,
    refs: ["heraldry_cadifor_sigil"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Bust portrait of a noblewoman in her late 30s. Copper-auburn hair, thick and lustrous, worn in an elaborate but restrained court style. Skin: alabaster pale with a natural flush across cheekbones — she blushes from concentration, not embarrassment. Eyes: deep green-grey, penetrating, calculating — these are the eyes of someone who sees political moves three steps ahead. Expression: serene mask concealing intense activity — mouth composed, but eyes alive with strategic thought. "Insolently beautiful" — beauty that doesn't try and doesn't care if you notice. Wearing a high-necked gown in dark violet silk, minimal jewelry — a single thin gold circlet. Fabric quality speaks louder than ornamentation. Background: castle library, candlelight reflecting off leather book spines. Warm candlelight from right, creating Rembrandt lighting on her face.`,
      "3:4"
    ),
  },
  // 1.04 — Andrea II young
  {
    id: "portrait_andrea_juste_young",
    phase: 1,
    refs: ["heraldry_cadifor_sigil"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Portrait of a girl-queen, approximately 12-14 years old, but with eyes that belong to someone decades older. Small frame, not yet fully grown, but posture perfectly upright — trained since age 6 to bear a crown. Brown hair with auburn undertones (inherited from Rougissante line), worn simply. Eyes: dark brown, enormous in her young face, carrying impossible depth and gravity. Expression: not childish, not sad — resolved. The face of a child who has already accepted the weight of the world. Wearing a modest but perfectly tailored grey-violet gown, a thin silver circlet too large for her head, sitting slightly tilted. Background: vast empty throne room, the girl dwarfed by architecture. Lighting: single shaft of cathedral light from above, dust motes visible. Cold stone, warm skin.`,
      "3:4"
    ),
  },
  // 1.04 — Andrea II mature
  {
    id: "portrait_andrea_juste_mature",
    phase: 1,
    refs: ["portrait_andrea_juste_young"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `The same woman from the reference, now in her mid-50s. The girl-queen has become an empress. Same dark eyes but now surrounded by fine lines of experience. Auburn-brown hair now threaded with silver, worn in a severe but elegant updo. Face: angular, defined — decades of fasting, campaigning, and governing have stripped all softness. Expression: just. Literally just — the face of absolute fairness without mercy or cruelty. Muscular forearms visible (trained by Thorim, the titan-guard). Wearing imperial plate-and-robe hybrid — functional armor beneath heavy violet-grey robes. Staff of office in hand. Background: war tent interior, maps spread on table, campaign in progress.`,
      "3:4"
    ),
  },
  // 1.05 — Andrea IV
  {
    id: "portrait_andrea_victorieuse_bust",
    phase: 1,
    refs: ["heraldry_cadifor_sigil"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Bust portrait of a mage-queen in her late 50s. The first female archimage-sovereign. Auburn hair (Rougissante line) now ash-streaked, worn swept back severely. Eyes: steel-grey, crackling with faint arcane luminescence — not glowing like fantasy, but a subtle inner light like static electricity. Expression: imperial command, the face of someone who has broken three crowns and absorbed three kingdoms. Cheekbones sharp, jaw defined — arcane power has refined rather than aged her. Wearing layered mage robes in deep indigo and charcoal, over concealed plate armor. A staff topped with a crystalline focus rests against her shoulder. Faint runic script visible along the hem of her robes — almost invisible. Background: sunset over conquered city, smoke and golden light. Golden hour lighting from behind, face lit by reflected warm light.`,
      "3:4"
    ),
  },
  // 1.06 — Marjory (5 angles)
  {
    id: "portrait_marjory_formal",
    phase: 1,
    refs: ["heraldry_cadifor_sigil"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Formal bust portrait of the most powerful empress in history, age 60-65. A woman of pure architectural precision who makes everything around her seem provisional. Silver-white hair worn in an immaculate structured updo — not a strand displaced. Face: severe beauty, high cheekbones, aquiline nose, thin lips set in permanent composure. Eyes: dark grey, bottomless — the eyes of someone who has made power into an art form. Skin: porcelain pale, minimal wrinkles for her age — arcane preservation. Expression: absolute control. Not cold — controlled. Every micro-movement of her face is deliberate. Wearing robes of "blue so controlled it became almost gray" — heavy fabric, impeccable cut, almost invisible mithril embroidery along hems and cuffs. No jewelry except a thin circlet of white gold with a single violet stone. Background: grey marble wall, single shaft of architectural light. Lighting: cool, precise, from upper left — cathedral window quality. 85mm portrait lens.`,
      "3:4"
    ),
  },
  {
    id: "portrait_marjory_dining",
    phase: 1,
    refs: ["portrait_marjory_formal"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `The same silver-haired empress from the reference, now seated at a dining table. Same face, same controlled expression, same immaculate hair. She is lifting a fork with surgical precision — "gesture so precise it is architectural." Eyes slightly downcast, observing her plate with the same intensity she'd give a battle map. Wearing darker evening robes — noir-vert (black-green), heavy silk, catching candlelight in subtle ways. The table before her: dark stone surface, white linen runner with silver frost-pattern embroidery, crystal goblets, gold-rimmed porcelain. Background: imperial dining hall, pale marble columns, floating light spheres at human height. Other guests blurred in background bokeh. Shallow depth of field, warm candlelight.`,
      "3:4"
    ),
  },
  {
    id: "portrait_marjory_armor_ceremony",
    phase: 1,
    refs: ["portrait_marjory_formal"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `The same empress from the reference image, now in full ceremonial armor. Ivory-white metallic plate armor, form-fitting, with mithril embroidery along every edge — micro-runes for stability and silence. The armor is not fantasy — it is functional, realistic, like museum-quality medieval plate but refined to perfection. Over the armor, a cloak of deep violet with cyan-thread infinity symbols woven into the border. She holds Atiesh — a legendary staff, tall as she is, dark wood with a crystalline headpiece emanating faint blue-white light. Standing in a throne room, dawn light streaming through stained glass. Expression: liturgical solemnity — the face of someone performing a sacrament of power. Full body shot.`,
      "3:4"
    ),
  },
  {
    id: "portrait_marjory_campaign",
    phase: 1,
    refs: ["portrait_marjory_formal"],
    outputDir: "portraits",
    aspectRatio: "16:9",
    prompt: withStyle(
      `The same empress, now in campaign armor — stripped of ceremony. Functional ivory plate, scarred and dust-marked from travel. No cloak. Hair still perfect despite hardship — this is a woman who maintains form even in war. Standing over a campaign table in a military tent, pointing at a map with one hand, staff in the other. Two armored officers visible in background, deferential. Expression: focused command — this is the general, not the empress. Eyes narrowed, calculating distances and casualties. Lighting: oil lamp from below, tent canvas diffusing daylight from above. Warm and gritty tones.`
    ),
  },
  {
    id: "portrait_marjory_death",
    phase: 1,
    refs: ["portrait_marjory_formal", "portrait_marjory_armor_ceremony"],
    outputDir: "portraits",
    aspectRatio: "16:9",
    prompt: withStyle(
      `The same empress, lying on a battlefield. Ceremonial armor cracked and bloodied. Silver-white hair loose, spread on dark earth. Eyes open, still containing that bottomless authority, but the light is leaving. One hand still grips Atiesh. Around her, the chaos of battle is visible in blur — this is a close-up on her face and upper body. Blood on her lips. Expression: not defeat — completion. She dies as she lived: in total control of the image she presents to the world. Evening light, golden hour, the beauty of the scene at war with its horror. Macro portrait. Shallow depth of field. Warm golden backlight, cool shadow on face.`
    ),
  },
  // 1.07 — Rose (5 angles)
  {
    id: "portrait_rose_formal",
    phase: 1,
    refs: ["heraldry_cadifor_sigil"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Formal portrait of the most powerful human being who has ever lived, a woman of 44. Not a warrior — something beyond. Dark brown hair with subtle auburn highlights, worn in an effortless arrangement that took a lifetime of culture to achieve. Face: heart-shaped, luminous skin that seems to emit rather than reflect light — not magical glow, but the radiance of perfect health and absolute self-possession. Eyes: dark, almost black, with a quality described as "traversing rather than crushing" — they see through pretense instantly. Expression: serene. Not blank, not cold — serene as a lake that could drown you. The faintest suggestion of a smile that never fully manifests. She is simultaneously the most beautiful and most terrifying person in any room. Wearing robes of such refinement that description fails — layers of grey-silver and deep midnight blue, fabrics that flow like water and catch light like ice crystals. No visible jewelry except a thin circlet almost invisible in her hair. Background: grey marble, a single window casting diffused light. 85mm lens. Lighting: soft but directional — the Vermeer treatment.`,
      "3:4"
    ),
  },
  {
    id: "portrait_rose_throne",
    phase: 1,
    refs: ["portrait_rose_formal"],
    outputDir: "portraits",
    aspectRatio: "16:9",
    prompt: withStyle(
      `The same woman from the reference, now seated on the imperial throne. Same dark hair, same serene expression, same luminous skin. The throne: white stone veined grey-gold, with geometric mithril insertions and faint ward runes. She sits not with rigidity but with perfect ease — as if the throne adjusted itself to her. Wearing heavier robes for formal audience — deep violet over grey, Atiesh leaning against the throne beside her. The throne room: immense nave, pale marble columns, mineral crystal filtering light into architectural beams. She is small in the vast space but the entire room's geometry points toward her. Expression: absolute attention. She is listening to a petitioner we cannot see, and her listening is more powerful than others' speech. Wide shot. Cool cathedral light, warm gold reflected off marble.`
    ),
  },
  {
    id: "portrait_rose_intimate",
    phase: 1,
    refs: ["portrait_rose_formal"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `The same woman, now in a private moment. Hair slightly looser, wearing simpler robes — still perfect, but softer. She is reading by window light, one hand supporting her chin. For the first time, something human is visible — not vulnerability, but the weight of absolute power in a quiet moment. The room is Nouvelle-Avalon: dark velvet drapes, white fur rugs, crystal-lamps at low intensity, leather-bound books. This is the only place she allows herself to simply exist. Expression: thoughtful, almost sad — the loneliness of the summit. Lighting: north window light, soft and even, Vermeer-style. Intimate medium close-up.`,
      "3:4"
    ),
  },
  {
    id: "portrait_rose_arcane",
    phase: 1,
    refs: ["portrait_rose_formal"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `The same woman, now channeling arcane and necrotic power simultaneously. She stands with arms slightly raised, and between her hands, two energies spiral — one white-blue (arcane), one deep violet-black (necrotic). The energies do not clash — they weave together with perfect control. Her robes billow slightly from the power discharge. Her eyes carry a faint dual luminescence — ice-blue arcane in one, deep violet necro in the other. Expression: absolute concentration without strain. This is effortless mastery of forces that would destroy lesser mages. Hair lifted by ambient energy. Background: dark void, she is the only light source in frame. Shot as if this were a real person really channeling energy — not a videogame. Subtle VFX, not bombastic. The power is terrifying because it's quiet.`,
      "3:4"
    ),
  },
  {
    id: "portrait_rose_entering",
    phase: 1,
    refs: ["portrait_rose_formal"],
    outputDir: "portraits",
    aspectRatio: "16:9",
    prompt: withStyle(
      `The same woman entering a grand ballroom. Shot from behind the guests — we see their backs, their heads turning, and at the far end of the room, Rose walking through the doors. She is backlit by warm golden light from the corridor behind her. She is not doing anything spectacular — merely walking. But the entire axis of the room has changed. People have forgotten how to stand naturally. Her silhouette: perfect posture, robes flowing, a faint luminous quality. The guests in foreground: nobles in fine dress, frozen mid-conversation. Wide anamorphic shot. Rack focus from frozen guests (sharp) to Rose approaching (coming into focus).`
    ),
  },
  // 1.08 — Arwyn
  {
    id: "portrait_arwyn_bust",
    phase: 1,
    refs: ["heraldry_cadifor_sigil"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Bust portrait of a priestess-queen, age 45-50. Warm beauty where Rose is cool perfection. Fair hair — honey-gold, worn in soft waves. Eyes: warm brown with golden flecks, capable of both spiritual intensity and genuine human warmth. Face: softer features than Rose, fuller lips, laugh lines visible — this is a woman who smiles fully and often. Skin: sun-kissed, healthy glow. Expression: a full, unguarded smile — the most human face in the entire dynasty. Wearing white-and-gold priestly vestments with light-infused embroidery, warmer tones than Rose's cool palette. A thin gold circlet with a sun motif. Background: temple interior, warm light streaming through amber glass. Warm golden lighting throughout — this woman IS warmth.`,
      "3:4"
    ),
  },
  // 1.09 — Banni
  {
    id: "portrait_banni_bust",
    phase: 1,
    refs: ["heraldry_cadifor_sigil"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Bust portrait of a man in his 40s bearing an impossible burden with quiet dignity. Dark hair, close-cropped, receding slightly. Face: handsome but drawn — cheeks hollow, eyes shadowed. Not weak — exhausted by duty. Eyes: brown, deep, carrying a sorrow he never discusses. A man who inherited an empire he didn't build and carries it without complaint. Expression: patient endurance. The set of his jaw says "I will not fail" while his eyes say "I know the cost." Wearing practical imperial robes — dark grey, no ostentation. The crown sits on his head like a weight, not an ornament. Background: rain-streaked window, grey sky, a lonely study. Desaturated tones. Cool diffused daylight, melancholic atmosphere.`,
      "3:4"
    ),
  },
  // 1.10 — Benjamin
  {
    id: "portrait_benjamin_bust",
    phase: 1,
    refs: ["heraldry_cadifor_sigil"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Bust portrait of a man in his late 40s, radiating dangerous intelligence. Dark hair swept back, sharp widow's peak. Face: gaunt, angular, aristocratic bone structure taken to an extreme — beautiful in the way a blade is beautiful. Eyes: ice-blue, pale, unblinking — predator's eyes. Expression: thin smile that doesn't reach his eyes. Not a madman — worse: a perfectly rational man who has chosen cruelty as method. Skin: pale, rarely sees sunlight — this is a man of chambers and courts. Wearing black velvet robes with subtle dark violet trim, silver clasps. Everything expensive, everything sharp. Background: dark wood-paneled study, single candle, his face half in shadow. Chiaroscuro lighting — Caravaggio treatment. Deep shadows, sharp highlights.`,
      "3:4"
    ),
  },
  // 1.11 — Llane Wrynn
  {
    id: "portrait_llane_bust",
    phase: 1,
    refs: ["heraldry_cadifor_sigil"],
    outputDir: "portraits",
    aspectRatio: "3:4",
    prompt: withStyle(
      `Bust portrait of a young king in his late 20s. Classically handsome — strong jaw, high forehead, clear blue eyes. Brown hair worn at shoulder length in the Wrynn fashion. Expression: earnest nobility — this is a man who believes in duty and love with equal conviction. A face that could wait "ten winters, a hundred if needed." Wearing Stormwind blue-and-gold over light plate armor. A golden lion clasp at his cloak. Clean-shaven. Background: castle parapet, blue sky and distant green hills. Natural daylight, heroic but grounded — not a poster, a person.`,
      "3:4"
    ),
  },
];

// ─── PHASE 2: LOCATIONS & ARCHITECTURE ─────────────────────────────────────
// Will be expanded with all locations

const phase2: ImagePrompt[] = [
  {
    id: "location_stormwind_throne_room",
    phase: 2,
    refs: ["materials_imperial_palette", "heraldry_cadifor_sigil"],
    outputDir: "locations",
    aspectRatio: "21:9",
    prompt: withStyle(
      `Interior of an imperial throne room of impossible precision. Immense nave with pale marble columns veined grey-gold, stretching toward a vaulted ceiling. The vault overwhelms by precision, not size — every geometric relationship between arch and column is perfect. Stained glass windows of mineral crystal filter light into architectural beams that seem deliberate, almost sentient. The throne at the far end: white stone veined grey-gold, geometric accoutrements, blackened mithril insertions, faint ward runes glowing at the edges. Floor: polished dark stone that absorbs rather than reflects light. The room is cold, immense, and terrifyingly beautiful. No people. Empty. The architecture speaks for itself. Wide anamorphic shot. Cool cathedral light with warm gold undertones reflected from marble. Dust motes visible in light shafts. The scale is overwhelming.`,
      "21:9"
    ),
  },
  {
    id: "location_imperial_dining_hall",
    phase: 2,
    refs: ["materials_imperial_palette", "heraldry_cadifor_sigil"],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `Interior of the imperial dining hall. Pale marble columns with blue veins. Walls: alternating panels of victory tableaux, illuminated maritime maps, polished obsidian relief, and dormant arcane mirrors. Floating light spheres drift at human height on circuits so perfect they avoid all shadows — warm golden light. Peripheral candles float like a stellar retinue maintained by ancient court magic. The long dining table: dark stone polished to matte, absorbing light. No tablecloth — instead, white linen runners embroidered with silver frost patterns. Crystal goblets, gold-rimmed porcelain. Above the table: guard crystals with ancient protective wards. 15 place settings, each mathematically precise. No people. The table awaits. Wide shot. Warm golden atmospheric lighting from floating sources. Intimate despite scale.`
    ),
  },
  {
    id: "location_nouvelle_avalon_interior",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `Interior of a royal private chamber, intimate rather than grand. Dark velvet drapes in deep night-blue, catching candlelight. White fur carpets underfoot. Supple leather book bindings on shelves. Crystal-lamps at low intensity — double-crystal cages on black moonstone bases, emitting warm adaptive light. Enameled door knobs glint softly. A reading alcove by a tall window, grey sky visible outside. The room feels like silk — dense, warm, private. This is where real conversations happen, where the mask comes off. No people. Lived-in but perfectly maintained. Medium shot. Warm interior glow, cool grey window light. Dutch master painting quality.`
    ),
  },
  {
    id: "location_clairbois_ballroom",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `Interior of an aristocratic ballroom that practices restraint as philosophy. The architecture is not grand but perfect — every proportion calculated to suggest quality without exhibition. Dark wood paneling, crystal chandeliers at moderate height (not soaring), polished floors reflecting candlelight. Tall windows looking onto formal gardens at dusk. A raven motif appears subtly in carved corbels and iron fixtures — intelligence cold, patience embodied, observation height. The room suggests money that never needs to announce itself. "True elegance is not adding, but retaining better." No people. Set for an evening reception — candles lit, flowers minimal. Warm candlelight, deep shadows, restrained luxury. Barry Lyndon lighting.`
    ),
  },
];

// ─── PHASE 2B: EXPANDED LOCATIONS (cities, territories, natural features) ───

const phase2_expanded: ImagePrompt[] = [
  // ── STORMWIND CITYSCAPE ──
  {
    id: "location_stormwind_city",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "21:9",
    prompt: withStyle(
      `Aerial establishing shot of a vast medieval imperial capital at golden hour. Stormwind — the greatest human city in the world. Massive stone walls, tiered districts climbing from harbor to palace. The Royal University visible as a cluster of domed buildings with arcane-lit windows. The palace crowns the highest hill — pale marble with gold-veined stone, dwarfing everything below. A deep harbor filled with warships and merchant vessels. Bridges of white stone span canals. The city is alive — smoke from ten thousand chimneys, market squares, cathedral spires. Architecture: late medieval stone, evolved beyond fortress into administrative grandeur. Not fantasy excess — functional beauty at imperial scale. No people visible at this distance. Wide establishing shot.`,
      "21:9"
    ),
  },
  // ── STORMWIND HARBOR ──
  {
    id: "location_stormwind_harbor",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `A vast imperial harbor at dawn. Stormwind's port district — the commercial heart of an empire. Dozens of ships: heavy warships with violet-and-cyan pennants, merchant carracks, sleek goblin trading vessels. Stone quays stretching into a deep natural bay. Warehouses of dark stone line the waterfront. Cranes and pulleys for loading cargo. The water is grey-green, reflecting a pale sunrise. In the background, the city rises in tiers up the hillside, palace visible at the summit. Salt air, morning mist, the smell of tar and rope. A working port of immense scale, not a picturesque fishing village. No people. Empty dawn before the day begins. Wide shot.`
    ),
  },
  // ── OLD TOWN DISTRICT ──
  {
    id: "location_stormwind_old_town",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `A narrow medieval street in the oldest district of a great city. Old Town — cobblestones worn smooth by centuries, half-timbered buildings leaning toward each other across the alley, upper stories almost touching. Ironwork lanterns, shuttered windows, a tavern sign creaking in the wind. The architecture is older, rougher than the rest of the city — this is where the original settlement began before it became an empire. Atmosphere: slightly threatening, lived-in, real. Not picturesque — authentic. A place where conspiracies start and rebellions are born. Dusk light filtering through the gap between rooftops. No people. Wet cobblestones reflecting lamplight.`
    ),
  },
  // ── NOUVELLE-AVALON EXTERIOR ──
  {
    id: "location_nouvelle_avalon_exterior",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "21:9",
    prompt: withStyle(
      `A fortified paladin city emerging from dense eastern forest at dawn. Nouvelle-Avalon — the dynastic matrix of the Cadifor empire, second capital. White stone walls with silver-blue banners. A great cathedral with spires catching the first light. The city is smaller than Stormwind but denser, more refined — every building serves a purpose. Training grounds visible behind the walls where young paladins drill. The surrounding forest — the Eastern Sylve — presses close, ancient oaks and elms creating a green wall. Roads of packed earth lead into the forest canopy. The architecture mixes fortress practicality with religious grace — buttresses, rose windows, crenellated towers with prayer bells. Mist rises from the forest floor. No people. Dawn breaking over the canopy.`,
      "21:9"
    ),
  },
  // ── NOUVELLE-AVALON CHAPEL / CATHEDRAL ──
  {
    id: "location_nouvelle_avalon_cathedral",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `Interior of a paladin cathedral in a sacred military city. Nouvelle-Avalon's great chapel — where Cadifor heirs have been consecrated for four centuries. Soaring stone arches, stained glass depicting holy warriors, not saints — armored figures with swords and light. The altar: white stone with silver inlay, Atiesh motifs carved into the base. Rows of dark oak pews polished by centuries of use. Light falls in colored shafts — gold, violet, blue — creating a geometry of devotion on the stone floor. Votive candles burn in iron racks. The air feels heavy with centuries of prayer. Not ostentatious — martial piety, discipline made sacred. No people. The silence itself is a presence.`
    ),
  },
  // ── SYLVE DE L'EST (Eastern Forest) ──
  {
    id: "location_sylve_de_lest",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "21:9",
    prompt: withStyle(
      `A vast primordial forest stretching to the horizon, shot from a high ridge at golden hour. The Eastern Sylve — where forest itself became an object of public law. Ancient oaks, elms, and birches with trunks three meters wide, their canopy forming a green cathedral roof. Shafts of golden light pierce through the leaves. A narrow royal road cuts through the trees — packed earth, stone markers at intervals, wide enough for a cavalry column. In the distance, a watchtower emerges above the canopy, flying a small violet pennant. The forest is not wild — it is managed, patrolled, governed. But it is immense. Birdsong and the rustle of wind in ten million leaves. Mist pooling in valleys between ancient trunks. No people. The forest as sovereign territory.`,
      "21:9"
    ),
  },
  // ── RIVIERE D'ARGELAN ──
  {
    id: "location_riviere_argelan",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `A cold forest river in the Eastern Sylve at dawn. The River Argelan — where Viki Cadifor hunted as a child. Dark water moving fast over smooth stones, banks of moss and fern. Ancient trees lean over the water, roots exposed by erosion. Morning mist hangs low over the surface. The light is cold, blue-grey, the sun not yet above the canopy. On the far bank, a flash of white — an albino wolf watching from the tree line, yellow eyes catching the light. The scene is primal, wild, dangerous. This is not a pastoral countryside stream — this is frontier wilderness where nature has teeth. No people. Untouched, ancient, cold.`
    ),
  },
  // ── LORDAERON CITY ──
  {
    id: "location_lordaeron_city",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "21:9",
    prompt: withStyle(
      `A vast northern capital built for permanence. Lordaeron — the ancient center of the human north, now an imperial province. Massive grey stone fortifications, cathedral district with three great spires, a royal palace of heavy proportions (not elegant like Stormwind — imposing, built to withstand siege and winter). Agricultural fields visible beyond the walls — golden wheat stretching to forested hills. The architecture is older, heavier, more northern European than Stormwind — thick walls, small windows, slate roofs. Overcast sky, pale light through clouds. The city has survived centuries and looks it — weathered but unbroken. A place of religious weight and agricultural wealth. No people. Autumn light, leaves turning gold in the surrounding forests.`,
      "21:9"
    ),
  },
  // ── LORDAERON THRONE ROOM ──
  {
    id: "location_lordaeron_throne_room",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `Interior of the ancient Lordaeron throne room — now an imperial administrative hall. Heavy stone architecture, vaulted ceiling with ribbed arches. The throne: massive dark stone, older than the Cadifor dynasty, draped with violet-and-cyan banners. Tall windows with heavy leading, casting cold northern light. Tapestries depicting old battles line the walls — faded with age. The floor: dark flagstones worn smooth. This is not Stormwind's precision — this is raw, ancient power. The kind of room where you hear your own breathing. Torch brackets on the walls, unlit in daylight. Cold, imposing, sacred in its way. No people. The weight of centuries.`
    ),
  },
  // ── STORMGARDE FORTRESS ──
  {
    id: "location_stormgarde_fortress",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "21:9",
    prompt: withStyle(
      `A military fortress-city on a mountain plateau, built for war. Stormgarde — the martial heart of the human north. Massive curtain walls of dark grey stone, watchtowers at every corner, training grounds visible within. The architecture is purely military — no decoration, no beauty beyond function. Barracks, armories, smithies with smoke rising. Below the fortress, mining operations visible in the mountainside — tunnels and scaffolding. Snow on the peaks above. Wind whipping banners — grey and crimson, the old Trollbane colors. Beyond the walls, a vast highland stretching to distant mountains. The air looks cold and thin. This is a city that exists to fight and forge. No people. Overcast sky, hard light.`,
      "21:9"
    ),
  },
  // ── KARAZHAN TOWER ──
  {
    id: "location_karazhan_tower",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "3:4",
    prompt: withStyle(
      `A massive arcane tower rising from dark forests at twilight. Karazhan — the greatest repository of magical knowledge in the empire. The tower is impossibly tall, its upper stories vanishing into low clouds. Dark stone with faint blue-violet veins of residual magic. Stained glass windows at intervals, each glowing with a different color — laboratories and libraries within. At the base, a fortified compound with lower buildings — the glass workshops of the Verriers de Karazhan. The surrounding forest is darker, stranger — trees twisted by proximity to arcane energy, fungi glowing faintly on bark. A single road approaches through an iron gate. The atmosphere is heavy with power — not threatening, but immense. Lightning flickers in the clouds above the spire. No people. Dusk, purple sky.`,
      "3:4"
    ),
  },
  // ── KARAZHAN INTERIOR — LIBRARY ──
  {
    id: "location_karazhan_library",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `Interior of an arcane library of staggering scale. Karazhan's central repository — books stretching upward into darkness, the shelves curving with the tower's architecture. Spiral staircases of dark iron connect levels. Floating orbs of soft blue light illuminate reading alcoves. Ancient tomes bound in leather, metal, and stranger materials. A central reading table of dark stone, covered with star charts and astronomical instruments of bronze and crystal. The air shimmers slightly — residual magic making the atmosphere itself shimmer like heat haze. Glass lenses and alchemical apparatus visible on side tables — the tools of the Verriers. This is where empires are understood, not ruled. No people. Warm lamp light against cool magical glow.`
    ),
  },
  // ── KEZAN PORT ──
  {
    id: "location_kezan_port",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `A tropical volcanic island port at sunset. Kezan — the goblin banking and trading hub of the empire. A natural harbor ringed by volcanic mountains, the slopes green with tropical vegetation. The port itself is chaotic, vibrant — warehouses of painted wood and corrugated metal, cranes and pulleys of goblin engineering, ships from a dozen nations crowding the docks. The Banque Verte de Kezan visible on a hill above the harbor — a surprisingly solid stone building with green-copper domes. The mint workshop nearby: smoke from the furnaces where imperial deniers are struck. The water is turquoise, the sky orange-pink. Palm trees and exotic flowers. Everything is louder, brighter, more alive than the restrained imperial cities. No people. Golden hour light.`
    ),
  },
  // ── GILNEAS WALL ──
  {
    id: "location_gilneas_wall",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "21:9",
    prompt: withStyle(
      `A massive stone wall stretching across a foggy landscape, disappearing into mist in both directions. The Gilneas Wall — the physical embodiment of isolationism. Dark grey stone, weathered by decades of rain, lichen growing in cracks. Watchtowers at regular intervals, their windows dark and unwelcoming. On one side, the imperial world — farmland, roads, distant villages. On the other side, nothing visible — only fog and the suggestion of dark forests. The wall is not elegant — it is a blunt refusal made into architecture. No gates visible in this section. Crows perch on the battlements. The atmosphere is oppressive, closed, final. No people. Overcast day, drizzle, grey light everywhere.`,
      "21:9"
    ),
  },
  // ── IRONFORGE EXTERIOR ──
  {
    id: "location_ironforge_exterior",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `The entrance to a dwarven mountain city carved into a snow-capped peak. Ironforge — the independent metallurgical power. A colossal stone gate flanked by carved dwarven warriors, each thirty meters tall, hammers raised. The gate is open, warm orange light spilling from within. Smoke rises from vents in the mountainside — the great forges working day and night. A stone road winds up to the entrance through alpine meadows and pine forests. Snow dusts the higher slopes. The engineering is precise, geometric, built to last millennia — not human aesthetics but dwarven: heavier, deeper, more permanent. The scale says: we carved a mountain to make our home. No people. Winter morning, clear sky, breath-visible cold.`
    ),
  },
  // ── COL DE YIELDEN (battlefield) ──
  {
    id: "location_col_de_yielden",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "21:9",
    prompt: withStyle(
      `A mountain pass at dawn before a battle. The Col de Yielden — where Andrea II crushed the Bradney rebellion. Three distinct terrain features: to the south, a gentle slope covered in dense forest — natural cover for archers. At center, a rocky band of bare stone — the killing ground where infantry will clash. To the north, a sheer cliff face with thermal updrafts — a natural corridor for aerial combat. Morning mist fills the valley below. The pass is narrow enough that numbers matter less than position. Dew on grass, frost on stone. In the distance, two camps visible — cooking fires of opposing armies. The landscape is beautiful and deadly. No people in the foreground. Dawn light, cold blue shadows, warm gold on the peaks.`,
      "21:9"
    ),
  },
  // ── DUCHE KOLKAR (Kalimdor frontier) ──
  {
    id: "location_duche_kolkar",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `A frontier settlement on an alien continent. The Duchy of Kolkar — the empire's foothold on Kalimdor. A new-built stone fort surrounded by wooden palisades, pioneer farmsteads spreading outward. The landscape is different from the imperial heartland — red-brown earth, sparse dry trees, distant mesas. The architecture is recognizably imperial — stone foundations, slate roofs — but adapted to the new climate: wider eaves, open courtyards, water cisterns. A small marketplace where exotic goods change hands. Beyond the settlement, vast empty plains stretching to alien mountains. The settlement feels brave and fragile — civilization's edge pushed into the unknown. No people. Afternoon light, long shadows, dust in the air.`
    ),
  },
  // ── KALDOREI FOREST (Kalimdor) ──
  {
    id: "location_kaldorei_forest",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `An ancient enchanted forest of impossible scale. The Kaldorei forests of Kalimdor — where trees are ten thousand years old and the canopy blocks the sun entirely. Colossal trunks wider than houses, roots forming natural archways. Bioluminescent flowers and fungi cast soft blue-purple light on everything. The forest floor is carpeted in moss, ferns, and strange plants that seem to breathe. Ancient stone ruins barely visible beneath vines — a civilization older than human memory. The atmosphere is alien, sacred, dangerous to outsiders. This is not a European forest — this is something older, deeper, half-conscious. Filtered moonlight through the canopy, despite it being day. No people. Eerie, beautiful, primordial.`
    ),
  },
  // ── MORASSES NOIRES (Black Marshes) ──
  {
    id: "location_morasses_noires",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `A vast marshland of strategic importance at foggy dawn. The Morasses Noires — the Black Marshes, direct domain of the crown. Dark water pools between gnarled cypress trees draped in grey moss. Wooden boardwalks and stone causeways snake through the swamp — imperial infrastructure maintaining control over hostile terrain. Watchtowers rise on stilts above the fog line. The water is black and still, reflecting a grey sky. Occasional ruins visible — ancient structures half-swallowed by the marsh. Birds of prey circle overhead. The marshes are not wasteland — they are a natural fortress, a place where armies drown and only those who know the paths survive. No people. Grey morning light, mist, ominous stillness.`
    ),
  },
  // ── HAUTEBRANDE (agricultural heartland) ──
  {
    id: "location_hautebrande",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "21:9",
    prompt: withStyle(
      `Rolling agricultural plains stretching to forested hills under a vast sky. Hautebrande — the breadbasket of the northern empire. Golden wheat fields in late summer, separated by stone walls and hedgerows. A country road winds between prosperous farms — stone houses with slate roofs, barns, orchting wells. In the middle distance, a modest castle on a hill — the seat of a frontier count, practical rather than palatial. Church steeples mark villages scattered across the landscape. The sky is enormous — high cumulus clouds, the quality of light that painters chase. This is the quiet strength of empire: land that feeds a million soldiers. Pastoral, vast, productive. No people. Late afternoon light, warm gold on wheat, long shadows.`,
      "21:9"
    ),
  },
  // ── CLAIRBOIS EXTERIOR ──
  {
    id: "location_clairbois_exterior",
    phase: 2,
    refs: ["materials_imperial_palette"],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `An aristocratic manor house at dusk, set in formal gardens. Clairbois — the seat of the Ebonlocke duchy, where restraint is philosophy. The palace is not vast — it is perfect. Dark stone and dark wood, symmetrical wings, tall windows catching the last light. A formal garden in front: geometric hedges, gravel paths, a central fountain with a raven sculpture in dark iron. No gilding, no excess — every element selected for quality over display. Old trees frame the approach — an avenue of dark oaks leading to the entrance. The gardens transition into a wilder park beyond. Warm light from within the windows. A single lit lantern at the entrance. The building whispers old money, long memory, quiet power. No people. Blue hour, last light.`
    ),
  },
  // ── BAIE DU BUTIN (Southern port) ──
  {
    id: "location_baie_du_butin",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `A southern coastal port city where jungle meets ocean. Baie-du-Butin — southern relay of the Cadifor dynasty, a trading port where imperial order meets tropical chaos. A natural bay with deep water, surrounded by lush green hills. The port: wooden docks extending over turquoise water, stone warehouses with terracotta roofs, a modest fortress on the headland flying Cadifor banners. Palm trees line the waterfront. Fishing boats and merchant vessels at anchor. The architecture is lighter than northern imperial — white plaster, open balconies, terracotta tiles — adapted to heat. Behind the town, dense jungle climbs the hillside. The sea is a deeper blue than northern waters. No people. Tropical morning, sharp light and shadows.`
    ),
  },
  // ── DARROW (Ducal seat of the East) ──
  {
    id: "location_darrow",
    phase: 2,
    refs: [],
    outputDir: "locations",
    aspectRatio: "16:9",
    prompt: withStyle(
      `A fortified ducal town where forest and river meet. Darrow — the secular ducal node of the Eastern Sylve, the political frame around Nouvelle-Avalon. Stone walls following the contour of a river bend. A modest castle with round towers and a central keep — not palatial but solid, built for administration and defense. Below the castle, a market town with timber-frame buildings, a stone bridge over the river, mills along the bank. The Eastern Sylve forest presses close on three sides. River barges loaded with timber and grain. The town is prosperous but not grand — it is a working capital, not a showpiece. Autumn colors in the surrounding forest. No people. Morning light, river mist.`
    ),
  },
];

// Export expanded for external use
export const PHASE_2_EXPANDED = phase2_expanded;

// ─── PHASE 3: COMPOSED SCENES ──────────────────────────────────────────────

const phase3: ImagePrompt[] = [
  {
    id: "scene_diner_imperial",
    phase: 3,
    refs: [
      "portrait_marjory_dining",
      "portrait_rose_formal",
      "portrait_arwyn_bust",
      "location_imperial_dining_hall",
    ],
    outputDir: "scenes",
    aspectRatio: "16:9",
    prompt: withStyle(
      `The imperial dining hall from the reference image, now occupied. At the head of the table, the silver-haired empress Marjory from ref 1 sits with surgical precision, lifting a fork as if performing architecture. To her right, the dark-haired younger woman Rose from ref 2 — serene, luminous, watching everything with eyes that traverse. Across from Rose, the fair-haired priestess Arwyn from ref 3, the warmest presence at the table. Other nobles line the table — 12 figures in rich but restrained clothing. Floating light spheres illuminate the scene with golden warmth. The 15-course meal is mid-service — silver cloches, crystal goblets catching light, white linen runners with silver embroidery. The atmosphere is thick with unspoken politics. Every gesture is loaded. Keep all character faces EXACTLY matching their reference images. Wide establishing shot. Warm golden interior lighting, rich depth of field.`
    ),
  },
  {
    id: "scene_rose_entering_clairbois",
    phase: 3,
    refs: [
      "portrait_rose_entering",
      "portrait_rose_formal",
      "location_clairbois_ballroom",
    ],
    outputDir: "scenes",
    aspectRatio: "16:9",
    prompt: withStyle(
      `The Clairbois ballroom from ref 3, now filled with 40-50 nobles in formal evening dress. Shot from behind the crowd — we see their backs, their heads turning. At the far doorway, the woman Rose from refs 1-2 is entering. She is backlit by warm corridor light. She is merely walking. But the room's center of gravity has shifted. Nobles in the foreground have frozen mid-conversation, mid-gesture. A woman's wine glass hovers halfway to her lips. A man has forgotten to close his mouth. Rose's silhouette: perfect posture, flowing midnight-grey robes, faint luminous quality to her skin. "When she entered, it was not the noise that changed. It was the axis." Keep Rose's face EXACTLY matching reference images. Wide anamorphic. Warm candlelight interior, depth of field separating foreground from background.`
    ),
  },
  {
    id: "scene_marjory_death",
    phase: 3,
    refs: ["portrait_marjory_death", "portrait_marjory_armor_ceremony"],
    outputDir: "scenes",
    aspectRatio: "16:9",
    prompt: withStyle(
      `Battlefield at sunset. The silver-haired empress from the references lies on dark earth, her ivory ceremonial armor cracked and bloodied. Her white hair is loose, spread like a corona. Atiesh, the legendary staff, lies broken beside her. One hand still grips a fragment. Her eyes are open — still containing authority, but the light is leaving. Blood on her pale lips. Around her, the blur of battlefield aftermath. Expression: not defeat — completion. She dies as she lived: in total control of the image she presents to the world. In the background, blurred figures of both allies and enemies, frozen in the realization of what has just happened. Keep her face EXACTLY matching reference images. Intimate close-up. Golden hour backlight, cool shadow on face. Beauty at war with horror.`
    ),
  },
  {
    id: "scene_rose_coronation",
    phase: 3,
    refs: [
      "portrait_rose_formal",
      "portrait_rose_throne",
      "location_stormwind_throne_room",
    ],
    outputDir: "scenes",
    aspectRatio: "16:9",
    prompt: withStyle(
      `The Stormwind throne room from ref 3, packed with hundreds of figures. At center, the woman Rose from refs 1-2 stands before the throne, receiving the crown. She is perfectly still while the officiant (an elderly bishop in white-gold vestments) places a thin white-gold circlet on her dark hair. Her expression: serene acceptance of something that was always inevitable. Not triumph — assumption. The crowd: hundreds of nobles, military commanders, foreign dignitaries, all watching with varying mixtures of awe, calculation, and submission. Shafts of mineral-crystal light fall from the vault above like divine sanction. The scale of the room dwarfs everyone except her. Keep Rose's face EXACTLY matching references. Wide establishing shot. Cathedral light from above, warm reflected gold from marble. Epic scale, intimate emotion.`
    ),
  },
];

// ─── PHASE 4: SITE ASSETS ──────────────────────────────────────────────────

const phase4: ImagePrompt[] = [
  {
    id: "hero_homepage",
    phase: 4,
    refs: ["location_stormwind_throne_room", "heraldry_cadifor_sigil"],
    outputDir: "scenes",
    aspectRatio: "21:9",
    prompt: withStyle(
      `Extreme wide shot of the imperial throne room from ref 1, empty, shot through a doorway. We see the throne at the far end, a single shaft of light illuminating it. The doorway frames the image. On the wall above the throne, the violet-and-cyan infinity sigil from ref 2, rendered in stained glass, casting colored light. The image should feel like an invitation — "enter this world." Cool atmospheric lighting, warm gold on throne. Depth and mystery.`,
      "21:9"
    ),
  },
  {
    id: "header_personnages",
    phase: 4,
    refs: [
      "portrait_marjory_formal",
      "portrait_rose_formal",
      "portrait_aberthol_bust",
      "portrait_viki_bust",
    ],
    outputDir: "scenes",
    aspectRatio: "21:9",
    prompt: withStyle(
      `A horizontal composite showing four generations of rulers in profile, overlapping slightly. From left to right: the elderly warrior Aberthol from ref 3, the warrior woman Viki from ref 4, the silver-haired empress Marjory from ref 1, and the dark-haired young queen Rose from ref 2. Each in profile, facing right, as if time flowing forward. Background: gradient from dawn (left, warm) to dusk (right, cool). Keep all faces EXACTLY matching their references. Dramatic side lighting on each face, unified background gradient.`,
      "21:9"
    ),
  },
];

// ─── ALL PROMPTS ────────────────────────────────────────────────────────────

export const ALL_PROMPTS: ImagePrompt[] = [
  ...phase0,
  ...phase1,
  ...phase2,
  ...phase2_expanded,
  ...phase3,
  ...phase4,
];

export function getPromptsByPhase(phase: number): ImagePrompt[] {
  return ALL_PROMPTS.filter((p) => p.phase === phase);
}

export function getPromptById(id: string): ImagePrompt | undefined {
  return ALL_PROMPTS.find((p) => p.id === id);
}

export function getPromptDeps(prompt: ImagePrompt): ImagePrompt[] {
  return prompt.refs
    .map((ref) => ALL_PROMPTS.find((p) => p.id === ref))
    .filter((p): p is ImagePrompt => p !== undefined);
}

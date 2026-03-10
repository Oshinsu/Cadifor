# DOSSIER DE GENERATION — Assets Visuels Cadifor
## Nano Banana Pro via OpenRouter

---

## DIRECTIVE ARTISTIQUE GLOBALE

**Style cible** : Ultra-realisme cinematique. Game of Thrones, pas film Warcraft.
**References visuelles** : ILM VFX, cinematique Blizzard (qualite, pas esthetique cartoon), HBO costume design.
**Grading** : Cinematic color grading — tons chauds dores pour les interieurs imperiaux, bleu acier froid pour les exterieurs nordiques, clair-obscur dramatique pour les scenes de pouvoir.
**Anti-patterns** : PAS de fantasy kitsch, PAS de couleurs saturees a la WoW, PAS d'armures cartoon, PAS de poses heroiques generiques. Les gens ressemblent a des VRAIS humains.

### Formule de style (a ajouter a chaque prompt)

```
Cinematic still, photorealistic, shot on ARRI Alexa 65, anamorphic lens.
Skin texture visible, natural imperfections, real fabric weight and drape.
Color grading: warm gold undertones for interiors, cool steel blue for exteriors.
Lighting: motivated source lighting, no flat fill. Depth of field with bokeh.
Production design level: HBO Game of Thrones season 4+, ILM VFX compositing.
Aspect ratio: 16:9.
```

---

## PHASE 0 — HERALDIQUE & MATERIAUX
> Aucune reference necessaire. Genere le vocabulaire visuel de base.

### 0.1 — Blason Cadifor

```
ID: heraldry_cadifor_sigil
Refs: aucune
Prompt:
A royal coat of arms on aged parchment. The field is deep violet-purple,
rich as Tyrian dye. At center, a stylized infinity symbol rendered in luminous
cyan-azure, precise geometric linework, metallic leaf highlights. No animals,
no text. The symbol radiates cold intellectual precision. The design transcends
medieval heraldry — abstract, modern, timeless. Photographed as a museum piece
under controlled gallery lighting, shallow depth of field on the embroidery threads.
Cinematic still, photorealistic, shot on ARRI Alexa 65.
```

### 0.2 — Palette materiaux imperiaux

```
ID: materials_imperial_palette
Refs: aucune
Prompt:
A material sample board photographed in a design studio. Six swatches arranged
in grid: (1) pale veined marble with grey-gold veins and stellar mica inclusions,
(2) blackened mithril metal — dark gunmetal with faint blue-silver sheen,
(3) mineral crystal — transparent with internal light diffusion,
(4) dense dark stone polished to matte — absorbs rather than reflects light,
(5) night-black velvet with invisible embroidery only visible at angle,
(6) white linen embroidered with silver thread in frost patterns.
Studio lighting, macro detail, photorealistic textures.
Aspect ratio: 16:9.
```

---

## PHASE 1 — PORTRAITS INDIVIDUELS
> Aucune reference sauf heraldique pour contexte. 3-5 angles par personnage majeur.

### Regles de prompting portrait

- Decrire PHYSIQUEMENT : age, morphologie, cheveux, yeux, peau, cicatrices
- Decrire le VETEMENT avec materiaux precis
- Decrire l'EXPRESSION et ce qu'elle trahit du personnage
- Cadrage : buste 3/4, portrait serré, et plan moyen minimum
- Eclairage : source motivee (bougie, fenetre, soleil couchant)
- Rappel : NB Pro ne sait PAS qui est Marjory Cadifor. Tout decrire.

---

### 1.01 — ABERTHOL "Le Vieux Lion"

```
ID: portrait_aberthol_bust
Refs: heraldry_cadifor_sigil (style context)
Prompt:
Bust portrait of an 80-year-old warrior king. Massive frame despite age,
shoulders broad as a doorway. Face deeply weathered — decades of outdoor
campaigning carved into every crease. White hair cropped military-short,
thick white beard trimmed but not manicured. Eyes: pale blue-grey, still sharp
as a blade, the gaze of a man who has killed and commanded for 50 years.
Nose broken at least twice. Jaw set with habitual authority.
Wearing heavy dark fur cloak over functional plate armor — not decorative,
scarred from use. A small violet-and-cyan clasp at the throat (infinity sigil).
Background: stone wall of a fortress, warm firelight from the left.
Cinematic still, photorealistic, shot on ARRI Alexa 65, anamorphic lens.
Skin texture visible, natural imperfections, real fabric weight.
Lighting: fire from left, cold blue window light from right.
```

```
ID: portrait_aberthol_throne
Refs: portrait_aberthol_bust
Prompt:
Full body portrait of the same elderly warrior king from the reference image,
now seated on a rough-hewn stone throne. He sits forward, elbows on knees,
not reclining — a man who has never relaxed on a throne in his life.
Same weathered face, white cropped hair, pale blue-grey eyes.
Heavy fur-and-plate armor. A greatsword leans against the throne beside him.
The throne room is modest — not yet imperial, frontier-fortress architecture.
Torchlight. Stone flags. Cold air visible.
Cinematic still, photorealistic. Camera angle: slightly low, looking up.
```

---

### 1.02 — VIKI "La Joie d'Acier"

```
ID: portrait_viki_bust
Refs: heraldry_cadifor_sigil
Prompt:
Bust portrait of a woman warrior in her late 30s at peak physical condition.
Lean, muscular build visible even through armor — built for speed and fury,
not tank defense. Auburn-brown hair pulled back in a practical warrior's knot,
loose strands framing her face. Eyes: bright amber-brown, alive with mischief
and intelligence — this is a woman who laughs before she kills.
Expression: half-smile, confident, the look of someone who finds combat
genuinely enjoyable. Skin tanned and lightly scarred — a nick on her left
cheekbone, calluses visible on her sword hand.
Wearing functional steel plate over leather, well-maintained but clearly used.
No decorative flourishes except a small infinity clasp at her gorget.
Background: overcast battlefield sky, wind in her hair.
Cinematic still, photorealistic, shot on ARRI Alexa 65.
Warm skin tones against cool sky.
```

---

### 1.03 — ANDREA LA ROUGISSANTE "La Premiere Vraie Cadifor"

```
ID: portrait_andrea_rougissante_bust
Refs: heraldry_cadifor_sigil
Prompt:
Bust portrait of a noblewoman in her late 30s. Copper-auburn hair,
thick and lustrous, worn in an elaborate but restrained court style.
Skin: alabaster pale with a natural flush across cheekbones — she blushes
from concentration, not embarrassment. Eyes: deep green-grey, penetrating,
calculating — these are the eyes of someone who sees political moves
three steps ahead. Expression: serene mask concealing intense activity —
mouth composed, but eyes alive with strategic thought. "Insolently beautiful"
— beauty that doesn't try and doesn't care if you notice.
Wearing a high-necked gown in dark violet silk, minimal jewelry —
a single thin gold circlet. Fabric quality speaks louder than ornamentation.
Background: castle library, candlelight reflecting off leather book spines.
Cinematic still, photorealistic, ARRI Alexa 65, shallow depth of field.
Warm candlelight from right, creating Rembrandt lighting on her face.
```

---

### 1.04 — ANDREA II "La Juste" (deux ages)

```
ID: portrait_andrea_juste_young
Refs: heraldry_cadifor_sigil
Prompt:
Portrait of a girl-queen, approximately 12-14 years old, but with eyes
that belong to someone decades older. Small frame, not yet fully grown,
but posture perfectly upright — trained since age 6 to bear a crown.
Brown hair with auburn undertones (inherited from Rougissante line),
worn simply. Eyes: dark brown, enormous in her young face, carrying
impossible depth and gravity. Expression: not childish, not sad — resolved.
The face of a child who has already accepted the weight of the world.
Wearing a modest but perfectly tailored grey-violet gown, a thin silver
circlet too large for her head, sitting slightly tilted.
Background: vast empty throne room, the girl dwarfed by architecture.
Cinematic still, photorealistic. Lighting: single shaft of cathedral light
from above, dust motes visible. Cold stone, warm skin.
```

```
ID: portrait_andrea_juste_mature
Refs: portrait_andrea_juste_young
Prompt:
The same woman from the reference, now in her mid-50s. The girl-queen
has become an empress. Same dark eyes but now surrounded by fine lines
of experience. Auburn-brown hair now threaded with silver, worn in a
severe but elegant updo. Face: angular, defined — decades of fasting,
campaigning, and governing have stripped all softness. Expression: just.
Literally just — the face of absolute fairness without mercy or cruelty.
Muscular forearms visible (trained by Thorim, the titan-guard).
Wearing imperial plate-and-robe hybrid — functional armor beneath
heavy violet-grey robes. Staff of office in hand.
Background: war tent interior, maps spread on table, campaign in progress.
Cinematic still, photorealistic, ARRI Alexa 65.
```

---

### 1.05 — ANDREA IV "La Victorieuse"

```
ID: portrait_andrea_victorieuse_bust
Refs: heraldry_cadifor_sigil
Prompt:
Bust portrait of a mage-queen in her late 50s. The first female
archimage-sovereign. Auburn hair (Rougissante line) now ash-streaked,
worn swept back severely. Eyes: steel-grey, crackling with faint
arcane luminescence — not glowing like fantasy, but a subtle inner light
like static electricity. Expression: imperial command, the face of someone
who has broken three crowns and absorbed three kingdoms. Cheekbones sharp,
jaw defined — arcane power has refined rather than aged her.
Wearing layered mage robes in deep indigo and charcoal, over concealed
plate armor. A staff topped with a crystalline focus rests against her shoulder.
Faint runic script visible along the hem of her robes — almost invisible.
Background: sunset over conquered city, smoke and golden light.
Cinematic still, photorealistic, anamorphic lens, ARRI Alexa 65.
Golden hour lighting from behind, face lit by reflected warm light.
```

---

### 1.06 — MARJORY "L'Imperiale" (personnage central — 5 angles)

```
ID: portrait_marjory_formal
Refs: heraldry_cadifor_sigil
Prompt:
Formal bust portrait of the most powerful empress in history, age 60-65.
A woman of pure architectural precision who makes everything around her
seem provisional. Silver-white hair worn in an immaculate structured updo —
not a strand displaced. Face: severe beauty, high cheekbones, aquiline nose,
thin lips set in permanent composure. Eyes: dark grey, bottomless —
the eyes of someone who has made power into an art form. Skin: porcelain
pale, minimal wrinkles for her age — arcane preservation.
Expression: absolute control. Not cold — controlled. Every micro-movement
of her face is deliberate.
Wearing robes of "blue so controlled it became almost gray" — heavy fabric,
impeccable cut, almost invisible mithril embroidery along hems and cuffs.
No jewelry except a thin circlet of white gold with a single violet stone.
Background: grey marble wall, single shaft of architectural light.
Cinematic still, photorealistic, ARRI Alexa 65, 85mm portrait lens.
Lighting: cool, precise, from upper left — cathedral window quality.
```

```
ID: portrait_marjory_dining
Refs: portrait_marjory_formal
Prompt:
The same silver-haired empress from the reference, now seated at a dining
table. Same face, same controlled expression, same immaculate hair.
She is lifting a fork with surgical precision — "gesture so precise it is
architectural." Eyes slightly downcast, observing her plate with the same
intensity she'd give a battle map. Wearing darker evening robes — noir-vert
(black-green), heavy silk, catching candlelight in subtle ways.
The table before her: dark stone surface, white linen runner with silver
frost-pattern embroidery, crystal goblets, gold-rimmed porcelain.
Background: imperial dining hall, pale marble columns, floating light
spheres at human height. Other guests blurred in background bokeh.
Cinematic still, photorealistic, shallow depth of field, warm candlelight.
```

```
ID: portrait_marjory_armor_ceremony
Refs: portrait_marjory_formal
Prompt:
The same empress from the reference image, now in full ceremonial armor.
Ivory-white metallic plate armor, form-fitting, with mithril embroidery
along every edge — micro-runes for stability and silence. The armor is
not fantasy — it is functional, realistic, like museum-quality medieval
plate but refined to perfection. Over the armor, a cloak of deep violet
with cyan-thread infinity symbols woven into the border.
She holds Atiesh — a legendary staff, tall as she is, dark wood with
a crystalline headpiece emanating faint blue-white light.
Standing in a throne room, dawn light streaming through stained glass.
Expression: liturgical solemnity — the face of someone performing
a sacrament of power.
Cinematic still, photorealistic, ARRI Alexa 65, full body shot.
```

```
ID: portrait_marjory_campaign
Refs: portrait_marjory_formal
Prompt:
The same empress, now in campaign armor — stripped of ceremony.
Functional ivory plate, scarred and dust-marked from travel. No cloak.
Hair still perfect despite hardship — this is a woman who maintains form
even in war. Standing over a campaign table in a military tent,
pointing at a map with one hand, staff in the other.
Two armored officers visible in background, deferential.
Expression: focused command — this is the general, not the empress.
Eyes narrowed, calculating distances and casualties.
Lighting: oil lamp from below, tent canvas diffusing daylight from above.
Cinematic still, photorealistic, warm and gritty tones.
```

```
ID: portrait_marjory_death
Refs: portrait_marjory_formal, portrait_marjory_armor_ceremony
Prompt:
The same empress, lying on a battlefield. Ceremonial armor cracked
and bloodied. Silver-white hair loose, spread on dark earth.
Eyes open, still containing that bottomless authority, but the light
is leaving. One hand still grips Atiesh. Around her, the chaos of battle
is visible in blur — this is a close-up on her face and upper body.
Blood on her lips. Expression: not defeat — completion. She dies as she
lived: in total control of the image she presents to the world.
Evening light, golden hour, the beauty of the scene at war with its horror.
Cinematic still, photorealistic, ARRI Alexa 65, macro portrait.
Shallow depth of field. Warm golden backlight, cool shadow on face.
```

---

### 1.07 — ROSE "L'Absolue" (personnage central — 5 angles)

```
ID: portrait_rose_formal
Refs: heraldry_cadifor_sigil
Prompt:
Formal portrait of the most powerful human being who has ever lived,
a woman of 44. Not a warrior — something beyond. Dark brown hair with
subtle auburn highlights, worn in an effortless arrangement that took
a lifetime of culture to achieve. Face: heart-shaped, luminous skin
that seems to emit rather than reflect light — not magical glow,
but the radiance of perfect health and absolute self-possession.
Eyes: dark, almost black, with a quality described as "traversing
rather than crushing" — they see through pretense instantly.
Expression: serene. Not blank, not cold — serene as a lake that
could drown you. The faintest suggestion of a smile that never
fully manifests. She is simultaneously the most beautiful and most
terrifying person in any room.
Wearing robes of such refinement that description fails — layers
of grey-silver and deep midnight blue, fabrics that flow like water
and catch light like ice crystals. No visible jewelry except
a thin circlet almost invisible in her hair. The outfit makes all
other clothing in existence look provincial.
Background: grey marble, a single window casting diffused light.
Cinematic still, photorealistic, ARRI Alexa 65, 85mm lens.
Lighting: soft but directional — the Vermeer treatment.
```

```
ID: portrait_rose_throne
Refs: portrait_rose_formal
Prompt:
The same woman from the reference, now seated on the imperial throne.
Same dark hair, same serene expression, same luminous skin.
The throne: white stone veined grey-gold, with geometric mithril
insertions and faint ward runes. She sits not with rigidity
but with perfect ease — as if the throne adjusted itself to her.
Wearing heavier robes for formal audience — deep violet over grey,
Atiesh leaning against the throne beside her.
The throne room: immense nave, pale marble columns, mineral crystal
filtering light into architectural beams. She is small in the vast
space but the entire room's geometry points toward her.
Expression: absolute attention. She is listening to a petitioner
we cannot see, and her listening is more powerful than others' speech.
Cinematic still, photorealistic, wide shot, ARRI Alexa 65.
Cool cathedral light, warm gold reflected off marble.
```

```
ID: portrait_rose_intimate
Refs: portrait_rose_formal
Prompt:
The same woman, now in a private moment. Hair slightly looser,
wearing simpler robes — still perfect, but softer. She is reading
by window light, one hand supporting her chin. For the first time,
something human is visible — not vulnerability, but the weight
of absolute power in a quiet moment. The room is Nouvelle-Avalon:
dark velvet drapes, white fur rugs, crystal-lamps at low intensity,
leather-bound books. This is the only place she allows herself
to simply exist.
Expression: thoughtful, almost sad — the loneliness of the summit.
Lighting: north window light, soft and even, Vermeer-style.
Cinematic still, photorealistic, intimate medium close-up.
```

```
ID: portrait_rose_arcane
Refs: portrait_rose_formal
Prompt:
The same woman, now channeling arcane and necrotic power simultaneously.
She stands with arms slightly raised, and between her hands, two energies
spiral — one white-blue (arcane), one deep violet-black (necrotic).
The energies do not clash — they weave together with perfect control.
Her robes billow slightly from the power discharge. Her eyes carry
a faint dual luminescence — ice-blue arcane in one, deep violet necro
in the other. Expression: absolute concentration without strain.
This is effortless mastery of forces that would destroy lesser mages.
Hair lifted by ambient energy. Background: dark void, she is the only
light source in frame.
Cinematic still, photorealistic, ARRI Alexa 65. Shot as if this
were a real person really channeling energy — not a videogame.
Subtle VFX, not bombastic. The power is terrifying because it's quiet.
```

```
ID: portrait_rose_entering
Refs: portrait_rose_formal
Prompt:
The same woman entering a grand ballroom. Shot from behind the guests —
we see their backs, their heads turning, and at the far end of the room,
Rose walking through the doors. She is backlit by warm golden light
from the corridor behind her. She is not doing anything spectacular —
merely walking. But the entire axis of the room has changed.
People have forgotten how to stand naturally.
Her silhouette: perfect posture, robes flowing, a faint luminous quality.
The guests in foreground: nobles in fine dress, frozen mid-conversation.
Cinematic still, photorealistic, wide anamorphic shot.
Rack focus from frozen guests (sharp) to Rose approaching (coming into focus).
```

---

### 1.08 — ARWYN "La Colombe"

```
ID: portrait_arwyn_bust
Refs: heraldry_cadifor_sigil
Prompt:
Bust portrait of a priestess-queen, age 45-50. Warm beauty where Rose is
cool perfection. Fair hair — honey-gold, worn in soft waves. Eyes: warm
brown with golden flecks, capable of both spiritual intensity and genuine
human warmth. Face: softer features than Rose, fuller lips, laugh lines
visible — this is a woman who smiles fully and often.
Skin: sun-kissed, healthy glow. Expression: a full, unguarded smile —
the most human face in the entire dynasty.
Wearing white-and-gold priestly vestments with light-infused embroidery,
warmer tones than Rose's cool palette. A thin gold circlet with a sun motif.
Background: temple interior, warm light streaming through amber glass.
Cinematic still, photorealistic, ARRI Alexa 65.
Warm golden lighting throughout — this woman IS warmth.
```

---

### 1.09 — BANNI "Le Porteur"

```
ID: portrait_banni_bust
Refs: heraldry_cadifor_sigil
Prompt:
Bust portrait of a man in his 40s bearing an impossible burden with
quiet dignity. Dark hair, close-cropped, receding slightly. Face: handsome
but drawn — cheeks hollow, eyes shadowed. Not weak — exhausted by duty.
Eyes: brown, deep, carrying a sorrow he never discusses. A man who
inherited an empire he didn't build and carries it without complaint.
Expression: patient endurance. The set of his jaw says "I will not fail"
while his eyes say "I know the cost."
Wearing practical imperial robes — dark grey, no ostentation.
The crown sits on his head like a weight, not an ornament.
Background: rain-streaked window, grey sky, a lonely study.
Cinematic still, photorealistic, ARRI Alexa 65, desaturated tones.
Cool diffused daylight, melancholic atmosphere.
```

---

### 1.10 — BENJAMIN "Le Cruel"

```
ID: portrait_benjamin_bust
Refs: heraldry_cadifor_sigil
Prompt:
Bust portrait of a man in his late 40s, radiating dangerous intelligence.
Dark hair swept back, sharp widow's peak. Face: gaunt, angular,
aristocratic bone structure taken to an extreme — beautiful in the way
a blade is beautiful. Eyes: ice-blue, pale, unblinking — predator's eyes.
Expression: thin smile that doesn't reach his eyes. Not a madman —
worse: a perfectly rational man who has chosen cruelty as method.
Skin: pale, rarely sees sunlight — this is a man of chambers and courts.
Wearing black velvet robes with subtle dark violet trim, silver clasps.
Everything expensive, everything sharp.
Background: dark wood-paneled study, single candle, his face half in shadow.
Cinematic still, photorealistic, ARRI Alexa 65.
Chiaroscuro lighting — Caravaggio treatment. Deep shadows, sharp highlights.
```

---

### 1.11 — LLANE WRYNN

```
ID: portrait_llane_bust
Refs: heraldry_cadifor_sigil
Prompt:
Bust portrait of a young king in his late 20s. Classically handsome —
strong jaw, high forehead, clear blue eyes. Brown hair worn at shoulder
length in the Wrynn fashion. Expression: earnest nobility —
this is a man who believes in duty and love with equal conviction.
A face that could wait "ten winters, a hundred if needed."
Wearing Stormwind blue-and-gold over light plate armor.
A golden lion clasp at his cloak. Clean-shaven.
Background: castle parapet, blue sky and distant green hills.
Cinematic still, photorealistic, ARRI Alexa 65.
Natural daylight, heroic but grounded — not a poster, a person.
```

---

## PHASE 2 — LIEUX & ARCHITECTURE
> References : heraldique + palette materiaux

### 2.01 — Salle du Trone de Stormwind

```
ID: location_stormwind_throne_room
Refs: materials_imperial_palette, heraldry_cadifor_sigil
Prompt:
Interior of an imperial throne room of impossible precision. Immense nave
with pale marble columns veined grey-gold, stretching toward a vaulted
ceiling. The vault overwhelms by precision, not size — every geometric
relationship between arch and column is perfect.
Stained glass windows of mineral crystal filter light into architectural
beams that seem deliberate, almost sentient.
The throne at the far end: white stone veined grey-gold, geometric accoutrements,
blackened mithril insertions, faint ward runes glowing at the edges.
Floor: polished dark stone that absorbs rather than reflects light.
The room is cold, immense, and terrifyingly beautiful.
No people. Empty. The architecture speaks for itself.
Cinematic still, photorealistic, wide anamorphic shot, ARRI Alexa 65.
Cool cathedral light with warm gold undertones reflected from marble.
Dust motes visible in light shafts. The scale is overwhelming.
Aspect ratio: 21:9 ultrawide.
```

### 2.02 — Salle de Diner Imperial

```
ID: location_imperial_dining_hall
Refs: materials_imperial_palette, heraldry_cadifor_sigil
Prompt:
Interior of the imperial dining hall. Pale marble columns with blue veins.
Walls: alternating panels of victory tableaux, illuminated maritime maps,
polished obsidian relief, and dormant arcane mirrors.
Floating light spheres drift at human height on circuits so perfect
they avoid all shadows — warm golden light.
Peripheral candles float like a stellar retinue maintained by ancient
court magic. The long dining table: dark stone polished to matte, absorbing
light. No tablecloth — instead, white linen runners embroidered with
silver frost patterns. Crystal goblets, gold-rimmed porcelain.
Above the table: guard crystals with ancient protective wards.
15 place settings, each mathematically precise.
No people. The table awaits.
Cinematic still, photorealistic, ARRI Alexa 65, wide shot.
Warm golden atmospheric lighting from floating sources. Intimate despite scale.
Aspect ratio: 16:9.
```

### 2.03 — Nouvelle-Avalon (interieur intime)

```
ID: location_nouvelle_avalon_interior
Refs: materials_imperial_palette
Prompt:
Interior of a royal private chamber, intimate rather than grand.
Dark velvet drapes in deep night-blue, catching candlelight.
White fur carpets underfoot. Supple leather book bindings on shelves.
Crystal-lamps at low intensity — double-crystal cages on black moonstone
bases, emitting warm adaptive light. Enameled door knobs glint softly.
A reading alcove by a tall window, grey sky visible outside.
The room feels like silk — dense, warm, private. This is where
real conversations happen, where the mask comes off.
No people. Lived-in but perfectly maintained.
Cinematic still, photorealistic, ARRI Alexa 65, medium shot.
Warm interior glow, cool grey window light. Dutch master painting quality.
Aspect ratio: 16:9.
```

### 2.04 — Clairbois / Palais Ebonlocke

```
ID: location_clairbois_ballroom
Refs: materials_imperial_palette
Prompt:
Interior of an aristocratic ballroom that practices restraint as philosophy.
The architecture is not grand but perfect — every proportion calculated
to suggest quality without exhibition. Dark wood paneling, crystal
chandeliers at moderate height (not soaring), polished floors reflecting
candlelight. Tall windows looking onto formal gardens at dusk.
A raven motif appears subtly in carved corbels and iron fixtures —
intelligence cold, patience embodied, observation height.
The room suggests money that never needs to announce itself.
"True elegance is not adding, but retaining better."
No people. Set for an evening reception — candles lit, flowers minimal.
Cinematic still, photorealistic, ARRI Alexa 65.
Warm candlelight, deep shadows, restrained luxury. Barry Lyndon lighting.
Aspect ratio: 16:9.
```

---

## PHASE 3 — SCENES COMPOSEES
> References : portraits + lieux. Maximum 14 refs par generation.

### 3.01 — Le Diner Imperial (scene matrice)

```
ID: scene_diner_imperial
Refs: portrait_marjory_dining + portrait_rose_formal + portrait_arwyn_bust + location_imperial_dining_hall (4 refs)
Prompt:
The imperial dining hall from the reference image, now occupied.
At the head of the table, the silver-haired empress Marjory from ref 1
sits with surgical precision, lifting a fork as if performing architecture.
To her right, the dark-haired younger woman Rose from ref 2 — serene,
luminous, watching everything with eyes that traverse. Across from Rose,
the fair-haired priestess Arwyn from ref 3, the warmest presence at the table.
Other nobles line the table — 12 figures in rich but restrained clothing.
Floating light spheres illuminate the scene with golden warmth.
The 15-course meal is mid-service — silver cloches, crystal goblets
catching light, white linen runners with silver embroidery.
The atmosphere is thick with unspoken politics. Every gesture is loaded.
Keep all character faces EXACTLY matching their reference images.
Cinematic still, photorealistic, ARRI Alexa 65, wide establishing shot.
Warm golden interior lighting, rich depth of field.
```

### 3.02 — Rose entre dans le bal d'Ebonlocke

```
ID: scene_rose_entering_clairbois
Refs: portrait_rose_entering + portrait_rose_formal + location_clairbois_ballroom (3 refs)
Prompt:
The Clairbois ballroom from ref 3, now filled with 40-50 nobles in
formal evening dress. Shot from behind the crowd — we see their backs,
their heads turning. At the far doorway, the woman Rose from refs 1-2
is entering. She is backlit by warm corridor light. She is merely walking.
But the room's center of gravity has shifted. Nobles in the foreground
have frozen mid-conversation, mid-gesture. A woman's wine glass hovers
halfway to her lips. A man has forgotten to close his mouth.
Rose's silhouette: perfect posture, flowing midnight-grey robes,
faint luminous quality to her skin.
"When she entered, it was not the noise that changed. It was the axis."
Keep Rose's face EXACTLY matching reference images.
Cinematic still, photorealistic, ARRI Alexa 65, wide anamorphic.
Warm candlelight interior, depth of field separating foreground from background.
```

### 3.03 — Marjory sur le champ de bataille (mort)

```
ID: scene_marjory_death
Refs: portrait_marjory_death + portrait_marjory_armor_ceremony (2 refs)
Prompt:
Battlefield at sunset. The silver-haired empress from the references
lies on dark earth, her ivory ceremonial armor cracked and bloodied.
Her white hair is loose, spread like a corona. Atiesh, the legendary
staff, lies broken beside her. One hand still grips a fragment.
Her eyes are open — still containing authority, but the light is leaving.
Blood on her pale lips. Around her, the blur of battlefield aftermath.
Expression: not defeat — completion. She dies as she lived:
in total control of the image she presents to the world.
In the background, blurred figures of both allies and enemies,
frozen in the realization of what has just happened.
Keep her face EXACTLY matching reference images.
Cinematic still, photorealistic, ARRI Alexa 65, intimate close-up.
Golden hour backlight, cool shadow on face. Beauty at war with horror.
```

### 3.04 — Le couronnement de Rose

```
ID: scene_rose_coronation
Refs: portrait_rose_formal + portrait_rose_throne + location_stormwind_throne_room (3 refs)
Prompt:
The Stormwind throne room from ref 3, packed with hundreds of figures.
At center, the woman Rose from refs 1-2 stands before the throne,
receiving the crown. She is perfectly still while the officiant
(an elderly bishop in white-gold vestments) places a thin white-gold
circlet on her dark hair. Her expression: serene acceptance of something
that was always inevitable. Not triumph — assumption.
The crowd: hundreds of nobles, military commanders, foreign dignitaries,
all watching with varying mixtures of awe, calculation, and submission.
Shafts of mineral-crystal light fall from the vault above like divine
sanction. The scale of the room dwarfs everyone except her.
Keep Rose's face EXACTLY matching references.
Cinematic still, photorealistic, ARRI Alexa 65, wide establishing shot.
Cathedral light from above, warm reflected gold from marble.
Epic scale, intimate emotion.
```

---

## PHASE 4 — ASSETS SITE (hero images, cards, headers)

### 4.01 — Hero Homepage

```
ID: hero_homepage
Refs: location_stormwind_throne_room + heraldry_cadifor_sigil (2 refs)
Prompt:
Extreme wide shot of the imperial throne room from ref 1, empty,
shot through a doorway. We see the throne at the far end, a single
shaft of light illuminating it. The doorway frames the image.
On the wall above the throne, the violet-and-cyan infinity sigil
from ref 2, rendered in stained glass, casting colored light.
The image should feel like an invitation — "enter this world."
Cinematic still, photorealistic, ARRI Alexa 65, 21:9 ultrawide.
Cool atmospheric lighting, warm gold on throne. Depth and mystery.
```

### 4.02 — Header Personnages

```
ID: header_personnages
Refs: portrait_marjory_formal + portrait_rose_formal + portrait_aberthol_bust + portrait_viki_bust (4 refs)
Prompt:
A horizontal composite showing four generations of rulers in profile,
overlapping slightly. From left to right: the elderly warrior Aberthol
from ref 3, the warrior woman Viki from ref 4, the silver-haired
empress Marjory from ref 1, and the dark-haired young queen Rose from ref 2.
Each in profile, facing right, as if time flowing forward.
Background: gradient from dawn (left, warm) to dusk (right, cool).
Keep all faces EXACTLY matching their references.
Cinematic still, photorealistic, ARRI Alexa 65, ultrawide 21:9.
Dramatic side lighting on each face, unified background gradient.
```

---

## DEPENDANCE DES REFERENCES — ARBRE COMPLET

```
Phase 0 (aucune dep)
├── heraldry_cadifor_sigil
└── materials_imperial_palette

Phase 1 (dep: Phase 0)
├── portrait_aberthol_bust → portrait_aberthol_throne
├── portrait_viki_bust
├── portrait_andrea_rougissante_bust
├── portrait_andrea_juste_young → portrait_andrea_juste_mature
├── portrait_andrea_victorieuse_bust
├── portrait_marjory_formal → portrait_marjory_dining
│                            → portrait_marjory_armor_ceremony
│                            → portrait_marjory_campaign
│                            → portrait_marjory_death
├── portrait_rose_formal → portrait_rose_throne
│                        → portrait_rose_intimate
│                        → portrait_rose_arcane
│                        → portrait_rose_entering
├── portrait_arwyn_bust
├── portrait_banni_bust
├── portrait_benjamin_bust
└── portrait_llane_bust

Phase 2 (dep: Phase 0)
├── location_stormwind_throne_room
├── location_imperial_dining_hall
├── location_nouvelle_avalon_interior
└── location_clairbois_ballroom

Phase 3 (dep: Phase 1 + Phase 2)
├── scene_diner_imperial (marjory_dining + rose_formal + arwyn + dining_hall)
├── scene_rose_entering_clairbois (rose_entering + rose_formal + clairbois)
├── scene_marjory_death (marjory_death + marjory_armor)
└── scene_rose_coronation (rose_formal + rose_throne + throne_room)

Phase 4 (dep: Phase 1 + Phase 2)
├── hero_homepage (throne_room + sigil)
└── header_personnages (marjory + rose + aberthol + viki)
```

## TOTAL ASSETS

| Phase | Images | Description |
|-------|--------|-------------|
| 0 | 2 | Heraldique + materiaux |
| 1 | 17 | Portraits individuels (11 souverains + 6 secondaires) |
| 2 | 4 | Lieux & architecture |
| 3 | 4 | Scenes composees |
| 4 | 2 | Assets site (hero + header) |
| **Total** | **29** | **Generation complete** |

## ESTIMATION COUT

- NB Pro via OpenRouter : ~$0.04-0.08 par image (thinking mode)
- 29 images × $0.06 moyen = ~$1.74
- Avec iterations (2-3 essais par image) : ~$5-8 total

---

## NOTES TECHNIQUES

### Format de sortie
- Resolution : 1024×1024 minimum (NB Pro natif), upscale a 2048+ pour site
- Format : PNG (pas de compression JPEG pour assets de reference)
- Aspect ratios : 16:9 (scenes), 3:4 (portraits), 21:9 (heroes/headers)

### Consistance des personnages
- Toujours inclure les portraits de reference dans les scenes composees
- Toujours ajouter "Keep [character]'s face EXACTLY matching the reference image"
- Maximum 6 refs haute-fidelite pour la preservation de visage
- Utiliser les 8 refs restantes pour style, lieu, accessoires

### Iteration
- Phase 1 est la plus critique — les portraits definissent tout le reste
- Si un portrait n'est pas satisfaisant, REGENERER avant de passer a Phase 2
- Sauvegarder chaque image acceptee dans `site/public/assets/` immediatement
- Mettre a jour `manifest.json` apres chaque generation reussie

### Stockage et persistance
- TOUTES les images sont commitees dans le repo git
- `manifest.json` sert d'index avec : ID, prompt, refs utilisees, date, chemin fichier
- Pas de dependance a un service externe pour le stockage

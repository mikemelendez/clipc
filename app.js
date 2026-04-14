const NAV_ITEMS = [
  { path: "index.html", label: "Home" },
  { path: "about.html", label: "About" },
  { path: "unicode-converter.html", label: "Unicode Lab" },
  { path: "generate-text.html", label: "Test Data Generator" },
  { path: "encode.html", label: "Encoding Tools" },
  { path: "common-input.html", label: "Common Input Data" },
  { path: "websec.html", label: "WebSec Payloads" },
];

const BASE_LOWER = "abcdefghijklmnopqrstuvwxyz";
const BASE_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const BASE_DIGITS = "0123456789";

const STYLE_SETS = [
  {
    name: "Circled",
    lower: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
    upper: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",
    digits: "⓪①②③④⑤⑥⑦⑧⑨",
  },
  {
    name: "Fullwidth",
    lower: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
    upper: "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",
    digits: "０１２３４５６７８９",
  },
  {
    name: "Math Bold",
    lower: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",
    upper: "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙",
    digits: "𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗",
  },
  {
    name: "Math Bold Fraktur",
    lower: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟",
    upper: "𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅",
    digits: "𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗",
  },
  {
    name: "Math Double-Struck",
    lower: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",
    upper: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",
    digits: "𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡",
  },
  {
    name: "Small Caps",
    lower: "ᴬʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀsᴛᴜᴠᴡxʏᴢ".toLowerCase(),
    upper: "ᴬʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀsᴛᴜᴠᴡxʏᴢ",
    digits: "0123456789",
  },
  {
    name: "Stroked",
    lower: "ąɓçđëƒğħįʝķŀɱŋǿƥʠřşŧųṽẅẍÿž",
    upper: "ȺɃƇĐËƑĞĦĮɈĶĿṀŊǾƤɊŘŞŦŲṼẄẌŸŽ",
    digits: "0123456789",
  },
  {
    name: "Superscript/Subscript Mix",
    lower: "ₐᵦ𝒸ᑯₑ𝒻ℊₕᵢⱼₖₗₘₙₒₚ૧ᵣₛₜᵤᵥwₓᵧ𝓏",
    upper: "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ",
    digits: "⁰¹²³⁴⁵⁶⁷⁸⁹",
  },
];
const STYLE_TABLE = STYLE_SETS.map((style) => ({
  name: style.name,
  lower: [...style.lower],
  upper: [...style.upper],
  digits: [...style.digits],
}));

const BRAILLE_TO_ASCII = {
  "⠁": "a", "⠃": "b", "⠉": "c", "⠙": "d", "⠑": "e", "⠋": "f", "⠛": "g", "⠓": "h",
  "⠊": "i", "⠚": "j", "⠅": "k", "⠇": "l", "⠍": "m", "⠝": "n", "⠕": "o", "⠏": "p",
  "⠟": "q", "⠗": "r", "⠎": "s", "⠞": "t", "⠥": "u", "⠧": "v", "⠺": "w", "⠭": "x",
  "⠽": "y", "⠵": "z", " ": " ", "⠲": ".", "⠂": ",", "⠖": "!", "⠢": "?",
};

const ASCII_TO_BRAILLE = Object.entries(BRAILLE_TO_ASCII).reduce((acc, [k, v]) => {
  if (!acc[v]) acc[v] = k;
  return acc;
}, {});

const NUMBER_BRAILLE = { 1: "⠁", 2: "⠃", 3: "⠉", 4: "⠙", 5: "⠑", 6: "⠋", 7: "⠛", 8: "⠓", 9: "⠊", 0: "⠚" };
const ZALGO = ["\u0300", "\u0301", "\u0302", "\u0303", "\u0308", "\u0335", "\u0336", "\u034f", "\u035c", "\u0361", "\u0489"];
const UNICODE_RANGES = [
  { plane: "Plane 0: BMP", label: "Basic Latin [U+0000-U+007F]", start: 0x0000, end: 0x007f },
  { plane: "Plane 0: BMP", label: "Latin-1 Supplement [U+0080-U+00FF]", start: 0x0080, end: 0x00ff },
  { plane: "Plane 0: BMP", label: "Latin Extended-A [U+0100-U+017F]", start: 0x0100, end: 0x017f },
  { plane: "Plane 0: BMP", label: "Latin Extended-B [U+0180-U+024F]", start: 0x0180, end: 0x024f },
  { plane: "Plane 0: BMP", label: "IPA Extensions [U+0250-U+02AF]", start: 0x0250, end: 0x02af },
  { plane: "Plane 0: BMP", label: "Spacing Modifier Letters [U+02B0-U+02FF]", start: 0x02b0, end: 0x02ff },
  { plane: "Plane 0: BMP", label: "Combining Diacritical Marks [U+0300-U+036F]", start: 0x0300, end: 0x036f },
  { plane: "Plane 0: BMP", label: "Greek and Coptic [U+0370-U+03FF]", start: 0x0370, end: 0x03ff },
  { plane: "Plane 0: BMP", label: "Cyrillic [U+0400-U+04FF]", start: 0x0400, end: 0x04ff },
  { plane: "Plane 0: BMP", label: "Cyrillic Supplement [U+0500-U+052F]", start: 0x0500, end: 0x052f },
  { plane: "Plane 0: BMP", label: "Armenian [U+0530-U+058F]", start: 0x0530, end: 0x058f },
  { plane: "Plane 0: BMP", label: "Hebrew [U+0590-U+05FF]", start: 0x0590, end: 0x05ff },
  { plane: "Plane 0: BMP", label: "Arabic [U+0600-U+06FF]", start: 0x0600, end: 0x06ff },
  { plane: "Plane 0: BMP", label: "Syriac [U+0700-U+074F]", start: 0x0700, end: 0x074f },
  { plane: "Plane 0: BMP", label: "Arabic Supplement [U+0750-U+077F]", start: 0x0750, end: 0x077f },
  { plane: "Plane 0: BMP", label: "Devanagari [U+0900-U+097F]", start: 0x0900, end: 0x097f },
  { plane: "Plane 0: BMP", label: "Bengali [U+0980-U+09FF]", start: 0x0980, end: 0x09ff },
  { plane: "Plane 0: BMP", label: "Gurmukhi [U+0A00-U+0A7F]", start: 0x0a00, end: 0x0a7f },
  { plane: "Plane 0: BMP", label: "Gujarati [U+0A80-U+0AFF]", start: 0x0a80, end: 0x0aff },
  { plane: "Plane 0: BMP", label: "Tamil [U+0B80-U+0BFF]", start: 0x0b80, end: 0x0bff },
  { plane: "Plane 0: BMP", label: "Telugu [U+0C00-U+0C7F]", start: 0x0c00, end: 0x0c7f },
  { plane: "Plane 0: BMP", label: "Kannada [U+0C80-U+0CFF]", start: 0x0c80, end: 0x0cff },
  { plane: "Plane 0: BMP", label: "Malayalam [U+0D00-U+0D7F]", start: 0x0d00, end: 0x0d7f },
  { plane: "Plane 0: BMP", label: "Thai [U+0E00-U+0E7F]", start: 0x0e00, end: 0x0e7f },
  { plane: "Plane 0: BMP", label: "Lao [U+0E80-U+0EFF]", start: 0x0e80, end: 0x0eff },
  { plane: "Plane 0: BMP", label: "Georgian [U+10A0-U+10FF]", start: 0x10a0, end: 0x10ff },
  { plane: "Plane 0: BMP", label: "Hangul Jamo [U+1100-U+11FF]", start: 0x1100, end: 0x11ff },
  { plane: "Plane 0: BMP", label: "Latin Extended Additional [U+1E00-U+1EFF]", start: 0x1e00, end: 0x1eff },
  { plane: "Plane 0: BMP", label: "Greek Extended [U+1F00-U+1FFF]", start: 0x1f00, end: 0x1fff },
  { plane: "Plane 0: BMP", label: "General Punctuation [U+2000-U+206F]", start: 0x2000, end: 0x206f },
  { plane: "Plane 0: BMP", label: "Superscripts and Subscripts [U+2070-U+209F]", start: 0x2070, end: 0x209f },
  { plane: "Plane 0: BMP", label: "Currency Symbols [U+20A0-U+20CF]", start: 0x20a0, end: 0x20cf },
  { plane: "Plane 0: BMP", label: "Combining Marks for Symbols [U+20D0-U+20FF]", start: 0x20d0, end: 0x20ff },
  { plane: "Plane 0: BMP", label: "Letterlike Symbols [U+2100-U+214F]", start: 0x2100, end: 0x214f },
  { plane: "Plane 0: BMP", label: "Number Forms [U+2150-U+218F]", start: 0x2150, end: 0x218f },
  { plane: "Plane 0: BMP", label: "Arrows [U+2190-U+21FF]", start: 0x2190, end: 0x21ff },
  { plane: "Plane 0: BMP", label: "Mathematical Operators [U+2200-U+22FF]", start: 0x2200, end: 0x22ff },
  { plane: "Plane 0: BMP", label: "Miscellaneous Technical [U+2300-U+23FF]", start: 0x2300, end: 0x23ff },
  { plane: "Plane 0: BMP", label: "Box Drawing [U+2500-U+257F]", start: 0x2500, end: 0x257f },
  { plane: "Plane 0: BMP", label: "Block Elements [U+2580-U+259F]", start: 0x2580, end: 0x259f },
  { plane: "Plane 0: BMP", label: "Geometric Shapes [U+25A0-U+25FF]", start: 0x25a0, end: 0x25ff },
  { plane: "Plane 0: BMP", label: "Miscellaneous Symbols [U+2600-U+26FF]", start: 0x2600, end: 0x26ff },
  { plane: "Plane 0: BMP", label: "Dingbats [U+2700-U+27BF]", start: 0x2700, end: 0x27bf },
  { plane: "Plane 0: BMP", label: "CJK Radicals Supplement [U+2E80-U+2EFF]", start: 0x2e80, end: 0x2eff },
  { plane: "Plane 0: BMP", label: "Kangxi Radicals [U+2F00-U+2FDF]", start: 0x2f00, end: 0x2fdf },
  { plane: "Plane 0: BMP", label: "Hiragana [U+3040-U+309F]", start: 0x3040, end: 0x309f },
  { plane: "Plane 0: BMP", label: "Katakana [U+30A0-U+30FF]", start: 0x30a0, end: 0x30ff },
  { plane: "Plane 0: BMP", label: "Bopomofo [U+3100-U+312F]", start: 0x3100, end: 0x312f },
  { plane: "Plane 0: BMP", label: "Hangul Compatibility Jamo [U+3130-U+318F]", start: 0x3130, end: 0x318f },
  { plane: "Plane 0: BMP", label: "Kanbun [U+3190-U+319F]", start: 0x3190, end: 0x319f },
  { plane: "Plane 0: BMP", label: "Bopomofo Extended [U+31A0-U+31BF]", start: 0x31a0, end: 0x31bf },
  { plane: "Plane 0: BMP", label: "CJK Strokes [U+31C0-U+31EF]", start: 0x31c0, end: 0x31ef },
  { plane: "Plane 0: BMP", label: "Katakana Phonetic Extensions [U+31F0-U+31FF]", start: 0x31f0, end: 0x31ff },
  { plane: "Plane 0: BMP", label: "Enclosed CJK Letters and Months [U+3200-U+32FF]", start: 0x3200, end: 0x32ff },
  { plane: "Plane 0: BMP", label: "CJK Unified Ideographs Extension A [U+3400-U+4DBF]", start: 0x3400, end: 0x4dbf },
  { plane: "Plane 0: BMP", label: "CJK Unified Ideographs [U+4E00-U+9FFF]", start: 0x4e00, end: 0x9fff },
  { plane: "Plane 0: BMP", label: "Hangul Syllables [U+AC00-U+D7AF]", start: 0xac00, end: 0xd7af },
  { plane: "Plane 0: BMP", label: "High Surrogates [U+D800-U+DB7F]", start: 0xd800, end: 0xdb7f },
  { plane: "Plane 0: BMP", label: "Low Surrogates [U+DC00-U+DFFF]", start: 0xdc00, end: 0xdfff },
  { plane: "Plane 0: BMP", label: "Private Use Area [U+E000-U+F8FF]", start: 0xe000, end: 0xf8ff },
  { plane: "Plane 0: BMP", label: "CJK Compatibility Ideographs [U+F900-U+FAFF]", start: 0xf900, end: 0xfaff },
  { plane: "Plane 0: BMP", label: "Alphabetic Presentation Forms [U+FB00-U+FB4F]", start: 0xfb00, end: 0xfb4f },
  { plane: "Plane 1: SMP", label: "Linear B Syllabary [U+10000-U+1007F]", start: 0x10000, end: 0x1007f },
  { plane: "Plane 1: SMP", label: "Ancient Greek Numbers [U+10140-U+1018F]", start: 0x10140, end: 0x1018f },
  { plane: "Plane 1: SMP", label: "Phoenician [U+10900-U+1091F]", start: 0x10900, end: 0x1091f },
  { plane: "Plane 1: SMP", label: "Egyptian Hieroglyphs [U+13000-U+1342F]", start: 0x13000, end: 0x1342f },
  { plane: "Plane 1: SMP", label: "Byzantine Musical Symbols [U+1D000-U+1D0FF]", start: 0x1d000, end: 0x1d0ff },
  { plane: "Plane 1: SMP", label: "Mathematical Alphanumeric Symbols [U+1D400-U+1D7FF]", start: 0x1d400, end: 0x1d7ff },
  { plane: "Plane 1: SMP", label: "Mahjong Tiles [U+1F000-U+1F02F]", start: 0x1f000, end: 0x1f02f },
  { plane: "Plane 1: SMP", label: "Domino Tiles [U+1F030-U+1F09F]", start: 0x1f030, end: 0x1f09f },
  { plane: "Plane 1: SMP", label: "Playing Cards [U+1F0A0-U+1F0FF]", start: 0x1f0a0, end: 0x1f0ff },
  { plane: "Plane 1: SMP", label: "Enclosed Alphanumeric Supplement [U+1F100-U+1F1FF]", start: 0x1f100, end: 0x1f1ff },
  { plane: "Plane 1: SMP", label: "Enclosed Ideographic Supplement [U+1F200-U+1F2FF]", start: 0x1f200, end: 0x1f2ff },
  { plane: "Plane 1: SMP", label: "Misc Symbols and Pictographs [U+1F300-U+1F5FF]", start: 0x1f300, end: 0x1f5ff },
  { plane: "Plane 1: SMP", label: "Emoticons (Emoji) [U+1F600-U+1F64F]", start: 0x1f600, end: 0x1f64f },
  { plane: "Plane 1: SMP", label: "Transport and Map Symbols [U+1F680-U+1F6FF]", start: 0x1f680, end: 0x1f6ff },
  { plane: "Plane 1: SMP", label: "Supplemental Symbols and Pictographs [U+1F900-U+1F9FF]", start: 0x1f900, end: 0x1f9ff },
  { plane: "Plane 2: SIP", label: "CJK Unified Ideographs Extension B [U+20000-U+2A6DF]", start: 0x20000, end: 0x2a6df },
  { plane: "Plane 2: SIP", label: "Extension C [U+2A700-U+2B73F]", start: 0x2a700, end: 0x2b73f },
  { plane: "Plane 2: SIP", label: "Extension D [U+2B740-U+2B81F]", start: 0x2b740, end: 0x2b81f },
  { plane: "Plane 2: SIP", label: "Extension E [U+2B820-U+2CEAF]", start: 0x2b820, end: 0x2ceaf },
  { plane: "Plane 2: SIP", label: "Extension F [U+2CEB0-U+2EBEF]", start: 0x2ceb0, end: 0x2ebef },
  { plane: "Plane 14: SSP", label: "Tags [U+E0000-U+E007F]", start: 0xe0000, end: 0xe007f },
  { plane: "Plane 14: SSP", label: "Variation Selectors Supplement [U+E0100-U+E01EF]", start: 0xe0100, end: 0xe01ef },
  { plane: "Plane 15-16: PUA", label: "Plane 15 Private Use [U+F0000-U+FFFFF]", start: 0xf0000, end: 0xfffff },
  { plane: "Plane 15-16: PUA", label: "Plane 16 Private Use [U+100000-U+10FFFF]", start: 0x100000, end: 0x10ffff },
];

function buildNav() {
  const nav = document.querySelector("[data-nav]");
  const navFooter = document.querySelector("[data-nav-footer]");
  const current = window.location.pathname.split("/").pop() || "index.html";
  const itemHtml = (item) =>
    `<li><a class="${current === item.path ? "active" : ""}" href="${item.path}">${item.label}</a></li>`;
  const mainItems = NAV_ITEMS.filter((i) => i.path !== "about.html");
  const about = NAV_ITEMS.find((i) => i.path === "about.html");
  if (nav) nav.innerHTML = mainItems.map(itemHtml).join("");
  if (navFooter && about) navFooter.innerHTML = itemHtml(about);
}

function setStatus(id, text, type = "ok") {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.className = `status ${type}`;
}

function applyTooltips(tooltipMap) {
  Object.entries(tooltipMap).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.title = text;
  });
}

function initHelpTips() {
  const tipButtons = document.querySelectorAll(".help-tip[data-help]");
  if (!tipButtons.length) return;
  let activePop = null;

  function closePop() {
    if (activePop) {
      activePop.remove();
      activePop = null;
    }
    tipButtons.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
  }

  tipButtons.forEach((btn) => {
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const expanded = btn.getAttribute("aria-expanded") === "true";
      closePop();
      if (expanded) return;
      const pop = document.createElement("div");
      pop.className = "help-tip-pop";
      pop.textContent = btn.dataset.help;
      btn.appendChild(pop);
      btn.setAttribute("aria-expanded", "true");
      activePop = pop;
    });
  });

  document.addEventListener("click", () => closePop());
}

async function copyText(value, statusId) {
  try {
    await navigator.clipboard.writeText(value);
    setStatus(statusId, "Copied to clipboard.", "ok");
  } catch (e) {
    setStatus(statusId, "Clipboard copy failed. Copy manually.", "error");
  }
}

function unicodeConvert(text, styleMode = "random") {
  const selectedIndex = parseInt(styleMode, 10);
  const fixedStyle = Number.isInteger(selectedIndex) && selectedIndex >= 0 && selectedIndex < STYLE_TABLE.length
    ? STYLE_TABLE[selectedIndex]
    : null;
  return [...text].map((char) => {
    const style = fixedStyle || STYLE_TABLE[Math.floor(Math.random() * STYLE_TABLE.length)];
    const lowerIndex = BASE_LOWER.indexOf(char);
    if (lowerIndex >= 0 && style.lower[lowerIndex]) return style.lower[lowerIndex];
    const upperIndex = BASE_UPPER.indexOf(char);
    if (upperIndex >= 0 && style.upper[upperIndex]) return style.upper[upperIndex];
    const digitIndex = BASE_DIGITS.indexOf(char);
    if (digitIndex >= 0 && style.digits[digitIndex]) return style.digits[digitIndex];
    return char;
  }).join("");
}

function renderStyleSample(style, sample = "Abc 123") {
  return [...sample].map((char) => {
    const lowerIndex = BASE_LOWER.indexOf(char);
    if (lowerIndex >= 0 && style.lower[lowerIndex]) return style.lower[lowerIndex];
    const upperIndex = BASE_UPPER.indexOf(char);
    if (upperIndex >= 0 && style.upper[upperIndex]) return style.upper[upperIndex];
    const digitIndex = BASE_DIGITS.indexOf(char);
    if (digitIndex >= 0 && style.digits[digitIndex]) return style.digits[digitIndex];
    return char;
  }).join("");
}

function nextLengthCheckpoint(consumed) {
  for (let digits = 1; digits <= 6; digits += 1) {
    const candidate = consumed + digits + 2;
    if (String(candidate).length === digits) return candidate;
  }
  return consumed + 3;
}

function toBraille(text) {
  let result = "";
  for (const ch of text) {
    if (/[A-Z]/.test(ch)) result += "⠠";
    if (/[0-9]/.test(ch)) {
      result += "⠼" + NUMBER_BRAILLE[ch];
      continue;
    }
    result += ASCII_TO_BRAILLE[ch.toLowerCase()] || ch;
  }
  return result;
}

function fromBraille(text) {
  let out = "";
  let numberMode = false;
  let capitalNext = false;
  for (const ch of text) {
    if (ch === "⠼") {
      numberMode = true;
      continue;
    }
    if (ch === "⠠") {
      capitalNext = true;
      continue;
    }
    if (numberMode) {
      const digit = Object.entries(NUMBER_BRAILLE).find(([, v]) => v === ch);
      if (digit) {
        out += digit[0];
        continue;
      }
      numberMode = false;
    }
    const plain = BRAILLE_TO_ASCII[ch] || ch;
    out += capitalNext ? plain.toUpperCase() : plain;
    capitalNext = false;
  }
  return out;
}

function idnEncode(host) {
  const url = new URL(`http://${host}`);
  return url.hostname;
}

function idnDecode(host) {
  const url = new URL(`http://${host}`);
  return url.hostname;
}

function interleaveWhitespace(text) {
  return [...text].join(" ");
}

function zalgo(text, intensity = 3) {
  return [...text].map((ch) => {
    if (ch === " ") return ch;
    let next = ch;
    for (let i = 0; i < intensity; i += 1) {
      next += ZALGO[Math.floor(Math.random() * ZALGO.length)];
    }
    return next;
  }).join("");
}

function identifiableText(length) {
  if (length < 1) return "";
  let out = "";
  const targetLabel = `A${length}`;

  while (true) {
    const checkpoint = nextLengthCheckpoint(out.length);
    const checkpointToken = `A${checkpoint}`;
    if (out.length + checkpointToken.length > length) break;
    out += checkpointToken;
    if (checkpoint === length) break;
  }

  if (!out.endsWith(targetLabel) && out.length + targetLabel.length <= length) {
    out += targetLabel;
  }

  while (out.length < length) out += "A";
  return out;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function luhnCheckDigit(digits) {
  let sum = 0;
  let shouldDouble = true;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    let n = parseInt(digits[i], 10);
    if (shouldDouble) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    shouldDouble = !shouldDouble;
  }
  return (10 - (sum % 10)) % 10;
}

function toUtf8Bytes(text) {
  return new TextEncoder().encode(text);
}

function fromUtf8Bytes(bytes) {
  return new TextDecoder().decode(bytes);
}

function bytesToHex(bytes) {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function hexToBytes(hexText) {
  const clean = hexText.replace(/\s+/g, "").toLowerCase();
  if (!/^[0-9a-f]*$/.test(clean) || clean.length % 2 !== 0) {
    throw new Error("Invalid hex input.");
  }
  const bytes = new Uint8Array(clean.length / 2);
  for (let i = 0; i < clean.length; i += 2) {
    bytes[i / 2] = parseInt(clean.slice(i, i + 2), 16);
  }
  return bytes;
}

function bytesToBinary(bytes) {
  return Array.from(bytes, (b) => b.toString(2).padStart(8, "0")).join(" ");
}

function binaryToBytes(binaryText) {
  const clean = binaryText.replace(/\s+/g, "");
  if (!/^[01]*$/.test(clean) || clean.length % 8 !== 0) {
    throw new Error("Invalid binary input.");
  }
  const bytes = new Uint8Array(clean.length / 8);
  for (let i = 0; i < clean.length; i += 8) {
    bytes[i / 8] = parseInt(clean.slice(i, i + 8), 2);
  }
  return bytes;
}

function md5Hash(text) {
  const input = toUtf8Bytes(text);
  const words = [];
  for (let i = 0; i < input.length; i += 1) {
    words[i >> 2] = (words[i >> 2] || 0) | (input[i] << ((i % 4) * 8));
  }
  words[input.length >> 2] = (words[input.length >> 2] || 0) | (0x80 << ((input.length % 4) * 8));
  words[(((input.length + 8) >> 6) + 1) * 16 - 2] = input.length * 8;

  let a = 0x67452301;
  let b = 0xefcdab89;
  let c = 0x98badcfe;
  let d = 0x10325476;

  function ff(x, y, z) { return (x & y) | (~x & z); }
  function gg(x, y, z) { return (x & z) | (y & ~z); }
  function hh(x, y, z) { return x ^ y ^ z; }
  function ii(x, y, z) { return y ^ (x | ~z); }
  function rotate(x, n) { return (x << n) | (x >>> (32 - n)); }
  function add(x, y) { return (((x & 0xffff) + (y & 0xffff)) & 0xffff) + ((((x >>> 16) + (y >>> 16)) & 0xffff) << 16); }
  function step(func, x, y, z, value, shift, ac) {
    return add(rotate(add(add(x, func(y, z)), add(value, ac)), shift), y);
  }

  const T = Array.from({ length: 64 }, (_, i) => Math.floor(Math.abs(Math.sin(i + 1)) * 0x100000000));
  const shifts = [
    7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
    5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
    4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
    6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21,
  ];

  for (let i = 0; i < words.length; i += 16) {
    const aa = a;
    const bb = b;
    const cc = c;
    const dd = d;
    for (let j = 0; j < 64; j += 1) {
      let f;
      let g;
      if (j < 16) {
        f = ff;
        g = j;
      } else if (j < 32) {
        f = gg;
        g = (5 * j + 1) % 16;
      } else if (j < 48) {
        f = hh;
        g = (3 * j + 5) % 16;
      } else {
        f = ii;
        g = (7 * j) % 16;
      }
      const temp = d;
      d = c;
      c = b;
      b = step(f, b, c, d, words[i + g] || 0, shifts[j], T[j]);
      a = temp;
    }
    a = add(a, aa);
    b = add(b, bb);
    c = add(c, cc);
    d = add(d, dd);
  }

  const digest = new Uint8Array(16);
  [a, b, c, d].forEach((value, index) => {
    digest[index * 4] = value & 0xff;
    digest[index * 4 + 1] = (value >>> 8) & 0xff;
    digest[index * 4 + 2] = (value >>> 16) & 0xff;
    digest[index * 4 + 3] = (value >>> 24) & 0xff;
  });
  return bytesToHex(digest);
}

function htmlEntityEncode(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function htmlEntityDecode(text) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

function toBase64Url(text) {
  return text.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(text) {
  let normalized = text.replace(/-/g, "+").replace(/_/g, "/");
  while (normalized.length % 4 !== 0) normalized += "=";
  return normalized;
}

async function digestHash(algorithm, text) {
  const bytes = toUtf8Bytes(text);
  const digest = await crypto.subtle.digest(algorithm, bytes);
  return bytesToHex(new Uint8Array(digest));
}

function csvEscape(text, delimiter = ",") {
  return text
    .split(/\r?\n/)
    .map((line) => line.split(delimiter).map((cell) => `"${cell.replace(/"/g, "\"\"")}"`).join(delimiter))
    .join("\n");
}

function initUnicodeConverter() {
  const input = document.getElementById("unicodeInput");
  const output = document.getElementById("unicodeOutput");
  const stylePreview = document.getElementById("stylePreview");
  const seedText = "this is an example";
  const ensureSeedInput = () => {
    if (input.value.trim() === "") input.value = seedText;
  };
  applyTooltips({
    convertUnicode: "Convert input text using selected style.",
    styleInterleave: "Insert spaces between every character.",
    styleZalgo: "Add combining marks (Zalgo style).",
    copyUnicode: "Copy converted output to clipboard.",
  });
  let selectedMode = "random";
  stylePreview.innerHTML = [
    `<button class="chip chip-btn active" data-style-mode="random" type="button">Random mix: ${unicodeConvert("Abc 123", "random")}</button>`,
    ...STYLE_TABLE.slice(0, 6).map(
      (style, index) => `<button class="chip chip-btn" data-style-mode="${index}" type="button">${style.name}: ${renderStyleSample(style)}</button>`
    ),
  ].join("");

  stylePreview.querySelectorAll("[data-style-mode]").forEach((chipBtn) => {
    chipBtn.addEventListener("click", () => {
      ensureSeedInput();
      selectedMode = chipBtn.dataset.styleMode;
      stylePreview.querySelectorAll(".chip-btn").forEach((btn) => btn.classList.remove("active"));
      chipBtn.classList.add("active");
      output.textContent = unicodeConvert(input.value, selectedMode);
    });
  });

  document.getElementById("convertUnicode").addEventListener("click", () => {
    ensureSeedInput();
    output.textContent = unicodeConvert(input.value, selectedMode);
  });
  document.getElementById("styleInterleave").addEventListener("click", () => {
    ensureSeedInput();
    output.textContent = interleaveWhitespace(input.value);
  });
  document.getElementById("styleZalgo").addEventListener("click", () => {
    ensureSeedInput();
    output.textContent = zalgo(input.value, 4);
  });
  document.getElementById("copyUnicode").addEventListener("click", () => {
    copyText(output.textContent, "unicodeStatus");
  });
}

function initTransformations() {
  const source = document.getElementById("transformInput");
  const output = document.getElementById("transformOutput");
  if (!source || !output) return;
  const seedText = "this is an example";
  applyTooltips({
    toBraille: "Convert plain text to 6-dot Braille symbols.",
    fromBraille: "Convert Braille symbols back to plain text.",
    idnEncode: "Encode internationalized domain to punycode.",
    idnDecode: "Decode punycode domain to Unicode form.",
    copyTransform: "Copy transformation output to clipboard.",
  });
  document.getElementById("toBraille").addEventListener("click", () => {
    if (source.value.trim() === "") source.value = seedText;
    output.textContent = toBraille(source.value);
  });
  document.getElementById("fromBraille").addEventListener("click", () => {
    if (source.value.trim() === "") source.value = toBraille(seedText);
    output.textContent = fromBraille(source.value);
  });
  document.getElementById("idnEncode").addEventListener("click", () => {
    if (source.value.trim() === "") source.value = "tést.com";
    try { output.textContent = idnEncode(source.value.trim()); }
    catch (e) { setStatus("transformStatus", "Invalid domain to encode.", "error"); }
  });
  document.getElementById("idnDecode").addEventListener("click", () => {
    if (source.value.trim() === "") source.value = idnEncode("tést.com");
    try { output.textContent = idnDecode(source.value.trim()); }
    catch (e) { setStatus("transformStatus", "Invalid domain to decode.", "error"); }
  });
  document.getElementById("copyTransform").addEventListener("click", () => { copyText(output.textContent, "transformStatus"); });
}

function initUnicodeTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");
  if (!tabs.length || !panels.length) return;
  const hashToTab = {
    "#styles": "stylesTab",
    "#transform": "transformTab",
  };
  const tabToHash = {
    stylesTab: "#styles",
    transformTab: "#transform",
  };

  function activateTab(tabId) {
    tabs.forEach((item) => item.classList.remove("active"));
    panels.forEach((panel) => panel.classList.remove("active"));
    const tab = Array.from(tabs).find((item) => item.dataset.tab === tabId);
    const panel = document.getElementById(tabId);
    if (tab) tab.classList.add("active");
    if (panel) panel.classList.add("active");
  }

  const initialTabId = hashToTab[window.location.hash] || "stylesTab";
  activateTab(initialTabId);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateTab(tab.dataset.tab);
      const nextHash = tabToHash[tab.dataset.tab] || "#styles";
      if (window.location.hash !== nextHash) {
        history.replaceState(null, "", nextHash);
      }
    });
  });

  window.addEventListener("hashchange", () => {
    const targetTab = hashToTab[window.location.hash];
    if (targetTab) activateTab(targetTab);
  });
}

function initGenerateText() {
  const output = document.getElementById("generateOutput");
  const unicodeRangeSelect = document.getElementById("unicodeRangeSelect");
  const unicodeMaxPoints = document.getElementById("unicodeMaxPoints");
  const groupedRanges = UNICODE_RANGES.reduce((acc, range, index) => {
    if (!acc[range.plane]) acc[range.plane] = [];
    acc[range.plane].push(`<option value="${index}">${range.label}</option>`);
    return acc;
  }, {});
  unicodeRangeSelect.innerHTML = Object.entries(groupedRanges)
    .map(([plane, options]) => `<optgroup label="${plane}">${options.join("")}</optgroup>`)
    .join("");
  applyTooltips({
    genLength: "Generate readable checkpoint string by total length.",
    genAllChars: "Generate character codes 1 through 255.",
    genTimes: "Repeat input text a number of times.",
    genUnicodeRange: "Generate characters from selected Unicode range.",
    copyGenerate: "Copy generated output to clipboard.",
  });

  document.getElementById("genLength").addEventListener("click", () => {
    if (!document.getElementById("lengthInput").value) document.getElementById("lengthInput").value = "15";
    const len = parseInt(document.getElementById("lengthInput").value, 10) || 0;
    output.textContent = identifiableText(len);
  });
  document.getElementById("genAllChars").addEventListener("click", () => {
    let text = "";
    for (let i = 1; i <= 255; i += 1) text += String.fromCharCode(i);
    output.textContent = text;
  });
  document.getElementById("genTimes").addEventListener("click", () => {
    if (document.getElementById("charInput").value.trim() === "") {
      document.getElementById("charInput").value = "this is an example";
    }
    const ch = document.getElementById("charInput").value || "X";
    const times = parseInt(document.getElementById("timesInput").value, 10) || 0;
    output.textContent = ch.repeat(Math.max(0, times));
  });
  document.getElementById("genUnicodeRange").addEventListener("click", () => {
    const selected = UNICODE_RANGES[parseInt(unicodeRangeSelect.value, 10)];
    if (!selected) return;
    const maxCount = Math.max(1, Math.min(50000, parseInt(unicodeMaxPoints.value, 10) || 2048));
    const available = selected.end - selected.start + 1;
    const count = Math.min(maxCount, available);
    const chars = [];

    for (let cp = selected.start; cp < selected.start + count; cp += 1) {
      chars.push(String.fromCodePoint(cp));
    }

    output.textContent = chars.join("");
    setStatus(
      "generateStatus",
      `Generated ${count} code points from ${selected.label}.`,
      "ok"
    );
  });
  document.getElementById("copyGenerate").addEventListener("click", () => {
    copyText(output.textContent, "generateStatus");
  });
}

function initEncode() {
  const input = document.getElementById("encodeInput");
  const output = document.getElementById("encodeOutput");
  const seedText = "this is an example";
  const ensureSeedInput = (producer) => {
    if (input.value.trim() !== "") return;
    input.value = producer();
  };
  const tooltipById = {
    b64Encode: "Encode text into Base64.",
    b64Decode: "Decode Base64 back to plain text.",
    urlEncode: "Percent-encode for query and form values.",
    urlDecode: "Decode percent-encoded URL component text.",
    uriEncode: "Encode a full URI string safely.",
    uriDecode: "Decode a full encoded URI string.",
    md5Hash: "Generate MD5 hash (hex digest).",
    sha1Hash: "Generate SHA-1 hash (hex digest).",
    sha256Hash: "Generate SHA-256 hash (hex digest).",
    sha512Hash: "Generate SHA-512 hash (hex digest).",
    hexEncode: "Encode UTF-8 text bytes to hex.",
    hexDecode: "Decode hex text back to UTF-8.",
    binEncode: "Encode UTF-8 text bytes to binary.",
    binDecode: "Decode binary bytes back to UTF-8.",
    htmlEncode: "Escape HTML-sensitive characters to entities.",
    htmlDecode: "Decode HTML entities back to text.",
    jsonEscape: "Escape as JSON string literal.",
    jsonUnescape: "Unescape JSON string literal to text.",
    normNfc: "Normalize Unicode to NFC form.",
    normNfd: "Normalize Unicode to NFD form.",
    normNfkc: "Normalize Unicode to NFKC form.",
    normNfkd: "Normalize Unicode to NFKD form.",
    trimText: "Trim leading and trailing whitespace.",
    collapseWhitespace: "Collapse repeated whitespace to single spaces.",
    lfNormalize: "Convert line endings to LF (\\n).",
    crlfNormalize: "Convert line endings to CRLF (\\r\\n).",
    tabsToSpaces: "Replace tab characters with spaces.",
    spacesToTabs: "Replace pairs of spaces with tabs.",
    toUpper: "Convert text to uppercase.",
    toLower: "Convert text to lowercase.",
    jwtDecode: "Decode JWT header and payload JSON.",
    queryParse: "Parse querystring into JSON object.",
    queryBuild: "Build querystring from JSON object.",
    csvEscape: "Quote and escape CSV fields.",
    tsvEscape: "Quote and escape TSV fields.",
    unixToIso: "Convert Unix timestamp to ISO datetime.",
    isoToUnixMs: "Convert ISO datetime to Unix milliseconds.",
    isoToUnixSec: "Convert ISO datetime to Unix seconds.",
    swapEncode: "Swap input and output values.",
    clearEncode: "Clear input and output fields.",
    copyEncode: "Copy output text to clipboard.",
  };
  Object.entries(tooltipById).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.title = text;
  });

  const safeRun = async (action, errorText = "Invalid input.") => {
    try {
      const result = await action();
      output.textContent = result;
      setStatus("encodeStatus", "", "ok");
    } catch (e) {
      setStatus("encodeStatus", errorText, "error");
    }
  };

  document.getElementById("b64Encode").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    output.textContent = btoa(unescape(encodeURIComponent(input.value)));
  });
  document.getElementById("b64Decode").addEventListener("click", () => {
    ensureSeedInput(() => btoa(unescape(encodeURIComponent(seedText))));
    try {
      output.textContent = decodeURIComponent(escape(atob(input.value)));
    } catch (e) {
      setStatus("encodeStatus", "Invalid Base64 input.", "error");
    }
  });
  document.getElementById("urlEncode").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    output.textContent = encodeURIComponent(input.value);
  });
  document.getElementById("urlDecode").addEventListener("click", () => {
    ensureSeedInput(() => encodeURIComponent(seedText));
    try {
      output.textContent = decodeURIComponent(input.value);
    } catch (e) {
      setStatus("encodeStatus", "Invalid URL-encoded input.", "error");
    }
  });
  document.getElementById("uriEncode").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    output.textContent = encodeURI(input.value);
  });
  document.getElementById("uriDecode").addEventListener("click", () => {
    ensureSeedInput(() => encodeURI(seedText));
    safeRun(() => decodeURI(input.value), "Invalid URI encoded input.");
  });
  document.getElementById("md5Hash").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    output.textContent = md5Hash(input.value);
  });
  document.getElementById("sha1Hash").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    safeRun(() => digestHash("SHA-1", input.value), "SHA-1 hashing failed.");
  });
  document.getElementById("sha256Hash").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    safeRun(() => digestHash("SHA-256", input.value), "SHA-256 hashing failed.");
  });
  document.getElementById("sha512Hash").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    safeRun(() => digestHash("SHA-512", input.value), "SHA-512 hashing failed.");
  });
  document.getElementById("hexEncode").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    output.textContent = bytesToHex(toUtf8Bytes(input.value));
  });
  document.getElementById("hexDecode").addEventListener("click", () => {
    ensureSeedInput(() => bytesToHex(toUtf8Bytes(seedText)));
    try {
      output.textContent = fromUtf8Bytes(hexToBytes(input.value));
    } catch (e) {
      setStatus("encodeStatus", "Invalid hex input.", "error");
    }
  });
  document.getElementById("binEncode").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    output.textContent = bytesToBinary(toUtf8Bytes(input.value));
  });
  document.getElementById("binDecode").addEventListener("click", () => {
    ensureSeedInput(() => bytesToBinary(toUtf8Bytes(seedText)));
    try {
      output.textContent = fromUtf8Bytes(binaryToBytes(input.value));
    } catch (e) {
      setStatus("encodeStatus", "Invalid binary input.", "error");
    }
  });
  document.getElementById("htmlEncode").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    output.textContent = htmlEntityEncode(input.value);
  });
  document.getElementById("htmlDecode").addEventListener("click", () => {
    ensureSeedInput(() => htmlEntityEncode(seedText));
    output.textContent = htmlEntityDecode(input.value);
  });
  document.getElementById("jsonEscape").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    output.textContent = JSON.stringify(input.value);
  });
  document.getElementById("jsonUnescape").addEventListener("click", () => {
    ensureSeedInput(() => JSON.stringify(seedText));
    safeRun(() => JSON.parse(input.value), "Invalid JSON string input.");
  });
  document.getElementById("normNfc").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.normalize("NFC"); });
  document.getElementById("normNfd").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.normalize("NFD"); });
  document.getElementById("normNfkc").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.normalize("NFKC"); });
  document.getElementById("normNfkd").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.normalize("NFKD"); });
  document.getElementById("trimText").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.trim(); });
  document.getElementById("collapseWhitespace").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.replace(/\s+/g, " ").trim(); });
  document.getElementById("lfNormalize").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.replace(/\r\n/g, "\n"); });
  document.getElementById("crlfNormalize").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.replace(/\r?\n/g, "\r\n"); });
  document.getElementById("tabsToSpaces").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.replace(/\t/g, "  "); });
  document.getElementById("spacesToTabs").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.replace(/ {2}/g, "\t"); });
  document.getElementById("toUpper").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.toUpperCase(); });
  document.getElementById("toLower").addEventListener("click", () => { ensureSeedInput(() => seedText); output.textContent = input.value.toLowerCase(); });
  document.getElementById("jwtDecode").addEventListener("click", () => {
    ensureSeedInput(() => {
      const header = toBase64Url(btoa(unescape(encodeURIComponent(JSON.stringify({ alg: "none", typ: "JWT" })))));
      const payload = toBase64Url(btoa(unescape(encodeURIComponent(JSON.stringify({ sample: seedText })))));
      return `${header}.${payload}.`;
    });
    safeRun(() => {
      const [header, payload] = input.value.trim().split(".");
      if (!header || !payload) throw new Error("Invalid JWT");
      const parsed = {
        header: JSON.parse(decodeURIComponent(escape(atob(fromBase64Url(header))))),
        payload: JSON.parse(decodeURIComponent(escape(atob(fromBase64Url(payload))))),
      };
      return JSON.stringify(parsed, null, 2);
    }, "Invalid JWT token.");
  });
  document.getElementById("queryParse").addEventListener("click", () => {
    ensureSeedInput(() => `example=${encodeURIComponent(seedText)}`);
    safeRun(() => {
      const query = input.value.trim().replace(/^\?/, "");
      const params = new URLSearchParams(query);
      const out = {};
      params.forEach((value, key) => {
        if (Object.prototype.hasOwnProperty.call(out, key)) {
          out[key] = Array.isArray(out[key]) ? [...out[key], value] : [out[key], value];
        } else {
          out[key] = value;
        }
      });
      return JSON.stringify(out, null, 2);
    }, "Invalid query string.");
  });
  document.getElementById("queryBuild").addEventListener("click", () => {
    ensureSeedInput(() => JSON.stringify({ example: seedText }));
    safeRun(() => {
      const value = JSON.parse(input.value);
      const params = new URLSearchParams();
      Object.entries(value).forEach(([key, val]) => {
        if (Array.isArray(val)) {
          val.forEach((item) => params.append(key, String(item)));
        } else {
          params.append(key, String(val));
        }
      });
      return params.toString();
    }, "Input must be valid JSON object.");
  });
  document.getElementById("csvEscape").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    output.textContent = csvEscape(input.value, ",");
  });
  document.getElementById("tsvEscape").addEventListener("click", () => {
    ensureSeedInput(() => seedText);
    output.textContent = csvEscape(input.value, "\t");
  });
  document.getElementById("unixToIso").addEventListener("click", () => {
    safeRun(() => {
      const raw = Number(input.value.trim());
      if (Number.isNaN(raw)) throw new Error("Invalid number");
      const ms = input.value.trim().length <= 10 ? raw * 1000 : raw;
      return new Date(ms).toISOString();
    }, "Invalid unix timestamp.");
  });
  document.getElementById("isoToUnixMs").addEventListener("click", () => {
    safeRun(() => {
      const ts = Date.parse(input.value.trim());
      if (Number.isNaN(ts)) throw new Error("Invalid date");
      return String(ts);
    }, "Invalid ISO datetime.");
  });
  document.getElementById("isoToUnixSec").addEventListener("click", () => {
    safeRun(() => {
      const ts = Date.parse(input.value.trim());
      if (Number.isNaN(ts)) throw new Error("Invalid date");
      return String(Math.floor(ts / 1000));
    }, "Invalid ISO datetime.");
  });
  document.getElementById("swapEncode").addEventListener("click", () => {
    const currentInput = input.value;
    input.value = output.textContent;
    output.textContent = currentInput;
  });
  document.getElementById("clearEncode").addEventListener("click", () => {
    input.value = "";
    output.textContent = "";
    setStatus("encodeStatus", "Cleared input and output.", "ok");
  });
  document.getElementById("copyEncode").addEventListener("click", () => {
    copyText(output.textContent, "encodeStatus");
  });
}

function initWebsec() {
  const list = document.getElementById("websecPayloads");
  const typeFilter = document.getElementById("websecTypeFilter");
  const textFilter = document.getElementById("websecSearch");
  if (!list) return;
  const payloads = [
    { type: "XSS", value: "<script>alert(1)</script>" },
    { type: "XSS", value: "\"><img src=x onerror=alert(1)>" },
    { type: "XSS", value: "<svg onload=alert(document.domain)>" },
    { type: "SQLi", value: "' OR '1'='1' -- " },
    { type: "SQLi", value: "\" OR \"1\"=\"1\" -- " },
    { type: "SQLi", value: "'; DROP TABLE users; --" },
    { type: "SQLi", value: "' UNION SELECT null,null -- " },
  ];
  applyTooltips({
    websecTypeFilter: "Filter payload list by vulnerability type.",
    websecSearch: "Search payload text in the current list.",
  });

  function renderPayloads() {
    const activeType = typeFilter?.value || "ALL";
    const search = (textFilter?.value || "").trim().toLowerCase();
    const filtered = payloads
      .map((item, index) => ({ ...item, index }))
      .filter((item) => (activeType === "ALL" || item.type === activeType))
      .filter((item) => (search ? item.value.toLowerCase().includes(search) : true));

    if (!filtered.length) {
      list.innerHTML = '<p class="hint">No payloads matched your filters.</p>';
      return;
    }

    list.innerHTML = filtered.map((item) => `
      <div class="payload-row">
        <div>
          <span class="chip">${item.type}</span>
          <code>${item.value.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>
        </div>
        <button class="ghost" data-copy-payload="${item.index}">Copy</button>
      </div>
    `).join("");

    list.querySelectorAll("[data-copy-payload]").forEach((btn) => {
      btn.title = "Copy payload to clipboard.";
      btn.addEventListener("click", () => {
        const selected = payloads[parseInt(btn.dataset.copyPayload, 10)];
        copyText(selected.value, "websecStatus");
      });
    });
  }

  typeFilter?.addEventListener("change", renderPayloads);
  textFilter?.addEventListener("input", renderPayloads);
  renderPayloads();
}

function initCommonInput() {
  const output = document.getElementById("commonOutput");
  applyTooltips({
    randomEmail: "Generate randomized email-like value.",
    randomPhone: "Generate randomized phone-like value.",
    randomCreditCard: "Generate card-like number with Luhn check digit.",
    randomAddress: "Generate randomized address-like value.",
    copyCommon: "Copy output value to clipboard.",
  });
  document.getElementById("randomEmail").addEventListener("click", () => {
    const domains = ["mailinator.com", "example.org", "test.local", "qa.dev"];
    output.textContent = `tester${Date.now().toString().slice(-6)}@${domains[randomInt(0, domains.length - 1)]}`;
  });
  document.getElementById("randomPhone").addEventListener("click", () => {
    output.textContent = `+1-${randomInt(200, 999)}-${randomInt(200, 999)}-${randomInt(1000, 9999)}`;
  });
  document.getElementById("randomCreditCard").addEventListener("click", () => {
    let digits = "4";
    while (digits.length < 15) digits += randomInt(0, 9).toString();
    const check = luhnCheckDigit(digits);
    output.textContent = `${digits}${check}`;
  });
  document.getElementById("randomAddress").addEventListener("click", () => {
    const streets = ["Maple", "Oak", "Cedar", "Pine", "Sunset"];
    const suffix = ["St", "Ave", "Rd", "Blvd", "Ln"];
    output.textContent = `${randomInt(100, 9999)} ${streets[randomInt(0, streets.length - 1)]} ${suffix[randomInt(0, suffix.length - 1)]}, Test City, TX ${randomInt(10000, 99999)}`;
  });
  document.getElementById("copyCommon").addEventListener("click", () => {
    copyText(output.textContent, "commonStatus");
  });
}

buildNav();
initHelpTips();

const page = document.body.dataset.page;
if (page === "unicode") {
  initUnicodeTabs();
  initUnicodeConverter();
  initTransformations();
}
if (page === "transformations") initTransformations();
if (page === "generate") initGenerateText();
if (page === "encode") initEncode();
if (page === "common-input") initCommonInput();
if (page === "websec") initWebsec();

import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "..", "OPReborn", "latest");
const ROOT_CONTENT_DIR = path.join(process.cwd(), "..", "OPReborn");

export interface ProcessedContent {
  html: string;
  title: string;
  found: boolean;
}

export async function processHtmlFile(filename: string): Promise<ProcessedContent> {
  // Try latest/ first, then root
  let filePath = path.join(CONTENT_DIR, filename);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(ROOT_CONTENT_DIR, filename);
  }
  if (!fs.existsSync(filePath)) {
    return { html: "", title: "Not Found", found: false };
  }

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const $ = cheerio.load(raw);

    const title = $("title").text() || "Orange Papers";

    // Remove head, script, style tags we don't need
    $("script").remove();
    $("style[type='text/css']").each((_, el) => {
      const content = $(el).html() || "";
      // Keep styles but we'll override with our own
      $(el).remove();
    });

    // Fix all internal links to point to our routing
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href") || "";
      if (href.startsWith("orange-") || href.startsWith("blmitch") || href.startsWith("appel")) {
        // Internal HTML file link
        const htmlFile = href.split("#")[0];
        const anchor = href.includes("#") ? "#" + href.split("#")[1] : "";
        const slug = fileNameToSlug(htmlFile);
        if (slug) {
          $(el).attr("href", `/content/${slug}${anchor}`);
        }
      } else if (href === "/" || href === "index.html" || href === "./") {
        $(el).attr("href", "/");
      }
    });

    // Fix image paths
    $("img[src]").each((_, el) => {
      let src = $(el).attr("src") || "";
      if (src.startsWith("/")) {
        // Already absolute - rewrite to /assets/
        const filename = src.replace(/^\//, "");
        $(el).attr("src", `/assets/${filename}`);
      } else if (!src.startsWith("http") && !src.startsWith("data:")) {
        $(el).attr("src", `/assets/${src}`);
      }
      // Add loading=lazy
      $(el).attr("loading", "lazy");
      // Strip fixed pixel dimensions — CSS handles max-width:100%
      $(el).removeAttr("width").removeAttr("height");
    });

    // Strip align/valign from block elements — CSS handles text-align
    $("p[align], div[align], h1[align], h2[align], h3[align], h4[align], blockquote[align]").removeAttr("align");
    $("td[valign], th[valign]").removeAttr("valign");
    // Strip width/size/align from hr — CSS enforces 100% width
    $("hr").removeAttr("width").removeAttr("size").removeAttr("align");

    // Normalize tables for responsive layout
    $("table").each((_, el) => {
      const $t = $(el);

      // Strip float-causing align attribute (align="right/left" → CSS float)
      $t.removeAttr("align");

      // Strip invalid/pixel widths (e.g. "93%%" or "800").
      // Percentage widths with double %% are invalid; pixel widths force fixed layout.
      const w = $t.attr("width") || "";
      if (w && (w.includes("%%") || /^\d+$/.test(w.trim()))) {
        $t.removeAttr("width");
      }

      // Wrap every table that is NOT already inside a .tscroll wrapper
      // so CSS can apply overflow-x:auto on the wrapper instead of the table.
      if (!$t.parent().hasClass("tscroll")) {
        $t.wrap('<div class="tscroll"></div>');
      }
    });

    // Get the body content
    let bodyContent = $("body").html() || $("html").html() || raw;

    return { html: bodyContent, title, found: true };
  } catch (err) {
    console.error("Error processing file:", filename, err);
    return { html: "", title: "Error", found: false };
  }
}

const FILE_SLUG_MAP: Record<string, string> = {
  "orange-intro.html": "intro",
  "orange-secrets.html": "secrets",
  "orange-effectiveness.html": "effectiveness",
  "orange-interpreted.html": "interpreted",
  "orange-traditions.html": "traditions",
  "orange-snake_oil.html": "snake-oil",
  "orange-horrors.html": "horrors",
  "orange-suicides.html": "suicides",
  "orange-interventions.html": "interventions",
  "orange-no_meds.html": "no-meds",
  "orange-divorce.html": "divorce",
  "orange-heresy.html": "heresy",
  "orange-propaganda.html": "propaganda",
  "orange-bait-switch.html": "bait-switch",
  "orange-powerless.html": "powerless",
  "orange-funny_spirituality.html": "funny-spirituality",
  "orange-drydrunk.html": "dry-drunk",
  "orange-otherwomen.html": "other-women",
  "orange-us_stupid_drunks.html": "us-stupid-drunks",
  "orange-recruit.html": "recruit",
  "orange-religious_faith.html": "religious-faith",
  "orange-coffee.html": "coffee",
  "orange-spirrel.html": "spirrel",
  "orange-bigbook.html": "bigbook",
  "orange-aacoa.html": "aacoa",
  "orange-gulags.html": "gulags",
  "orange-killjoy.html": "killjoy",
  "orange-aalies.html": "aalies",
  "orange-statistics.html": "statistics",
  "orange-sentenced.html": "sentenced",
  "orange-Jung.html": "jung",
  "orange-tobacco.html": "tobacco",
  "orange-whats_good.html": "whats-good",
  "orange-not_good.html": "not-good",
  "orange-random.html": "random",
  "orange-Midtown_stories.html": "midtown-stories",
  "orange-clancy_i.html": "clancy",
  "orange-millions.html": "millions",
  "orange-disservice.html": "disservice",
  "orange-resentment.html": "resentment",
  "orange-links.html": "links",
  "orange-wishlist.html": "wishlist",
  "orange-bibliography.html": "bibliography",
  "orange-jokes.html": "jokes",
  "orange-greatmoments.html": "greatmoments",
  "orange-moon.html": "moon",
  "orange-addmonst.html": "addiction-monster",
  "orange-what_works.html": "what-works",
  "orange-ratpark.html": "rat-park",
  "orange-deprogram.html": "deprogram",
  "orange-top10.html": "top10",
  "orange-alt_list.html": "alt-list",
  "orange-spirrecov.html": "spirrecov",
  "orange-pseudo2.html": "pseudo2",
  "orange-big_lie.html": "big-lie",
  "orange-Galanter.html": "galanter",
  "orange-Tiebout.html": "tiebout",
  "orange-Vaillant02.html": "vaillant",
  "orange-pmachine7.html": "pmachine7",
  "orange-Kris_Best.html": "kris-best",
  "orange-cult.html": "cult",
  "orange-cult_q0.html": "cult-questions",
  "orange-cult_a0.html": "cult-answers",
  "orange-cult_a4.html": "cult-slogans",
  "orange-religiousroots.html": "religious-roots",
  "orange-definitions.html": "definitions",
  "orange-rross_aa01.html": "rross-aa01",
  "orange-letters.html": "letters-1",
};

// Add letter mappings programmatically
for (let i = 2; i <= 428; i++) {
  FILE_SLUG_MAP[`orange-letters${i}.html`] = `letters-${i}`;
}

// Add rroot mappings
for (let i = 30; i <= 990; i += 30) {
  FILE_SLUG_MAP[`orange-rroot${i.toString().padStart(3, "0")}.html`] = `rroot-${i.toString().padStart(3, "0")}`;
}

export function fileNameToSlug(filename: string): string | null {
  // Strip query params and anchors
  const clean = filename.split("?")[0].split("#")[0];
  return FILE_SLUG_MAP[clean] || null;
}

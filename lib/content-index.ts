export interface ContentItem {
  slug: string;
  title: string;
  category: string;
  filename: string;
  description?: string;
}

export const CATEGORIES = {
  CORE: "Core Critiques",
  ALTERNATIVE: "Alternative Recovery",
  HISTORY: "History & Evidence",
  PROPAGANDA: "Pro-AA Propaganda Analyzed",
  LETTERS: "Letters",
  RELIGIOUS: "Religious Roots of A.A.",
  CULT: "Cult Test",
  DOCUMENTS: "Supporting Documents",
  MISC: "Miscellaneous",
};

export const ARTICLES: ContentItem[] = [
  { slug: "intro", title: "Introduction", category: CATEGORIES.CORE, filename: "orange-intro.html", description: "Introduction to the Orange Papers investigation of Alcoholics Anonymous" },
  { slug: "secrets", title: "The 12 Biggest Secrets of A.A.", category: CATEGORIES.CORE, filename: "orange-secrets.html" },
  { slug: "effectiveness", title: "The Effectiveness of the Twelve-Step Treatment", category: CATEGORIES.CORE, filename: "orange-effectiveness.html", description: "Statistical analysis of AA's actual success rates" },
  { slug: "interpreted", title: "The Twelve Steps Interpreted", category: CATEGORIES.CORE, filename: "orange-interpreted.html" },
  { slug: "traditions", title: "The Twelve Traditions Interpreted", category: CATEGORIES.CORE, filename: "orange-traditions.html" },
  { slug: "snake-oil", title: "Twelve-Step Snake Oil", category: CATEGORIES.CORE, filename: "orange-snake_oil.html" },
  { slug: "horrors", title: "A.A. Horror Stories", category: CATEGORIES.CORE, filename: "orange-horrors.html" },
  { slug: "suicides", title: "A.A. Suicides", category: CATEGORIES.CORE, filename: "orange-suicides.html" },
  { slug: "interventions", title: "Interventions", category: CATEGORIES.CORE, filename: "orange-interventions.html" },
  { slug: "no-meds", title: "A.A. \"No Meds\" Horror Stories", category: CATEGORIES.CORE, filename: "orange-no_meds.html" },
  { slug: "divorce", title: "A.A. Divorces", category: CATEGORIES.CORE, filename: "orange-divorce.html" },
  { slug: "heresy", title: "The Heresy of the Twelve Steps", category: CATEGORIES.CORE, filename: "orange-heresy.html" },
  { slug: "propaganda", title: "Propaganda and Debating Techniques", category: CATEGORIES.CORE, filename: "orange-propaganda.html" },
  { slug: "bait-switch", title: "The Bait and Switch Con Game", category: CATEGORIES.CORE, filename: "orange-bait-switch.html" },
  { slug: "powerless", title: "Powerless Over Alcohol", category: CATEGORIES.CORE, filename: "orange-powerless.html" },
  { slug: "funny-spirituality", title: "The Funny Spirituality of Bill Wilson and A.A.", category: CATEGORIES.CORE, filename: "orange-funny_spirituality.html" },
  { slug: "dry-drunk", title: "The Dry Drunk", category: CATEGORIES.CORE, filename: "orange-drydrunk.html" },
  { slug: "other-women", title: "Bill and The Other Women", category: CATEGORIES.CORE, filename: "orange-otherwomen.html" },
  { slug: "us-stupid-drunks", title: "The \"Us Stupid Drunks\" Conspiracy", category: CATEGORIES.CORE, filename: "orange-us_stupid_drunks.html" },
  { slug: "recruit", title: "Recruiting Mind Games", category: CATEGORIES.CORE, filename: "orange-recruit.html" },
  { slug: "religious-faith", title: "A.A. and Religious Faith", category: CATEGORIES.CORE, filename: "orange-religious_faith.html" },
  { slug: "coffee", title: "The Hazelden Coffee War", category: CATEGORIES.CORE, filename: "orange-coffee.html" },
  { slug: "spirrel", title: "\"It's Spiritual, Not Religious\"", category: CATEGORIES.CORE, filename: "orange-spirrel.html" },
  { slug: "bigbook", title: "Birth of the Big Book", category: CATEGORIES.CORE, filename: "orange-bigbook.html" },
  { slug: "aacoa", title: "Financial Analysis of the Creation of the Big Book", category: CATEGORIES.CORE, filename: "orange-aacoa.html" },
  { slug: "gulags", title: "Boot Camps: Children's Gulags", category: CATEGORIES.CORE, filename: "orange-gulags.html" },
  { slug: "killjoy", title: "The Killjoy Cover-Up", category: CATEGORIES.CORE, filename: "orange-killjoy.html" },
  { slug: "aalies", title: "The 12 Biggest Lies of A.A.", category: CATEGORIES.CORE, filename: "orange-aalies.html" },
  { slug: "statistics", title: "The Problem With Statistics", category: CATEGORIES.CORE, filename: "orange-statistics.html" },
  { slug: "sentenced", title: "Sentenced to A.A.", category: CATEGORIES.CORE, filename: "orange-sentenced.html" },
  { slug: "jung", title: "What Carl G. Jung Really Said", category: CATEGORIES.CORE, filename: "orange-Jung.html" },
  { slug: "tobacco", title: "Tobacco", category: CATEGORIES.CORE, filename: "orange-tobacco.html" },
  { slug: "whats-good", title: "What's Good About A.A.?", category: CATEGORIES.CORE, filename: "orange-whats_good.html" },
  { slug: "not-good", title: "What's Not Good About A.A.?", category: CATEGORIES.CORE, filename: "orange-not_good.html" },
  { slug: "random", title: "Random Thoughts", category: CATEGORIES.MISC, filename: "orange-random.html" },
  { slug: "midtown-stories", title: "Stories of the Midtown Group of A.A.", category: CATEGORIES.CORE, filename: "orange-Midtown_stories.html" },
  { slug: "clancy", title: "Stories about Clancy Imusland's Pacific Group", category: CATEGORIES.CORE, filename: "orange-clancy_i.html" },
  { slug: "millions", title: "A.A. \"MILLIONS Saved\" Stories", category: CATEGORIES.CORE, filename: "orange-millions.html" },
  { slug: "disservice", title: "Accusations that Telling the Truth is Killing Alcoholics", category: CATEGORIES.CORE, filename: "orange-disservice.html" },
  { slug: "resentment", title: "Accusations of \"You Have a Resentment\"", category: CATEGORIES.CORE, filename: "orange-resentment.html" },
  { slug: "links", title: "Links — A Zillion Links to Everything", category: CATEGORIES.DOCUMENTS, filename: "orange-links.html" },
  { slug: "wishlist", title: "Wish List", category: CATEGORIES.MISC, filename: "orange-wishlist.html" },
  { slug: "bibliography", title: "Bibliography", category: CATEGORIES.DOCUMENTS, filename: "orange-bibliography.html" },
  { slug: "jokes", title: "Jokes", category: CATEGORIES.MISC, filename: "orange-jokes.html" },
  { slug: "greatmoments", title: "Great Moments in Religion — Jerry Falwell", category: CATEGORIES.MISC, filename: "orange-greatmoments.html" },
  { slug: "moon", title: "A Memorial Page on Rev. Sun Myung Moon", category: CATEGORIES.MISC, filename: "orange-moon.html" },
  // Alternative Recovery
  { slug: "addiction-monster", title: "The Lizard-Brain Addiction Monster", category: CATEGORIES.ALTERNATIVE, filename: "orange-addmonst.html", description: "Alternative understanding of addiction biology" },
  { slug: "what-works", title: "What Works?", category: CATEGORIES.ALTERNATIVE, filename: "orange-what_works.html" },
  { slug: "rat-park", title: "Rat Park and Other Children's Stories", category: CATEGORIES.ALTERNATIVE, filename: "orange-ratpark.html" },
  { slug: "deprogram", title: "How To Deprogram Your Own Mind", category: CATEGORIES.ALTERNATIVE, filename: "orange-deprogram.html" },
  { slug: "top10", title: "Top 10 Reading List", category: CATEGORIES.ALTERNATIVE, filename: "orange-top10.html" },
  { slug: "alt-list", title: "Sensible Evidence-based Recovery and Support Groups", category: CATEGORIES.ALTERNATIVE, filename: "orange-alt_list.html" },
  // Propaganda
  { slug: "spirrecov", title: "AA-Booster Pseudo-Science: Spirituality — Key to Recovery", category: CATEGORIES.PROPAGANDA, filename: "orange-spirrecov.html" },
  { slug: "pseudo2", title: "More AA-Booster Pseudo-Science: The Spiritual Dimension of Healing", category: CATEGORIES.PROPAGANDA, filename: "orange-pseudo2.html" },
  { slug: "big-lie", title: "More Big Lies — A.A. Propaganda As Usual", category: CATEGORIES.PROPAGANDA, filename: "orange-big_lie.html" },
  { slug: "galanter", title: "AA-Booster Propaganda: Cults — Faith, Healing, and Coercion", category: CATEGORIES.PROPAGANDA, filename: "orange-Galanter.html" },
  { slug: "tiebout", title: "Dr. Harry Tiebout: The First Fascist Mad Scientist of A.A.", category: CATEGORIES.PROPAGANDA, filename: "orange-Tiebout.html" },
  { slug: "vaillant", title: "Answer to a George Vaillant Speech", category: CATEGORIES.PROPAGANDA, filename: "orange-Vaillant02.html" },
  { slug: "pmachine7", title: "The Recovery Propaganda Machine, Part 7", category: CATEGORIES.PROPAGANDA, filename: "orange-pmachine7.html" },
  { slug: "kris-best", title: "A Reply to Kris Best's Articles", category: CATEGORIES.PROPAGANDA, filename: "orange-Kris_Best.html" },
  // Cult Test
  { slug: "cult", title: "The Cult Test, and A.A. as a Cult", category: CATEGORIES.CULT, filename: "orange-cult.html" },
  { slug: "cult-questions", title: "The Cult Test Questions", category: CATEGORIES.CULT, filename: "orange-cult_q0.html" },
  { slug: "cult-answers", title: "The Cult Test Answers, for A.A.", category: CATEGORIES.CULT, filename: "orange-cult_a0.html" },
  { slug: "cult-slogans", title: "900 A.A. Slogans", category: CATEGORIES.CULT, filename: "orange-cult_a4.html" },
  // Religious Roots
  { slug: "religious-roots", title: "The Religious Roots of A.A. and the Twelve Steps", category: CATEGORIES.RELIGIOUS, filename: "orange-religiousroots.html" },
  { slug: "rroot-030", title: "Bill Wilson Writes The Steps", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot030.html" },
  { slug: "rroot-060", title: "Frank Buchman", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot060.html" },
  { slug: "rroot-090", title: "The Religious Tenets and Doctrines of Buchmanism", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot090.html" },
  { slug: "rroot-120", title: "The Cult Characteristics of the Oxford Groups", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot120.html" },
  { slug: "rroot-150", title: "The \"First Century Christian Fellowship\" Campus Crusade", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot150.html" },
  { slug: "rroot-180", title: "Hobnobbing With The Nabobs", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot180.html" },
  { slug: "rroot-210", title: "My God How The Money Rolls In", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot210.html" },
  { slug: "rroot-240", title: "Partying with the Nazi Party", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot240.html" },
  { slug: "rroot-270", title: "The Oxford Group Morphs Into MRA", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot270.html" },
  { slug: "rroot-300", title: "The Years Before the War: Appeasing Hitler", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot300.html" },
  { slug: "rroot-330", title: "Invasion of Poland, WWII Starts in Europe", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot330.html" },
  { slug: "rroot-360", title: "A Slogan a Day Keeps The Thinking Away", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot360.html" },
  { slug: "rroot-390", title: "Pearl Harbor, The USA Is In It Now", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot390.html" },
  { slug: "rroot-420", title: "Dodging the Draft", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot420.html" },
  { slug: "rroot-450", title: "Sam Shoemaker Quits", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot450.html" },
  { slug: "rroot-480", title: "What Is Fascism? How Fascist Was Frank Buchman?", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot480.html" },
  { slug: "rroot-510", title: "The War Years: On the Road Again", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot510.html" },
  { slug: "rroot-540", title: "Henry Ford and Anti-Semitism", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot540.html" },
  { slug: "rroot-570", title: "After The War, Trouble With The Catholics", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot570.html" },
  { slug: "rroot-600", title: "Frank Buchman, Anti-Communist, Union-Buster", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot600.html" },
  { slug: "rroot-630", title: "Homophobia and Gay-Bashing", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot630.html" },
  { slug: "rroot-660", title: "Partying in a Fairy-Tale Castle", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot660.html" },
  { slug: "rroot-690", title: "Death of a Salesman, Peter Howard Takes Over", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot690.html" },
  { slug: "rroot-720", title: "The Last Hurrah: Up With People", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot720.html" },
  { slug: "rroot-750", title: "Obscurity", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot750.html" },
  { slug: "rroot-780", title: "Bill Wilson Gets Religion (And Drugs) And Sees God", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot780.html" },
  { slug: "rroot-810", title: "Bill and Dr. Bob Start A.A.", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot810.html" },
  { slug: "rroot-840", title: "William Birney's Interview of Frank Buchman", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot840.html" },
  { slug: "rroot-870", title: "Reinhold Niebuhr's \"Hitler and Buchman\" Article", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot870.html" },
  { slug: "rroot-900", title: "Rev. Ironside's Sermon On Buchmanism", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot900.html" },
  { slug: "rroot-930", title: "Review of Garth Lean's book, On The Tail of a Comet", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot930.html" },
  { slug: "rroot-960", title: "Religious Roots — Footnotes", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot960.html" },
  { slug: "rroot-990", title: "Religious Roots — Bibliography", category: CATEGORIES.RELIGIOUS, filename: "orange-rroot990.html" },
  // Supplementary
  { slug: "definitions", title: "Definitions of Some Commonly-Used A.A. Words", category: CATEGORIES.DOCUMENTS, filename: "orange-definitions.html" },
  { slug: "rross-aa01", title: "Posts to the A.A. Thread on Rick Ross' Web Site", category: CATEGORIES.DOCUMENTS, filename: "orange-rross_aa01.html" },
];

// Generate letters array (letters I through CDXXVIII = 428 volumes)
export const LETTERS: ContentItem[] = Array.from({ length: 428 }, (_, i) => {
  const num = i + 1;
  return {
    slug: `letters-${num}`,
    title: `Letters ${toRoman(num)}`,
    category: CATEGORIES.LETTERS,
    filename: num === 1 ? "orange-letters.html" : `orange-letters${num}.html`,
  };
});

function toRoman(num: number): string {
  const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let result = "";
  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) { result += syms[i]; num -= val[i]; }
  }
  return result;
}

export const ALL_CONTENT: ContentItem[] = [...ARTICLES, ...LETTERS];

export function getContentBySlug(slug: string): ContentItem | undefined {
  return ALL_CONTENT.find(item => item.slug === slug);
}

export function getArticlesByCategory(category: string): ContentItem[] {
  return ARTICLES.filter(item => item.category === category);
}

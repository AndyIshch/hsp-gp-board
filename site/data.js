// HSP GP Hall of Fame — Complete Data
// Higher School of Poker — Grand Prix Tour

const HSP_DATA = {
  tournament: {
    name: "Higher School of Poker",
    subtitle: "Grand Prix Tour",
    tagline: "Hall of Fame",
    yearRange: "2018 — 2022",
    totalGames: 26,
    totalSeasons: 4,
    totalPrizePool: 97500, // sum of all season prize pools
  },

  players: {
    stparitet: {
      id: "stparitet",
      name: "Stparitet",
      aliases: ["ai", "stparitet"],
      avatar: "avatars/ai-stpartitet.jpg",
      avatarDescription: "Man with racing jacket and headphones",
      totalMoney: 6525,
      totalRebuys: 12,
      totalGames: 26,
      allTimePlaces: { "1st": 9, "2nd": 7, "3rd": 7, "4th": 3 },
      seasonResults: [
        { season: 1, place: 2, money: 300, rebuys: 5 },
        { season: 2, place: 3, money: -275, rebuys: 3 },
        { season: 3, place: 1, money: 4500, rebuys: 4 },
        { season: 4, place: 1, money: 2000, rebuys: 0 },
      ],
      titles: ["Season 3 Champion", "Season 4 Champion", "King of Poker (S2-S3)", "All-Time Money Leader"],
    },
    safdenz: {
      id: "safdenz",
      name: "Safdenz",
      aliases: ["safdenz"],
      avatar: "avatars/safdenz.jpg",
      avatarDescription: "Bearded man in Jordan shirt",
      totalMoney: 5925,
      totalRebuys: 7,
      totalGames: 26,
      allTimePlaces: { "1st": 9, "2nd": 7, "3rd": 3, "4th": 7 },
      seasonResults: [
        { season: 1, place: 1, money: 6600, rebuys: 1 },
        { season: 2, place: 2, money: -175, rebuys: 3 },
        { season: 3, place: 3, money: -500, rebuys: 3 },
        { season: 4, place: 2, money: 0, rebuys: 0 },
      ],
      titles: ["Season 1 Champion", "King of Poker (S1-S2)", "Fewest Rebuys All-Time"],
    },
    derupo: {
      id: "derupo",
      name: "Derupo",
      aliases: ["derupo"],
      avatar: "avatars/derupo.jpg",
      avatarDescription: "Young man at marina",
      totalMoney: -8725,
      totalRebuys: 12,
      totalGames: 26,
      allTimePlaces: { "1st": 4, "2nd": 6, "3rd": 4, "4th": 12 },
      seasonResults: [
        { season: 1, place: 3, money: -1950, rebuys: 5 },
        { season: 2, place: 4, money: -1775, rebuys: 3 },
        { season: 3, place: 4, money: -4000, rebuys: 4 },
        { season: 4, place: 4, money: -1000, rebuys: 0 },
      ],
      titles: ["The Eternal Underdog", "Most 4th Places (12)"],
    },
    thegod: {
      id: "thegod",
      name: "TheGod",
      aliases: ["thegod"],
      avatar: "avatars/thegod.jpg",
      avatarDescription: "Man with glasses at conference",
      totalMoney: -3775,
      totalRebuys: 7,
      totalGames: 26,
      allTimePlaces: { "1st": 4, "2nd": 6, "3rd": 12, "4th": 4 },
      seasonResults: [
        { season: 1, place: 4, money: -4950, rebuys: 5 },
        { season: 2, place: 1, money: 2175, rebuys: 2 },
        { season: 3, place: 2, money: 0, rebuys: 0 },
        { season: 4, place: 3, money: -1000, rebuys: 0 },
      ],
      titles: ["Season 2 Champion", "Golden Fish S2 (15 pts)", "Zero Rebuys S3", "Most 3rd Places (12)"],
    },
  },

  seasons: [
    {
      number: 1,
      name: "Season 1 — The Beginning",
      period: "September 2018 — February 2019",
      games: 9,
      totalPrizePool: 22500,
      champion: "safdenz",
      goldenFish: { winner: "safdenz", note: "Tied with derupo (12 pts each)" },
      standings: [
        { player: "safdenz", place: 1, money: 6600, rebuys: 1, goldenFish: 12 },
        { player: "stparitet", place: 2, money: 300, rebuys: 5, goldenFish: 5 },
        { player: "derupo", place: 3, money: -1950, rebuys: 5, goldenFish: 12 },
        { player: "thegod", place: 4, money: -4950, rebuys: 5, goldenFish: 7 },
      ],
      games: [
        { number: 1, date: "08.09.18", buyIn: 300, rebuys: 3, totalPool: 2100, results: { derupo: -450, stparitet: 1650, safdenz: -600, thegod: -600 }, places: { "1st": "stparitet", "2nd": "derupo", "3rd": "safdenz", "4th": "thegod" } },
        { number: 2, date: "15.09.18", buyIn: 350, rebuys: 2, totalPool: 2100, results: { derupo: -350, stparitet: 1225, safdenz: -175, thegod: -700 }, places: { "1st": "stparitet", "2nd": "safdenz", "3rd": "derupo", "4th": "thegod" } },
        { number: 3, date: "05.10.18", buyIn: 400, rebuys: 3, totalPool: 2800, results: { derupo: -600, stparitet: -800, safdenz: 2200, thegod: -800 }, places: { "1st": "safdenz", "2nd": "derupo", "3rd": "stparitet", "4th": "thegod" } },
        { number: 4, date: "20.10.18", buyIn: 500, rebuys: 2, totalPool: 3000, results: { derupo: -500, stparitet: -750, safdenz: 2250, thegod: -1000 }, places: { "1st": "safdenz", "2nd": "stparitet", "3rd": "derupo", "4th": "thegod" } },
        { number: 5, date: "02.11.18", buyIn: 400, rebuys: 1, totalPool: 2000, results: { derupo: -400, stparitet: -800, safdenz: 1400, thegod: -200 }, places: { "1st": "safdenz", "2nd": "thegod", "3rd": "derupo", "4th": "stparitet" } },
        { number: 6, date: "16.11.18", buyIn: 300, rebuys: 2, totalPool: 1800, results: { derupo: -450, stparitet: -600, safdenz: 1350, thegod: -300 }, places: { "1st": "safdenz", "2nd": "derupo", "3rd": "stparitet", "4th": "thegod" } },
        { number: 7, date: "07.12.18", buyIn: 350, rebuys: 2, totalPool: 2100, results: { derupo: -1050, stparitet: 1575, safdenz: -175, thegod: -350 }, places: { "1st": "stparitet", "2nd": "derupo", "3rd": "safdenz", "4th": "thegod" } },
        { number: 8, date: "22.12.18", buyIn: 400, rebuys: 0, totalPool: 1600, results: { derupo: -400, stparitet: -200, safdenz: -400, thegod: 1000 }, places: { "1st": "thegod", "2nd": "stparitet", "3rd": "derupo", "4th": "safdenz" } },
        { number: 9, date: "09.02.19", buyIn: 1000, rebuys: 1, totalPool: 5000, results: { derupo: 2250, stparitet: -1000, safdenz: 750, thegod: -2000 }, places: { "1st": "derupo", "2nd": "safdenz", "3rd": "stparitet", "4th": "thegod" } },
      ],
      placeDistribution: {
        derupo: { "1st": 1, "2nd": 3, "3rd": 2, "4th": 3 },
        stparitet: { "1st": 3, "2nd": 2, "3rd": 2, "4th": 2 },
        safdenz: { "1st": 4, "2nd": 3, "3rd": 0, "4th": 2 },
        thegod: { "1st": 1, "2nd": 1, "3rd": 5, "4th": 2 },
      },
      insights: [
        "Safdenz dominated with 4 first-place finishes out of 9 games — a 44% win rate that remains the highest single-season record",
        "Stparitet opened the tournament with back-to-back wins (Games 1 & 2) but couldn't sustain the momentum",
        "TheGod finished 3rd or 4th in 7 out of 9 games, setting up his redemption arc in Season 2",
        "The season finale (Game 9) had the highest buy-in at ₽1000 — and Derupo, the eternal underdog, won it",
        "Safdenz had only 1 rebuy in the entire season — the most disciplined play in HSP GP history",
        "Golden Fish race ended in a tie: Safdenz and Derupo both scored 12 points",
        "Game 8 was the only game with 0 rebuys — the tightest, most careful session ever played",
        "TheGod's -4950 is the worst single-season performance in HSP GP history",
        "Stparitet earned exactly +300 for the season — break-even survival at its finest",
        "Total prize pool across 9 games: ₽22,500 — the first fortune ever bet at the HSP table",
        "Safdenz strung together a 4-game winning streak (Games 3-6) — never matched in any season",
        "Derupo went negative in 7 of 9 games but ended with a heroic +2250 in the finale",
        "The average buy-in was ₽444 per game, with stakes doubling by the end of the season",
        "No player maintained positive money in ALL games — everyone tasted defeat",
        "Game 4 had the highest base buy-in (₽500) of the first half, testing everyone's bankroll management",
      ],
    },
    {
      number: 2,
      name: "Season 2 — The Comeback",
      period: "February 2019 — October 2019",
      games: 9,
      totalPrizePool: 20500,
      champion: "thegod",
      goldenFish: { winner: "thegod", score: 15 },
      standings: [
        { player: "thegod", place: 1, money: 2175, rebuys: 2, goldenFish: 15 },
        { player: "safdenz", place: 2, money: -175, rebuys: 3, goldenFish: 8 },
        { player: "stparitet", place: 3, money: -275, rebuys: 3, goldenFish: 5 },
        { player: "derupo", place: 4, money: -1775, rebuys: 3, goldenFish: 8 },
      ],
      games: [
        { number: 1, date: "23.02.19", buyIn: 300, rebuys: 4, totalPool: 2400, results: { derupo: -600, stparitet: -750, safdenz: 1950, thegod: -600 }, places: { "1st": "safdenz", "2nd": "derupo", "3rd": "stparitet", "4th": "thegod" } },
        { number: 2, date: "23.03.19", buyIn: 350, rebuys: 0, totalPool: 1400, results: { derupo: 875, stparitet: -175, safdenz: -350, thegod: -350 }, places: { "1st": "derupo", "2nd": "stparitet", "3rd": "safdenz", "4th": "thegod" } },
        { number: 3, date: "30.03.19", buyIn: 400, rebuys: 0, totalPool: 1600, results: { derupo: 1000, stparitet: -400, safdenz: -400, thegod: -200 }, places: { "1st": "derupo", "2nd": "thegod", "3rd": "stparitet", "4th": "safdenz" } },
        { number: 4, date: "20.04.19", buyIn: 500, rebuys: 0, totalPool: 2000, results: { derupo: -500, stparitet: 1250, safdenz: -250, thegod: -500 }, places: { "1st": "stparitet", "2nd": "safdenz", "3rd": "derupo", "4th": "thegod" } },
        { number: 5, date: "11.05.19", buyIn: 400, rebuys: 3, totalPool: 2800, results: { derupo: -800, stparitet: 2200, safdenz: -800, thegod: -600 }, places: { "1st": "stparitet", "2nd": "derupo", "3rd": "thegod", "4th": "safdenz" } },
        { number: 6, date: "24.05.19", buyIn: 300, rebuys: 0, totalPool: 1200, results: { derupo: -150, stparitet: -300, safdenz: 700, thegod: -300 }, places: { "1st": "safdenz", "2nd": "derupo", "3rd": "stparitet", "4th": "thegod" } },
        { number: 7, date: "01.06.19", buyIn: 350, rebuys: 2, totalPool: 2100, results: { derupo: -700, stparitet: -700, safdenz: 1575, thegod: -175 }, places: { "1st": "safdenz", "2nd": "thegod", "3rd": "stparitet", "4th": "derupo" } },
        { number: 8, date: "15.06.19", buyIn: 400, rebuys: 1, totalPool: 2000, results: { derupo: -400, stparitet: -400, safdenz: -600, thegod: 1400 }, places: { "1st": "thegod", "2nd": "derupo", "3rd": "stparitet", "4th": "safdenz" } },
        { number: 9, date: "12.10.19", buyIn: 1000, rebuys: 1, totalPool: 5000, results: { derupo: -500, stparitet: -1000, safdenz: -2000, thegod: 3500 }, places: { "1st": "thegod", "2nd": "derupo", "3rd": "safdenz", "4th": "stparitet" } },
      ],
      timeStats: { derupo: 2865, stparitet: 3082, safdenz: 3016, thegod: 3405 },
      placeDistribution: {
        derupo: { "1st": 2, "2nd": 2, "3rd": 1, "4th": 4 },
        stparitet: { "1st": 2, "2nd": 2, "3rd": 4, "4th": 1 },
        safdenz: { "1st": 3, "2nd": 2, "3rd": 0, "4th": 4 },
        thegod: { "1st": 2, "2nd": 3, "3rd": 4, "4th": 0 },
      },
      insights: [
        "TheGod's redemption arc: from worst in S1 (-4950) to champion in S2 (+2175) — the greatest comeback in HSP history",
        "TheGod dominated Golden Fish with 15 points — nearly double the next competitors (Safdenz & Derupo at 8)",
        "TheGod never finished 4th in any S2 game — zero last-place finishes across 9 games",
        "Game 9 decided everything: TheGod won +3500 in the ₽5000 pool, while Safdenz lost -2000",
        "Only 11 total rebuys across the entire season — the most disciplined season overall",
        "Three games had ZERO rebuys (Games 2, 3, 4) — unprecedented tight play",
        "Derupo won Games 2 & 3 back-to-back but couldn't capitalize, ending at -1775",
        "Safdenz started strong (winning Game 1 with +1950) but collapsed in the finale (-2000)",
        "Total time at the table: 12,368 minutes (206 hours) — TheGod spent the most time playing (3,405 min)",
        "Season 2 had the lowest total prize pool (₽20,500) — more conservative betting",
        "Stparitet had two massive wins (Games 4-5: +1250 and +2200) sandwiched between losses",
        "Game 6 was the smallest pool (₽1200) — a calm before the storm of the ₽5000 finale",
        "All four players finished within ₽2,000 of each other in final standings — the tightest season",
        "Average game duration was ~343 minutes (5.7 hours) per session",
        "The gap between the finales was 4 months (June → October) — the longest break between games in any season",
      ],
    },
    {
      number: 3,
      name: "Season 3 — Rebirth",
      period: "December 2019 — June 2022",
      games: 7,
      totalPrizePool: 22500,
      champion: "stparitet",
      goldenFish: null,
      standings: [
        { player: "stparitet", place: 1, money: 4500, rebuys: 4 },
        { player: "thegod", place: 2, money: 0, rebuys: 0 },
        { player: "safdenz", place: 3, money: -500, rebuys: 3 },
        { player: "derupo", place: 4, money: -4000, rebuys: 4 },
      ],
      games: [
        { number: 1, date: null, buyIn: 500, rebuys: 2, totalPool: 3000, results: { derupo: -500, stparitet: -1000, safdenz: 1000, thegod: 500 }, places: {} },
        { number: 2, date: "21.12.19", buyIn: 500, rebuys: 1, totalPool: 2500, results: { derupo: 1500, stparitet: -500, safdenz: -500, thegod: -500 }, places: {} },
        { number: 3, date: "26.01.20", buyIn: 500, rebuys: 0, totalPool: 2000, results: { derupo: 0, stparitet: 1000, safdenz: -500, thegod: -500 }, places: {} },
        { number: 4, date: "21.02.20", buyIn: 500, rebuys: 2, totalPool: 3000, results: { derupo: -1000, stparitet: 0, safdenz: -1000, thegod: 2000 }, places: {} },
        { number: 5, date: "15.06.22", buyIn: 500, rebuys: 3, totalPool: 3500, results: { derupo: -1000, stparitet: 2000, safdenz: -1000, thegod: 0 }, places: {} },
        { number: 6, date: "18.06.22", buyIn: 500, rebuys: 1, totalPool: 2500, results: { derupo: -1000, stparitet: 0, safdenz: 1500, thegod: -500 }, places: {} },
        { number: 7, date: "25.06.22", buyIn: 1000, rebuys: 2, totalPool: 6000, results: { derupo: -2000, stparitet: 3000, safdenz: 0, thegod: -1000 }, places: {} },
      ],
      placeDistribution: {
        derupo: { "1st": 1, "2nd": 1, "3rd": 1, "4th": 4 },
        stparitet: { "1st": 3, "2nd": 3, "3rd": 1, "4th": 0 },
        safdenz: { "1st": 2, "2nd": 1, "3rd": 3, "4th": 1 },
        thegod: { "1st": 1, "2nd": 2, "3rd": 2, "4th": 2 },
      },
      insights: [
        "Stparitet's coronation: won Season 3 with +4500 and earned the 'King of Poker' title for S2-S3",
        "Season 3 had a 2+ year gap — Games 4 (Feb 2020) to Game 5 (Jun 2022) due to the pandemic",
        "TheGod achieved the impossible: ZERO rebuys across all 7 games — the most disciplined season by any player EVER",
        "TheGod finished at exactly ₽0 — perfect break-even despite never rebuying",
        "All buy-ins were ₽500 (except the ₽1000 finale) — the most uniform stakes in any season",
        "Stparitet won the finale by +3000 in a ₽6000 pool — the largest single-game payday in S3",
        "Derupo hit rock bottom: -4000 for the season, his worst performance in any season",
        "Derupo lost money in 5 of 7 games — only winning Game 2 (+1500)",
        "The season marked a 'RENAMING & REBRANDING' — the tournament evolved",
        "Despite the pandemic break, players came back with higher buy-ins (₽500 vs previous ₽300-400 norm)",
        "Stparitet never finished 4th in any S3 game — solid consistency across all 7 games",
        "Game 4 saw TheGod's largest single win: +2000 in a ₽3000 pool — claiming 67% of the pot",
        "Total prize pool matched Season 1 at ₽22,500 despite having 2 fewer games",
        "The 3-day sprint finish (Games 5-6-7 in June 2022) was the fastest season conclusion",
        "Safdenz's defensive play: finished 3rd overall with only -500, minimizing damage after his S1 glory days",
      ],
    },
    {
      number: 4,
      name: "Season 4 — The New Era",
      period: "September 2022",
      games: 1,
      totalPrizePool: 4000,
      champion: "stparitet",
      goldenFish: null,
      standings: [
        { player: "stparitet", place: 1, money: 2000, rebuys: 0 },
        { player: "safdenz", place: 2, money: 0, rebuys: 0 },
        { player: "thegod", place: 3, money: -1000, rebuys: 0 },
        { player: "derupo", place: 4, money: -1000, rebuys: 0 },
      ],
      games: [
        { number: 1, date: "03.09.2022", buyIn: 1000, rebuys: 0, totalPool: 4000, results: { derupo: -1000, stparitet: 2000, safdenz: 0, thegod: -1000 }, places: { "1st": "stparitet", "2nd": "safdenz", "3rd": "thegod", "4th": "derupo" } },
      ],
      placeDistribution: {
        derupo: { "1st": 0, "2nd": 0, "3rd": 0, "4th": 1 },
        stparitet: { "1st": 1, "2nd": 0, "3rd": 0, "4th": 0 },
        safdenz: { "1st": 0, "2nd": 1, "3rd": 0, "4th": 0 },
        thegod: { "1st": 0, "2nd": 0, "3rd": 1, "4th": 0 },
      },
      insights: [
        "Season 4 was the shortest in HSP history — just 1 game played with a massive ₽1000 buy-in",
        "Stparitet won his third consecutive season, cementing his era of dominance",
        "Zero rebuys from ALL players — the cleanest game in tournament history",
        "₽4000 total pool from a single game — the highest per-game pool ever",
        "The ₽1000 buy-in signaled a new era of high-stakes poker",
        "Stparitet's +2000 win gave him the best ₽/game ratio of any season",
        "Derupo's curse continued: 4th place yet again, extending his record to 12 total last-place finishes",
        "Safdenz played perfectly defensive poker — breaking even at ₽0 against a ₽1000 buy-in",
        "TheGod, the Season 2 champion, couldn't recapture his magic — finishing 3rd",
        "The New Era: buy-ins doubled from the S1 average (₽444→₽1000) — the game grew up",
        "Stparitet's winning streak: 3 of the last 4 seasons belonged to him",
        "The game's evolution: from ₽300 buy-ins in 2018 to ₽1000 in 2022 — a 233% increase",
        "Despite playing just 1 game, Season 4 generated 4.4% of all-time prize money",
        "Stparitet entered the game as King of Poker and left confirming it — back-to-back-to-back",
        "Only 4 players, 1 game, no rebuys — the purest form of poker the HSP table ever hosted",
      ],
    },
  ],

  finalResults: {
    moneyLeaderboard: [
      { player: "stparitet", money: 6525, rank: 1 },
      { player: "safdenz", money: 5925, rank: 2 },
      { player: "thegod", money: -3775, rank: 3 },
      { player: "derupo", money: -8725, rank: 4 },
    ],
    kingOfPoker: [
      { period: "Seasons 1-2", player: "safdenz" },
      { period: "Seasons 2-3", player: "stparitet" },
    ],
    cumulativeResults: {
      "S1+S2": { derupo: -3725, stparitet: 25, safdenz: 6425, thegod: -2775 },
      "S2+S3": { derupo: -5775, stparitet: 4225, safdenz: -675, thegod: 2175 },
      "S3+S4": { derupo: -5000, stparitet: 6500, safdenz: -500, thegod: -1000 },
    },
  },

  playerBiographies: {
    stparitet: {
      title: "The Machine",
      bio: `Stparitet is the undisputed dynasty builder of HSP Grand Prix. Known among the table as "The Machine" for his mechanical consistency, he rose from a modest 2nd-place Season 1 finish to become the most dominant force the tournament has ever seen.

His playstyle is a masterclass in patience and calculated aggression. While others chase big pots and dramatic all-ins, Stparitet waits — studying his opponents, counting the odds, and striking when the table least expects it. He rarely makes the headline play, but he always makes the right play.

Season 1 saw him burst onto the scene with back-to-back wins in Games 1 and 2 (+1650, +1225), only to endure a brutal mid-season slump. But he absorbed the losses without tilting, finishing the season with a quiet +300 — a testament to his emotional resilience.

Season 2 was a transitional year, ending 3rd with -275. But behind the modest results, he was evolving. His game was tightening, his reads were sharpening, and by Season 3, The Machine was fully operational.

Season 3 was his coronation. With +4500, three 1st-place finishes, and never once finishing last, Stparitet announced himself as the King of the Poker table. His finale victory (+3000 in a ₽6000 pot) was surgical — dismantling opponents with precision betting and perfectly timed aggression.

Season 4 confirmed what everyone already knew: this was his era. A clean +2000 win with zero rebuys. Back-to-back-to-back season titles (S2-S3-S4 King of Poker). The all-time money leader at +6525.

His nickname in the data — "ai" — is eerily fitting. Stparitet plays like an algorithm: unemotional, relentless, always optimizing. He has 12 rebuys across all seasons — the most of any player — but his rebuy-to-profit ratio makes every second chance pay off. He is proof that in poker, survival is the first skill and dominance is the final one.

Career Stats: 26 games, 9 wins (35%), +6525 total, 2 consecutive King of Poker titles.`,
    },
    safdenz: {
      title: "The Natural",
      bio: `Safdenz is the most enigmatic player in HSP Grand Prix history. He burst onto the scene with a Season 1 performance so dominant that it may never be equaled — and then slowly, deliberately, faded into the role of a careful survivor.

Season 1 Safdenz was a force of nature. Four first-place finishes in nine games. A 4-game winning streak (Games 3-6) that remains the longest in HSP history. A total of +6600 in earnings. And the most remarkable stat of all: just 1 rebuy in the entire season. While his opponents were burning through their bankrolls and rebuying 5 times each, Safdenz played with the discipline of a veteran twice his age.

They called him "The Natural" because it all looked effortless. He'd sit at the table, read the room, and make moves that seemed obvious in hindsight but impossible to predict in the moment. His Game 3 and 4 wins (back-to-back +2200 and +2250) were masterpieces of aggressive poker.

But then something shifted. Season 2 saw Safdenz finish 2nd with -175 — still competitive, still dangerous, but no longer the dominant force. By Season 3, he was a survivor, finishing 3rd at -500. The fire that drove his Season 1 rampage seemed to settle into a controlled burn.

What makes Safdenz fascinating is what didn't change: his discipline. Across 26 games, he had only 7 total rebuys — the fewest of any player. Even in his "decline," he never devolved into reckless play. He simply became more selective, more defensive, more patient.

The numbers tell a story of a player who peaked early and found peace with it. His all-time +5925 makes him the second-highest earner in HSP history. His 9 first-place finishes (tied with Stparitet) prove he could still win when he chose to compete at full intensity.

The King of Poker title for S1-S2 is his forever. Safdenz was the first true champion of the HSP Grand Prix, and no amount of time can take that away.

Career Stats: 26 games, 9 wins (35%), +5925 total, King of Poker S1-S2, fewest rebuys all-time (7).`,
    },
    derupo: {
      title: "The Underdog",
      bio: `Derupo is the heart and soul of the HSP Grand Prix. Every poker table needs a player who refuses to give up, who comes back session after session despite the odds, who makes every victory feel earned and every defeat feel like fuel. That player is Derupo.

The numbers are brutal and honest: -8725 all-time, 12 fourth-place finishes (the most of anyone), and only 4 wins in 26 games. In any other context, these would be the stats of someone who should have quit long ago. But Derupo's story isn't about the numbers — it's about the fight.

Season 1 set the pattern. He finished 3rd at -1950, struggling through 5 rebuys, often finding himself on the wrong side of big pots. But then came Game 9 — the ₽1000 buy-in finale — and Derupo won it. Not by a small margin. He won +2250, the largest single-game haul of the season. It was a statement: I'm still here.

Season 2 saw him win Games 2 and 3 back-to-back early in the season, showing flashes of the player he could be. But consistency remained elusive, and he finished 4th at -1775.

Season 3 was his darkest chapter. -4000 total, with only one win (Game 2, +1500). The 2-year pandemic break seemed to reset everyone except Derupo, who came back to the higher-stakes table and found it unforgiving.

Season 4 brought no mercy: 4th place again in the single ₽1000 game.

But here's what the stats don't capture: Derupo is the player everyone respects. He plays with passion, takes risks that others wouldn't dare, and creates the action that makes HSP Grand Prix exciting. His 12 rebuys (tied with Stparitet for the most) show a player who believes every hand could turn the tide.

The Derupo Special is a thing of legend — going deep in the red all game, then pulling off an impossible comeback in the final hand. He doesn't always pull it off, but when he does, it's the best moment at the table.

At -8725, Derupo has funded a significant portion of the prize pool. In a very real sense, his losses made other players' victories possible. He is the engine that keeps the HSP Grand Prix running. And he'll be back.

Career Stats: 26 games, 4 wins (15%), -8725 total, 12 last-place finishes, most dramatic finales.`,
    },
    thegod: {
      title: "The Strategist",
      bio: `TheGod is the most analytical mind to ever sit at the HSP Grand Prix table. His nickname might seem presumptuous until you witness his approach to the game: every decision is calculated, every bet tells a story, and every loss is catalogued for future exploitation.

Season 1 was a humbling beginning. -4950, the worst single-season result in HSP history. Five rebuys, zero dominant performances. TheGod sat fifth in a four-player field, as far from his self-appointed name as possible. Most players would have adjusted their ego. TheGod adjusted his strategy.

What happened in Season 2 is the stuff of poker legend. The same player who hemorrhaged -4950 came back and won the championship with +2175. But it wasn't just the result — it was HOW he won. TheGod earned 15 Golden Fish points (a record that still stands), never finished 4th in any game, and won the final two games (Game 8: +1400, Game 9: +3500) to clinch the title in the most dramatic fashion possible.

His Season 2 performance revealed his true nature: TheGod is a long-game player. He studies patterns across sessions, not just hands. He tracks opponents' tendencies over months and adjusts his game to exploit weaknesses that haven't been discovered yet. His patience is his weapon.

Season 3 proved his discipline can scale. In a season with higher stakes (₽500 buy-ins), TheGod achieved something nobody thought possible: zero rebuys across all 7 games. He played so carefully, so efficiently, that he never needed a second chance. He finished at exactly ₽0 — a perfect equilibrium that masked the brilliant micro-adjustments happening at every hand.

Season 4 brought a 3rd-place finish (-1000), but by then TheGod's legacy was secure. He'd proven that poker mastery isn't about constant winning — it's about constant adaptation.

His 12 third-place finishes are the most of any player, revealing his true strategy: avoid elimination, stay competitive, and wait for the moments that matter. When those moments come, TheGod strikes.

The 3,405 minutes he spent at the table in Season 2 alone — the most of any player — tells you everything about his commitment to the game. He doesn't just play poker; he lives inside it.

Career Stats: 26 games, 4 wins (15%), -3775 total, Golden Fish S2 champion (15 pts), zero rebuys in S3.`,
    },
  },
};

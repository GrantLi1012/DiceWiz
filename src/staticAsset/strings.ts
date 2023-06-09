export const strings = {
    appName: "Dice Wiz",
    home: {
        welcomeMessage: "🔮 Welcome to Dice Wiz! 🔮",
        appDescriptionLine1: "This is a tool to help you gain some insight into your potential dice rolls.",
        appDescriptionLine2: "Damange output, avrage roll numbers, and more!",
        calAvg: "Calculate Average Output",
        roll : "Roll Dice",
    },
    titles: {
        home: "Home",
        applications: "Applications",
        about: "About",
        diceRoller: "Dice Roller",
        averageCalculator: "Average Calculator",
        damageCalculator: "Damage Calculator",
        damageSpellSave: "Damage Calculator (Spell Save)",
        abilityCheck: "Ability Check Calculator",
    },
    about: {
        author: {
            aboutAuthor: "🔮 About the Author 🔮",
            aboutAuthorMessage: "Passionate developer who enjoys playing tabletop RPGs. I hope this tool can help you with your games!",
        },
        attribution: {
            aboutAttribution: "Attribution",
        },
        featuresToCome: {
            featuresToCome: "Features to Come",
            featuresToComeList: [
                "Here are some features under consideration for future releases:",
                "- Rolling with advantage/disadvantage",
                "- When dice range is limited, e.g. force re-roll when 1 or 2 is rolled",
                "If you have any suggestions, please feel free to reach out to me!"
            ],
        }
    },
    averageCalculator: {
        instruction1: "This app helps you find out the average output of any combination of dice rolls. Curious of how much damage your spell generally deals? Let's find out!",
        instruction2_1: "Step 1: Enter the number of dice you want to roll under the corresponding dice type.",
        instruction2_2: "e.g. If you want to roll 2d6 and 1d4, enter 2 under d6 and 1 under d4.",
        instruction3_1: "Step 2: Enter the modifier you want to add to the dice roll.",
        instruction3_2: "e.g. You can enter both positive and negative modifiers. For example, enter 5 or '+5' for +5 and '-2' for -2.",
        instruction4_1: "Step 3: Click the Calculate button to show the average result!",
        calculate: "Calculate",
    },
    dice: {
        d4: "d4",
        d6: "d6",
        d8: "d8",
        d10: "d10",
        d12: "d12",
        d20: "d20",
    },
    roller: {
        instruction1: "This app helps you roll your dice! If you just want quick roll results, choose Quick Roll mode, but if you want COOL TRUE RANDOMNESS, choose the True Random mode. The true random mode uses random.org's API, which generates truely random numbers using atmospheric noise.",
        instruction2_1: "Quick d20 roll",
        instruction2_2: "Click the dice image to roll or re-roll",
        instruction3: "Custom multi-dice roll",
        roll: "Roll",
        details: "Roll Details: ",
    },
    error: {
        error: "Error",
        diceRangeError: "Please enter a number between 0 and 20 for each dice type.",
        diceNegatieError: "Please enter a positive number for each dice type.",
    },
    damageCalculator: {
        instruction1: "This app helps you figure out how much damage you deal when rolling to attack. For example, how much damage you deal on average when hit, or when the probability of missing and criting in considered.",
        instruction2: "1. Enter attack information",
        instruction3: "2. Enter the dice you roll for damage",
        instruction4: "3. Calculate damage output",
        calculate: "Calculate",
        ac: "Enemy Armor Class",
        attackBonus: "Attack Bonus",
        damageModifier: "Damage Modifier",
        chanceToHit: "Chance to Hit",
        avgDamageWhenHit: "Average Damage When Hit",
        avgDamageWhenCrit: "Average Damage When Crit",
        avgDamage: "Average Damage Output",
    },
    damageSpellSave: {
        instruction1: "This app helps you figure out how much damage a spell that requires saving throw deals. You need to enter your spell save DC indicated by the spell and your stats, the modifier enemy has to add to their saving throw, damage modifier of the spell, and how much of the damage is dealt when the enemy succeeds the saving throw.",
        instruction2: "1. Enter attack information",
        instruction3: "2. Enter the dice you roll for damage",
        instruction4: "3. Calculate damage output",
        calculate: "Calculate",
        dc: "Your Spell Save DC",
        saveBonus: "Enemy Save Bonus",
        damageModifier: "Damage Modifier",
        percentDamageWhenSaved: "Percent Damage When Saved",
        enemyFailChance: "Enemy Fail Chance",
        avgDamage: "Average Damage Output",
        avgDamageWhenSaved: "Average Damage When Saved",
        avgDamageWhenFailed: "Average Damage When Failed",
    },
    abilityCheck: {
        instruction1: "This app uses Chart.js to plot the probability distribution of your ability check. You can use this to figure out the probability of succeeding a check.",
        instruction2: "1. Enter your stats and proficiency bonus",
        instruction3_1: "2. Enter your ability check bonus",
        instruction3_2: "2x means expertise, .5 means half proficiency, leave empty if no proficiency is added",
        instruction4_1: "3. Show success rate distribution",
        instruction4_2: "Hover over the data point to see percentage. x-axis is the pass number, y-axis is the probability of success.",
        proficiencyBonus: "Proficiency Bonus",
        chooseCheck: "Choose an ability / skill check",
        showGraphs: "Show Success Rate Graph",
        normalRoll: "Normal Roll",
        advantage: "Advantage",
        disadvantage: "Disadvantage",
    }
};
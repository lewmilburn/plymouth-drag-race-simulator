"use strict";
//mini-challenge stuff:
class MiniChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["wigs with "] = 0] = "wigs with ";
            desc1[desc1["a quiz about "] = 1] = "a quiz about ";
            desc1[desc1["nails with "] = 2] = "nails with ";
            desc1[desc1["a competition about "] = 3] = "a competition about ";
            desc1[desc1["a song about "] = 4] = "a song about ";
            desc1[desc1["make-up tutorials with "] = 5] = "make-up tutorials with ";
            desc1[desc1["make a quick look about "] = 6] = "make a quick look about ";
            desc1[desc1["a photoshoot about "] = 7] = "a photoshoot about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["the pitcrew."] = 0] = "the pitcrew.";
            desc2[desc2["a partner."] = 1] = "a partner.";
            desc2[desc2["noodles."] = 2] = "noodles.";
            desc2[desc2["hip pads."] = 3] = "hip pads.";
            desc2[desc2["balls."] = 4] = "balls.";
            desc2[desc2["past Drag Race contestants"] = 5] = "past Drag Race contestants";
        })(desc2 || (desc2 = {}));
        //reading and puppet challenges:
        if (totalCastSize >= 10 && currentCast.length == 7 && !all_stars || currentCast.length == totalCastSize && (all_stars || lipsync_assassin)) {
            description.innerHTML = "The library is open! In today's mini-challenge, the queens will read eachother!";
        }
        else if (totalCastSize != 5 && currentCast.length == 5) {
            description.innerHTML = "Bring in the puppets! The queens will parody eachother using puppets!";
        }
        else {
            description.innerHTML = "In today's mini-challenge, the queens will do " + desc1[randomNumber(0, 7)] + desc2[randomNumber(0, 5)];
        }
    }
    rankPerformances() {
        let screen = new Scene();
        let winner = currentCast[randomNumber(0, currentCast.length - 1)];
        screen.createImage(winner.image, "royalblue");
        screen.createBold(`${winner.getName()} won the mini-challenge!`);
    }
}
//challenge modifiers:
let actingChallengeCounter = 0;
let comedyChallengeCounter = 0;
let danceChallengeCounter = 0;
let designChallengeCounter = 0;
let improvChallengeCounter = 0;
var isDesignChallenge = false;
let rusicalCounter = false;
let ballCounter = false;
let makeoverCounter = false;
let snatchCounter = false;
let lastChallenge = '';
let audio = new Audio('audio/song/4.mp3');
//audio.play();
document.getElementById("softwareinfo").innerHTML =
    'Version: build-147';
function miniChallenge() {
    let miniChallengeScreen = new Scene();
    miniChallengeScreen.clean();
    miniChallengeScreen.createHeader("Mini-challenge!");
    miniChallengeScreen.createParagraph("", "Description");
    let challenge = new MiniChallenge();
    challenge.rankPerformances();
    //deal with maxi chalenges:
    let challenges = ["actingChallenge()", "comedyChallenge()", "danceChallenge()", "designChallenge()", "improvChallenge()"];
    //remove from possible challenges list:
    if (actingChallengeCounter == 3)
        challenges.splice(challenges.indexOf("actingChallenge()"), 1);
    if (comedyChallengeCounter == 3)
        challenges.splice(challenges.indexOf("comedyChallenge()"), 1);
    if (danceChallengeCounter == 3)
        challenges.splice(challenges.indexOf("danceChallenge()"), 1);
    if (designChallengeCounter == 2)
        challenges.splice(challenges.indexOf("designChallenge()"), 1);
    if (improvChallengeCounter == 3)
        challenges.splice(challenges.indexOf("improvChallenge()"), 1);
    createChallenge(challenges, miniChallengeScreen);
}
//GENERAL CHALLENGES:
class ActingChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["theather piece about "] = 0] = "theather piece about ";
            desc1[desc1["parody film about "] = 1] = "parody film about ";
            desc1[desc1["commercial about "] = 2] = "commercial about ";
            desc1[desc1["60's inspired film about"] = 3] = "60's inspired film about";
            desc1[desc1["80's inspired film about"] = 4] = "80's inspired film about";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["crime."] = 0] = "crime.";
            desc2[desc2["phone apps."] = 1] = "phone apps.";
            desc2[desc2["social media."] = 2] = "social media.";
            desc2[desc2["cancel culture."] = 3] = "cancel culture.";
            desc2[desc2["gayness."] = 4] = "gayness.";
            desc2[desc2["celebrities."] = 5] = "celebrities.";
            desc2[desc2["the future."] = 6] = "the future.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will act in a " + desc1[randomNumber(0, 4)] + desc2[randomNumber(0, 6)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++) {
            currentCast[i].getActing();
        }
        sortPerformances(currentCast);
    }
}
function actingChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new ActingChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    actingChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Acting");
}
class ComedyChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["a comedy routine about "] = 0] = "a comedy routine about ";
            desc1[desc1["a roast about "] = 1] = "a roast about ";
            desc1[desc1["a parody commercial about "] = 2] = "a parody commercial about ";
            desc1[desc1["a parody trailer about "] = 3] = "a parody trailer about ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["love."] = 0] = "love.";
            desc2[desc2["sex."] = 1] = "sex.";
            desc2[desc2["crime."] = 2] = "crime.";
            desc2[desc2["school."] = 3] = "school.";
            desc2[desc2["a popular TV series."] = 4] = "a popular TV series.";
            desc2[desc2["Drag Race."] = 5] = "Drag Race.";
            desc2[desc2["Past Drag Race Contestants."] = 6] = "Past Drag Race Contestants.";
            desc2[desc2["comedy."] = 7] = "comedy.";
        })(desc2 || (desc2 = {}));
        description.innerHTML = "The queens will participate in " + desc1[randomNumber(0, 3)] + desc2[randomNumber(0, 7)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getComedy();
        sortPerformances(currentCast);
    }
}
function comedyChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new ComedyChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    comedyChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Comedy");
}
class DanceChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["the history of disco."] = 0] = "the history of disco.";
            desc1[desc1["RuPaul's biography."] = 1] = "RuPaul's biography.";
            desc1[desc1["rival dance clubs."] = 2] = "rival dance clubs.";
            desc1[desc1["Drag Race."] = 3] = "Drag Race.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The queens will participate in a dance number about " + desc1[randomNumber(0, 3)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDance();
        sortPerformances(currentCast);
    }
}
function danceChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new DanceChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    danceChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Dance");
}
class DesignChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["trash."] = 0] = "trash.";
            desc1[desc1["random items."] = 1] = "random items.";
            desc1[desc1["dollar store items."] = 2] = "dollar store items.";
            desc1[desc1["a specific color scheme."] = 3] = "a specific color scheme.";
            desc1[desc1["items inspired by past Drag Race contestants."] = 4] = "items inspired by past Drag Race contestants.";
            desc1[desc1["bags."] = 5] = "bags.";
            desc1[desc1["wigs."] = 6] = "wigs.";
            desc1[desc1["winter items."] = 7] = "winter items.";
            desc1[desc1["summer items."] = 8] = "summer items.";
        })(desc1 || (desc1 = {}));
        if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast) {
            description.innerHTML = "It's the makeover challenge! The queens will make everyday people their drag sisters!";
        }
        else
            description.innerHTML = "The queens will do outfits with " + desc1[randomNumber(0, 8)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getDesign();
        sortPerformances(currentCast);
    }
}
function designChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new DesignChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    isDesignChallenge = true;
    queensPerformances();
    designChallengeCounter++;
    if (currentCast.length == 6 && makeoverCounter == false && team == false && currentCast != firstCast && currentCast != secondCast) {
        episodeChallenges.push("Makeover");
        makeoverCounter = true;
    }
    else
        episodeChallenges.push("Design");
}
class ImprovChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["political debate."] = 0] = "political debate.";
            desc1[desc1["celebrity interview."] = 1] = "celebrity interview.";
            desc1[desc1["modern morning TV show."] = 2] = "modern morning TV show.";
            desc1[desc1["late-night TV show."] = 3] = "late-night TV show.";
            desc1[desc1["new Bossy Rossy episode."] = 4] = "new Bossy Rossy episode.";
            desc1[desc1["suggestive kids TV show."] = 5] = "suggestive kids TV show.";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The queens will improvise in a " + desc1[randomNumber(0, 5)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getImprov();
        sortPerformances(currentCast);
    }
}
function improvChallenge() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new ImprovChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    improvChallengeCounter++;
    isDesignChallenge = false;
    episodeChallenges.push("Improv");
}
//TODO: team challenges here
//SPECIAL CHALLENGES:
class SnatchGame {
    generateDescription() {
        let description = document.querySelector("p#Description");
        description.innerHTML = "Today's challenge is... SNATCH GAME!! The queens will do funny celebrity impersonations!";
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getSnatch();
    }
}
function snatchGame() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new SnatchGame();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    isDesignChallenge = false;
    snatchCounter = true;
    episodeChallenges.push("Snatch");
}
class Rusical {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc;
        (function (desc) {
            desc[desc["social media."] = 0] = "social media.";
            desc[desc["a pop celebrity."] = 1] = "a pop celebrity.";
            desc[desc["a political figure."] = 2] = "a political figure.";
            desc[desc["past Drag Race contestans."] = 3] = "past Drag Race contestans.";
            desc[desc["cancel culture."] = 4] = "cancel culture.";
            desc[desc["RuPaul's music carreer."] = 5] = "RuPaul's music carreer.";
        })(desc || (desc = {}));
        description.innerHTML = "Today's challenge is... THE RUSICAL!! The queens will do a musical about " + desc[randomNumber(0, 5)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRusical();
    }
}
function rusical() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new Rusical();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    isDesignChallenge = false;
    episodeChallenges.push("Rusical");
}
class Ball {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["Executive realness, "] = 0] = "Executive realness, ";
            desc1[desc1["Party night, "] = 1] = "Party night, ";
            desc1[desc1["Summer, "] = 2] = "Summer, ";
            desc1[desc1["Elegant, "] = 3] = "Elegant, ";
            desc1[desc1["Sweet 16, "] = 4] = "Sweet 16, ";
            desc1[desc1["Black and white, "] = 5] = "Black and white, ";
            desc1[desc1["Winter, "] = 6] = "Winter, ";
        })(desc1 || (desc1 = {}));
        let desc2;
        (function (desc2) {
            desc2[desc2["Antique, "] = 0] = "Antique, ";
            desc2[desc2["Rainbown, "] = 1] = "Rainbown, ";
            desc2[desc2["Rich, "] = 2] = "Rich, ";
            desc2[desc2["Space, "] = 3] = "Space, ";
            desc2[desc2["Wild, "] = 4] = "Wild, ";
            desc2[desc2["Water, "] = 5] = "Water, ";
        })(desc2 || (desc2 = {}));
        let desc3;
        (function (desc3) {
            desc3[desc3["Ice queen."] = 0] = "Ice queen.";
            desc3[desc3["Futuristic."] = 1] = "Futuristic.";
            desc3[desc3["Fire."] = 2] = "Fire.";
            desc3[desc3["Princess."] = 3] = "Princess.";
            desc3[desc3["Jewels."] = 4] = "Jewels.";
            desc3[desc3["Flowers"] = 5] = "Flowers";
        })(desc3 || (desc3 = {}));
        description.innerHTML = "Today's challenge is... THE BALL! The queens will bring three looks to the runway! The themes are: " + desc1[randomNumber(0, 6)] + desc2[randomNumber(0, 5)] + desc3[randomNumber(0, 5)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getBall();
    }
}
function ball() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new Ball();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    isDesignChallenge = true;
    ballCounter = true;
    episodeChallenges.push("Ball");
}
class Rumix {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        (function (desc1) {
            desc1[desc1["one of RuPaul's singles!"] = 0] = "one of RuPaul's singles!";
            desc1[desc1["an original song!"] = 1] = "an original song!";
        })(desc1 || (desc1 = {}));
        description.innerHTML = "Today's challenge is... the rumix! The queens will make a verse and a coreography for " + desc1[randomNumber(0, 1)];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getRumix();
    }
}
function rumix() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new Rumix();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
    isDesignChallenge = false;
    episodeChallenges.push("Rumix");
}
class TalentShow {
    generateDescription() {
        let description = document.querySelector("p#Description");
        description.innerHTML = "In this first challenge, the queens will prove themselves in a talent show, where they bring all they've got!";
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getTalentShow();
    }
}
function talentshow() {
    let challengeScreen = new Scene();
    challengeScreen.clean();
    challengeScreen.createHeader("Maxi-challenge!");
    challengeScreen.createParagraph("", "Description");
    let challenge = new TalentShow();
    challenge.generateDescription();
    challenge.rankPerformances();
    isDesignChallenge = true;
    queensPerformances();
    episodeChallenges.push("Talent");
}
//performance:
function queensPerformances() {
    let performanceScreen = new Scene();
    performanceScreen.createHorizontalLine();
    performanceScreen.createBigText("Queens' performances...");
    let slay = currentCast.filter(function (queen) { return queen.performanceScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.performanceScore >= 26 && queen.performanceScore < 31; });
    let flop = currentCast.filter(function (queen) { return queen.performanceScore >= 31 && queen.performanceScore < 36; });
    createPerformanceDesc(slay, great, good, bad, flop);
    if (isDesignChallenge == true || episodeChallenges[episodeChallenges.length - 1] == "Design")
        performanceScreen.createButton("Proceed", "judging()");
    else
        performanceScreen.createButton("Proceed", "runway()", "button2");
}
//runway:
function runway() {
    let runwayScreen = new Scene();
    runwayScreen.createHorizontalLine();
    let button2 = document.querySelector("button#button2");
    button2.remove();
    runwayScreen.createBigText("Runway!");
    let desc;
    (function (desc) {
        desc[desc["feathers."] = 0] = "feathers.";
        desc[desc["fascinator."] = 1] = "fascinator.";
        desc[desc["pink."] = 2] = "pink.";
        desc[desc["purple."] = 3] = "purple.";
        desc[desc["caftan."] = 4] = "caftan.";
        desc[desc["trains."] = 5] = "trains.";
        desc[desc["yellow."] = 6] = "yellow.";
        desc[desc["white."] = 7] = "white.";
        desc[desc["black."] = 8] = "black.";
        desc[desc["ugly dress."] = 9] = "ugly dress.";
        desc[desc["naughty."] = 10] = "naughty.";
        desc[desc["crazy sexy cool."] = 11] = "crazy sexy cool.";
        desc[desc["country."] = 12] = "country.";
        desc[desc["phoenix."] = 13] = "phoenix.";
        desc[desc["silver."] = 14] = "silver.";
        desc[desc["2 in 1."] = 15] = "2 in 1.";
        desc[desc["surprise!"] = 16] = "surprise!";
        desc[desc["gold."] = 17] = "gold.";
        desc[desc["blue."] = 18] = "blue.";
        desc[desc["fish"] = 19] = "fish";
        desc[desc["butch."] = 20] = "butch.";
        desc[desc["amazon"] = 21] = "amazon";
    })(desc || (desc = {}));
    runwayScreen.createParagraph("The queens will bring it to the runway!");
    if (currentCast.length > 4)
        runwayScreen.createParagraph("The theme is: " + desc[randomNumber(0, 21)]);
    else if (currentCast.length == 3 && top3 || currentCast.length == 5 && top4 || currentCast.length == 4 && (all_stars || lipsync_assassin) || currentCast.length == 2 && team)
        runwayScreen.createParagraph("The theme is... best drag!");
    for (let i = 0; i < currentCast.length; i++)
        currentCast[i].getRunway();
    let slay = currentCast.filter(function (queen) { return queen.runwayScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.runwayScore >= 6 && queen.runwayScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.runwayScore >= 16 && queen.runwayScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.runwayScore >= 26; });
    createRunwayDesc(slay, great, good, bad);
    if (currentCast.length > 4)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 4 && (top3 || team))
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && team)
        runwayScreen.createButton("Proceed", "judging()");
    else if (currentCast.length == 3 && (top3))
        runwayScreen.createButton("Proceed", "finaleJudging()");
    else if (currentCast.length == 4 && (all_stars || lipsync_assassin))
        runwayScreen.createButton("Proceed", "finaleASJudging()");
    else if (currentCast.length == 2 && team)
        runwayScreen.createButton("Proceed", "finaleTeamJudging()");
}
//helper functions
////create next challenge
function createChallenge(challenges, miniChallengeScreen) {
    //first design challenge for normal seasons
    if (currentCast.length == totalCastSize && top3 && s6Premiere == false || currentCast.length == totalCastSize && top4 && s6Premiere == false || currentCast.length == totalCastSize && team || sweatshop || currentCast == firstCast && s6Premiere || currentCast == secondCast && s6Premiere)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //rumix challenge for s6 or porkchop premiere
    else if (premiereCounter <= 2 && (s12Premiere || porkchopPremiere))
        miniChallengeScreen.createButton("Proceed", "rumix()");
    //talent show for all stars
    else if (currentCast.length == totalCastSize && (all_stars || lipsync_assassin))
        miniChallengeScreen.createButton("Proceed", "talentshow()");
    //snatch game
    else if (totalCastSize >= 10 && currentCast.length == 9 && !team && snatchCounter == false || totalCastSize >= 6 && currentCast.length == 5 && team)
        miniChallengeScreen.createButton("Proceed", "snatchGame()");
    //the ball for the third competitive episode for lsftc seasons
    else if (currentCast.length == totalCastSize - 3 && top4 && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //same but if above condition doesn't apply (example: snatch game needs to happen before the ball)
    else if (currentCast.length == totalCastSize - 4 && (top4 || (all_stars || lipsync_assassin) && randomNumber(0, 100) < 30) && !ballCounter || currentCast.length == 3 && team)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //rusical
    else if (currentCast.length > 6 && randomNumber(0, 20) == 20 && !rusicalCounter || currentCast.length > 5 && randomNumber(0, 20) == 20 && team && rusicalCounter == false)
        miniChallengeScreen.createButton("Proceed", "rusical()");
    //makeover
    else if (currentCast.length == 6 && (top3 || top4) && makeoverCounter == false || currentCast.length == 6 && randomNumber(0, 15) == 15 && (all_stars || lipsync_assassin) && makeoverCounter == false)
        miniChallengeScreen.createButton("Proceed", "designChallenge()");
    //rumix
    else if (currentCast.length == 5 && top4 && (!smackdown || returningQueen == true))
        miniChallengeScreen.createButton("Proceed", "rumix()");
    //ball for top3 seasons
    else if (currentCast.length == 4 && top3 && !ballCounter)
        miniChallengeScreen.createButton("Proceed", "ball()");
    //if no conditions apply, create random challenge
    else {
        let currentChallenge = challenges[randomNumber(0, challenges.length - 1)];
        if (currentChallenge === lastChallenge && currentCast.length != totalCastSize) {
            currentChallenge = challenges[randomNumber(0, challenges.length - 1)];
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        }
        else {
            lastChallenge = currentChallenge;
            miniChallengeScreen.createButton("Proceed", currentChallenge);
        }
    }
}
////create performance descriptions
function createPerformanceDesc(slay, great, good, bad, flop) {
    let screen = new Scene();
    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++)
            screen.createImage(slay[i].image, "darkblue");
        screen.createBold("", "slay");
        let slayText = document.getElementById("slay");
        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the challenge!";
    }
    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++)
            screen.createImage(great[i].image, "royalblue");
        screen.createBold("", "great");
        let greatText = document.getElementById("great");
        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great performance!";
    }
    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++)
            screen.createImage(good[i].image);
        screen.createBold("", "good");
        let goodText = document.getElementById("good");
        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good performance.";
    }
    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++)
            screen.createImage(bad[i].image, "pink");
        screen.createBold("", "bad");
        let badText = document.getElementById("bad");
        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad performance...";
    }
    if (flop.length !== 0) {
        for (let i = 0; i < flop.length; i++)
            screen.createImage(flop[i].image, "tomato");
        screen.createBold("", "flop");
        let flopText = document.getElementById("flop");
        for (let i = 0; i < flop.length; i++)
            flopText.innerHTML += `${flop[i].getName()}, `;
        flopText.innerHTML += "flopped the challenge...";
    }
}
function createRunwayDesc(slay, great, good, bad) {
    let screen = new Scene();
    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++) {
            screen.createImage(slay[i].image, "darkblue");
            slay[i].runwayScore = 10;
        }
        screen.createBold("", "slayR");
        let slayText = document.getElementById("slayR");
        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the runway!";
    }
    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++) {
            screen.createImage(great[i].image, "royalblue");
            great[i].runwayScore = 5;
        }
        screen.createBold("", "greatR");
        let greatText = document.getElementById("greatR");
        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great runway!";
    }
    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++) {
            screen.createImage(good[i].image);
            good[i].runwayScore = 0;
        }
        screen.createBold("", "goodR");
        let goodText = document.getElementById("goodR");
        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good runway.";
    }
    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++) {
            screen.createImage(bad[i].image, "pink");
            bad[i].runwayScore = -3;
        }
        screen.createBold("", "badR");
        let badText = document.getElementById("badR");
        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad runway...";
    }
}
function addQueen() {
    let name = document.getElementById("queenName").value;
    let acting = document.getElementById("actingStat").valueAsNumber;
    let comedy = document.getElementById("comedyStat").valueAsNumber;
    let dance = document.getElementById("danceStat").valueAsNumber;
    let design = document.getElementById("designStat").valueAsNumber;
    let improv = document.getElementById("improvStat").valueAsNumber;
    let runway = document.getElementById("runwayStat").valueAsNumber;
    let lipsync = document.getElementById("lipsyncStat").valueAsNumber;
    if ((acting || comedy || dance || design || improv || runway || lipsync) < 0 || (acting || comedy || dance || design || improv || runway || lipsync) > 15) {
        window.alert("Queens' stats must be between 0 and 15!");
        return;
    }
    if (name == "" || isNaN((acting || comedy || dance || design || improv || runway || lipsync))) {
        window.alert("One of the boxes is empty!");
        return;
    }
    let customQueen = new Queen(name, acting, comedy, dance, design, improv, runway, lipsync);
    let sameName = false;
    for (let i = 0; i < allCustomQueens.length; i++)
        if (allCustomQueens[i].getName() == customQueen.getName()) {
            window.alert(`There's already a queen with the name ${customQueen.getName()}! Please use another name.`);
            sameName = true;
            break;
        }
    if (sameName == false) {
        allCustomQueens.push(customQueen);
        let announce = document.getElementById("announce-new");
        announce.innerHTML = `${customQueen.getName()} added to the queen list!`;
        localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));
        setTimeout(() => {
            document.location.reload();
        }, 1500);
    }
}
function customQueenSelectList() {
    let select = document.getElementById("custom-remove");
    for (let i = 0; i < allCustomQueens.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = allCustomQueens[i].getName();
        option.value = i.toString();
        select.appendChild(option);
    }
}
function removeCustomQueen() {
    let select = document.getElementById("custom-remove");
    let index = parseInt(select.options[select.selectedIndex].value);
    let announce = document.getElementById("announce-remove");
    announce.innerHTML = `${allCustomQueens[index].getName()} removed from the queen list!`;
    allCustomQueens.splice(index, 1);
    localStorage.setItem("customQueens", JSON.stringify(allCustomQueens));
    setTimeout(() => {
        document.location.reload();
    }, 1500);
}
function randomizeStats() {
    let stats = document.getElementsByClassName("stats");
    for (let i = 0; i < stats.length; i++) {
        stats[i].value = randomNumber(0, 15).toString();
    }
}
let premiereCounter = 0;
let firstCast = [];
let secondCast = [];
function doublePremiere() {
    if (premiereCounter == 0)
        if (s6Premiere || s12Premiere) {
            shuffle(currentCast);
            firstCast = currentCast.splice(0, Math.floor(currentCast.length / 2));
            secondCast = [...currentCast];
        }
    if (premiereCounter == 0) {
        currentCast = firstCast;
        for (let i = 0; i < secondCast.length; i++)
            secondCast[i].addToTrackRecord("");
        premiereCounter++;
        newEpisode();
    }
    else if (premiereCounter == 1) {
        currentCast = secondCast;
        for (let i = 0; i < firstCast.length; i++)
            firstCast[i].addToTrackRecord("");
        premiereCounter++;
        newEpisode();
    }
    else if (premiereCounter == 2) {
        currentCast = [...firstCast, ...secondCast];
        premiereCounter++;
        newEpisode();
    }
}
function porkchopLipsyncs() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createParagraph("After the queens enter the workroom, it's time for them to lip-sync... for their lives!");
    for (let i = 0; i < Math.floor(totalCastSize / 2); i++) {
        screen.createHorizontalLine();
        let queen1 = currentCast[randomNumber(0, currentCast.length - 1)];
        currentCast.splice(currentCast.indexOf(queen1), 1);
        let queen2 = currentCast[randomNumber(0, currentCast.length - 1)];
        currentCast.splice(currentCast.indexOf(queen2), 1);
        if (currentCast.length == 1) {
            let queen3 = currentCast[randomNumber(0, currentCast.length - 1)];
            currentCast.splice(currentCast.indexOf(queen3), 1);
            screen.createImage(queen1.image, "royalblue");
            screen.createImage(queen2.image, "royalblue");
            screen.createImage(queen3.image, "royalblue");
            screen.createBold(`${queen1.getName()}, ${queen2.getName()} and ${queen3.getName()} will lipsync...`);
            lsSong();
            let lipSync = [queen1, queen2, queen3];
            for (let i = 0; i < lipSync.length; i++) {
                lipSync[i].getASLipsync();
            }
            lipSync.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
            queen1 = lipSync[0];
            queen2 = lipSync[1];
            queen3 = lipSync[2];
            screen.createImage(queen1.image, "green");
            screen.createBold(`${queen1.getName()}, shantay you stay!`);
            screen.createImage(queen2.image, "orange");
            screen.createImage(queen3.image, "orange");
            screen.createBold(`${queen2.getName()} and ${queen3.getName()}, you're getting the porkchop...`);
            queen1.addToTrackRecord(" WIN ");
            queen2.addToTrackRecord("LOSS");
            queen3.addToTrackRecord("LOSS");
            firstCast.push(queen1);
            secondCast.push(queen2, queen3);
        }
        else {
            screen.createImage(queen1.image, "royalblue");
            screen.createImage(queen2.image, "royalblue");
            screen.createBold(`${queen1.getName()} and ${queen2.getName()} will lipsync...`);
            lsSong();
            let lipSync = [queen1, queen2];
            for (let i = 0; i < lipSync.length; i++) {
                lipSync[i].getASLipsync();
            }
            lipSync.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
            queen1 = lipSync[0];
            queen2 = lipSync[1];
            screen.createImage(queen1.image, "green");
            screen.createBold(`${queen1.getName()}, shantay you stay!`);
            screen.createImage(queen2.image, "orange");
            screen.createBold(`${queen2.getName()}, you're getting the porkchop...`);
            queen1.addToTrackRecord(" WIN ");
            queen2.addToTrackRecord("LOSS");
            firstCast.push(queen1);
            secondCast.push(queen2);
        }
    }
    episodeChallenges.push("Porkchop");
    screen.createButton("Proceed", "doublePremiere()");
}
function doublePremiereJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    screen.createImage(topQueens[0].image, "cyan");
    screen.createImage(topQueens[1].image, "cyan");
    screen.createBold(`${topQueens[0].getName()}, ${topQueens[1].getName()}, condragulations, you're the Top 2 of the week!`);
    screen.createParagraph("Nobody is going home tonight!");
    screen.createHorizontalLine();
    screen.createBold("The Top 2 will now lip-sync... for the win!");
    lsSong();
    for (let i = 0; i < topQueens.length; i++) {
        topQueens[i].getASLipsync();
    }
    topQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createImage(topQueens[0].image, "royalblue");
    screen.createBold(`${topQueens[0].getName()}, you're a winner baby!`);
    topQueens[0].addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    topQueens[1].addToTrackRecord("TOP2");
    topQueens[0].favoritism += 2;
    screen.createButton("Proceed", "doublePremiere()");
}
let currentCast = [];
let eliminatedCast = [];
let safeQueens = [];
let topQueens = [];
let bottomQueens = [];
let top2 = [];
let doubleShantay = false;
let doubleSashay = false;
let episodeChallenges = [];
let episodeCount = 0;
let returningQueen = false;
let noDouble = false;
let s6Premiere = false;
let s12Premiere = false;
let porkchopPremiere = false;
let firstPremiere = false;
let secondPremiere = false;
//challenge seasons
let sweatshop = false;
let chaos = false;
function newEpisode() {
    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];
    episodeCount++;
    let queensRemainingScreen = new Scene();
    if (episodeCount == 1 || premiereCounter <= 2 && (s12Premiere || porkchopPremiere || s6Premiere) || team) {
        queensRemainingScreen.clean();
        queensRemainingScreen.createHeader("Full cast");
        for (let i = 0; i < currentCast.length; i++) {
            queensRemainingScreen.createImage(currentCast[i].image);
            queensRemainingScreen.createBold(currentCast[i].getName());
        }
    }
    else {
        contestantProgress();
    }
    if (currentCast.length == totalCastSize && team == true)
        queensRemainingScreen.createButton("Proceed", "teamsScreen()");
    else if (currentCast.length > 4)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && (top3 || team))
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 4 && top4)
        queensRemainingScreen.createButton("Proceed", "finaleLS()");
    else if (currentCast.length == 4 && (all_stars || lipsync_assassin))
        queensRemainingScreen.createButton("Proceed", "finaleAS()");
    else if (currentCast.length == 3 && team)
        queensRemainingScreen.createButton("Proceed", "miniChallenge()");
    else if (currentCast.length == 2 && team)
        queensRemainingScreen.createButton("Proceed", "finaleTeam()");
    else
        queensRemainingScreen.createButton("Proceed", "finale()");
    //add an empty placement on eliminated queen's track records
    for (let i = 0; i < eliminatedCast.length; i++)
        eliminatedCast[i].addToTrackRecord('');
}
function reSimulate() {
    //add eliminated queens again to cast and clean it
    for (let i = 0; i < eliminatedCast.length; i++) {
        currentCast.push(eliminatedCast[i]);
    }
    if (top4) {
        currentCast.push(finalLS[0]);
        finalLS = [];
        firstLS = [];
        secondLS = [];
    }
    currentCast.sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));
    eliminatedCast = [];
    firstCast = [];
    secondCast = [];
    premiereCounter = 0;
    episodeCount = 0;
    onFinale = false;
    onTop4Finale = false;
    totalCastSize = currentCast.length;
    //clean track records
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].trackRecord = [];
        currentCast[i].favoritism = 0;
        currentCast[i].unfavoritism = 0;
        currentCast[i].finaleScore = 0;
        currentCast[i].votes = 0;
    }
    //clean challenges
    episodeChallenges = [];
    actingChallengeCounter = 0;
    comedyChallengeCounter = 0;
    danceChallengeCounter = 0;
    designChallengeCounter = 0;
    improvChallengeCounter = 0;
    rusicalCounter = false;
    ballCounter = false;
    doubleShantay = false;
    doubleSashay = false;
    //refill lip-sync songs and lsa
    lsSongs = allLsSongs;
    allQueens = allQueensCopy;
    if (s6Premiere || s12Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}
let firstLS = [];
let secondLS = [];
let finalLS = [];
let onFinale = false;
let onTop4Finale = false;
;
function finaleLS() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    screen.createImage(currentCast[0].image, "royalblue");
    screen.createImage(currentCast[1].image, "royalblue");
    screen.createImage(currentCast[2].image, "royalblue");
    screen.createImage(currentCast[3].image, "royalblue");
    screen.createParagraph("Our Top 4 will participate in a lip-sync smackdown for the crown! The preliminaries will now be decided...");
    screen.createHorizontalLine();
    for (let i = 0; i < 2; i++) {
        let q1 = currentCast[randomNumber(0, currentCast.length - 1)];
        firstLS.push(q1);
        currentCast.splice(currentCast.indexOf(q1), 1);
        let q2 = currentCast[randomNumber(0, currentCast.length - 1)];
        secondLS.push(q2);
        currentCast.splice(currentCast.indexOf(q2), 1);
    }
    screen.createBigText("The preliminaries will be: ");
    screen.createImage(firstLS[0].image, "darkblue");
    screen.createImage(firstLS[1].image, "darkblue");
    screen.createBold(firstLS[0].getName() + " vs. " + firstLS[1].getName());
    screen.createParagraph("and");
    screen.createImage(secondLS[0].image, "darkred");
    screen.createImage(secondLS[1].image, "darkred");
    screen.createBold(secondLS[0].getName() + " vs. " + secondLS[1].getName());
    episodeChallenges.push("Finale");
    screen.createButton("Proceed", "finaleLipSyncs()");
}
function finaleLipSyncs() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The Lip-Syncs...");
    screen.createParagraph(firstLS[0].getName() + " and " + firstLS[1].getName() + " lip-sync...");
    lsSong();
    for (let i = 0; i < firstLS.length; i++) {
        firstLS[i].getLipsync();
    }
    firstLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    finalLS.push(firstLS[0]);
    firstLS[1].addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(firstLS[1]);
    screen.createImage(firstLS[0].image, "silver");
    screen.createBold(firstLS[0].getName() + ", shantay you stay.");
    screen.createImage(firstLS[1].image, "sienna");
    screen.createBold(firstLS[1].getName() + ", sashay away...");
    screen.createHorizontalLine();
    screen.createParagraph(secondLS[0].getName() + " and " + secondLS[1].getName() + " lip-sync...");
    lsSong();
    for (let i = 0; i < secondLS.length; i++) {
        secondLS[i].getASLipsync();
    }
    secondLS.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    finalLS.push(secondLS[0]);
    secondLS[1].addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(secondLS[1]);
    screen.createImage(secondLS[0].image, "silver");
    screen.createBold(secondLS[0].getName() + ", shantay you stay.");
    screen.createImage(secondLS[1].image, "sienna");
    screen.createBold(secondLS[1].getName() + ", sashay away...");
    screen.createButton("Proceed", "finalLipSync()");
}
function finalLipSync() {
    onTop4Finale = true;
    onFinale = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The end...");
    screen.createBold(finalLS[0].getName() + " and " + finalLS[1].getName() + " will lip-sync for the crown...!");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");
    for (let i = 0; i < finalLS.length; i++)
        finalLS[i].getFinale();
    finalLS.sort((a, b) => b.finaleScore - a.finaleScore);
    let winner = 0;
    screen.createImage(finalLS[winner].image, "yellow");
    screen.createBigText(finalLS[winner].getName() + "!!");
    screen.createBold("Now prance, my queen!");
    finalLS[winner].addToTrackRecord("WINNER");
    for (let i = 0; i < finalLS.length; i++) {
        if (!(finalLS.indexOf(finalLS[i]) == winner)) {
            finalLS[i].addToTrackRecord("RUNNER UP");
            eliminatedCast.unshift(finalLS[i]);
            finalLS.splice(i, 1);
        }
    }
    screen.createButton("Proceed", "contestantProgress()");
}
function finale() {
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    for (let i = 0; i < currentCast.length; i++)
        screen.createImage(currentCast[i].image);
    screen.createParagraph("Our Top 3 will participate in a music video for RuPaul's newest single!");
    screen.createButton("Proceed", "runway()", "button2");
}
function finaleTeam() {
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    screen.createParagraph("Our Top 4 will participate in a music video for RuPaul's newest single!");
    screen.createButton("Proceed", "runway()", "button2");
}
function finaleJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    screen.createImage(currentCast[2].image, "sienna");
    screen.createBold(currentCast[2].getName() + ", I'm sorry my dear but it's not your time. I must ask you to sashay away...");
    currentCast[2].addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(currentCast[2]);
    currentCast.splice(2, 1);
    screen.createHorizontalLine();
    screen.createImage(currentCast[0].image, "silver");
    screen.createImage(currentCast[1].image, "silver");
    screen.createBold(currentCast[0].getName() + " and " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
    lsSong();
    screen.createButton("Proceed", "finaleFinale()");
}
function finaleTeamJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    screen.createBold(currentCast[1].getName() + ", I'm sorry my dears but it's not your time. I must ask you both to sashay away...");
    screen.createHorizontalLine();
    currentCast[1].QueenA.addToTrackRecord("ELIMINATED");
    currentCast[1].QueenB.addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(currentCast[1].QueenA);
    eliminatedCast.unshift(currentCast[1].QueenB);
    currentCast.splice(1, 1);
    if (randomNumber(0, 100) <= 50) {
        currentCast.push(currentCast[0].QueenA);
        currentCast.push(currentCast[0].QueenB);
    }
    else {
        currentCast.push(currentCast[0].QueenB);
        currentCast.push(currentCast[0].QueenA);
    }
    currentCast.splice(0, 1);
    screen.createBold(currentCast[0].getName() + " and " + currentCast[1].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
    lsSong();
    screen.createButton("Proceed", "finaleFinale()");
}
function finaleFinale() {
    onFinale = true;
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The end.");
    screen.createBold("Ladies, I've made my decision. The Next Drag Superstar is...");
    screen.createImage(currentCast[0].image, "yellow");
    screen.createBigText(currentCast[0].getName() + "!!");
    screen.createBold("Now prance, my queen!");
    currentCast[0].addToTrackRecord("WINNER");
    currentCast[1].addToTrackRecord("RUNNER UP");
    eliminatedCast.unshift(currentCast[1]);
    currentCast.splice(1, 1);
    if (all_stars || lipsync_assassin) {
        currentCast[1].addToTrackRecord("RUNNER UP");
        eliminatedCast.unshift(currentCast[1]);
        currentCast.splice(1, 1);
    }
    episodeChallenges.push("Finale");
    screen.createButton("Proceed", "contestantProgress()");
}
function finaleAS() {
    //sort queens by finale score:
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].getFinale();
    }
    currentCast.sort((a, b) => (b.finaleScore - a.finaleScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The grande finale!");
    for (let i = 0; i < currentCast.length; i++)
        screen.createImage(currentCast[i].image);
    screen.createParagraph("Our Top 4 will create verses and coreography for a new original song!");
    screen.createButton("Proceed", "runway()", "button2");
}
function finaleASJudging() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("The final minutes...");
    screen.createBold("Ladies, it's time to decide The Next Drag Superstar, and...");
    screen.createImage(currentCast[3].image, "sienna");
    screen.createBold(currentCast[3].getName() + ", I'm sorry my dear but it's not your time. I must ask you to sashay away...");
    currentCast[3].addToTrackRecord("ELIMINATED");
    eliminatedCast.unshift(currentCast[3]);
    currentCast.splice(3, 1);
    screen.createHorizontalLine();
    for (let i = 0; i < currentCast.length; i++)
        screen.createImage(currentCast[i].image, "silver");
    screen.createBold(currentCast[0].getName() + ", " + currentCast[1].getName() + ", " + currentCast[2].getName() + ", this is your last chance to prove yourself. It's time for you to lipsync.. for the CROWN!!");
    lsSong();
    screen.createButton("Proceed", "finaleFinale()");
}
function contestantProgress() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Contestant Progress");
    let main = document.querySelector("div#MainBlock");
    let trackRecords = document.createElement("table");
    if (totalCastSize >= 12 && totalCastSize < 15)
        trackRecords.setAttribute("style", "font-size: 85%;");
    if (totalCastSize >= 15)
        trackRecords.setAttribute("style", "font-size: 75%");
    let header = document.createElement("tr");
    trackRecords.appendChild(header);
    let th = document.createElement("th");
    th.innerHTML = "Queen";
    header.appendChild(th);
    for (let i = 0; i < episodeChallenges.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = episodeChallenges[i];
        header.appendChild(th);
    }
    let winner = document.createElement("tr");
    let name = document.createElement("td");
    name.setAttribute("style", "font-weight: bold;");
    if (onFinale) {
        let winnerQueen;
        if (!top4)
            winnerQueen = currentCast[0];
        else if (onTop4Finale)
            winnerQueen = finalLS[0];
        else
            winnerQueen = currentCast[0];
        name.innerHTML = winnerQueen.getName();
        winner.appendChild(name);
        for (let i = 0; i < winnerQueen.trackRecord.length; i++) {
            let placement = document.createElement("td");
            placement.innerHTML = winnerQueen.trackRecord[i];
            if (placement.innerHTML == "WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
            }
            else if (placement.innerHTML == "TOP2") {
                placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
            }
            else if (placement.innerHTML == "LOW") {
                placement.setAttribute("style", "background-color: pink;");
            }
            else if (placement.innerHTML == "HIGH") {
                placement.setAttribute("style", "background-color: lightblue;");
            }
            else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5") {
                placement.setAttribute("style", "background-color: tomato;");
            }
            else if (placement.innerHTML == "ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: red;");
            }
            else if (placement.innerHTML == "WINNER") {
                placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
            }
            else if (placement.innerHTML == "RUNNER-UP") {
                placement.setAttribute("style", "font-weight: bold; background-color: silver;");
            }
            else if (placement.innerHTML == "ELIMINATED") {
                placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
            }
            else if (placement.innerHTML == "") {
                placement.setAttribute("style", "background-color: gray");
            }
            else if (placement.innerHTML == "WIN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
            }
            else if (placement.innerHTML == "SAFE") {
                placement.setAttribute("style", "background-color: white;");
            }
            else if (placement.innerHTML == " WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
            }
            else if (placement.innerHTML == "DISQ") {
                placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
            }
            else if (placement.innerHTML == "RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: orange;");
            }
            else if (placement.innerHTML == " WIN ") {
                placement.setAttribute("style", "background-color: lightgreen;");
            }
            else if (placement.innerHTML == "LOSS") {
                placement.setAttribute("style", "background-color: orange;");
            }
            winner.appendChild(placement);
        }
        trackRecords.appendChild(winner);
    }
    if (!onFinale) {
        for (let i = 0; i < currentCast.length; i++) {
            let contestant = document.createElement("tr");
            let name = document.createElement("td");
            name.setAttribute("style", "font-weight: bold;");
            name.innerHTML = currentCast[i].getName();
            contestant.appendChild(name);
            for (let k = 0; k < currentCast[i].trackRecord.length; k++) {
                let placement = document.createElement("td");
                placement.innerHTML = currentCast[i].trackRecord[k];
                if (placement.innerHTML == "WIN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
                }
                else if (placement.innerHTML == "TOP2") {
                    placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
                }
                else if (placement.innerHTML == "LOW") {
                    placement.setAttribute("style", "background-color: pink;");
                }
                else if (placement.innerHTML == "HIGH") {
                    placement.setAttribute("style", "background-color: lightblue;");
                }
                else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5") {
                    placement.setAttribute("style", "background-color: tomato;");
                }
                else if (placement.innerHTML == "ELIM") {
                    placement.setAttribute("style", "font-weight: bold; background-color: red;");
                }
                else if (placement.innerHTML == "WINNER") {
                    placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
                }
                else if (placement.innerHTML == "RUNNER UP") {
                    placement.setAttribute("style", "font-weight: bold; background-color: silver;");
                }
                else if (placement.innerHTML == "ELIMINATED") {
                    placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
                }
                else if (placement.innerHTML == "") {
                    placement.setAttribute("style", "background-color: gray");
                }
                else if (placement.innerHTML == "WIN ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
                }
                else if (placement.innerHTML == "SAFE") {
                    placement.setAttribute("style", "background-color: white;");
                }
                else if (placement.innerHTML == " WIN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
                }
                else if (placement.innerHTML == "DISQ") {
                    placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
                }
                else if (placement.innerHTML == "RTRN") {
                    placement.setAttribute("style", "font-weight: bold; background-color: orange;");
                }
                else if (placement.innerHTML == " WIN ") {
                    placement.setAttribute("style", "background-color: lightgreen;");
                }
                else if (placement.innerHTML == "LOSS") {
                    placement.setAttribute("style", "background-color: orange;");
                }
                contestant.appendChild(placement);
            }
            trackRecords.appendChild(contestant);
        }
    }
    for (let i = 0; i < eliminatedCast.length; i++) {
        let contestant = document.createElement("tr");
        let name = document.createElement("td");
        name.setAttribute("style", "font-weight: bold;");
        name.innerHTML = eliminatedCast[i].getName();
        contestant.appendChild(name);
        for (let k = 0; k < eliminatedCast[i].trackRecord.length; k++) {
            let placement = document.createElement("td");
            placement.innerHTML = eliminatedCast[i].trackRecord[k];
            if (placement.innerHTML == "WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: royalblue; color: white;");
            }
            else if (placement.innerHTML == "TOP2") {
                placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
            }
            else if (placement.innerHTML == "LOW") {
                placement.setAttribute("style", "background-color: pink;");
            }
            else if (placement.innerHTML == "HIGH") {
                placement.setAttribute("style", "background-color: lightblue;");
            }
            else if (placement.innerHTML == "BTM2" || placement.innerHTML == "BTM3" || placement.innerHTML == "BTM4" || placement.innerHTML == "BTM5") {
                placement.setAttribute("style", "background-color: tomato;");
            }
            else if (placement.innerHTML == "ELIM") {
                placement.setAttribute("style", "font-weight: bold; background-color: red;");
            }
            else if (placement.innerHTML == "WINNER") {
                placement.setAttribute("style", "font-weight: bold; background-color: yellow;");
            }
            else if (placement.innerHTML == "RUNNER UP") {
                placement.setAttribute("style", "font-weight: bold; background-color: silver;");
            }
            else if (placement.innerHTML == "ELIMINATED") {
                placement.setAttribute("style", "font-weight: bold; background-color: sienna;");
            }
            else if (placement.innerHTML == "") {
                placement.setAttribute("style", "background-color: gray");
            }
            else if (placement.innerHTML == "WIN ") {
                placement.setAttribute("style", "font-weight: bold; background-color: cyan;");
            }
            else if (placement.innerHTML == "SAFE") {
                placement.setAttribute("style", "background-color: white;");
            }
            else if (placement.innerHTML == " WIN") {
                placement.setAttribute("style", "font-weight: bold; background-color: darkblue; color: white;");
            }
            else if (placement.innerHTML == "DISQ") {
                placement.setAttribute("style", "font-weight: bold; background-color: black; color: white;");
            }
            else if (placement.innerHTML == "RTRN") {
                placement.setAttribute("style", "font-weight: bold; background-color: orange;");
            }
            else if (placement.innerHTML == " WIN ") {
                placement.setAttribute("style", "background-color: lightgreen;");
            }
            else if (placement.innerHTML == "LOSS") {
                placement.setAttribute("style", "background-color: orange;");
            }
            contestant.appendChild(placement);
        }
        trackRecords.appendChild(contestant);
    }
    main.appendChild(trackRecords);
    if (onFinale) {
        screen.createButton("Back to main page", "location.reload()");
    }
}
let totalCastSize;
function randomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
function sortPerformances(cast) {
    cast.sort((a, b) => (a.performanceScore - b.performanceScore));
}
//generate spaces to insert cast:
function generateSpace() {
    let castSize = document.querySelector("input#castSize").valueAsNumber;
    totalCastSize = castSize;
    let castSelection = document.querySelector("p#castSelection");
    castSelection.innerHTML = '';
    if (totalCastSize < 3)
        window.alert("Please, use at least 3 queens on your cast!");
    else if (totalCastSize > 20)
        window.alert("Please, use less than 20 queens in your cast!");
    else
        for (let i = 0; i < castSize; i++) {
            let select = document.createElement("select");
            select.setAttribute("class", "queenList");
            select.setAttribute("id", i.toString());
            select.setAttribute("onchange", "setImage()");
            let img = document.createElement("img");
            img.setAttribute("class", "images");
            img.setAttribute("id", "image" + i.toString());
            let p = document.createElement("p");
            p.appendChild(img);
            for (let k = 0; k < allQueens.length; k++) {
                let option = document.createElement("option");
                option.innerHTML = allQueens[k].getName();
                option.value = allQueens[k].image;
                select.add(option);
            }
            select.selectedIndex = randomNumber(0, allQueens.length - 1);
            let br = document.createElement("br");
            castSelection.appendChild(p);
            castSelection.appendChild(select);
            castSelection.appendChild(br);
        }
    setImage();
}
function setImage() {
    let images = document.getElementsByClassName("images");
    for (let i = 0; i < images.length; i++) {
        let img = document.getElementById("image" + i.toString());
        let select = document.getElementById(i.toString());
        img.src = select.options[select.selectedIndex].value;
    }
}
let top3 = false;
let top4 = false;
let all_stars = false;
let lipsync_assassin = false;
let team = false;
function predefCast(cast, format, premiere = '', returning = '') {
    currentCast = cast;
    totalCastSize = cast.length;
    if (format == "top3")
        top3 = true;
    else if (format == "top4")
        top4 = true;
    else if (format == "all-stars")
        all_stars = true;
    else if (format == "team")
        team = true;
    else if (format == "lipsync-assassin") {
        lipsync_assassin = true;
        allQueens = allQueens.filter(function (queen) { return queen.getLipSyncStat() >= 9; });
        allQueens = allQueens.filter(function (queen) { return currentCast.indexOf(queen) == -1; });
    }
    if (premiere == "s6-premiere")
        s6Premiere = true;
    else if (premiere == "s12-premiere")
        s12Premiere = true;
    else if (premiere == "porkchop")
        porkchopPremiere = true;
    if (returning == "return")
        randomReturn = true;
    else if (returning == "vote")
        voteReturn = true;
    else if (returning == "smackdown")
        smackdown = true;
    if (document.getElementById("disableDouble").checked == true)
        noDouble = true;
    if (s6Premiere || s12Premiere)
        doublePremiere();
    else if (porkchopPremiere)
        porkchopLipsyncs();
    else
        newEpisode();
}
function startSimulation(challenge = "") {
    //get selected names and compare them to the all queens list:
    for (let i = 0; i < document.getElementsByClassName("queenList").length; i++) {
        let select = document.getElementById(i.toString());
        let value = select.options[select.selectedIndex].text;
        for (let k = 0; k < allQueens.length; k++) {
            if (value == allQueens[k].getName())
                currentCast.push(allQueens[k]);
        }
    }
    if (currentCast.length == 0)
        window.alert("Your cast is empty!");
    else if (duplicateQueens(currentCast))
        window.alert("Please, only use one of each queen on your cast!");
    else {
        let select = document.getElementById("format");
        let select2 = document.getElementById("premiere-format");
        let select3 = document.getElementById("returning");
        if (select.options[select.selectedIndex].value == "top3")
            top3 = true;
        else if (select.options[select.selectedIndex].value == "top4")
            top4 = true;
        else if (select.options[select.selectedIndex].value == "all-stars")
            all_stars = true;
        else if (select.options[select.selectedIndex].value == "team")
            team = true;
        else if (select.options[select.selectedIndex].value == "lipsync-assassin") {
            lipsync_assassin = true;
            allQueens = allQueens.filter(function (queen) { return queen.getLipSyncStat() >= 8; });
            allQueens = allQueens.filter(function (queen) { return currentCast.indexOf(queen) == -1; });
            allQueensCopy = [...allQueens];
        }
        if (select2.options[select2.selectedIndex].value == "s6-premiere")
            s6Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "s12-premiere")
            s12Premiere = true;
        else if (select2.options[select2.selectedIndex].value == "porkchop")
            porkchopPremiere = true;
        if (select3.options[select3.selectedIndex].value == "random")
            randomReturn = true;
        else if (select3.options[select3.selectedIndex].value == "votes")
            voteReturn = true;
        else if (select3.options[select3.selectedIndex].value == "rurupalooza")
            rurupalooza = true;
        else if (select3.options[select3.selectedIndex].value == "smackdown")
            smackdown = true;
        if (document.getElementById("disableDouble").checked == true)
            noDouble = true;
        if (currentCast.length == 3 && top4 || currentCast.length == 3 && all_stars) {
            window.alert("Lip-Sync For The Crown and All Star formats needs at least 4 queens!");
            top4 = false;
            all_stars = false;
            currentCast = [];
        }
        else if (team == true && currentCast.length % 2 !== 0) {
            window.alert("The team format needs an even amout of queens!");
            currentCast = [];
            team = false;
        }
        else if ((s6Premiere || s12Premiere || porkchopPremiere) && currentCast.length < 10) {
            window.alert("Double Premiere formats needs at least 10 queens!");
            s6Premiere = false;
            s12Premiere = false;
            porkchopPremiere = false;
            top4 = false;
            top3 = false;
            lipsync_assassin = false;
            all_stars = false;
            currentCast = [];
        }
        else if (team && (smackdown || voteReturn || randomReturn || s6Premiere || rurupalooza || s12Premiere || porkchopPremiere)) {
            window.alert("The team format isn't supported with any special premiere or returning formats, sorry!");
            team = false;
            smackdown = false;
            voteReturn = true;
            randomReturn = true;
            rurupalooza = false;
            s6Premiere = false;
            s12Premiere = false;
            porkchopPremiere = false;
        }
        else if (s6Premiere || s12Premiere) {
            doublePremiere();
        }
        else if (porkchopPremiere) {
            porkchopLipsyncs();
        }
        else {
            newEpisode();
        }
    }
}
//see if there is two of the same queens:
function duplicateQueens(cast) {
    let valuesAlreadySeen = [];
    for (let i = 0; i < cast.length; i++) {
        let value = cast[i];
        if (valuesAlreadySeen.indexOf(value) !== -1) {
            currentCast = [];
            return true;
        }
        valuesAlreadySeen.push(value);
    }
    return false;
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
function judging() {
    if ((s12Premiere || porkchopPremiere) && premiereCounter <= 2) {
        //add 2 queens to the top and the rest is safe
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        for (let i = 0; i < currentCast.length; i++) {
            if (topQueens.indexOf(currentCast[i]) == -1)
                currentCast[i].addToTrackRecord("SAFE");
        }
        doublePremiereJudging();
    }
    else if (currentCast.length > 5 && team) {
        //add 2 teams to the top and 3 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        bottomQueens.push(currentCast[currentCast.length - 3]);
        judgingScreen();
    }
    else if (currentCast.length == 5 && team) {
        //add 2 teams to the top and 3 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        bottomQueens.push(currentCast[currentCast.length - 3]);
        teamWinAndBtm2();
    }
    else if (currentCast.length == 4 && team) {
        //add 2 teams to the top and 2 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        teamWinAndBtm2();
    }
    else if (currentCast.length == 3 && team) {
        //add 1 team to the top and 2 teams to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        bottomQueens.push(currentCast[currentCast.length - 1]);
        bottomQueens.push(currentCast[currentCast.length - 2]);
        teamWinAndBtm2();
    }
    else if (currentCast.length > 13) {
        //add 4 queens to the top and 4 queens to the bottom
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 4; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingScreen();
    }
    else if (currentCast.length > 6) {
        //add first 3 queens to the top and last 3 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        judgingScreen();
    }
    else if (currentCast.length <= 6 && lipsync_assassin) {
        //add 1 queen to the top and the rest to the btm
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        for (let i = 0; i < currentCast.length; i++) {
            if (topQueens.indexOf(currentCast[i]) == -1) {
                bottomQueens.push(currentCast[i]);
            }
        }
        topAndBtm();
    }
    else if (currentCast.length == 6) {
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        for (let i = 0; i < 3; i++) {
            topQueens.push(currentCast[i]);
            bottomQueens.push(currentCast[currentCast.length - (i + 1)]);
        }
        if (top3 || top4)
            winAndBtm2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
    else if (currentCast.length == 5) {
        //add first 2 queens to the top and last 3 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        if (currentCast[2].performanceScore >= 6 && currentCast[2].performanceScore < 16 && !all_stars)
            topQueens.push(currentCast[2]);
        else
            bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        bottomQueens.push(currentCast[4]);
        if (top3 || top4)
            winAndBtm2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
    else if (currentCast.length == 4) {
        //add first 2 queens to the top and last 2 queens to the bottom:
        currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
        topQueens.push(currentCast[0]);
        topQueens.push(currentCast[1]);
        bottomQueens.push(currentCast[2]);
        bottomQueens.push(currentCast[3]);
        if (top3 || top4)
            winAndBtm2();
        else if (all_stars)
            top2AndBtm();
        else if (lipsync_assassin)
            topAndBtm();
    }
}
function judgingScreen() {
    let judgingScreen = new Scene();
    judgingScreen.clean();
    judgingScreen.createHeader("Judging!");
    judgingScreen.createBold("Based on tonight's performances...");
    if (team == true) {
        judgingScreen.createImage(topQueens[0].image, "cyan");
        judgingScreen.createImage(topQueens[1].image, "cyan");
        judgingScreen.createImage(bottomQueens[0].image, "cyan");
        judgingScreen.createImage(bottomQueens[1].image, "cyan");
        judgingScreen.createImage(bottomQueens[2].image, "cyan");
        judgingScreen.createBold(`${topQueens[0].getName()}, ${topQueens[1].getName()}, ${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, ${bottomQueens[2].getName()}, you represent the tops and bottoms of the week ;)`);
    }
    else {
        for (let i = 0; i < topQueens.length; i++) {
            judgingScreen.createImage(topQueens[i].image, "cyan");
            judgingScreen.createImage(bottomQueens[i].image, "cyan");
        }
        judgingScreen.createBold("", "judged");
        let judged = document.getElementById("judged");
        for (let i = 0; i < topQueens.length; i++) {
            judged.innerHTML += `${topQueens[i].getName()}, `;
            judged.innerHTML += `${bottomQueens[i].getName()}, `;
        }
        judged.innerHTML += "you represent the tops and bottoms of the week ;)";
    }
    judgingScreen.createHorizontalLine();
    judgingScreen.createParagraph("", "safeQueens");
    let safeQueens = document.querySelector("p#safeQueens");
    //check if the queen is in the top or in the bottom, and if not put her as safe:
    for (let i = 0; i < currentCast.length; i++)
        if (topQueens.indexOf(currentCast[i]) == -1 && bottomQueens.indexOf(currentCast[i]) == -1) {
            safeQueens.innerHTML += currentCast[i].getName() + ", ";
            if (team == false)
                currentCast[i].addToTrackRecord("SAFE");
            if (team == true) {
                currentCast[i].QueenA.addToTrackRecord("SAFE");
                currentCast[i].QueenB.addToTrackRecord("SAFE");
            }
        }
    safeQueens.innerHTML += "you are safe.";
    if (top3 || top4)
        judgingScreen.createButton("Proceed", "winAndBtm2()");
    else if (all_stars)
        judgingScreen.createButton("Proceed", "top2AndBtm()");
    else if (lipsync_assassin)
        judgingScreen.createButton("Proceed", "topAndBtm()");
    else if (team)
        judgingScreen.createButton("Proceed", "teamWinAndBtm2()");
}
function winAndBtm2() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my girls!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    //double win:
    if (topQueens[0].performanceScore == topQueens[1].performanceScore && randomNumber(0, 100) < 60) {
        topQueens[0].addToTrackRecord(" WIN");
        topQueens[0].favoritism += 5;
        topQueens[1].addToTrackRecord(" WIN");
        topQueens[1].favoritism += 5;
        screen.createImage(topQueens[0].image, "darkblue");
        screen.createImage(topQueens[1].image, "darkblue");
        screen.createBold(topQueens[0].getName() + ", " + topQueens[1].getName() + ", condragulations, you're the winners of today's challenge!");
        topQueens.splice(0, 2);
    }
    else {
        topQueens[0].addToTrackRecord("WIN");
        topQueens[0].favoritism += 5;
        screen.createImage(topQueens[0].image, "royalblue");
        screen.createBold(topQueens[0].getName() + ", condragulations, you're the winner of today's challenge!");
        topQueens.splice(0, 1);
    }
    if (topQueens.length > 0) {
        for (let i = 0; i < topQueens.length; i++) {
            screen.createImage(topQueens[i].image, "lightblue");
            topQueens[i].addToTrackRecord("HIGH");
        }
        screen.createParagraph("", "highs");
        let highs = document.getElementById("highs");
        for (let i = 0; i < topQueens.length; i++)
            highs.innerHTML += `${topQueens[i].getName()}, `;
        highs.innerHTML += "good job this week, you're safe.";
    }
    screen.createHorizontalLine();
    if (bottomQueens.length >= 3) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createParagraph("", "bottom3");
        let bottom3 = document.getElementById("bottom3");
        for (let i = 0; i < bottomQueens.length; i++)
            bottom3.innerHTML += bottomQueens[i].getName() + ", ";
        bottom3.innerHTML += "you're the bottoms of the week...";
    }
    //do the same, but for the bottom queens:
    if (bottomQueens.length == 4) {
        for (let i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].addToTrackRecord("LOW");
        bottomQueens[1].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createImage(bottomQueens[1].image, "pink");
        screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens[1].unfavoritism += 1;
        bottomQueens.splice(0, 2);
    }
    else if (bottomQueens.length == 3) {
        for (let i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens.splice(0, 1);
    }
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "btm2");
    let btm2 = document.getElementById("btm2");
    for (let i = 0; i < bottomQueens.length; i++) {
        btm2.innerHTML += bottomQueens[i].getName() + ", ";
    }
    btm2.innerHTML += "I'm sorry my dears but you are up for elimination.";
    screen.createButton("Proceed", "lipSync()");
}
function teamWinAndBtm2() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    topQueens[0].QueenA.addToTrackRecord("WIN");
    topQueens[0].QueenB.addToTrackRecord("WIN");
    topQueens[0].favoritism += 5;
    screen.createBold(topQueens[0].getName() + ", condragulations you're the winners of this week's challenge!");
    if (topQueens.length > 1) {
        topQueens[1].QueenA.addToTrackRecord("HIGH");
        topQueens[1].QueenB.addToTrackRecord("HIGH");
        screen.createParagraph(topQueens[1].getName() + ", good work this week, you're safe.");
    }
    screen.createHorizontalLine();
    if (bottomQueens.length > 2) {
        screen.createParagraph(`${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, ${bottomQueens[2].getName()}, you're the bottoms of the week...`);
        for (let i = 0; i < topQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].QueenA.addToTrackRecord("LOW");
        bottomQueens[0].QueenB.addToTrackRecord("LOW");
        bottomQueens[0].unfavoritism += 1;
        screen.createBold(bottomQueens[0].getName() + ", you are safe.");
        bottomQueens.splice(0, 1);
    }
    screen.createBold(`${bottomQueens[0].getName()}, ${bottomQueens[1].getName()}, I'm sorry my dears but you are up for elimination.`);
    screen.createButton("Proceed", "teamLipSync()");
}
function top2AndBtm() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    top2.push(topQueens[0]);
    top2.push(topQueens[1]);
    topQueens.splice(0, 2);
    screen.createImage(top2[0].image, "cyan");
    screen.createImage(top2[1].image, "cyan");
    screen.createBold(top2[0].getName() + ", " + top2[1].getName() + ", condragulations, you're the Top 2 of the week!");
    for (let i = 0; i < topQueens.length; i++)
        screen.createImage(topQueens[i].image, "lightblue");
    screen.createParagraph("", "highs");
    let highs = document.querySelector("p#highs");
    for (let i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createBold("", "bottoms");
    let bottoms = document.querySelector("b#bottoms");
    for (let i = 0; i < bottomQueens.length; i++) {
        bottoms.innerHTML += bottomQueens[i].getName() + ", ";
    }
    bottoms.innerHTML += "I'm sorry my dears but you're the bottoms of the week.";
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens[i].performanceScore >= 6 && bottomQueens[i].performanceScore < 16) {
            screen.createImage(bottomQueens[i].image, "pink");
            screen.createParagraph(bottomQueens[i].getName() + ", you are safe.");
            bottomQueens[i].addToTrackRecord("LOW");
            bottomQueens.splice(bottomQueens.indexOf(bottomQueens[i]), 1);
            screen.createImage(bottomQueens[0].image, "tomato");
            screen.createImage(bottomQueens[1].image, "tomato");
            screen.createBold(bottomQueens[0].getName() + ", " + bottomQueens[1].getName() + ", you're up for elimination.");
            break;
        }
    }
    screen.createHorizontalLine();
    screen.createBigText("After deliberation...");
    for (let i = 0; i < top2.length; i++) {
        if (randomNumber(0, 100) <= 45 && currentCast.length <= totalCastSize - 2)
            top2[i].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
        else
            top2[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
        screen.createImage(top2[i].image, "cyan");
        screen.createImage(top2[i].lipstick.image, "red");
        screen.createBold(top2[i].getName() + " chose " + top2[i].lipstick.getName() + "'s lipstick!");
    }
    screen.createButton("Proceed", "asLipSync()");
}
function topAndBtm() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Bring back my All Stars!");
    screen.createBold("Ladies, I've made some decisions...");
    //sort the top queens now taking runway and favoritism in consideration:
    for (let i = 0; i < topQueens.length; i++)
        topQueens[i].performanceScore -= (topQueens[i].runwayScore - topQueens[i].favoritism);
    topQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
    top2.push(topQueens[0]);
    top2[0].favoritism += 5;
    topQueens.splice(0, 1);
    screen.createImage(top2[0].image, "royalblue");
    screen.createBold(top2[0].getName() + ", condragulations, you're the Top All Star of the week!");
    for (let i = 0; i < topQueens.length; i++)
        screen.createImage(topQueens[i].image, "lightblue");
    screen.createParagraph("", "highs");
    let highs = document.querySelector("p#highs");
    for (let i = 0; i < topQueens.length; i++) {
        highs.innerHTML += topQueens[i].getName() + ", ";
        topQueens[i].addToTrackRecord("HIGH");
    }
    if (topQueens.length > 0)
        highs.innerHTML += "good work this week, you're safe.";
    screen.createHorizontalLine();
    ;
    if (currentCast.length > 6) {
        for (let i = 0; i < bottomQueens.length; i++)
            screen.createImage(bottomQueens[i].image, "tomato");
        screen.createBold("", "bottoms");
        let bottoms = document.querySelector("b#bottoms");
        for (let i = 0; i < bottomQueens.length; i++) {
            bottoms.innerHTML += bottomQueens[i].getName() + ", ";
        }
        bottoms.innerHTML += "I'm sorry my dears but you're the bottoms of the week ;)";
        for (let i = 0; i < bottomQueens.length; i++)
            bottomQueens[i].performanceScore -= (bottomQueens[i].runwayScore - bottomQueens[i].favoritism);
        bottomQueens.sort((a, b) => (a.performanceScore - b.performanceScore));
        bottomQueens[0].addToTrackRecord("LOW");
        screen.createImage(bottomQueens[0].image, "pink");
        screen.createBold(bottomQueens[0].getName() + "... you are safe.");
        bottomQueens[0].unfavoritism += 1;
        bottomQueens.splice(0, 1);
    }
    for (let i = 0; i < bottomQueens.length; i++)
        screen.createImage(bottomQueens[i].image, "tomato");
    screen.createParagraph("", "btms");
    let btms = document.getElementById("btms");
    for (let i = 0; i < bottomQueens.length; i++)
        btms.innerHTML += `${bottomQueens[i].getName()}, `;
    btms.innerHTML += ", you're up for elimination.";
    screen.createHorizontalLine();
    screen.createBigText("After deliberation...");
    if (randomNumber(0, 100) <= 45 && currentCast.length <= totalCastSize - 2)
        top2[0].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
    else
        top2[0].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
    screen.createImage(top2[0].image, "cyan");
    screen.createImage(top2[0].lipstick.image, "red");
    screen.createBold(top2[0].getName() + " chose " + top2[0].lipstick.getName() + "'s lipstick!");
    screen.createHorizontalLine();
    screen.createBigText("The queens vote...");
    for (let i = 0; i < currentCast.length; i++) {
        if (top2.indexOf(currentCast[i]) == -1) {
            if (randomNumber(0, 100) <= 15 && currentCast.length > 6 && bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0] != currentCast[i] && currentCast.length <= totalCastSize - 2)
                currentCast[i].lipstick = bottomQueens.sort((a, b) => b.unfavoritism - a.unfavoritism)[0];
            else
                currentCast[i].lipstick = bottomQueens[randomNumber(0, bottomQueens.length - 1)];
            screen.createBold(currentCast[i].getName() + " voted for " + currentCast[i].lipstick.getName() + "!");
            currentCast[i].lipstick.votes++;
        }
    }
    screen.createHorizontalLine();
    for (let i = 0; i < bottomQueens.length; i++) {
        screen.createImage(bottomQueens[i].image, "red");
        screen.createBold(bottomQueens[i].getName() + ": " + bottomQueens[i].votes.toString() + " votes");
    }
    bottomQueens.sort((a, b) => b.votes - a.votes);
    screen.createButton("Proceed", "lsaLipSync()");
}
function lipSync() {
    for (let i = 0; i < bottomQueens.length; i++) {
        bottomQueens[i].getLipsync();
    }
    bottomQueens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your lives! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("I've made my decision.");
    let score1 = bottomQueens[0].lipsyncScore - bottomQueens[0].favoritism + bottomQueens[0].unfavoritism;
    let score2 = bottomQueens[1].lipsyncScore - bottomQueens[0].favoritism + bottomQueens[0].unfavoritism;
    let myRandomNumber = randomNumber(0, 1000);
    if (score1 > 7 && score2 > 7 && randomNumber(0, 100) <= 50 && !doubleShantay && noDouble == false && currentCast.length > 5) {
        screen.createImage(bottomQueens[0].image, "magenta");
        screen.createImage(bottomQueens[1].image, "magenta");
        screen.createBold("Condragulations, shantay you both stay!!");
        bottomQueens[0].addToTrackRecord("BTM2");
        bottomQueens[0].unfavoritism += 5;
        bottomQueens[1].addToTrackRecord("BTM2");
        bottomQueens[1].unfavoritism += 5;
        doubleShantay = true;
    }
    else if (score1 < 4 && score2 < 4 && randomNumber(0, 100) <= 10 && !doubleSashay && currentCast.length > 5 && noDouble == false) {
        screen.createImage(bottomQueens[0].image, "darkred");
        screen.createImage(bottomQueens[1].image, "darkred");
        screen.createBold("I'm sorry but none of you showed the fire it takes to stay. You must both... sashay away.");
        doubleSashay = true;
        bottomQueens[0].addToTrackRecord("ELIM");
        eliminatedCast.unshift(bottomQueens[0]);
        currentCast.splice(currentCast.indexOf(bottomQueens[0]), 1);
        bottomQueens[1].addToTrackRecord("ELIM");
        eliminatedCast.unshift(bottomQueens[1]);
        currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    }
    else if (myRandomNumber >= 900) {
        let disqualifiedQueen = currentCast[randomNumber(0, currentCast.length - 1)];
        let clartedQueen = currentCast[randomNumber(0, currentCast.length - 1)];
        let reason = 'ERROR: REASON NOT DEFINED';
        let disqualificationReason = randomNumber(0, 12);
        if (disqualificationReason === 0) {
            if (disqualifiedQueen['_name'] === clartedQueen['_name']) {
                reason = 'clarted RuPaul.';
            } else {
                reason = 'clarted '+clartedQueen['_name']+'!';
            }
        } else if (disqualificationReason === 1) {
            reason = 'shagged Michelle Visache!';
        } else if (disqualificationReason === 2) {
            reason = 'stabbed Sister Sister!';
        } else if (disqualificationReason === 3) {
            reason = 'let out a big shart during your latest performance and it stank out the whole studio!';
        } else if (disqualificationReason === 4) {
            reason = 'slept with RuPaul, you slag.';
        } else if (disqualificationReason === 5) {
            reason = 'called '+clartedQueen['_name']+' a slag, then pissed in their mouth!';
        } else if (disqualificationReason === 6) {
            reason = 'worshiped Satan.';
        } else if (disqualificationReason === 7) {
            if (disqualifiedQueen['_name'] === clartedQueen['_name']) {
                reason = 'shit in RuPaul\'s changing room, you fucking dick.';
            } else {
                reason = 'shit in '+clartedQueen['_name']+'\'s changing room, you fucking dick.';
            }
        } else if (disqualificationReason === 8) {
            reason = 'killed The Vivienne, you\'re under arrest.';
        } else if (disqualificationReason === 9) {
            reason = 'performed whilst on ten kilograms of industrial grade ketamine, then danced around naked selling cocaine to the judges.';
        } else if (disqualificationReason === 10) {
            if (disqualifiedQueen['_name'] === clartedQueen['_name']) {
                reason = 'flashed your stinky hole to RuPaul.';
            } else {
                reason = 'flashed your stinky hole to '+clartedQueen['_name']+'.';
            }
        } else if (disqualificationReason === 11) {
            reason = 'prolapsed on stage.';
        } else if (disqualificationReason === 12) {
            reason = 'got discharge all over the stage which cost £10,000 in clean up costs.';
        } else if (disqualificationReason === 13) {
            if (disqualifiedQueen['_name'] === clartedQueen['_name']) {
                reason = 'called RuPaul a great supine protoplasmic invertebrate jelly!';
            } else {
                reason = 'called '+clartedQueen['_name']+' a great supine protoplasmic invertebrate jelly!';
            }
        }
        screen.createBold(disqualifiedQueen.getName() + ", it has come to my attention that you have broken the rules of this competition. The evidence says that you "+reason+" I must ask you to sashay away.");
        bottomQueens[0].addToTrackRecord("BTM2");
        bottomQueens[0].unfavoritism += 5;
        bottomQueens[1].addToTrackRecord("BTM2");
        bottomQueens[1].unfavoritism += 5;
        disqualifiedQueen.trackRecord.pop();
        disqualifiedQueen.addToTrackRecord("DISQ");
        eliminatedCast.unshift(disqualifiedQueen);
        currentCast.splice(currentCast.indexOf(disqualifiedQueen), 1);
    }
    else {
        screen.createImage(bottomQueens[0].image, "tomato");
        screen.createBold(bottomQueens[0].getName() + ", shantay you stay.");
        bottomQueens[0].addToTrackRecord("BTM2");
        bottomQueens[0].unfavoritism += 3;
        screen.createImage(bottomQueens[1].image, "red");
        screen.createBold(bottomQueens[1].getName() + ", sashay away...");
        bottomQueens[1].addToTrackRecord("ELIM");
        eliminatedCast.unshift(bottomQueens[1]);
        currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    }
    if (myRandomNumber <= 100) {
        returningQueenScreen();
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere) == true && premiereCounter < 3) {
        screen.createButton("Proceed", "doublePremiere()");
    }
    screen.createButton("Proceed", "newEpisode()");
}
function teamLipSync() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your lives! Good luck and don't fuck it up.");
    if (randomNumber(0, 100) <= 50)
        bottomQueens[0].lipsyncQueen = bottomQueens[0].QueenA;
    else
        bottomQueens[0].lipsyncQueen = bottomQueens[0].QueenB;
    if (randomNumber(0, 100) <= 50)
        bottomQueens[1].lipsyncQueen = bottomQueens[1].QueenA;
    else
        bottomQueens[1].lipsyncQueen = bottomQueens[1].QueenB;
    screen.createImage(bottomQueens[0].lipsyncQueen.image);
    screen.createImage(bottomQueens[1].lipsyncQueen.image);
    screen.createBold(`[${bottomQueens[0].lipsyncQueen.getName()} and ${bottomQueens[1].lipsyncQueen.getName()} will be lip-syncing]`);
    lsSong();
    bottomQueens[0].lipsyncQueen.getLipsync();
    bottomQueens[1].lipsyncQueen.getLipsync();
    bottomQueens.sort((a, b) => (a.lipsyncQueen.lipsyncScore - a.favoritism + a.unfavoritism) - (b.lipsyncQueen.lipsyncScore - b.favoritism + b.unfavoritism));
    screen.createHorizontalLine();
    screen.createImage(bottomQueens[0].lipsyncQueen.image, "pink");
    screen.createBold(bottomQueens[0].lipsyncQueen.getName() + ", shantay you stay.");
    screen.createImage(bottomQueens[1].lipsyncQueen.image, "red");
    screen.createBold(bottomQueens[1].lipsyncQueen.getName() + ", you will always be an All Star, now, sashay away...");
    bottomQueens[0].QueenA.addToTrackRecord("BTM2");
    bottomQueens[0].QueenB.addToTrackRecord("BTM2");
    bottomQueens[0].unfavoritism += 3;
    bottomQueens[1].QueenA.addToTrackRecord("ELIM");
    bottomQueens[1].QueenB.addToTrackRecord("ELIM");
    eliminatedCast.unshift(bottomQueens[1].QueenA);
    eliminatedCast.unshift(bottomQueens[1].QueenB);
    currentCast.splice(currentCast.indexOf(bottomQueens[1]), 1);
    if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function asLipSync() {
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time...");
    screen.createBold("For you to lip-sync... for your legacy! Good luck, and don't fuck it up.");
    lsSong();
    screen.createHorizontalLine();
    screen.createBold("Ladies, I've made my decision...");
    if (top2[0].lipsyncScore == top2[1].lipsyncScore && top2[0].lipsyncScore > 7 && top2[1].lipsyncScore > 7 && currentCast.length > 5) {
        screen.createImage(top2[0].image, "darkblue");
        screen.createImage(top2[1].image, "darkblue");
        screen.createBold("Condragulations, you're both winners baby!");
        top2[0].favoritism += 5;
        top2[1].favoritism += 5;
        top2[0].addToTrackRecord(" WIN");
        top2[1].addToTrackRecord(" WIN");
        screen.createHorizontalLine();
        if (top2[0].lipstick == top2[1].lipstick) {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createBold(`${top2[0].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
            top2[0].lipstick.addToTrackRecord("ELIM");
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
        }
        else {
            screen.createImage(top2[0].lipstick.image, "red");
            screen.createImage(top2[1].lipstick.image, "red");
            screen.createBold(`${top2[0].lipstick.getName()}, ${top2[1].lipstick.getName()}, you will always be an All Star, now, sashay away...`);
            top2[0].lipstick.addToTrackRecord("ELIM");
            eliminatedCast.unshift(top2[0].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
            top2[1].lipstick.addToTrackRecord("ELIM");
            eliminatedCast.unshift(top2[1].lipstick);
            bottomQueens.splice(bottomQueens.indexOf(top2[1].lipstick), 1);
            currentCast.splice(currentCast.indexOf(top2[1].lipstick), 1);
        }
    }
    else {
        top2[0].favoritism += 5;
        top2[0].addToTrackRecord("WIN");
        screen.createImage(top2[0].image, "royalblue");
        screen.createBold(top2[0].getName() + ", you're a winner, baby!");
        top2[1].addToTrackRecord("TOP2");
        top2[1].favoritism += 4;
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", you are safe.");
        screen.createHorizontalLine();
        screen.createImage(top2[0].lipstick.image, "red");
        screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
        top2[0].lipstick.addToTrackRecord("ELIM");
        eliminatedCast.unshift(top2[0].lipstick);
        bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
        currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
    }
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 3;
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
function lsaLipSync() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("It's time to ruveal...");
    let assassin = allQueens[randomNumber(0, allQueens.length - 1)];
    bottomQueens.sort((a, b) => b.votes - a.votes);
    assassin.lipstick = bottomQueens[0];
    top2.push(assassin);
    screen.createImage(assassin.image, "royalblue");
    screen.createBold("The lip-sync assassin is... " + assassin.getName() + "!");
    screen.createParagraph("Now, it's time for you to lip-sync... for your legacy!");
    lsSong();
    screen.createHorizontalLine();
    for (let i = 0; i < top2.length; i++) {
        top2[i].getASLipsync();
    }
    assassin.lipsyncScore -= 3;
    top2.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    screen.createImage(top2[0].image, "darkblue");
    screen.createBold(top2[0].getName() + ", you're a winner baby!");
    if (top2[0] == assassin) {
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", you're safe.");
        top2[1].addToTrackRecord("WIN ");
    }
    else {
        screen.createImage(top2[1].image, "cyan");
        screen.createParagraph(top2[1].getName() + ", thanks for participating.");
        top2[0].addToTrackRecord("WIN");
    }
    allQueens.splice(allQueens.indexOf(assassin), 1);
    screen.createHorizontalLine();
    screen.createImage(top2[0].lipstick.image, "red");
    screen.createBold(top2[0].lipstick.getName() + ", you will always be an All Star, now, sashay away...");
    top2[0].lipstick.addToTrackRecord("ELIM");
    eliminatedCast.unshift(top2[0].lipstick);
    bottomQueens.splice(bottomQueens.indexOf(top2[0].lipstick), 1);
    currentCast.splice(currentCast.indexOf(top2[0].lipstick), 1);
    for (let i = 0; i < bottomQueens.length; i++) {
        if (bottomQueens.length == 4)
            bottomQueens[i].addToTrackRecord("BTM5");
        else if (bottomQueens.length == 3)
            bottomQueens[i].addToTrackRecord("BTM4");
        else if (bottomQueens.length == 2)
            bottomQueens[i].addToTrackRecord("BTM3");
        else
            bottomQueens[i].addToTrackRecord("BTM2");
        bottomQueens[i].unfavoritism += 2;
        bottomQueens[i].votes = 0;
    }
    if ((s6Premiere || s12Premiere || porkchopPremiere) == true && premiereCounter < 3)
        screen.createButton("Proceed", "doublePremiere()");
    else if (CheckForReturning() == true)
        screen.createButton("Proceed", "returningQueenScreen()");
    else
        screen.createButton("Proceed", "newEpisode()");
}
class Queen {
    constructor(name, acting, comedy, dance, design, improv, runway, lipsync, image = "noimage") {
        this.trackRecord = [];
        this.runwayScore = 0;
        this.lipsyncScore = 0;
        this.performanceScore = 0;
        this.finaleScore = 0;
        this.winCount = 0;
        this.favoritism = 0;
        this.unfavoritism = 0;
        this.votes = 0;
        this._name = name;
        this._actingStat = acting;
        this._comedyStat = comedy;
        this._danceStat = dance;
        this._designStat = design;
        this._improvStat = improv;
        this._runwayStat = runway;
        this._lipsyncStat = lipsync;
        if (image == "noimage")
            this.image = "image/queens/noimage.jpg";
        else
            this.image = "image/queens/" + image + ".webp";
    }
    _calculateScores(min, max, stat = 0) {
        let score = randomNumber(min, max);
        return score - stat;
    }
    getName() {
        return this._name;
    }
    getLipSyncStat() {
        return this._lipsyncStat;
    }
    getActing() {
        this.performanceScore = this._calculateScores(15, 35, this._actingStat);
    }
    getComedy() {
        this.performanceScore = this._calculateScores(15, 35, this._comedyStat);
    }
    getDance() {
        this.performanceScore = this._calculateScores(15, 35, this._danceStat);
    }
    getDesign() {
        this.performanceScore = this._calculateScores(15, 35, this._designStat);
    }
    getImprov() {
        this.performanceScore = this._calculateScores(15, 35, this._improvStat);
    }
    //special 'gets':
    getSnatch() {
        this.performanceScore = this._calculateScores(25, 45, this._improvStat + this._comedyStat);
    }
    getRusical() {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._lipsyncStat);
    }
    getBall() {
        this.performanceScore = this._calculateScores(25, 45, this._designStat + this._runwayStat);
    }
    getRumix() {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._improvStat);
    }
    getTalentShow() {
        this.performanceScore = this._calculateScores(40, 70, this._actingStat + this._comedyStat + this._danceStat + this._designStat + this._improvStat + this._lipsyncStat);
    }
    getFinale() {
        this.finaleScore = this.favoritism - this.unfavoritism;
    }
    getRunway() {
        this.runwayScore = this._calculateScores(12, 35, this._runwayStat);
    }
    getLipsync() {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat, this.unfavoritism) + this.favoritism;
    }
    getASLipsync() {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat);
    }
    addToTrackRecord(placement) {
        this.trackRecord.push(placement);
    }
}
//QUEENS:
//B13NORMAL
let lewis = new Queen("Lewis", 5, 8, 3, 12, 5, 5, 10, "Lewis");
let ben = new Queen("Ben", 2, 8, 2, 2, 8, 3, 6, "Ben");
let elliot = new Queen("Elliot", 10, 12, 8, 6, 6, 10, 10, "Elliot");
let amy = new Queen("Amy", 4, 12, 6, 7, 6, 10, 10, "Amy");
let ella = new Queen("Ella", 12, 6, 10, 10, 4, 8, 10, "Ella");
let emily = new Queen("Emily", 8, 6, 6, 9, 8, 6, 8, "Emily");
let molly = new Queen("Molly", 12, 6, 6, 9, 2, 10, 6, "Molly");
let hamish = new Queen("Hamish", 2, 2, 2, 2, 2, 2, 2, "Hamish");
let bethany = new Queen("Bethany", 10, 2, 12, 12, 3, 4, 6, "Bethany");
let alex = new Queen("Alex", 12, 8, 10, 6, 4, 5, 8, "Alex");
let harvey = new Queen("Harvey", 2, 8, 4, 3, 9, 5, 4, "Harvey");
let ruben = new Queen("Ruben", 8, 10, 2, 2, 6, 3, 6, "Ruben");
let gameB13normal = [lewis,ben,elliot,amy,ella,emily,molly,hamish,bethany,alex,harvey,ruben];
let gameTrematon = [lewis,ben,elliot,amy,ella,emily];
//B13DRAG:
let millburner = new Queen("Mill Burner", 5, 8, 3, 12, 5, 5, 10, "Mill Burner");
let bendover = new Queen("Ben Dover", 2, 8, 2, 2, 8, 3, 6, "Ben Dover");
let pennyrolls = new Queen("Penny Rolls", 10, 12, 8, 6, 6, 10, 10, "Penny Rolls");
let pussyclart = new Queen("PussyClart", 4, 12, 6, 7, 6, 10, 10, "PussyClart");
let ellavatit = new Queen("Ella VaTit", 12, 6, 10, 10, 4, 8, 10, "Ella VaTit");
let cheallywinks = new Queen("Cheally Winks", 8, 6, 6, 9, 8, 6, 8, "Cheally Winks");
let gingersparks = new Queen("Ginger Sparks", 12, 6, 6, 9, 2, 10, 6, "Ginger Sparks");
let gameB13drag = [millburner,bendover,pennyrolls,pussyclart,ellavatit,cheallywinks,gingersparks];
//CELEB LOVE SHRINE:
let monsieurthomas = new Queen("Monsieur Thomas", 12, 10, 2, 10, 2, 12, 2, "Monsieur Thomas");
let shrek = new Queen("Shrek", 2, 12, 4, 4, 8, 4, 4, "Shrek");
let trinavega = new Queen("Trina Vega", 10, 4, 8, 6, 6, 10, 10, "Trina Vega");
let berniesanders = new Queen("Bernie Sanders", 2, 2, 2, 6, 2, 2, 2, "Bernie Sanders");
let maccapacca = new Queen("Macca Pacca", 12, 6, 11, 10, 4, 8, 10, "Macca Pacca");
let carolebaskin = new Queen("Carole Baskin", 12, 8, 2, 4, 4, 8, 8, "Carole Baskin");
let trishapaytas = new Queen("Trisha Paytas", 12, 12, 12, 12, 12, 12, 12, "Trisha Paytas");
let alisonhammond = new Queen("Alison Hammond", 12, 12, 12, 12, 12, 12, 12, "Alison Hammond");
let globglogabgalab = new Queen("Globglogabgalab", 2, 2, 12, 2, 12, 2, 2, "Globglogabgalab");
let abbyleemiller = new Queen("Abby Lee Miller", 8, 3, 2, 5, 10, 10, 4, "Abby Lee Miller");
let cupcakke = new Queen("CupcakKe", 8, 12, 4, 5, 2, 9, 11, "CupcakKe");
let isaac = new Queen("Isaac", 10, 12, 3, 7, 9, 5, 2, "Isaac");
let tinkywinky = new Queen("Tinky Winky", 6, 12, 12, 9, 6, 10, 4, "Tinky Winky");
let francisbourgeois = new Queen("Francis Bourgeois", 10, 12, 2, 9, 10, 6, 4, "Francis Bourgeois");
let ginalintetti = new Queen("Gina Linetti", 10, 12, 12, 8, 10, 10, 10, "Gina Linetti");
let theresamay = new Queen("Theresa May", 10, 2, 12, 8, 8, 12, 10, "Theresa May");
let borisjohnson = new Queen("Boris Johnson", 6, 12, 2, 8, 2, 4, 6, "Boris Johnson");
let daddypig = new Queen("Daddy Pig", 6, 6, 2, 6, 6, 6, 6, "Daddy Pig");
let lolaskumpy = new Queen("Lola Skumpy", 12, 12, 2, 8, 10, 8, 8, "Lola Skumpy");
let gameCelebrities = [monsieurthomas,shrek,trinavega,berniesanders,maccapacca,carolebaskin,trishapaytas,alisonhammond,globglogabgalab,abbyleemiller,cupcakke,isaac,tinkywinky,francisbourgeois,ginalintetti,theresamay,borisjohnson,daddypig,lolaskumpy];
//SHREK
let shrek2 = new Queen("Shrek", 2, 12, 4, 4, 8, 4, 4, "Shrek");
let lordfarquaad = new Queen("Lord Farquaad", 8, 2, 2, 2, 2, 8, 4, "Lord Farquaad");
let fiona = new Queen("Princess Fiona", 10, 2, 12, 10, 4, 8, 6, "Princess Fiona");
let donkey = new Queen("Donkey", 4, 12, 8, 2, 6, 6, 2, "Donkey");
let kingharold = new Queen("King Harold", 4, 4, 4, 12, 6, 6, 2, "King Harold");
let gingerbreadman = new Queen("Gingerbread Man", 10, 12, 8, 8, 8, 6, 4, "Gingerbread Man");
let queenlillian = new Queen("Queen Lillian", 12, 2, 12, 12, 4, 12, 10, "Queen Lillian");
let dragon = new Queen("Dragon", 2, 2, 2, 2, 2, 2, 2, "Dragon");
let magicmirror = new Queen("Magic Mirror", 12, 12, 2, 10, 8, 2, 8, "Magic Mirror");
let fairygodmother = new Queen("Fairy Godmother", 12, 12, 12, 12, 12, 12, 12, "Fairy Godmother");
let gameShrek = [shrek2,lordfarquaad,fiona,donkey,kingharold,gingerbreadman,queenlillian,dragon,magicmirror,fairygodmother];
//SING
let bigdaddy = new Queen("Big Daddy", 2, 2, 2, 2, 2, 2, 2, "Big Daddy");
let bustermoon = new Queen("Buster Moon", 4, 2, 2, 12, 8, 6, 2, "Buster Moon");
let meena = new Queen("Meena", 2, 10, 2, 6, 2, 10, 4, "Meena");
let gunter = new Queen("Gunter", 6, 12, 12, 10, 2, 8, 8, "Gunter");
let rosita = new Queen("Rosita", 8, 6, 12, 6, 2, 10, 4, "Rosita");
let johnny = new Queen("Johnny", 6, 2, 6, 8, 6, 6, 12, "Johnny");
let ash = new Queen("Ash", 4, 6, 8, 10, 4, 4, 8, "Ash");
let mike = new Queen("Mike", 2, 2, 2, 12, 4, 6, 10, "Mike");
let theqteez = new Queen("The Q-Teez", 4, 2, 12, 12, 8, 8, 12, "The Q-Teez");
let misscrawley = new Queen("Miss Crawley", 10, 10, 10, 4, 6, 12, 12, "Miss Crawley");
let nananoodleman = new Queen("Nana Noodleman", 10, 2, 8, 12, 12, 12, 12, "Nana Noodleman");
let gameSing = [bigdaddy,bustermoon,meena,gunter,rosita,johnny,ash,mike,theqteez,misscrawley,nananoodleman];
//HARRY POTTER
let herminegranger = new Queen("Hermione Granger", 9, 9, 9, 9, 9, 9, 9, "Hermione Granger");
let harrypotter = new Queen("Harry Potter", 10, 10, 10, 10, 10, 10, 10, "Harry Potter");
let lordvoldemort = new Queen("Lord Voldemort", 10, 10, 10, 10, 10, 10, 10, "Lord Voldemort");
let dumbledore = new Queen("Dumbledore", 9, 9, 9, 9, 9, 9, 9, "Dumbledore");
let lunalovegood = new Queen("Luna Lovegood", 9, 9, 9, 9, 9, 9, 9, "Luna Lovegood");
let ronweasley = new Queen("Ron Weasley", 9, 9, 9, 9, 9, 9, 9, "Ron Weasley");
let dracomalfoy = new Queen("Draco Malfoy", 9, 9, 9, 9, 9, 9, 9, "Draco Malfoy");
let hagrid = new Queen("Hagrid", 9, 9, 9, 9, 9, 9, 9, "Hagrid");
let doloresumbridge = new Queen("Dolores Umbridge", 9, 9, 9, 9, 9, 9, 9, "Dolores Umbridge");
let severussnape = new Queen("Severus Snape", 9, 9, 9, 9, 9, 9, 9, "Severus Snape");
let bellatrixlestrange = new Queen("Bellatrix Lestrange", 9, 9, 9, 9, 9, 9, 9, "Bellatrix Lestrange");
let dobby = new Queen("Dobby", 9, 9, 9, 9, 9, 9, 9, "Dobby");
let nevillelongbottom = new Queen("Neville Longbottom", 9, 9, 9, 9, 9, 9, 9, "Neville Longbottom");
let minervamcgonagall = new Queen("Minerva McGonagall", 9, 9, 9, 9, 9, 9, 9, "Minerva McGonagall");
let fredweasley = new Queen("Fred Weasley", 9, 9, 9, 9, 9, 9, 9, "Fred Weasley");
let georgeweasley = new Queen("George Weasley", 9, 9, 9, 9, 9, 9, 9, "George Weasley");
let gameHarryPotter = [herminegranger,harrypotter,lordvoldemort,dumbledore,lunalovegood,ronweasley,dracomalfoy,hagrid,doloresumbridge,severussnape,bellatrixlestrange,dobby,nevillelongbottom,minervamcgonagall,fredweasley,georgeweasley];
//PEPPA PIG
//all possible queens:
let allCustomQueens = [];
if (localStorage.getItem("customQueens") != null)
    allCustomQueens = JSON.parse(localStorage.getItem("customQueens") || "{}");
let customLength = allCustomQueens.length;
for (let i = 0; i < customLength; i++) {
    let queen = new Queen('', 0, 0, 0, 0, 0, 0, 0, '');
    Object.assign(queen, allCustomQueens[i]);
    allCustomQueens.push(queen);
}
allCustomQueens.splice(0, customLength);
let allQueens = [
    lewis,ben,ella,elliot,amy,molly,emily,alex,harvey,ruben,hamish,bethany,
    millburner,bendover,pennyrolls,pussyclart,ellavatit,cheallywinks,gingersparks,
    monsieurthomas,shrek,trinavega,berniesanders,maccapacca,carolebaskin,trishapaytas,alisonhammond,globglogabgalab,abbyleemiller,cupcakke,isaac,tinkywinky,francisbourgeois,ginalintetti,theresamay,borisjohnson,daddypig,lolaskumpy,
    shrek2,lordfarquaad,fiona,donkey,kingharold,gingerbreadman,queenlillian,dragon,magicmirror,fairygodmother,
    bigdaddy,bustermoon,meena,gunter,rosita,johnny,ash,mike,theqteez,misscrawley,nananoodleman
].concat(allCustomQueens).sort((a, b) => a.getName().toLowerCase().localeCompare(b.getName().toLowerCase()));
let allQueensCopy = [];
let randomReturn = true;
let voteReturn = true;
let rurupalooza = false;
let smackdown = false;
function CheckForReturning() {
    if ((randomReturn || voteReturn) == true && currentCast.length < totalCastSize - 3 && returningQueen == false && eliminatedCast.length > 0) {
        if (randomNumber(0, 100) < 5 * episodeCount || currentCast.length == 4) {
            returningQueen = true;
            return true;
        }
        return false;
    }
    if (smackdown && currentCast.length == 4 && (all_stars || top4 || lipsync_assassin) && returningQueen == false || smackdown && currentCast.length == 3 && returningQueen == false) {
        returningQueen = true;
        return true;
    }
    return false;
}
function returningQueenScreen() {
    let screen = new Scene();
    screen.createHeader("A lovely surprise...");
    let myRandomNumber = randomNumber(0, 2);
    if (myRandomNumber === 0)
        queenReturns();
    if (myRandomNumber === 1)
        queenReturnsVote();
    if (myRandomNumber === 2)
        lipsyncSmackdown();
}
function queenReturns() {
    let screen = new Scene();
    screen.createParagraph("I've decided that one of my queens have gone a bit too soon... I'd like to welcome back...");
    let queen = eliminatedCast[(randomNumber(0, eliminatedCast.length - 1))];
    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
    screen.createBold(queen.getName());
}
function queenReturnsVote() {
    let screen = new Scene();
    screen.createParagraph("I've decided that one of my quens deserve a second chance... you'll vote for which of the eliminated queens will come back!");
    screen.createHorizontalLine();
    screen.createBold("The queens vote...");
    for (let i = 0; i < currentCast.length; i++) {
        currentCast[i].lipstick = eliminatedCast[randomNumber(0, eliminatedCast.length - 1)];
        currentCast[i].lipstick.votes++;
        screen.createParagraph(`${currentCast[i].getName()} voted for ${currentCast[i].lipstick.getName()}!`);
    }
    for (let i = 0; i < eliminatedCast.length; i++) {
        screen.createBold(`${eliminatedCast[i].getName()}: ${eliminatedCast[i].votes.toString()} votes`);
    }
    screen.createHorizontalLine();
    let queen = [...eliminatedCast].sort((a, b) => b.votes - a.votes)[0];
    screen.createBold(`${queen.getName()} returns to the competition!`);
    currentCast.push(queen);
    eliminatedCast.splice(eliminatedCast.indexOf(queen), 1);
}
function lipsyncSmackdown() {
    let screen = new Scene();
    screen.createBold("All eliminated queens will return for a lip-sync smackdown tournament!");
    let currentWinner = eliminatedCast[eliminatedCast.length - 1];
    let lipsync = [currentWinner, eliminatedCast[eliminatedCast.length - 2]];
    for (let i = eliminatedCast.length - 2; i >= 0; i--) {
        screen.createHorizontalLine();
        screen.createImage(lipsync[0].image);
        screen.createImage(lipsync[1].image);
        screen.createParagraph(`${lipsync[0].getName()} and ${lipsync[1].getName()} will lip-sync`);
        lsSong();
        currentWinner = smackdownLS(lipsync);
        screen.createImage(currentWinner.image, "royalblue");
        if (i - 1 >= 0)
            screen.createBold(`${currentWinner.getName()}, condragulations, you'll proceed to the next stage!`);
        else
            screen.createBold(`${currentWinner.getName()}, condragulations, you can return to the competition!`);
        screen.createImage(lipsync[1].image, "orange");
        screen.createParagraph(`${lipsync[1].getName()}, thank you for participating, now sashay away...`);
        if (i - 1 < 0)
            break;
        else {
            lipsync = [currentWinner, eliminatedCast[i - 1]];
        }
    }
    currentWinner.addToTrackRecord("WIN");
    eliminatedCast.splice(eliminatedCast.indexOf(currentWinner), 1);
    episodeChallenges.push("Smackdown");
    for (let i = 0; i < currentCast.length; i++)
        currentCast[i].addToTrackRecord("SAFE");
    currentCast.push(currentWinner);
    for (let i = 0; i < eliminatedCast.length; i++)
        eliminatedCast[i].addToTrackRecord("LOSS");
}
function smackdownLS(queens) {
    for (let i = 0; i < queens.length; i++) {
        queens[i].getASLipsync();
    }
    queens.sort((a, b) => (b.lipsyncScore - a.lipsyncScore));
    return queens[0];
}
class Scene {
    constructor() {
        this._MainBlock = document.querySelector("div#MainBlock");
    }
    clean() {
        this._MainBlock.innerHTML = '';
    }
    createHeader(text) {
        let title = document.getElementById("MainTitle");
        title.innerHTML = text;
    }
    createBigText(text) {
        let big = document.createElement("big");
        let p = document.createElement("p");
        big.innerHTML = text;
        p.appendChild(big);
        this._MainBlock.appendChild(p);
    }
    createParagraph(text, id = '') {
        let p = document.createElement("p");
        p.innerHTML = text;
        p.setAttribute("id", id);
        this._MainBlock.appendChild(p);
    }
    createBold(text, id = '') {
        let p = document.createElement("p");
        let bold = document.createElement("b");
        bold.innerHTML = text;
        bold.setAttribute("id", id);
        p.appendChild(bold);
        this._MainBlock.appendChild(p);
    }
    createButton(text, method, id = '') {
        let button = document.createElement("button");
        button.innerHTML = text;
        button.setAttribute("onclick", method);
        button.setAttribute("id", id);
        this._MainBlock.appendChild(button);
    }
    createHorizontalLine() {
        let hr = document.createElement("hr");
        this._MainBlock.appendChild(hr);
    }
    createImage(source, color = "black") {
        let image = document.createElement("img");
        image.src = source;
        image.setAttribute("style", `width: 200px; border-color: ${color}`);
        this._MainBlock.appendChild(image);
    }
}
function lsSong() {
    let screen = new Scene();
    let song = randomNumber(0, lsSongs.length - 1);
    screen.createBold(`The lip-sync song is... ${allLsSongs[song]}!`);
    audio.pause();
    audio = new Audio('audio/song/' + song + '.mp3');
    audio.play();
    lsSongs.splice(song, 1);
}
let allLsSongs = [
    "The Chain by Fleetwood Mack",
    "Dancing Queen by ABBA",
    "Stairway to Heaven by Led Zeppelin",
    "Shut up by Stormzy",
    "Ye Hua Xiang by Mo Si Man & Lao Mao (Jiafei Anthem)",
    "Kiss from a Rose by Seal",
    "Vagina by Cupcakke",
    "Video Games by Lana Del Ray",
    "DISCO BALL by Karen June Lawrence",
    "WAP by Cardi B and Megan Thee Stallion",
    "Squidward Nose by Cupcakke",
    "CPR by Cupcakke",
    "Stacy's Mom by Bowling for Soup",
    "Teenage Dirtbag by Wheetus",
    "Toxic by Britney Spears",
    "Material Girl by Saucy Santana",
    "iCarly Theme Tune by iCarly",
    "Soph Aspin Send by Millie B",
    "Heaven by DJ Sammy (ft. Do)",
    "Hallucinate by Dua Lipa",
    "Applause by Lady Gaga",
    "Boris Bop by JOE (Vossi Bop Parody)",
    "We like to Party! by Vegaboys",
    "Bubblegum Bitch by MARINA",
    "Take a Hint by Victorious Cast",
    "Broken Heels by Alexandra Burke",
    "Crazy in Love by Beyoncé",
    "Shut Up and Drive by Rihanna"
];
let lsSongs = [...allLsSongs];
class Team extends Queen {
    constructor(QueenA, QueenB) {
        let Name;
        if (QueenA == kasha)
            Name = "Team Mrs. " + QueenB._name.split(" ")[0] + " Davis";
        else if (QueenB == kasha)
            Name = "Team Mrs. " + QueenA._name.split(" ")[0] + " Davis";
        else if ((QueenA || QueenB) == latrice && ((QueenA && QueenB) == manila))
            Name = "Team Latrila";
        else if ((QueenA || QueenB) == yara && ((QueenA && QueenB) == alexis))
            Name = "Team Yarlexis";
        else if ((QueenA || QueenB) == chad && ((QueenA && QueenB) == shannel))
            Name = "Team Shad";
        else if ((QueenA || QueenB) == ninaf && ((QueenA && QueenB) == tammie))
            Name = "Team Brown Flowers";
        else if ((QueenA || QueenB) == raven && ((QueenA && QueenB) == jujubee))
            Name = "Team Rujubee";
        else if ((QueenA || QueenB) == mimi && ((QueenA && QueenB) == pandora))
            Name = "Team Mandora";
        else if (QueenA._name.split(' ')[0].length == 3 && QueenB._name.split(' ')[0].length > 3)
            Name = "Team " + QueenA._name.split(' ')[0] + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length);
        else if (QueenA._name.split(' ')[0].length > 3 && QueenB._name.split(' ')[0].length == 3)
            Name = "Team " + QueenA._name.split(' ')[0].slice(0, 4) + QueenB._name.split(' ')[0];
        else if (QueenA._name.split(' ')[0].length == 3 && QueenB._name.split(' ')[0].length == 3)
            Name = "Team " + QueenA._name.split(' ')[0] + QueenB._name.split(' ')[0];
        else
            Name = "Team " + QueenA._name.split(' ')[0].slice(0, 4) + QueenB._name.split(' ')[0].slice(QueenB._name.split(' ')[0].length - 4, QueenB._name.split(' ')[0].length);
        super(Name, ((QueenA._actingStat + QueenB._actingStat) / 2), ((QueenA._comedyStat + QueenB._comedyStat) / 2), ((QueenA._danceStat + QueenB._danceStat) / 2), ((QueenA._designStat + QueenB._designStat) / 2), ((QueenA._improvStat + QueenB._improvStat) / 2), ((QueenA._runwayStat + QueenB._runwayStat) / 2), 0);
        this.QueenA = QueenA;
        this.QueenB = QueenB;
    }
}
function teamsScreen() {
    let screen = new Scene();
    screen.clean();
    screen.createHeader("Pair time!");
    screen.createParagraph("After all the queens enter the werkroom, they now have to choose their pairs!");
    screen.createHorizontalLine();
    let teamList = [];
    for (let i = 0; i < totalCastSize / 2; i++) {
        let indexA = randomNumber(0, currentCast.length - 1);
        let indexB = randomNumber(0, currentCast.length - 1);
        while (indexB == indexA)
            indexB = randomNumber(0, currentCast.length - 1);
        let QueenA = currentCast[indexA];
        let QueenB = currentCast[indexB];
        let team = new Team(QueenA, QueenB);
        screen.createImage(QueenA.image);
        screen.createImage(QueenB.image);
        screen.createBold(`${QueenA.getName()} and ${QueenB.getName()} formed ${team.getName()}!`);
        teamList.push(team);
        currentCast.splice(currentCast.indexOf(QueenA), 1);
        currentCast.splice(currentCast.indexOf(QueenB), 1);
    }
    currentCast = [...teamList];
    totalCastSize = currentCast.length;
    screen.createButton("Proceed", "miniChallenge()");
}

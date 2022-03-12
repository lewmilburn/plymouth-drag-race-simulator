function lsSong(): void {
    let screen = new Scene();
    
    let song = randomNumber(0, lsSongs.length - 1)

    screen.createBold(`The lip-sync song is... ${lsSongs[song]}!`)

    lsSongs.splice(song, 1);
}

let allLsSongs: Array<string> = [
    "The Chain by Fleetwood Mack",
    "Dancing Queen by ABBA",
    "Stairway to Heaven by Led Zeppelin",
    "Shut up by Stormzy",
    "Ye Hua Xiang by Mo Si Man & Lao Mao (Jiafei Anthem)",
    "Kiss from a Rose by Seal",
    "Vagina by Cupcakke",
    "Video Games by Lana Del Ray",
    "DISCO BALL by Karen June Lawrence"
]

let lsSongs = [...allLsSongs];

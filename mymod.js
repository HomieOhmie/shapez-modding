// @ts-nocheck
const METADATA = {
    website: "https://github.com/HomieOhmie/shapez-modding",
    author: "HomieOhmie",
    name: "Test Mod",
    version: "1",
    id: "testmod",
    description: "test mod",
    minimumGameVersion: ">=1.5.0",

    // You can specify this parameter if savegames will still work
    // after your mod has been uninstalled
    doesNotAffectSavegame: false,
};

class Mod extends shapez.Mod {
    init() {
        // Start the modding here
    }
}

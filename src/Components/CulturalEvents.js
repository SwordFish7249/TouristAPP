
function CulturalEvents(organicBazaar, organicBazaarPricesList, 
    culturalBazaar, culturalBazaarPricesList, folkloricGames, 
    localTheatricalPlay, culturalFoods, culturalFoodsPricesList,
    oldCyprusHomes, culturalSouvenir, culturalSouvenirPricesList) {
    const culturalEvent = {};
    culturalEvent.organicBazaar = organicBazaar;
    culturalEvent.organicBazaarPricesList = organicBazaarPricesList;
    culturalEvent.culturalBazaar = culturalBazaar;
    culturalEvent.culturalBazaarPricesList = culturalBazaarPricesList;
    culturalEvent.folkloricGames = folkloricGames;
    culturalEvent.localTheatricalPlay = localTheatricalPlay;
    culturalEvent.culturalFoods = culturalFoods;
    culturalEvent.culturalFoodsPricesList = culturalFoodsPricesList;
    culturalEvent.oldCyprusHomes = oldCyprusHomes;
    culturalEvent.culturalSouvenir = culturalSouvenir;
    culturalEvent.culturalSouvenirPricesList = culturalSouvenirPricesList;
}

module.exports = CulturalEvents;
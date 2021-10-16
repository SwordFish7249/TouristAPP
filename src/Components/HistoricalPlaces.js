
function HistoricalPlaces(aboutHistoricalPlace, howLongHasItBeen,
    byWhomWasItMade, whatWasThePurposeOfItsCreation,
    nationsThatHaveUsedItUntilToday, changesItHasGoneThroughUntilToday) {
    const historicalPlace = {};
    historicalPlace.aboutHistoricalPlace = aboutHistoricalPlace;
    historicalPlace.howLongHasItBeen = howLongHasItBeen;
    historicalPlace.byWhomWasItMade = byWhomWasItMade;
    historicalPlace.whatWasThePurposeOfItsCreation = whatWasThePurposeOfItsCreation;
    historicalPlace.nationsThatHaveUsedItUntilToday = nationsThatHaveUsedItUntilToday;
    historicalPlace.changesItHasGoneThroughUntilToday = changesItHasGoneThroughUntilToday;
}

module.exports = HistoricalPlaces;
getUserLanguage = function () {
    // Put here the logic for determining the user language

    return navigator.language || navigator.userLanguage
};

if (Meteor.isClient) {
    Meteor.startup(function () {
        googleTranslateElementInit =function() {
            new google.translate.TranslateElement({pageLanguage: getUserLanguage()}, 'google_translate_element');
        }
    });
}
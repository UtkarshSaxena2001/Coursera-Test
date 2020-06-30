// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
(function(window) {
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
// List of possible sub titles
const titlesHtml = [
    'Certainly, here is a possible personal website for you...',
    'Maximizing student tear duct throughput since 2018',
    'Makes Reviewer 2 think twice >:(',
    'If you haven\'t noticed this time this page loaded 0.34% faster',
    'Pack it up, pack it in, let me begin...',
    'Minimum effort - maximum impact',
    'We ain\'t had nothing but noodles for three stinkin\' days!',
    'I ain\'t mean, I\'m just focused',
    'Whoooops! Wrong monitor...',
    'Making cheddar',
    'Red is the fastest!',
    'A PhD is never late, nor is he early, he arrives precisely when he means to!',
    'Please, notice me Uncle Bob :D',
    'Hast thou a care for thyself, lest thou bringest ruin upon thy head. - Frosted Die',
    'Did you put your API key into the repository!? (asks calmly)',
    'A communications discruption can mean only one thing...'
];
document.addEventListener("DOMContentLoaded", function() {
    // Select a random h2 title using current date and time
    const randomIndex = new Date().getTime() % titlesHtml.length;
    const randomTitleHtml = titlesHtml[randomIndex];

    // Set the random title as the text content of the #subtitle element
    const subtitleElement = document.getElementById("subtitle");

    if (subtitleElement) {
        subtitleElement.innerHTML = randomTitleHtml;
    } else {
        console.error("Element with id 'subtitle' not found.");
    }
});
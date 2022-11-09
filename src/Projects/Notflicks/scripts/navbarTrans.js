< script >
    var video = document.querySelector('video');
video.addEventListener('ended', function() {
    video.load()
}); <
/script>
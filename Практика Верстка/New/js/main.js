$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48,
        loop: true
    });
});

/*  Video   */

const videoBtn = document.querySelector("#video-btn");
const videoPicture = document.querySelector(".video__picture");
const videoWrapper = document.querySelector(".video")
const videoFile = document.querySelector("#video-file");

/* videoBtn.addEventListener("click", function () {
    videoPicture.classList.add("none");
    videoWrapper.classList.remove("video-overlay");
    videoBtn.classList.add("none");

    if (videoFile.paused) {
        videoPicture.classList.add("none");
        videoWrapper.classList.remove("video-overlay");
        videoBtn.classList.add("none");
        videoFile.play();
    }
}) */

videoWrapper.addEventListener("click", function () {
    if (videoFile.paused) {
        videoPicture.classList.add("none");
        videoWrapper.classList.remove("video-overlay");
        videoBtn.classList.add("none");
        videoFile.play();
    } else {
        videoWrapper.classList.add("video-overlay");
        videoBtn.classList.remove("none");
        videoFile.pause();
    }
})
/*

Written BY  Vortx ..... Enjoy :)
😁 Don't forget to give the credit 😁

*/

// Its gonna load the video.json file
fetch('video.json')
  .then(response => response.json())
  .then(videos => {
    const playBtn = document.getElementById('play-btn');
    const videoContainer = document.getElementById('video-container');

    function playRandomVideo() {
      // Generate a random video ID
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideoId = videos[randomIndex];

      // Create the YouTube embed URL
      const embedUrl = `https://www.youtube.com/embed/${randomVideoId}?autoplay=1`;

      // Replace the contents of the video container with the new video
      videoContainer.innerHTML = `<iframe src="${embedUrl}" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

    // Trigger the random video function when the play button is clicked
    playBtn.addEventListener('click', playRandomVideo);

    // Trigger the random video function when the page is loaded
    window.addEventListener('load', playRandomVideo);
  })
  .catch(error => console.error(error));

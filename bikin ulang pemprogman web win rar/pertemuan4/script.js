document.addEventListener('DOMContentLoaded', function() {
    var videoPlayer = document.getElementById('videoPlayer');
    var imageViewer = document.getElementById('imageViewer');
    var audioPlayer = document.getElementById('audioPlayer');
  
    // Tambahkan event listener untuk video
    videoPlayer.addEventListener('play', function() {
      console.log('Video dimainkan');
    });
  
    // Tambahkan event listener untuk foto
    imageViewer.addEventListener('click', function() {
      console.log('Foto diklik');
    });
  
    // Tambahkan event listener untuk audio
    audioPlayer.addEventListener('play', function() {
      console.log('Audio dimainkan');
    });
  });
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay:true,
    audio: [
      {
        name: "红色",
        artist: '幼稚园杀手',
        url: 'http://m10.music.126.net/20190819204845/8388b31c47f8ebb41c9d406e1c797d7d/ymusic/a391/279d/1655/ebc8f929b98e7b29f9e5adc0a31df24f.mp3',
        cover: 'http://p2.music.126.net/C14iCBb0gWujgZnCc9SwpA==/109951164298313032.jpg',
      }
    ]
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay:true,
    audio: [
      {
        name: "红色",
        artist: '幼稚园杀手',
        url: 'http://m10.music.126.net/20190819204104/2d0bdc9c603ac11a44071992b34ccf36/ymusic/055f/0f0e/530f/25032b676f8d57b87eb9ded452e0ef51.mp3',
        cover: 'http://p2.music.126.net/C14iCBb0gWujgZnCc9SwpA==/109951164298313032.jpg',
      }
    ]
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay:true,
    audio: [
      {
        name: "红色",
        artist: '幼稚园杀手',
        url: 'http://m10.music.126.net/20190819150314/d867f8b8838ab1c24ec44b31ba252f1e/ymusic/055f/0f0e/530f/25032b676f8d57b87eb9ded452e0ef51.mp3',
        cover: 'http://p2.music.126.net/C14iCBb0gWujgZnCc9SwpA==/109951164298313032.jpg',
      }
    ]
});

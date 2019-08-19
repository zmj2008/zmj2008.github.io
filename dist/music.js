const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay:true,
    audio: [
      {
        name: "红色高跟鞋",
        artist: '蔡健雅',
        url: 'http://m10.music.126.net/20190819204845/8388b31c47f8ebb41c9d406e1c797d7d/ymusic/a391/279d/1655/ebc8f929b98e7b29f9e5adc0a31df24f.mp3',
        cover: 'http://p1.music.126.net/2toWuH2oD6c0dM6QLdThzg==/109951163165824418.jpg',
      },
	  {
        name: "红色",
        artist: '幼稚园杀手',
        url: 'http://m10.music.126.net/20190819205315/29ccd8791ccc1d2ea3b895874a242351/ymusic/055f/0f0e/530f/25032b676f8d57b87eb9ded452e0ef51.mp3',
        cover: 'http://p2.music.126.net/C14iCBb0gWujgZnCc9SwpA==/109951164298313032.jpg',
      }
    ]
});

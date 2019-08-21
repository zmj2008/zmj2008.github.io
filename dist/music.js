const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay:true,
    
	audio: [
   	  {
        name: "多想在平庸的生活拥抱你",
        artist: '隔壁老樊',
        url: 'http://fs.open.kugou.com/4748d3a7da77bc9fd79d4ae8be6b2800/5d5d2dbd/G151/M07/15/04/d5QEAFz6V_CAR0r7AEHlOc5g6DE932.mp3',
        cover: 'https://p1.music.126.net/r-azCsdyaGb8FPPPilsbqQ==/109951164227988047.jpg',
      },
	  {
        name: "红色高跟鞋",
        artist: '蔡健雅',
        url: 'http://m10.music.126.net/20190819204845/8388b31c47f8ebb41c9d406e1c797d7d/ymusic/a391/279d/1655/ebc8f929b98e7b29f9e5adc0a31df24f.mp3',
        cover: 'http://p1.music.126.net/2toWuH2oD6c0dM6QLdThzg==/109951163165824418.jpg',
      }
    ]
});

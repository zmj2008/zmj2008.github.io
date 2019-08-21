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
        name: "芒种",
        artist: '音阙诗听',
        url: 'http://fs.open.kugou.com/d400d05776124b525f8016d1b9069147/5d5d2d81/G153/M04/13/14/OYcBAFz3fF6AbF0fADS_2OPt0ag626.mp3',
        cover: 'http://imge.kugou.com/stdmusic/150/20190605/20190605155235947489.jpg',
      }
    ]
});

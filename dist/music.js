const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay:false,
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
      },
	  {
        name: "红色",
        artist: '幼稚园杀手',
        url: 'http://fs.open.kugou.com/c1fc91cdbec664a544399e18d30ac4fb/5d5dc7de/G164/M06/0A/11/RIcBAF1XrcSAOnIlADWD-68IWVA388.mp3',
        cover: 'http://singerimg.kugou.com/uploadpic/softhead/150/20190720/20190720220214641.jpg',
      },
	  {
        name: "红色高跟鞋",
        artist: '蔡健雅',
        url: 'http://win.web.nf01.sycdn.kuwo.cn/f27a4fddcb974cfbe79ec04648c4533b/5d5dc93c/resource/n1/93/34/4174897214.mp3',
        cover: 'http://img1.kuwo.cn/star/starheads/120/4/4baf6018723f680f891ea5383556e7e_0.jpg,
      }
    ]
});

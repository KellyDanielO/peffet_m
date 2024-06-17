var myFP = fluidPlayer("video-id", {
  layoutControls: {
    controlBar: {
      autoHideTimeout: 3,
      animated: true,
      autoHide: true,
    },
    htmlOnPauseBlock: {
      html: null,
      height: null,
      width: null,
    },
    autoPlay: false,
    mute: false,
    allowTheatre: true,
    playPauseAnimation: true,
    playbackRateEnabled: true,
    allowDownload: false,
    playButtonShowing: true,
    fillToContainer: true,
    primaryColor: "royalblue",
    posterImage: "",
  },
  vastOptions: {
    adList: [],
    adCTAText: false,
    adCTATextPosition: "",
  },
});

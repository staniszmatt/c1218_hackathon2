class PBGS_init{
  /**
   * @param {Object} domInformation - DOM information of buttons and access to elements needed. 
   */
  constructor(domInformation){
    this.domInformation = domInformation;
    this.upcScanner = new UPC_Scanner();
    this.barcodeInputValue = null;
    //bindings
    this.clickHandler = this.clickHandler.bind(this);
    this.initScanner = this.initScanner.bind(this);
    this.submitBarcode = this.submitBarcode.bind(this);
    this.cancleScan = this.cancleScan.bind(this);

  }

  clickHandler(){
    this.domInformation.initScanButton.click(this.initScanner);
    this.domInformation.submitBarcodeNumberButton.click(this.submitBarcode);
    this.domInformation.cancleScanButton.click(this.cancleScan);
    this.domInformation.camera-button.click(this.whenCameraIsClick);
    this.domInformation.homeIcon.click(this. whenIndexClicked);
    this.domInformation.youtubeIcon.click(this.whenyouTubeClicked);
    this.domInformation.mapIcon.click(this. whenGoogleClicked);


  }
  initScanner(){
    console.log("Clicked InitScanner");
    this.upcScanner.initScanner();
  }
  submitBarcode(){
    console.log("Clicked Submitt");
    this.barcodeInputValue = this.domInformation.submitNumberInput.val();
    this.upcScanner.processedCallBack(this.barcodeInputValue);
  }
  cancleScan(){
    this.upcScanner.stopScanning();
  }


 whenCameraIsClick(){
    $("#camera-button").on("click", ()=>{
      console.log("penguin")
      $(".penguin-logo").slideUp();
  })
  }

 whenIndexClicked(){
    $('.index-page').click(function(){
        $('.youtube-page').hide();
        $('.product-page').hide();
        $('.google-page').hide();
    })
  }

  whenyouTubeClicked(){
    $('.youtube-page').click(function(){
        $('.index-page').hide();
        $('.google-page').hide();
        $('.product-page').hide();
    })
  }
  
  whenGoogleClicked(){
    $('.google-page').click(function(){
      $('.index-page').hide();
      $('.youtube-page').hide();
      $('.product-page').hide();
    }
  }

}

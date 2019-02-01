class PBGS_init{
  /**
   * @param {Object} domInformation - DOM information of buttons and access to elements needed. 
   */
  constructor(domInformation){
    this.domInformation = domInformation;
    this.upcScanner = new UPC_Scanner();
    this.youTubeSetup = new YouTube_page();
    this.barcodeInputValue = null;
    this.modalErrors = new Modal_error_message(); //TODO: Fix undefined
    this.modalErrors.hideModal();	
    // this.modalErrors.show('barcode could not be read');
    
    //bindings
    this.clickHandler = this.clickHandler.bind(this);
    this.initScanner = this.initScanner.bind(this);
    this.submitBarcode = this.submitBarcode.bind(this);
    this.cancelScan = this.cancelScan.bind(this);
    this.modalErrorMessage = this.modalErrorMessage.bind(this);
    // this.whenCameraIsClick =this.whenCameraIsClick.bind(this);
    // this.whenIndexClicked= this.whenIndexClicked.bind(this);
    // this.whenGoogleClicked=this.whenGoogleClicked.bind(this);
    // this.whenyouTubeClicked=this.whenyouTubeClicked.bind(this);

  }

  clickHandler(){
    this.domInformation.initScanButton.click(this.initScanner);
    this.domInformation.submitBarcodeNumberButton.click(this.submitBarcode);
    this.domInformation.modalButton.click(this.modalErrors.clickHandle);
    this.domInformation.cancelScanButton.click(this.cancelScan);
    // this.domInformation.whenCameraIsClick.click(this.whenCameraIsClick);
    // this.domInformation.homeIcon.click(this.whenIndexClicked);
    // this.domInformation.youtubeIcon.click(this.whenyouTubeClicked);
    // this.domInformation.mapIcon.click(this.whenGoogleClicked);

  }
  initScanner(){ //calls when scan is submitted
    console.log("Clicked InitScanner");
    this.upcScanner.initScanner();
    //$(".penguin-logo").slideUp(); //TODO: Add to the DOM OBject

  }
  submitBarcode(){ //calls with submitted by hand. 
    console.log("Clicked Submitt");//TODO: Go back to home screen if errors
    this.barcodeInputValue = this.domInformation.submitNumberInput.val();
    //if the value of the barcode cannot be read, call modal
    // this.modalErrors.show('barcode could not be read');
    this.upcScanner.processedCallBack(this.barcodeInputValue);
  }
  cancelScan(){
    this.upcScanner.stopScanning();
  }

  modalErrorMessage(errorMessage){
    //testing modal erorring
    this.modalErrors.show(errorMessage)
  }
  // whenCameraIsClick(){
  //   $("#camera-button").click(function(){
  //     console.log("penguin")
  //     $(".penguin-logo").slideUp();
  // })
  // }

  //  whenIndexClicked(){
  //   $('.index-page').click(function(){
  //       $("#main-container")
  //       $('.youtube-page').hide();
  //       $('.product-page').hide();
  //       $('.google-page').hide();
  //   })
  // }

  //  whenyouTubeClicked(){
  //   $('.youtube-page').click(function(){
  //       $('.index-page').hide();
  //       $('.google-page').hide();
  //       $('.product-page').hide();
  //   })
  // }
  
  // whenGoogleClicked(){
  //   $('.google-page').click(function(){
  //     $('.index-page').hide();
  //     $('.youtube-page').hide();
  //     $('.product-page').hide();
  //   })
  // }
}
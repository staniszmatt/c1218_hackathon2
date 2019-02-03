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
    
    //bindings
    this.clickHandler = this.clickHandler.bind(this);
    this.initScanner = this.initScanner.bind(this);
    this.submitBarcode = this.submitBarcode.bind(this);
    this.cancelScan = this.cancelScan.bind(this);
    // this.whenCameraIsClick =this.whenCameraIsClick.bind(this);
    this.indexButtonClicked= this.indexButtonClicked.bind(this);
    this.youTubeButtonClicked=this.youTubeButtonClicked.bind(this);
    this.reviewsButtonClicked=this.reviewsButtonClicked.bind(this);
    this.mapButtonClicked=this.mapButtonClicked.bind(this);
    this.hideAllPages=this.hideAllPages.bind(this);
    this.displayPage=this.displayPage.bind(this);

  }

  clickHandler(){
    this.domInformation.initScanButton.click(this.initScanner);
    this.domInformation.submitBarcodeNumberButton.click(this.submitBarcode);
    this.domInformation.modalButton.click(this.modalErrors.clickHandle);
    this.domInformation.cancelScanButton.click(this.cancelScan);
    this.domInformation.homeIcon.click(this.indexButtonClicked);
    this.domInformation.reviewIcon.click(this.reviewsButtonClicked);
    this.domInformation.youtubeIcon.click(this.youTubeButtonClicked);
    this.domInformation.mapIcon.click(this.mapButtonClicked);
 
  }
  initScanner(){ //calls when scan is submitted
    console.log("Clicked InitScanner");
    this.upcScanner.initScanner();
    this.upcScanner.cameraActivated = true;
  }
  submitBarcode(){ //calls with submitted by hand. 
    console.log("Clicked Submitt");//TODO: Go back to home screen if errors
    this.barcodeInputValue = this.domInformation.submitNumberInput.val();
    if(this.barcodeInputValue === ""){
      this.modalErrors.show("Input a number!");
    }
    else{
      this.upcScanner.processedCallBack(this.barcodeInputValue);
    }
    this.upcScanner.stopScanning();
  
  }
  cancelScan(){
    this.upcScanner.stopScanning();
  }


  // whenCameraIsClick(){
  //   $("#camera-button").click(function(){
  //     console.log("penguin")
  //     $(".penguin-logo").slideUp();
  // })
  
   hideAllPages(){
     $('.index-page').hide();
     $('.google-page').hide();
     $('.youtube-page').hide();
     $('.product-page').hide();
   }

    displayPage(pageToShow){
      this.hideAllPages();
      $(pageToShow).show();
    }

  indexButtonClicked(){
      this.displayPage('.index-page');
  }
 
  youTubeButtonClicked(){
      this.displayPage('.youtube-page');
  }
  reviewsButtonClicked(){
      this.displayPage('.product-page');
  }
  mapButtonClicked(){
      this.displayPage('.google-page');
  }

}



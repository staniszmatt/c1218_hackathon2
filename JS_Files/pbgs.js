class PBGS_init{
  /**
   * @param {Object} domInformation - DOM information of buttons and access to elements needed. 
   */
  constructor(domInformation){
    this.domInformation = domInformation;
    this.upcScanner = new UPC_Scanner();
    this.barcodeInputValue = null;
    this.modalErrors = new Modal_error_message;
    // this.modalErrors.hideModal();	
    this.modalErrors.show('barcode could not be read');
    
    //bindings
    this.clickHandler = this.clickHandler.bind(this);
    this.initScanner = this.initScanner.bind(this);
    this.submitBarcode = this.submitBarcode.bind(this);
    this.cancelScan = this.cancelScan.bind(this);
    // this.domInformation.modalButton = this.domInformation.modalButton.bind(this);

    
  }

  clickHandler(){
    this.domInformation.initScanButton.click(this.initScanner);
    this.domInformation.submitBarcodeNumberButton.click(this.submitBarcode);
    this.domInformation.cancelScanButton.click(this.cancelScan);
    this.domInformation.modalButton.click(this.modalErrors.clickHandle);
  }
  initScanner(){
    console.log("Clicked InitScanner");
    this.upcScanner.initScanner();
  }
  submitBarcode(){
    console.log("Clicked Submitt");
    this.barcodeInputValue = this.domInformation.submitNumberInput.val();
    //if the value of the barcode cannot be read, call modal
    // this.modalErrors.show('barcode could not be read');
    this.upcScanner.processedCallBack(this.barcodeInputValue);
  }
  cancelScan(){
    this.upcScanner.stopScanning();
  }

}
//NavBar Button
// function handleHomeButton(){
//   $('.scanning-front-page').click(function(){
//     $('.google-page-container').removeClass('active');
//     $('.about-product-page').removeClass('active');
//     $('.youtube-page.active').removeClass('active');
//   })
// }




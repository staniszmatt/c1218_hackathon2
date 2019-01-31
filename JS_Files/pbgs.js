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
  }
  initScanner(){ //calls when scan is submitted
    console.log("Clicked InitScanner");
    this.upcScanner.initScanner();
  }
  submitBarcode(){ //calls with submitted by hand. 
    console.log("Clicked Submitt");//TODO: Go back to home screen if errors
    this.barcodeInputValue = this.domInformation.submitNumberInput.val();
    this.upcScanner.processedCallBack(this.barcodeInputValue);
  }
  cancleScan(){
    this.upcScanner.stopScanning();
  }
}
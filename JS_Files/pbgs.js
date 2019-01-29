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
  }

  clickHandler(){
    this.domInformation.initScanButton.click(this.initScanner);
    this.domInformation.submitBarcodeNumberButton.click(this.submitBarcode)
  }
  initScanner(){
    this.upcScanner.initScanner;
  }
  submitBarcode(){
    this.barcodeInputValue = this.domInformation.submitNumberInput.val();
    this.upcScanner.processedCallBack(this.barcodeInputValue);
  }
}
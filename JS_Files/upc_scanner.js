class UPC_Scanner{
  
  constructor(){ 
    this.barcodeNumber = null;
    this.barCodeInput = null; 
    this.cameraActivated = false;  //Determins if camera has been activated, if not, no need to shut off. 
    this.upc_post_request = new UPC_post_request();
    //Binding Section
    this.processedCallBack = this.processedCallBack.bind(this);
    this.initScanner = this.initScanner.bind(this);
    this.handleError = this.handleError.bind(this);
    this.stopScanning = this.stopScanning.bind(this);
  }

  initScanner(){  //Initialize Quagga scanner and request access to camera
    console.log("Init Scanner");
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('.scanner-image')  //TODO: target area for video scanning
      },
      decoder : {
        readers : ["upc_reader"]
      }
    }, (err) => {
          if (err) {
            this.handleError(err);
            return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
        Quagga.onDetected(this.processedCallBack);
    });
  }
  /**
   * @param {Object} returnData - the scanned barcode data 
   */
  processedCallBack(returnData){
    console.log("Test Init",initialization);
    console.log("Process Data ", returnData);
    if(!isNaN(returnData)){
      this.barcodeNumber = returnData; //TODO: Add error check enousre data is there!
      this.upc_post_request.setScanedData(this.barcodeNumber);
    } else {
    this.barcodeNumber = returnData.codeResult.code;//"610370565025"
    this.upc_post_request.setScanedData(this.barcodeNumber)
    }  
    this.stopScanning();
  }
  stopScanning(){
    console.log("camera truthy ", this.cameraActivated);
    if (!this.cameraActivated){
      return;
    } else {
    Quagga.offDetected();
    Quagga.stop();
    }
  }
  /** 
   * @param {Object} err - If scanner errors, will return error object information 
   */
  handleError(err){
    initialization.modalErrors.show("CAMERA COULD NOT LOAD. TRY AGAIN");
    console.log("this is the errordata" + err); //TODO: setup with errorModal

  }
  getBarcodeNumber(){
    return this.barcodeNumber; 
  }

  //670541597682
}
class UPC_Scanner{
  
  constructor(){
    this.barcodeNumber = null;
    this.barCodeInput = null; 
    this.upc_post_request = new UPC_post_request();
    //Binding Section
    this.processedCallBack = this.processedCallBack.bind(this);
    this.initScanner = this.initScanner.bind(this);
  }

  initScanner(){  //Initialize Quagga scanner and request access to camera
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

        // Quagga.onProcessed(processedCallBack)
        Quagga.onDetected(this.processedCallBack);
    });
  }
  /**
   * @param {Object} returnData - the scanned barcode data 
   */
  processedCallBack(returnData){
    console.log("Process Data ", returnData);
    if(!isNaN(returnData)){
      this.barcodeNumber = returnData;
    } else {
    this.barcodeNumber = returnData.codeResult.code;//"610370565025"
    Quagga.offDetected();
    Quagga.stop();
    this.upc_post_request.setScanedData(this.barcodeNumber);
    }  
  }
  /** 
   * @param {Object} err - If scanner errors, will return error object information 
   */
  handleError(err){
    console.log(err); //TODO: setup with errorModal 
  }
  getBarcodeNumber(){
    return this.barcodeNumber; 
  }

  //670541597682
}
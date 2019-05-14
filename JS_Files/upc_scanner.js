class UPC_Scanner {

  constructor() {
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
  /**
   *  @param {none} initScanner The scanner grabs the images of a bar code and submits it 
   * once it detects a readable bar code.
   * @see Quagga.init
   * @see Quagga.start
   * @see Quagga.onDetected
   * For more information, follow the link
   * @see {@link https://serratus.github.io/quaggaJS/#node-example}
   * @see processedCallBack(returnData)
   * @see handleError(err)
   */
  initScanner() {  //Initialize Quagga scanner and request access to camera
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('.scanner-image')  //TODO: target area for video scanning
      },
      decoder: {
        readers: ["upc_reader"]
      }
    }, (err) => {
      if (err) {
        this.handleError(err);
        return;
      }
      Quagga.start();
      Quagga.onDetected(this.processedCallBack);
    });
  }
  /**
   * @param {Object} returnData - the scanned barcode data returned from scanner
   * @see {@link initScanner()}
   */
  processedCallBack(returnData) {
    if (!isNaN(returnData)) {
      this.barcodeNumber = returnData; //TODO: Add error check enousre data is there!
      this.upc_post_request.setScanedData(this.barcodeNumber);
    } else {
      this.barcodeNumber = returnData.codeResult.code;//"610370565025"
      this.upc_post_request.setScanedData(this.barcodeNumber)
    }
    this.stopScanning();
  }
  stopScanning() {
    if (!this.cameraActivated) {
      return;
    } else {
      Quagga.offDetected();
      Quagga.stop();
      initialization.domInformation.cancelScanButton.hide();
    }
  }
  /** 
   * @param {Object} err - If scanner errors, will return error object information
   * @see  {@link initScanner()}
   */
  handleError(err) {
    initialization.modalErrors.show("CAMERA COULD NOT LOAD. TRY AGAIN");

  }
}
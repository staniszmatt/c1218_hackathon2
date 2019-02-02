class UPC_post_request{
  
  constructor(){
    this.upcSerialNumber = null; 
    this.errors = null;
    this.returnedScanData = null; 
    this.productData = new Product_page();
    //binding
    this.handleData = this.handleData.bind(this);
    }

  setScanedData(getScanedSerialNumber){
    this.upcSerialNumber = getScanedSerialNumber;
    this.postData();
  }
  getScanedData(){
    return this.returnedScanData;
  }
  postData(){
		console.log("Post Serial number", this.upcSerialNumber) 
		var requestScannedInformation = { 
			method: "get",
			url: "proxy.php?upc=" + this.upcSerialNumber,
			error: this.errorHandler,
			success: this.handleData, 
			dataType: "json"
		}	
		$.ajax(requestScannedInformation);	
  }
  /**
  * @param {Object} returnedData - Returned data from UPC lookup 
  */
  handleData(returnedData){
    console.log("Returned Data ", returnedData);
    
    this.returnedScanData = returnedData;
    this.productData.displayData(returnedData); 
    $(".index-page").hide();
    $(".product-page").show();
    
  }
  /**
  * @param {Object} errorData - if errored, returns error data. 
  */
  errorHandler(errorData){  //TODO: setup with error handling modal
    //if error data is a string, then
    // if error data is a 

    // (if errorData['total'] === 0 ){
    //  initialization.modal.show('Scan did not go through') 
    
    // }
    console.log("error Data ", errorData)
    initialization.modalErrorMessage(errorData);
  }
}
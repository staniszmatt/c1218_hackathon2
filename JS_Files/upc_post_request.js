class UPC_post_request{
  
  constructor(){
    this.upcSerialNumber = null; 
    this.errors = null;
    this.returnedScanData = null; 
    this.productData = new Product_page();
    }

  setScanedData(getScanedSerialNumber){
    this.upcSerialNumber = getScanedSerialNumber;
    this.postData();
  }
  getScanedData(){
    return this.returnedScanData;
  }
  postData(){
    console.log("Made it to post request")
    this.handleData(tempData);
		// console.log("student ID is ", this.getData.id) 
		// var requestScannedInformation = { TODO: TEmp comment out for testing
		// 	method: "get",
		// 	url: "proxy.php?upc=" + this.upcSerialNumber,
		// 	error: this.errorHandler,
		// 	success: this.handleData, 
		// 	dataType: "json"
		// }	
		// $.ajax(requestScannedInformation);	
  }
  /**
  * @param {Object} returnedData - Returned data from UPC lookup 
  */
  handleData(returnedData){
    console.log("Returned Data ", returnedData);
    
    this.returnedScanData = returnedData;
    this.productData.displayData(this.returnedScanData); //TODO: change to recived data once testing is finsihed
    
  }
  /**
  * @param {Object} errorData - if errored, returns error data. 
  */
  errorHandler(errorData){  //TODO: setup with error handling modal
    console.log("error Data ", errorData)
  }
}
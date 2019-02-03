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
			url: "proxy.php?upc=" + this.upcSerialNumber, //Call out proxy.php to access API
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
    this.returnedScanData = returnedData;
    if (returnedData['total'] === 0){
      this.errorHandler();
      // this.productData.displayData(returnedData); 
      //initialize camera
    }
    else{
      this.productData.displayData(returnedData); 
    }
   
    $(".index-page").hide();
    $(".product-page").show();
  }
  /**
  * @param {Object} errorData - if errored, returns error data. 
  */
  errorHandler(){  //TODO: setup with error handling modal, error when typing in the wrong numbers in the searchbar
    //NOTE: deosnt seem to be called by postData()
 
    console.log("error data, there is error in your data");
    initialization.modalErrors.show("INVALID UPC");
  }
}
class UPC_post_request{
  
  constructor(){
    this.upcSerialNumber = null; 
    this.errors = null;
    this.returnedScanData = null; 
    this.productData = new Product_page();
    //binding
    this.handleData = this.handleData.bind(this);
    }
  /**
   * This function takes in the serial number and saves it
   * Then the we call the next function to request the information from the API
   * @param  {number} getScanedSerialNumber 
   * @see {@link postData()}
   */
  setScanedData(getScanedSerialNumber){
    this.upcSerialNumber = getScanedSerialNumber;
    this.postData();
  }
  /**
   * This will grab the serial number and submit it for info to the API
   * For more information on this follow the link.
   * @see {@link https://www.upcitemdb.com/api/explorer#!/lookup/get_trial_lookup}
   */
  postData(){
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
   * @param  {object} returnedData Call back function with the server data
   * We check for errors if it was scanned but has no data
   * @see {@link postData()}
   */
  handleData(returnedData){   
    this.returnedScanData = returnedData;
    if (returnedData['total'] === 0){
      this.errorHandler();
      
      return;
    }
    else{
      this.productData.displayData(returnedData); 
    }
    $(".index-page").hide(); 
    $(".product-page").show();
    $(".spinner").toggle("display");
  }
  /**
  * @param {Object} errorData - if error, returns error data.
  * @see {@link postData()} 
  */
  errorHandler(){  
    initialization.modalErrors.show("INVALID UPC");
    $(".spinner").toggle("display");
  }
}
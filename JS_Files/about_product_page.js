class Product_page {
  constructor() {
    this.startMap = new StartMap();
    this.dataToDisplay = {
      title: "",
      upc: "",
      highestPrice: "",
      lowestPrice: "",
      brand: ""
    };
    this.images = [];
    this.displayTitleArray = ["Title: ", "UPC: ", "Highest Sold Price: ", "Lowest Sold Price: "];
    this.displayElmToAppend = $("<div>").addClass("display-p-container");
    //bindings
    this.displayData = this.displayData.bind(this);
    this.domSetupForDisplay = this.domSetupForDisplay.bind(this);
  }
  /**
   * @param {object} dataToDisplay - passing in the data received from post request for information 
   */
  displayData(dataToDisplay) { //Pull data from object into array
    this.dataToDisplay.title = dataToDisplay.items[0].title;
    this.dataToDisplay.upc = dataToDisplay.items[0].upc;
    this.dataToDisplay.highestPrice = "$ " + dataToDisplay.items[0].highest_recorded_price.toFixed(2);
    this.dataToDisplay.lowestPrice = "$ " + dataToDisplay.items[0].lowest_recorded_price.toFixed(2);
    this.dataToDisplay.brand = dataToDisplay.items[0].brand;
    if (dataToDisplay.items[0].images.length === 0){
      this.images = ["./images/no-image-found.jpg"];
    } else {
      this.images = dataToDisplay.items[0].images[0];
      if (this.images.slice(0, 5) === "http:"){
        this.images = this.images.replace(/http:/gi, "https:");
      } 
    }
    this.domSetupForDisplay();
  }

  domSetupForDisplay() {
    this.displayElmToAppend.remove(); //clear previous elm data 
    this.displayElmToAppend = $("<div>").addClass("display-p-container");
    const displayData = Object.values(this.dataToDisplay);
    for (let dataIndex = 0; dataIndex < displayData.length; dataIndex++) {
      let tempKeyName = this.getKeyByValue(this.dataToDisplay, displayData[dataIndex]).toUpperCase();
      let tempPelm = $("<p>")
        .addClass("product-display")
        .text(`${tempKeyName}: ${displayData[dataIndex]}`)
      this.displayElmToAppend.append(tempPelm);
    }
    initialization.domInformation.displayDataElm.append(this.displayElmToAppend);
    initialization.domInformation.displayDataImgElm.attr("src", this.images);
    this.startMap.googleMapGameName(this.dataToDisplay.title);
    initialization.youTubeSetup.loadAndReady(this.dataToDisplay.title);
  }
  
  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
}

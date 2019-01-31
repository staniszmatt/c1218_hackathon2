class Product_page {
  constructor() {
    this.dataToDisplay = {
      title: "",
      upc: "",
      highestPrice: "",
      lowestPrice: "",
      images: []
    };
    this.displayTitleArray = ["Title: ", "UPC: ", "Highest Sold Price: ", "Lowest Sold Price: "]
    this.displayElmToAppend = $("<div>").addClass("display-p-container"); 
  }
  /**
   * 
   * @param {object} dataToDisplay - passing in the data recived from post request for inormaton 
   */
  displayData(dataToDisplay){
    
    console.log("Data for displaying", this.dataToDisplay);
    this.dataToDisplay.title = dataToDisplay.items[0].title;
    this.dataToDisplay.upc = dataToDisplay.items[0].upc;
    this.dataToDisplay.highestPrice = dataToDisplay.items[0].highest_recorded_price;
    this.dataToDisplay.lowestPrice = dataToDisplay.items[0].lowest_recorded_price;
    this.dataToDisplay.images = dataToDisplay.items[0].images;
    this.domSetupForDisplay();
  }

  domSetupForDisplay(){
    const displayData = Object.values(this.dataToDisplay);

    for (let dataIndex = 0; dataIndex < displayData.length-1; dataIndex++){
      let tempKeyName = this.getKeyByValue(this.dataToDisplay, displayData[dataIndex]).toUpperCase();
      let tempPelm = $("<p>")
        .addClass("product-display")
        .text(`${tempKeyName}: ${displayData[dataIndex]}`)
        this.displayElmToAppend.append(tempPelm);
    }
    initialization.domInformation.displayDataElm.append(this.displayElmToAppend);
  }
  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
}

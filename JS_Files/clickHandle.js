class PBGS_init {
  /**
   * @param {Object} domInformation - DOM information of buttons and access to elements needed. 
   */
  constructor(domInformation) {
    this.domInformation = domInformation;
    this.upcScanner = new UPC_Scanner();
    this.youTubeSetup = new YouTube_page();
    this.barcodeInputValue = null;
    this.modalErrors = new Modal_error_message(this.domInformation);
    //bindings
    this.clickHandler = this.clickHandler.bind(this);
    this.initScanner = this.initScanner.bind(this);
    this.submitBarcode = this.submitBarcode.bind(this);
    this.cancelScan = this.cancelScan.bind(this);
    this.modalErrorMessage = this.modalErrorMessage.bind(this);
    this.indexButtonClicked = this.indexButtonClicked.bind(this);
    this.youTubeButtonClicked = this.youTubeButtonClicked.bind(this);
    this.reviewsButtonClicked = this.reviewsButtonClicked.bind(this);
    this.mapButtonClicked = this.mapButtonClicked.bind(this);
    this.hideAllPages = this.hideAllPages.bind(this);
    this.displayPage = this.displayPage.bind(this);
    this.showSearchBar = this.showSearchBar.bind(this);
    this.hideSearchBar = this.hideSearchBar.bind(this);
    this.hideModal = this.hideModal.bind(this);
    //
    this.hideDesktopDisplay = this.hideDesktopDisplay.bind(this);
    this.loaderDisplay = this.loaderDisplay.bind(this);
  }

  clickHandler() {
    this.domInformation.initScanButton.click(this.initScanner);
    //landing page that is hidden once camera is clicked
    this.domInformation.initScanButton.click(this.hideDesktopDisplay);
    this.domInformation.submitBarcodeNumberButton.click(this.submitBarcode);
    this.domInformation.modalButton.click(this.hideModal);
    this.domInformation.cancelScanButton.click(this.cancelScan);
    this.domInformation.homeIcon.click(this.indexButtonClicked);
    this.domInformation.reviewIcon.click(this.reviewsButtonClicked);
    this.domInformation.youtubeIcon.click(this.youTubeButtonClicked);
    this.domInformation.mapIcon.click(this.mapButtonClicked);
    this.domInformation.cancelScanButton.hide();
    this.hideModal();
    //search bar pressed to display loader
    this.domInformation.searchBarBtn.click(this.loaderDisplay);
  }

  initScanner() { //calls when scan request button is pressed
    this.upcScanner.initScanner();
    this.upcScanner.cameraActivated = true;
    this.domInformation.cancelScanButton.show();
  }

  submitBarcode(){ //calls with submitted by hand. 
    this.barcodeInputValue = this.domInformation.submitNumberInput.val();
    if(this.barcodeInputValue === ""){
      this.modalErrors.show("INPUT A NUMBER!");
    }
    else{
      this.upcScanner.processedCallBack(this.barcodeInputValue);
    }
    this.upcScanner.stopScanning();
  }

  cancelScan() {
    this.upcScanner.stopScanning();
    this.domInformation.cancelScanButton.hide();
    console.log('iminit')
  }

  modalErrorMessage(errorMessage) {
    this.modalErrors.show(errorMessage)
  }

  hideModal() {  
    this.modalErrors.hideModal();
  }

  hideAllPages() {
    this.domInformation.indexDisplayPage.hide();
    this.domInformation.productDisplayPage.hide();
    this.domInformation.youtubeDisplayPage.hide();
    this.domInformation.googleDisplayPage.hide();
  }

  displayPage(pageToShow) {
    this.hideAllPages();
    pageToShow.show();
  }

  indexButtonClicked() {
    this.displayPage(this.domInformation.indexDisplayPage);
    this.showSearchBar(this.domInformation.searchBarContainer);
  }

  youTubeButtonClicked() {
    this.displayPage(this.domInformation.youtubeDisplayPage);
    this.hideSearchBar(this.domInformation.searchBarContainer);
  }

  reviewsButtonClicked() {
    this.displayPage(this.domInformation.productDisplayPage);
    this.hideSearchBar(this.domInformation.searchBarContainer);
  }

  mapButtonClicked() {
    this.displayPage(this.domInformation.googleDisplayPage);
    this.hideSearchBar(this.domInformation.searchBarContainer);
  }

  showSearchBar(){
    this.domInformation.searchBarContainer.show();
  }
  
  hideSearchBar(){
    this.domInformation.searchBarContainer.hide();
  }
  hideDesktopDisplay(){
    this.domInformation.desktopDisplay.hide();
  }
  loaderDisplay(){
    let displayLoader = document.querySelector(".searchBtn").classList.remove(".active");
  }
  searchBtnClick(){
    let searchBtn = document.querySelector(".searchBtn");
    searchBtn.addEventListener("click", loaderDisplay);
  }
}


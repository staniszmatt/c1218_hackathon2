class Modal_error_message {
	constructor(){
    // this.modalButton = $("#modal-button");
    // this.modalShadow = $("#modal-shadow");
    // this.modalBody= $("#modal-body");
    // this.modalDisplay = $(".modal-message");

    this.modalButton = $("#modal-button");
    this.modalShadow = $("#modal-shadow");
    this.modalBody = $('.modal')
    this.modalDisplay = $(".modal-body");
// Binding
    this.clickHandle = this.clickHandle.bind(this);
  }

show(errorMessage){
    
    this.modalShadow.show();
    this.modalBody.show(); 
    this.modalDisplay.text('this.barcodeNumber = returnData; //TODO: Add error check enousre data is there!');
    console.log('went through');
   

  }
hideModal(){
    console.log("Hide Modal");
    this.modalShadow.hide();
    this.modalBody.hide();
    this.errorMessage = null;
}
clickHandle() {  
    console.log("modal event ", event);
    this.hideModal();
  }
}
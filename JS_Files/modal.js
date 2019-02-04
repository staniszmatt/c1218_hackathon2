class Modal_error_message {
	constructor(domInformation){
    // this.modalButton = $("#modal-button");
    // this.modalShadow = $("#modal-shadow");
    // this.modalBody= $("#modal-body");
    // this.modalDisplay = $(".modal-message");

    // this.modalButton = initialization.domInformation.
    this.domInformation = domInformation;
    this.modalShadow = this.domInformation.modalShadow;
    this.modalBody = this.domInformation.modalBody;
    this.modalDisplay = this.domInformation.modalDisplayText;
// Binding
    this.show = this.show.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

    show(errorMessage){
        
        this.modalShadow.show();
        this.modalBody.show(); 
        this.modalDisplay.text(errorMessage);
        console.log('went through');
    }
    hideModal(){
        console.log("Hide Modal");
        this.modalShadow.hide();
        this.modalBody.hide();
        this.errorMessage = null;
    }
}   
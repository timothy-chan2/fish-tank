class BiteFish extends Fish {

  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/bite_fish.gif'; // Set the image
  }

  onClick(event) {
    if (this.height < 240) {
      this.height = this.height * 2;
      this.width = this.width * 2;
    }
  }
}

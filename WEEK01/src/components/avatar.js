class Avatar {
    constructor(imgUrl, name) {
        this.url = imgUrl;
        this.name = name;
    }

    // <img src="....url" alt="...name">
    render() {
        //const img = new Image();  // this same as line below.
        const img = document.createElement('img');  // creating an element img
        img.src = this.url;   // setting the whatever the source it is
        img.alt = this.name;  // setting the name whatever it is
        img.title = this.name;  // if you hover the mouse on a top of the image we're calling it the title
        img.className = 'profile-avatar';  // giving a class name so we can style it later on
        img.height = 128; 

        return img;
    }
}

module.exports = Avatar;
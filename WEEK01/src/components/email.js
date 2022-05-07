class Email {
    constructor(email) {
        this.email = email;
    }

    render() {
        // <h3><a>...
        const link = document.createElement('a');  // making an anchor tag
        link.href = `mailto:${this.email}`;  // mailto:whoever@whenever.com
        link.innerHTML = this.email;

        const h3 = document.createElement('h3');
        h3.className = 'profile-email';
        h3.appendChild(link);

        return h3;
    }
}

module.exports = Email;
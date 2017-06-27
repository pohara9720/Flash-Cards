function Basic(front, back) {
    if (this instanceof Basic) {
        this.front = front,
            this.back = back,
            console.log(front);
        console.log(back);


    } else {
        return new Basic(front, back);
    }
}

module.exports = Basic;

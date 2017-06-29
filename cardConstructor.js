function Basic(front, back, image) {
    if (this instanceof Basic) {
        this.front = front,
        this.back = back,
        this.image = image
    } else {
        return new Basic(front, back, image);
    }
}

// module.exports = Basic;

function maskify(a) {
    return a.replace(/.(?=.{4})/g, '#');
}

module.exports = maskify
function convert(string) {
    var reg = new RegExp("&");
    return reg.test(string);
}


console.log(convert("Dolce & Gabbana"));
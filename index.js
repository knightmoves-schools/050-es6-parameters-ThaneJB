var calculateTotal = (subtotal, shipping = 2.50) => {
    return subtotal + shipping;
};

var printTopThreeHeadlines = (...value) => {
    return value[0], value[1], value[2];
};

headlines = printTopThreeHeadlines(`first headline\nsecond headline\nthird headline`);

var headlines = (`first headline\nsecond headline\nthird headline`);
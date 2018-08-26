function getMin(...args) {
    let minInt = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] < minInt) {
            minInt = args[i];
        }
    }
    return minInt;
}

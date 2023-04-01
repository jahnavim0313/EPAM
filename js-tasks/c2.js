function basicOp(o, v1, v2) {
    switch (o) {
        case '+':
            return v1 + v2;
        case '-':
            return v1 - v2;
        case '*':
            return v1 * v2;
        case '/':
            return v1 / v2;
        default:
            return 0;
    }
}
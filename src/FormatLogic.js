const INTEGER_FORMATTER = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
});

export function formateOperand(operand) {
    if (operand == null) return;
    const [integer, decimal] = operand.split(".");
    if (decimal == null) return INTEGER_FORMATTER.format(integer);
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

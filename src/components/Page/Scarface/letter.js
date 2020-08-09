export const l = (letter) => {
  return {
    A:   '0000000 0011100 0100010 0100010 0111110 0100010 0100010 0100010 0000000',
    B:   '0000000 0111100 0100010 0100010 0111100 0100010 0100010 0111100 0000000',
    C:   '0000000 0011100 0100010 0100000 0100000 0100000 0100010 0011100 0000000',
    D:   '0000000 0111100 0100010 0100010 0100010 0100010 0100010 0111100 0000000',
    E:   '0000000 0111110 0100000 0100000 0111100 0100000 0100000 0111110 0000000',
    F:   '0000000 0111110 0100000 0100000 0111100 0100000 0100000 0100000 0000000',
    G:   '0000000 0011100 0100010 0100000 0100000 0100110 0100010 0011100 0000000',
    H:   '0000000 0100010 0100010 0100010 0111110 0100010 0100010 0100010 0000000',
    I:   '0000000 0011100 0001000 0001000 0001000 0001000 0001000 0011100 0000000',
    J:   '0000000 0000010 0000010 0000010 0000010 0000010 0100010 0011100 0000000',
    K:   '0000000 0100010 0100100 0101000 0110000 0101000 0100100 0100010 0000000',
    L:   '0000000 0100000 0100000 0100000 0100000 0100000 0100000 0111110 0000000',
    M:   '0000000 0010100 0101010 0101010 0101010 0100010 0100010 0100010 0000000',
    N:   '0000000 0100010 0100010 0110010 0101010 0100110 0100010 0100010 0000000',
    O:   '0000000 0011100 0100010 0100010 0100010 0100010 0100010 0011100 0000000',
    P:   '0000000 0111100 0100010 0100010 0111100 0100000 0100000 0100000 0000000',
    Q:   '0000000 0011100 0100010 0100010 0100010 0100010 0100100 0011010 0000000',
    R:   '0000000 0111100 0100010 0100010 0111100 0101000 0100100 0100010 0000000',
    S:   '0000000 0011100 0100010 0100000 0011100 0000010 0100010 0011100 0000000',
    T:   '0000000 0111110 0001000 0001000 0001000 0001000 0001000 0001000 0000000',
    U:   '0000000 0100010 0100010 0100010 0100010 0100010 0100010 0011100 0000000',
    V:   '0000000 0100010 0100010 0100010 0100010 0100010 0010100 0001000 0000000',
    W:   '0000000 0100010 0100010 0100010 0101010 0101010 0101010 0010100 0000000',
    X:   '0000000 0100010 0100010 0010100 0001000 0010010 0100010 0100010 0000000',
    Y:   '0000000 0100010 0100010 0010100 0001000 0001000 0001000 0001000 0000000',
    Z:   '0000000 0111110 0000010 0000100 0001000 0010000 0100000 0111110 0000000',
    ' ': '0000000 0000000 0000000 0000000 0000000 0000000 0000000 0000000 0000000',
    '.': '0000000 0000000 0000000 0000000 0000000 0000000 0000000 0001000 0000000',
    '<': '0000000 0000000 0000100 0001000 0010000 0001000 0000100 0000000 0000000',
    '3': '0000000 0011100 0100010 0000010 0001100 0000010 0100010 0011100 0000000',
    '#': '0000000 0000000 0000000 0000000 0000000 0000000 0000000 0000000 0000000',
  }[letter];
}

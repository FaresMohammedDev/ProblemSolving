#include <iostream>
#include <vector>

void matrixMultiplyRecursive(const std::vector<std::vector<int>>& A,
    const std::vector<std::vector<int>>& B,
    std::vector<std::vector<int>>& C,
    int rowA, int colA,
    int rowB, int colB,
    int rowC, int colC,
    int n) {
    if (n == 1) {
        C[rowC][colC] += A[rowA][colA] * B[rowB][colB];
        return;
    }

    int half = n / 2;

    matrixMultiplyRecursive(A, B, C, rowA, colA, rowB, colB, rowC, colC, half);
    matrixMultiplyRecursive(A, B, C, rowA, colA + half, rowB + half, colB, rowC, colC, half);

    matrixMultiplyRecursive(A, B, C, rowA, colA, rowB, colB + half, rowC, colC + half, half);
    matrixMultiplyRecursive(A, B, C, rowA, colA + half, rowB + half, colB + half, rowC, colC + half, half);

    matrixMultiplyRecursive(A, B, C, rowA + half, colA, rowB, colB, rowC + half, colC, half);
    matrixMultiplyRecursive(A, B, C, rowA + half, colA + half, rowB + half, colB, rowC + half, colC, half);

    matrixMultiplyRecursive(A, B, C, rowA + half, colA, rowB, colB + half, rowC + half, colC + half, half);
    matrixMultiplyRecursive(A, B, C, rowA + half, colA + half, rowB + half, colB + half, rowC + half, colC + half, half);
}

void matrixMultiply(const std::vector<std::vector<int>>& A,
    const std::vector<std::vector<int>>& B,
    std::vector<std::vector<int>>& C) {
    int n = A.size();
    matrixMultiplyRecursive(A, B, C, 0, 0, 0, 0, 0, 0, n);
}

int main() {
    int n;
    if (!(std::cin >> n)) return 0;

    std::vector<std::vector<int>> A(n, std::vector<int>(n)),
        B(n, std::vector<int>(n)),
        C(n, std::vector<int>(n, 0));

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            std::cin >> A[i][j];
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            std::cin >> B[i][j];
        }
    }

    matrixMultiply(A, B, C);

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            std::cout << C[i][j] << " ";
        }
        std::cout << "\n";
    }

    return 0;
}
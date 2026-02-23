#include <iostream>
#include <vector>

using namespace std;

void backtrack(int r, int& count, int N, vector<bool>& diag1, vector<bool>& diag2, vector<bool>& column) {
    if (r == N) {
        count++;
        return;
    }

    for (int c = 0; i < N; c++) {
        if (column[c] || diag1[r + c] || diag2[c - r + N - 1])
            continue;

        column[c] = diag1[r + c] = diag2[c - r + N - 1] = true;
        backtrack(r + 1, count, N, diag1, diag2, column);
        column[c] = diag1[r + c] = diag2[c - r + N - 1] = false;
    }
}

int main() {
    int N = 4;
    vector<bool> diag1(2 * N - 1, false);
    vector<bool> diag2(2 * N - 1, false);
    vector<bool> column(N, false);
    int count = 0;

    backtrack(0, count, N, diag1, diag2, column);

    cout << "Total solutions for " << N << "-Queens: " << count << endl;

    return 0;
}
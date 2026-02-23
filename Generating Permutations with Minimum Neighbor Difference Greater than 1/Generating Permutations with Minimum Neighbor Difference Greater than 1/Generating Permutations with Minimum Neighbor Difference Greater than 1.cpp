#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>

using namespace std;

int main() {
    const int N = 5;
    vector<int> P = { 1, 2, 3, 4, 5 };
    vector<vector<int>> desiredSolutions;

    sort(P.begin(), P.end());

    do {
        int minimumDifference = INT_MAX;
        for (int i = 0; i < N - 1; i++) {
            int difference = abs(P[i] - P[i + 1]);
            if (difference < minimumDifference) {
                minimumDifference = difference;
            }
        }

        if (minimumDifference > 1) {
            desiredSolutions.push_back(P);
        }

    } while (next_permutation(P.begin(), P.end()));

    for (const auto& sol : desiredSolutions) {
        for (int x : sol) {
            cout << x << " ";
        }
        cout << endl;
    }

    return 0;
}
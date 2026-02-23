#include <iostream>
#include <vector>

using namespace std;

int main() {
    int N = 6;
    vector<int> setInt = { 2, 4, 6, 4, 9, 10 };
    int S = 19;
    bool foundSubset = false;

    for (int i = 0; i < N - 3; i++) {
        for (int j = i + 1; j < N - 2; j++) {
            for (int k = j + 1; k < N - 1; k++) {
                for (int l = k + 1; l < N; l++) {
                    if (setInt[i] + setInt[j] + setInt[k] + setInt[l] == S) {
                        foundSubset = true;
                        cout << "Subset found: " << setInt[i] << ", " << setInt[j]
                            << ", " << setInt[k] << ", " << setInt[l] << endl;
                    }
                }
            }
        }
    }

    if (!foundSubset) {
        cout << "No subset of 4 elements adds up to " << S << endl;
    }

    return 0;
}
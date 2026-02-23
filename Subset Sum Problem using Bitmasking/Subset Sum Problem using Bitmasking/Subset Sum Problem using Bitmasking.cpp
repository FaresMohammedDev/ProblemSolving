#include <iostream>
#include <vector>

using namespace std;

int main() {
    int N = 6;
    vector<int> setOfInt = { 2, 4, 6, 4, 9, 10 };
    int S = 19;
    bool foundSubset = false;

    for (int i = 0; i < (1 << N); i++) {
        int currentSubsetSum = 0;
        vector<int> currentSubset;

        for (int j = 0; j < N; j++) {
            if (i & (1 << j)) {
                currentSubsetSum += setOfInt[j];
                currentSubset.push_back(setOfInt[j]);
            }
        }

        if (currentSubsetSum == S) {
            foundSubset = true;
            cout << "Subset found: ";
            for (int num : currentSubset) cout << num << " ";
            cout << "(Sum = " << S << ")" << endl;
        }
    }

    if (!foundSubset) {
        cout << "No subset adds up to " << S << endl;
    }

    return 0;
}
#include <iostream>
#include <vector>

using namespace std;

bool R(int i, int S, int N, int T, const vector<int>& setOfInt) {
    if (i == N) {
        return S == T;
    }

    return R(i + 1, S + setOfInt[i], N, T, setOfInt) || R(i + 1, S, N, T, setOfInt);
}

int main() {
    int N = 6;
    vector<int> setOfInt = { 2, 4, 6, 4, 9, 10 };
    int T = 19;

    bool foundSubset = R(0, 0, N, T, setOfInt);

    if (foundSubset) {
        cout << "A subset with sum " << T << " exists." << endl;
    }
    else {
        cout << "No subset with sum " << T << " found." << endl;
    }

    return 0;
}
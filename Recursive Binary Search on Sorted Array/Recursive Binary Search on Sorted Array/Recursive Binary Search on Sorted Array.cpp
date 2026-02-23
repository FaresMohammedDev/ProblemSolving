#include <iostream>
#include <vector>

using namespace std;

int binarySearch(const vector<int>& arr, int s, int e, int x) {
    if (s > e) {
        return -1;
    }

    int m = s + (e - s) / 2;

    if (arr[m] == x) {
        return m;
    }

    if (arr[m] > x) {
        return binarySearch(arr, s, m - 1, x);
    }

    return binarySearch(arr, m + 1, e, x);
}

int main() {
    vector<int> arr = { 2, 3, 5, 6, 7, 9, 11, 14 };
    int x = 9;

    int result = binarySearch(arr, 0, arr.size() - 1, x);

    if (result != -1) {
        cout << "Element found at index: " << result << endl;
    }
    else {
        cout << "Element not found" << endl;
    }

    return 0;
}
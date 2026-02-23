#include <iostream>
#include <vector>

using namespace std;

int binarySearchIterative(const vector<int>& arr, int x) {
    int s = 0;
    int e = arr.size() - 1;

    while (s <= e) {
        int m = s + (e - s) / 2;

        if (arr[m] == x) {
            return m;
        }

        if (arr[m] > x) {
            e = m - 1;
        }
        else {
            s = m + 1;
        }
    }
    return -1;
}

int main() {
    vector<int> arr = { 2, 3, 5, 6, 7, 9, 11, 14 };
    int x = 9;

    int result = binarySearchIterative(arr, x);

    if (result != -1) {
        cout << "Element found at index " << result << endl;
    }
    else {
        cout << "Element not found in the array" << endl;
    }

    return 0;
}
#include <iostream>
#include <vector>

using namespace std;

void merge(vector<int>& A, int s, int m, int e) {
    int nL = m - s + 1;
    int nR = e - m;

    vector<int> L(nL);
    vector<int> R(nR);

    for (int i = 0; i < nL; i++)
        L[i] = A[s + i];
    for (int j = 0; j < nR; j++)
        R[j] = A[m + j + 1];

    int i = 0, j = 0, k = s;

    while (i < nL && j < nR) {
        if (L[i] <= R[j])
            A[k++] = L[i++];
        else
            A[k++] = R[j++];
    }

    while (i < nL)
        A[k++] = L[i++];

    while (j < nR)
        A[k++] = R[j++];
}

void mergeSort(vector<int>& A, int s, int e) {
    if (s < e) {
        int m = s + (e - s) / 2;
        mergeSort(A, s, m);
        mergeSort(A, m + 1, e);
        merge(A, s, m, e);
    }
}

int main() {
    vector<int> A = { 12, 3, 7, 9, 14, 6, 11, 2 };
    int n = A.size();

    cout << "Original array: ";
    for (int x : A) cout << x << " ";
    cout << endl;

    mergeSort(A, 0, n - 1);

    cout << "Sorted array: ";
    for (int x : A) cout << x << " ";
    cout << endl;

    return 0;
}
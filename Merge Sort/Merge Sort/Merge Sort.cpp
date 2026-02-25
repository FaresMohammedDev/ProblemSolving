#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& LeftArr, vector<int>& RightArr, vector<int>& arr) {

	int LeftSize = arr.size() / 2;
	int RightSize = arr.size() - LeftSize;
	int i = 0;
	int l = 0; 
	int r = 0;

	while (l < LeftSize && r < RightSize) {
		if (LeftArr[l] < RightArr[r]) {
			arr[i] = LeftArr[l];
			i++;
			l++;
		}
		else {
			arr[i] = RightArr[r];
			i++;
			r++;
		}
	}
		while (l < LeftSize) {
			arr[i] = LeftArr[l];
			i++;
			l++;
		}
		while (r < RightSize) {
			arr[i] = RightArr[r];
			i++;
			r++;
		}
	

}

void MergeSort(vector<int>& arr) {
	int size = arr.size();
	if (size <= 1) return;

	int mid = size / 2;
	vector<int> LeftArr(mid);
	vector<int> RightArr(size - mid);

	int i = 0;
	int j = 0;

	for (; i < size; i++) {
		if (i < mid) {
			LeftArr[i] = arr[i];
		}
		else {
			RightArr[j] = arr[i];
			j++;
		}
	}
	MergeSort(LeftArr);
	MergeSort(RightArr);
	merge(LeftArr, RightArr, arr);
}

int main() {
	int size;
	cout << "Enter size of arr: "; cin >> size;
	vector<int> arr(size);

	cout << "Enter numbers to sort it: ";
	for (int i = 0; i < size; i++) {
		cin >> arr[i];
	}

	cout << "Before sorting! \n";
	for (int i = 0; i < size; i++) {
		cout << arr[i] << ", ";
	}
	cout << "\n";
	MergeSort(arr);
	cout << "After sorting! \n";
	for (int i = 0; i < size; i++) {
		cout << arr[i] << ", ";
	}
}
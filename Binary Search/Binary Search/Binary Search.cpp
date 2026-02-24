#include <iostream>
#include <vector>
using namespace std;

int BinarySearch(int target, vector<int> arr, int size) {
	int low = 0;
	int high = size;
	int temp = 0;
	while (low <= high) {
		int middle = low + (high - low) / 2;
		int value = arr[middle];
		temp++;
		cout << "in try number: " << temp << " middle = " << middle << "\n";
		if (middle < target) low = middle + 1;
		else if (middle > target) high = middle - 1;
		else return middle;
	}
	return -1;
}

int main() {
	cout << "Enter size of arr: "; int size; cin >> size;
	vector<int> arr(size);
	cout << "Enter the target: "; int target; cin >> target;
	for (int i = 0; i < size; i++) arr[i] = i;
	int index = BinarySearch(target, arr, size);
	if (index != -1) cout << "Number " << target << " Founded in " << index;
	else cout << "The target not founded!";
}
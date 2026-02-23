#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool are_vertices_adjacent(unordered_map<int, vector<int>>& adj_list, int u, int v) {
    for (auto neighbor : adj_list[u]) {
        if (neighbor == v) {
            return true;
        }
    }
    return false;
}

int main() {
    unordered_map<int, vector<int>> adj_list;
    adj_list[1] = { 2, 3 };
    adj_list[2] = { 1 };

    if (are_vertices_adjacent(adj_list, 1, 2)) {
        cout << "True" << endl;
    }
    else {
        cout << "False" << endl;
    }
}
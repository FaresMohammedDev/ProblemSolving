#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

unordered_map<int, vector<int>> adjacency_list_from_edges(vector<pair<int, int>> edges) {
    unordered_map<int, vector<int>> adj_list;

    for (auto edge : edges) {
        int u = edge.first;
        int v = edge.second;

        adj_list[u].push_back(v);
        adj_list[v].push_back(u);
    }
    return adj_list;
}

int main() {
    vector<pair<int, int>> edges = { {1, 2}, {2, 3}, {3, 1}, {4, 1} };

    unordered_map<int, vector<int>> adj = adjacency_list_from_edges(edges);

    for (auto const& [node, neighbors] : adj) {
        cout << node << ": ";
        for (int neighbor : neighbors) {
            cout << neighbor << " ";
        }
        cout << endl;
    }
}
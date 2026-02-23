#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> adjacency_matrix_from_edges(vector<pair<int, int>> edges, int num_vertices) {
    vector<vector<int>> matrix(num_vertices, vector<int>(num_vertices, 0));

    for (auto edge : edges) {
        int u = edge.first;
        int v = edge.second;
        matrix[u][v] = 1;
    }
    return matrix;
}

int main() {
    int n = 4;
    vector<pair<int, int>> edges = { {0, 1}, {1, 2}, {2, 3}, {3, 0} };

    vector<vector<int>> result = adjacency_matrix_from_edges(edges, n);

    cout << "Adjacency Matrix:" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << result[i][j] << " ";
        }
        cout << endl;
    }
}
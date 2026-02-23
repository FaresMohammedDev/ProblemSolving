#include <iostream>
#include <vector>

using namespace std;

bool are_vertices_adjacent(const vector<vector<int>>& adj_matrix, int u, int v) {
    if (u < adj_matrix.size() && v < adj_matrix[u].size()) {
        return adj_matrix[u][v] == 1;
    }
    return false;
}

int main() {
    vector<vector<int>> matrix = {
        {0, 1, 0},
        {1, 0, 1},
        {0, 1, 0}
    };

    int u = 0, v = 1;
    if (are_vertices_adjacent(matrix, u, v)) {
        cout << "Vertices " << u << " and " << v << " are adjacent." << endl;
    }
    else {
        cout << "Vertices " << u << " and " << v << " are NOT adjacent." << endl;
    }
}
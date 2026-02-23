#include <iostream>
#include <vector>

using namespace std;

void dfs(vector<vector<int>>& graph, vector<bool>& visited, int start) {
    visited[start] = true;
    cout << start << " ";

    for (int neighbor : graph[start]) {
        if (!visited[neighbor]) {
            dfs(graph, visited, neighbor);
        }
    }
}

int main() {
    vector<vector<int>> graph = { {}, {2, 3}, {1, 4}, {1, 4, 5}, {2, 3, 5}, {3, 4} };

    int start = 1;
    int n = graph.size();
    vector<bool> visited(n, false);

    dfs(graph, visited, start);

    return 0;
}
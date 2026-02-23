#include <iostream>
#include <vector>
#include <queue>

using namespace std;

void bfs(int n, vector<vector<int>>& adj, int start) {
    vector<bool> visited(n, false);
    queue<int> q;

    visited[start] = true;
    q.push(start);

    while (!q.empty()) {
        int cur = q.front();
        q.pop();
        cout << cur << " ";

        for (int next : adj[cur]) {
            if (!visited[next]) {
                visited[next] = true;
                q.push(next);
            }
        }
    }
}

int main() {
    int n, m;
    if (!(cin >> n >> m)) return 0;

    vector<vector<int>> adj(n);

    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        if (u < n && v < n) {
            adj[u].push_back(v);
            adj[v].push_back(u);
        }
    }

    int start;
    cin >> start;

    if (start < n) {
        bfs(n, adj, start);
    }

    return 0;
}
#include <iostream>
#include <vector>
#include <climits>

using namespace std;

struct Edge {
    int source;
    int destination;
    int weight;
};

void BellmanFord(vector<Edge>& edges, int numVertices, int source) {
    vector<int> distance(numVertices, INT_MAX);
    distance[source] = 0;

    for (int i = 0; i < numVertices - 1; ++i) {
        for (const auto& edge : edges) {
            int u = edge.source;
            int v = edge.destination;
            int weight = edge.weight;
            if (distance[u] != INT_MAX && distance[u] + weight < distance[v]) {
                distance[v] = distance[u] + weight;
            }
        }
    }

    for (const auto& edge : edges) {
        int u = edge.source;
        int v = edge.destination;
        int weight = edge.weight;
        if (distance[u] != INT_MAX && distance[u] + weight < distance[v]) {
            cout << "Negative cycle detected. The graph contains a negative weight cycle." << endl;
            return;
        }
    }

    for (int i = 0; i < numVertices; ++i) {
        cout << "Distance from source to vertex " << i << ": ";
        if (distance[i] == INT_MAX) cout << "Infinity" << endl;
        else cout << distance[i] << endl;
    }
}

int main() {
    int numVertices = 5;
    vector<Edge> edges = {
        {0, 1, -1}, {0, 2, 4}, {1, 2, 3},
        {1, 3, 2}, {1, 4, 2}, {3, 2, 5},
        {3, 1, 1}, {4, 3, -3}
    };

    int source = 0;
    BellmanFord(edges, numVertices, source);

    return 0;
}
#include <iostream>
#include <vector>
#include <queue>
#include <limits>

using namespace std;

struct Node {
    int vertex;
    int distance;
};

struct NodeComparator {
    bool operator()(const Node& lhs, const Node& rhs) const {
        return lhs.distance > rhs.distance;
    }
};

vector<int> Dijkstra(const vector<vector<pair<int, int>>>& graph, int source) {
    int numVertices = graph.size();
    vector<int> distance(numVertices, numeric_limits<int>::max());
    distance[source] = 0;

    priority_queue<Node, vector<Node>, NodeComparator> pq;
    pq.push({ source, 0 });

    while (!pq.empty()) {
        int u = pq.top().vertex;
        int dist = pq.top().distance;
        pq.pop();

        if (dist > distance[u]) continue;

        for (const auto& neighbor : graph[u]) {
            int v = neighbor.first;
            int weight = neighbor.second;
            int newDist = distance[u] + weight;

            if (newDist < distance[v]) {
                distance[v] = newDist;
                pq.push({ v, newDist });
            }
        }
    }
    return distance;
}

int main() {
    vector<vector<pair<int, int>>> graph = {
        {{1, 4}, {2, 1}},
        {{3, 2}},
        {{1, 2}, {3, 5}},
        {{}}
    };

    int source = 0;
    vector<int> shortestDistances = Dijkstra(graph, source);

    for (int i = 0; i < shortestDistances.size(); ++i) {
        cout << "Distance from vertex " << source << " to vertex " << i << ": ";
        if (shortestDistances[i] == numeric_limits<int>::max()) {
            cout << "Not reachable" << endl;
        }
        else {
            cout << shortestDistances[i] << endl;
        }
    }
    return 0;
}
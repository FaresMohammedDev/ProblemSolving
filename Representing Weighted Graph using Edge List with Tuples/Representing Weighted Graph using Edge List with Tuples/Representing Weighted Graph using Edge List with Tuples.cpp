#include <iostream>
#include <vector>
#include <tuple>

using namespace std;

int main() {
    vector<tuple<int, int, int>> edgeList;

    edgeList.push_back(make_tuple(0, 1, 2));
    edgeList.push_back(make_tuple(0, 3, 3));
    edgeList.push_back(make_tuple(1, 2, 5));
    edgeList.push_back(make_tuple(1, 4, 1));
    edgeList.push_back(make_tuple(2, 5, 4));
    edgeList.push_back(make_tuple(3, 4, 6));
    edgeList.push_back(make_tuple(4, 5, 5));

    for (auto edge : edgeList) {
        int u, v, w;
        tie(u, v, w) = edge;
        cout << "Edge from vertex " << u << " to vertex " << v
            << " with weight " << w << endl;
    }
}
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

const int MAXN = 80005;
const int LOG = 17;

vector<int> tree[MAXN];
int ancestor[MAXN][LOG], depth[MAXN], weight[MAXN];

void dfs(int v, int p) {
    depth[v] = depth[p] + 1;
    ancestor[v][0] = p;

    for (int i = 1; i < LOG; i++) {
        ancestor[v][i] = ancestor[ancestor[v][i - 1]][i - 1];
    }

    for (auto u : tree[v]) {
        if (u != p) dfs(u, v);
    }
}

int query(int v, int P) {
    if (weight[v] >= P) return v;

    for (int i = LOG - 1; i >= 0; i--) {
        if (ancestor[v][i] != 0 && weight[ancestor[v][i]] < P) {
            v = ancestor[v][i];
        }
    }
    return ancestor[v][0];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int N, Q;
    if (!(cin >> N >> Q)) return 0;

    for (int i = 1; i <= N; i++)
        cin >> weight[i];

    for (int i = 1; i < N; i++) {
        int a, b;
        cin >> a >> b;
        tree[a].push_back(b);
        tree[b].push_back(a);
    }

    weight[0] = -1;
    dfs(1, 0);

    while (Q--) {
        int v, P;
        cin >> v >> P;
        int res = query(v, P);
        if (res == 0 || weight[res] < P) res = -1;
        cout << res << "\n";
    }

    return 0;
}
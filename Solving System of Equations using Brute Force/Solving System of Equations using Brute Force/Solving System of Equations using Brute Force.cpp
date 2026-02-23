#include <iostream>
#include <vector>

using namespace std;

bool distinct(int x, int y, int z) {
    return x != y && y != z && x != z;
}

bool eqOneHold(int x, int y, int z, int A) {
    return x + y + z == A;
}

bool eqTwoHold(int x, int y, int z, int B) {
    return x * y * z == B;
}

bool eqThreeHold(int x, int y, int z, int C) {
    return x * x + y * y + z * z == C;
}

int main() {
    int A = 6, B = 6, C = 14;
    vector<vector<int>> desiredSolutions;

    for (int x = -100; x <= 100; x++) {
        for (int y = -100; y <= 100; y++) {
            for (int z = -100; z <= 100; z++) {
                if (distinct(x, y, z) &&
                    eqOneHold(x, y, z, A) &&
                    eqTwoHold(x, y, z, B) &&
                    eqThreeHold(x, y, z, C)) {

                    desiredSolutions.push_back({ x, y, z });
                }
            }
        }
    }

    for (const auto& sol : desiredSolutions) {
        cout << "Solution found: x=" << sol[0] << ", y=" << sol[1] << ", z=" << sol[2] << endl;
    }

    return 0;
}
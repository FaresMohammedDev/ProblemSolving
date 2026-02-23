#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>

using namespace std;

const int MAX_STATIONS = 100005;
double stations[MAX_STATIONS];
int N;
double D;

bool canCross(double capacity) {
    double fuel = capacity;
    stations[0] = 0;

    for (int i = 1; i <= N; i++) {
        double distanceNeeded = stations[i] - stations[i - 1];
        if (capacity < distanceNeeded) return false;

        if (fuel < distanceNeeded) {
            return false;
        }
        fuel -= distanceNeeded;
        fuel = capacity;
    }

    return fuel >= (D - stations[N]);
}

double binarySearch() {
    double low = 0.0, high = D;
    for (int i = 0; i < 100; i++) {
        double mid = (low + high) / 2;
        if (canCross(mid)) {
            high = mid;
        }
        else {
            low = mid;
        }
    }
    return high;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    if (!(cin >> D >> N)) return 0;

    for (int i = 1; i <= N; i++) {
        cin >> stations[i];
    }

    sort(stations + 1, stations + N + 1);

    double result = binarySearch();
    cout << fixed << setprecision(3) << result << endl;

    return 0;
}
#include <iostream>
#include <vector>
#include <cmath>
#include <cfloat>

using namespace std;

typedef pair<double, double> Point;

double calculate_distance(Point p1, Point p2) {
    double dx = p1.first - p2.first;
    double dy = p1.second - p2.second;
    return sqrt(dx * dx + dy * dy);
}

pair<Point, Point> closest_pair(vector<Point>& points) {
    pair<Point, Point> closest = make_pair(points[0], points[1]);
    double min_dist = calculate_distance(points[0], points[1]);

    for (size_t i = 0; i < points.size(); i++) {
        for (size_t j = i + 1; j < points.size(); j++) {
            double dist = calculate_distance(points[i], points[j]);
            if (dist < min_dist) {
                min_dist = dist;
                closest = make_pair(points[i], points[j]);
            }
        }
    }
    return closest;
}

int main() {
    vector<Point> points = { {0.0, 0.0}, {1.0, 1.0}, {2.0, 2.0}, {3.0, 3.0}, {0.1, 0.1} };

    if (points.size() < 2) return 0;

    pair<Point, Point> result = closest_pair(points);

    cout << "Closest points: (" << result.first.first << ", " << result.first.second << ") and ("
        << result.second.first << ", " << result.second.second << ")" << endl;

    return 0;
}
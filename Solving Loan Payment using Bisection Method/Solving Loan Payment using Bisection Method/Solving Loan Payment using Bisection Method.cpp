#include <iostream>
#include <cmath>

using namespace std;

const double P_amount = 30000;
const double r_rate = 0.07 / 12;
const int n_months = 60;

double F(double d) {
    return d * ((1 - pow(1 + r_rate, -n_months)) / r_rate) - P_amount;
}

double bisectionMethod(double a, double b, double epsilon) {
    if (F(a) * F(b) >= 0) {
        return -1;
    }

    double c = a;
    while ((b - a) >= epsilon) {
        c = (a + b) / 2;

        if (abs(F(c)) < 1e-9)
            break;
        else if (F(c) * F(a) < 0)
            b = c;
        else
            a = c;
    }
    return c;
}

int main() {
    double a = 0, b = P_amount;
    double epsilon = 0.0001;

    double d = bisectionMethod(a, b, epsilon);

    if (d != -1) {
        cout << "Monthly payment: $" << d << endl;
    }
    else {
        cout << "No root found in the given interval." << endl;
    }

    return 0;
}
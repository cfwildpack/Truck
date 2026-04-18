#include <iostream>
using namespace std;

class LoadEngine {
public:
    double calculateLoadFactor(double currentLoad, double maxLoad) {
        return (currentLoad / maxLoad) * 100.0;
    }
};

int main() {
    LoadEngine engine;
    double factor = engine.calculateLoadFactor(15000, 20000);
    cout << "Load Factor: " << factor << "%" << endl;
    return 0;
}

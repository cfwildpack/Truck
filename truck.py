class Truck:
    def __init__(self, model, fuel=600):
        self.model = model
        self.fuel = fuel
        self.distance = 0

    def drive(self, km):
        consumption = km * 0.35
        if self.fuel >= consumption:
            self.distance += km
            self.fuel -= consumption
            print(f"{self.model} drove {km} km.")
        else:
            print("Not enough fuel.")

    def status(self):
        print(f"Distance traveled: {self.distance} km")
        print(f"Remaining fuel: {self.fuel:.2f} liters")

if __name__ == "__main__":
    truck = Truck("TRX-500")
    truck.drive(50)
    truck.status()

public class TruckModel {
    private String model;
    private int maxLoad;

    public TruckModel(String model, int maxLoad) {
        this.model = model;
        this.maxLoad = maxLoad;
    }

    public void displayInfo() {
        System.out.println("Model: " + model);
        System.out.println("Max Load: " + maxLoad + " kg");
    }

    public static void main(String[] args) {
        TruckModel truck = new TruckModel("TRX-500", 20000);
        truck.displayInfo();
    }
}

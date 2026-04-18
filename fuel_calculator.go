package main

import "fmt"

func calculateFuelUsage(distance float64, consumption float64) float64 {
	return distance * consumption
}

func main() {
	usage := calculateFuelUsage(100, 0.35)
	fmt.Printf("Fuel used: %.2f liters\n", usage)
}

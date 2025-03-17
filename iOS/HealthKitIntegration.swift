// iOS/HealthKitIntegration.swift
import HealthKit

func requestHeartRateAuthorization() {
  let healthStore = HKHealthStore()
  let heartRateType = HKQuantityType.quantityType(forIdentifier: .heartRate)!
  healthStore.requestAuthorization(toShare: [], read: [heartRateType]) { (success, error) in
    // Логика подключения
  }
}

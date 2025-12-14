//! Module principal pour l'émergence de conscience.

use std::collections::HashMap;
use ndarray::Array1;

pub struct EmergentConsciousness {
    sensors: HashMap<String, MultiModalSensor>,
    global_workspace: FC496Cell,
    memory: MemoryBuffer,
    world_model: PredictiveModel,
    ignition_threshold: f32,
}

impl EmergentConsciousness {
    pub fn new() -> Self {
        let mut sensors = HashMap::new();
        sensors.insert("vision".to_string(), MultiModalSensor::new(512, 0xVISION));
        sensors.insert("audio".to_string(), MultiModalSensor::new(256, 0xAUDIO));

        Self {
            sensors,
            global_workspace: FC496Cell::new(),
            memory: MemoryBuffer::new(),
            world_model: PredictiveModel::new(),
            ignition_threshold: 0.75,
        }
    }

    pub fn run_cycle(&mut self, sensory_inputs: HashMap<String, Array1<f64>>) -> Option<FC496Cell> {
        // 1. Fusion sensorielle
        let (fused_cell, energy) = self.emergent_sensor_fusion(sensory_inputs);

        // 2. Test d'ignition
        if energy > self.ignition_threshold {
            self.global_workspace = fused_cell;

            // 3. Boucle de réverbération
            let (action, thoughts) = self.reverberation_loop();

            // 4. Mémorisation
            self.memory.store(&thoughts);

            action
        } else {
            None
        }
    }
}

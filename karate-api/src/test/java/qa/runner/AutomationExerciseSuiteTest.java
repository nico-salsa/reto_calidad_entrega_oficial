package qa.runner;

import org.junit.jupiter.api.Test;

class AutomationExerciseSuiteTest {

    @Test
    void runAllFeatures() {
        KarateRunnerSupport.runPath("classpath:qa/features", 2);
    }
}

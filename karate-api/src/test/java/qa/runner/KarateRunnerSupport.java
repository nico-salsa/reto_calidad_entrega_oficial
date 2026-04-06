package qa.runner;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;

import static org.junit.jupiter.api.Assertions.assertEquals;

final class KarateRunnerSupport {

    private KarateRunnerSupport() {
    }

    static void runPath(String path, int threads) {
        Results results = Runner.path(path)
                .outputCucumberJson(true)
                .parallel(threads);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }
}

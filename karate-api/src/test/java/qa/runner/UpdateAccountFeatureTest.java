package qa.runner;

import org.junit.jupiter.api.Test;

class UpdateAccountFeatureTest {

    @Test
    void runFeature() {
        KarateRunnerSupport.runPath("classpath:qa/features/accounts/put-update-account.feature", 1);
    }
}

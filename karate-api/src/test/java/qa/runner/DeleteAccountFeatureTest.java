package qa.runner;

import org.junit.jupiter.api.Test;

class DeleteAccountFeatureTest {

    @Test
    void runFeature() {
        KarateRunnerSupport.runPath("classpath:qa/features/accounts/delete-account.feature", 1);
    }
}

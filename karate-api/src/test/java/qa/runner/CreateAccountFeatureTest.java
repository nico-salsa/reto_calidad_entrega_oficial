package qa.runner;

import org.junit.jupiter.api.Test;

class CreateAccountFeatureTest {

    @Test
    void runFeature() {
        KarateRunnerSupport.runPath("classpath:qa/features/accounts/post-create-account.feature", 1);
    }
}

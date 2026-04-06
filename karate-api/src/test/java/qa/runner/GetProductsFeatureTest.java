package qa.runner;

import org.junit.jupiter.api.Test;

class GetProductsFeatureTest {

    @Test
    void runFeature() {
        KarateRunnerSupport.runPath("classpath:qa/features/products/get-products.feature", 1);
    }
}

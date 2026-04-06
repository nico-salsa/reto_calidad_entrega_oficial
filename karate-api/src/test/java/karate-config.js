function fn() {
  var baseUrl = karate.properties['baseUrl'] || karate.properties['karate.baseUrl'] || java.lang.System.getenv('KARATE_BASE_URL') || 'https://automationexercise.com/api';
  karate.configure('connectTimeout', 30000);
  karate.configure('readTimeout', 30000);
  karate.configure('headers', { Accept: 'application/json' });
  return {
    baseUrl: baseUrl,
    env: karate.env || 'qa'
  };
}

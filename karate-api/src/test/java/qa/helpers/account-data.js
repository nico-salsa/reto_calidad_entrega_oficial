function fn() {
  var UUID = Java.type('java.util.UUID');
  var token = UUID.randomUUID().toString().replace(/-/g, '').substring(0, 12);
  var email = 'qa_' + token + '@example.com';
  var password = 'Pass1234!';
  return {
    email: email,
    password: password,
    createPayload: {
      name: 'QA User ' + token,
      email: email,
      password: password,
      title: 'Mr',
      birth_date: '1',
      birth_month: '1',
      birth_year: '1990',
      firstname: 'QA',
      lastname: 'User',
      company: 'QA Lab',
      address1: 'Street 1',
      address2: 'Suite 2',
      country: 'Canada',
      zipcode: '10001',
      state: 'Cundinamarca',
      city: 'Bogota',
      mobile_number: '3000000000'
    },
    updatePayload: {
      name: 'QA Updated ' + token,
      email: email,
      password: password,
      title: 'Mrs',
      birth_date: '2',
      birth_month: '2',
      birth_year: '1991',
      firstname: 'QAX',
      lastname: 'Updated',
      company: 'QA Lab Updated',
      address1: 'Street 9',
      address2: 'Suite 9',
      country: 'India',
      zipcode: '20002',
      state: 'UpdatedState',
      city: 'UpdatedCity',
      mobile_number: '9998887777'
    }
  };
}

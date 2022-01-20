const data = {
  cars: [
    {
      _id: '61e511ac85e81cee2f5f10e1',
      company: 'Audi',
      model: 'A2',
      year: 2003,
      kilometers: 123456,
      fuleType: 'Petrol',
      price: 8199,
      photoUrl: '/photos/cars/audi-a2-2003-8199.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e519bd97e28baf1fbf173d',
      company: 'BMW',
      model: '116',
      year: 2013,
      kilometers: 1231231,
      fuleType: 'Petrol',
      price: 12999,
      photoUrl: '/photos/cars/bmw-116-d-line-urban-2013.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51bf8a123a9867d633a68',
      company: 'BMW',
      model: '320',
      year: 2009,
      kilometers: 655656,
      fuleType: 'Petrol',
      price: 18999,
      photoUrl: '/photos/cars/bmw-320-2009-18000.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51bff445259771c68c42c',
      company: 'BMW',
      model: 'x1',
      year: 2012,
      kilometers: 565656,
      fuleType: 'Diesel',
      price: 24000,
      photoUrl: '/photos/cars/bmw-x1-2012-24999.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c03bb72b91624c3bbef',
      company: 'Ford',
      model: 'Fiesta',
      year: 2008,
      kilometers: 433444,
      fuleType: 'Petrol',
      price: 5590,
      photoUrl: '/photos/cars/ford-fiesta-2008-5950.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c093f208bc1e7a57143',
      company: 'Ford',
      model: 'Fiesta',
      year: 2014,
      kilometers: 343434,
      fuleType: 'Petrol',
      price: 9950,
      photoUrl: '/photos/cars/ford-fiesta-2014-9950.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c0ea7d002e6673ae636',
      company: 'Mazda',
      model: '6',
      year: 2015,
      kilometers: 343411,
      fuleType: 'Petrol',
      price: 21000,
      photoUrl: '/photos/cars/mazda-6-2015.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c13bfbade76e5f482bc',
      company: 'Merces-Benz',
      model: '200',
      year: 2015,
      kilometers: 111111,
      fuleType: 'Petrol',
      price: 24999,
      photoUrl: '/photos/cars/mercedes-benz-200-2015-24999.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c18b1b60f6e08be0d96',
      company: 'Merces-Benz',
      model: 'e250',
      year: 2011,
      kilometers: 123443,
      fuleType: 'Diesel',
      price: 29800,
      photoUrl: '/photos/cars/mercedes-benz-e250-2011-29800.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c1d5b609e95c9a439fb',
      company: 'Peugeot',
      model: '3008',
      year: 2014,
      kilometers: 77000,
      fuleType: 'Petrol',
      price: 18999,
      photoUrl: '/photos/cars/peugeot-3008-2014-17999.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c2546326c44a947ba0e',
      company: 'Renault',
      model: 'Clio',
      year: 2017,
      kilometers: 123133,
      fuleType: 'Diesel',
      price: 13485,
      photoUrl: '/photos/cars/renault-clio-2017-13485.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c2a548ce4ce108e90b1',
      company: 'Renault',
      model: 'Espace',
      year: 2004,
      kilometers: 123123,
      fuleType: 'Petrol',
      price: 9800,
      photoUrl: '/photos/cars/renault-espace-2004.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c2e2a22e7b31151e1c1',
      company: 'Renault',
      model: 'Megane IV',
      year: 2016,
      kilometers: 123123,
      fuleType: 'Diesel',
      price: 15890,
      photoUrl: '/photos/cars/renault-megane-2016-15890.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c33d61a379a0f59255b',
      company: 'Seat',
      model: 'Leon',
      year: 2010,
      kilometers: 44444,
      fuleType: 'Diesel',
      price: 13650,
      photoUrl: '/photos/cars/seat-leon-2010-13650.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c38ea504f22154c2dd3',
      company: 'Smart',
      model: 'for two',
      year: 2008,
      kilometers: 5534,
      fuleType: 'Diesel',
      price: 5800,
      photoUrl: '/photos/cars/smart-fortwo-2008-5800.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c3ee99b440611e9b83c',
      company: 'Smart',
      model: 'for two',
      year: 2012,
      kilometers: 43434,
      fuleType: 'Diesel',
      price: 7950,
      photoUrl: '/photos/cars/smart-fortwo-2012-7950.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c4479f2edc556642512',
      company: 'Smart',
      model: 'for two',
      year: 2003,
      kilometers: 343434,
      fuleType: 'Diesel',
      price: 8850,
      photoUrl: '/photos/cars/smart-fortwo-passion-2003-8888.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c4f873f4254570a503d',
      company: 'Smart',
      model: 'for two',
      year: 2015,
      kilometers: 343434,
      fuleType: 'Diesel',
      price: 11500,
      photoUrl: '/photos/cars/smart-fortwo-passion-2015-11500.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c570d1906b3b569e73e',
      company: 'Volkswagen',
      model: 'EOS',
      year: 2008,
      kilometers: 343434,
      fuleType: 'Diesel',
      price: 14700,
      photoUrl: '/photos/cars/volkswagen-eos-2008-14700.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c5cac45e7ff7640e0f3',
      company: 'Volkswagen',
      model: 'Golf',
      year: 2013,
      kilometers: 123123,
      fuleType: 'Diesel',
      price: 18300,
      photoUrl: '/photos/cars/volkswagen-golf-2013-18300.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      _id: '61e51c634673924b1cdc7a3a',
      company: 'Volkswagen',
      model: 'Tiguan',
      year: 2007,
      kilometers: 1231234,
      fuleType: 'Petrol',
      price: 14299,
      photoUrl: '/photos/cars/volkswagen-tiguan-2007-14299.jpg',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],

  faq: [
    {
      _id: '61e51c763085975341e0a147',
      question: 'How to be safe buying online',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
    },
    {
      _id: '61e51c840d22479a018ffece',
      question: 'Do I have any assurance on my new car?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
    },
    {
      _id: '61e51c8e764dbdcb3746a131',
      question: 'How many kilometers a normal car can have?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
    },
    {
      _id: '61e51c9adcc7ed94b06a3af4',
      question: 'What is the best month to buy a car?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
    },
    {
      _id: '61e51ccb94511d11a289df98',
      question: 'How to know the car history?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
    },
    {
      _id: '61e51cd7f0e0b6f7c25415d1',
      question: 'How much do I pay a month to use the service?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
    },
  ],
};

export default data;

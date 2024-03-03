#  Telephone Package
The program is a java script program that manages observers phone numbers and also notifies them.

## Features 
- Add phone numbers to the list of obsevers
- Delete phone numbers from the ist of observers
- Dial a phone number and notfy observers

## How it works
1. Installation : No installation is required. Just include the javascript file in your project and use.
2. To create a telephone instance; 
`const telephone = new Telephone();`
3. To create observers phone number;
`const phoneNumber1 = new ObserverNumber("+144745364625");`
`const phoneNumber2 = new ObserverNumber("+2348060811520");`
`const phoneNumber3 = new ObserverNumber("08060811520");`
4. To add and delete observer phone numbers;
`telephone.addNumber(phoneNumber1);`
`telephone.addNumber(phoneNumber2);`
`telephone.addNumber(phoneNumber3);`
5. To dial phone numbers;
`telephone.dialNumber(phoneNumber3);`

## Classses
### `Telephone` Class
1. The Constructor: used to initializes the observers set.
2. addNumber(observer): Adds a phone number observer to the set.
3. deleteNumber(observer): Deletes a phone number observer from the set.
4. dialNumber(context): Dials a phone number and notifies all observers.

### `observerNumber` Class
1. Constructor: Initializes a phone number observer with the provided number.
2. update(context): used to update the observer with the given context and performs logging operations on the console
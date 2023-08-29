interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = BusinessPartner & Identity & Contact;
type Customer = BusinessPartner & Contact;

const e: Employee = {
  name: 'duynghia',
  id: 1,
  email: 'duynghia@gmail.com',
  phone: '',
  credit: 1,
};

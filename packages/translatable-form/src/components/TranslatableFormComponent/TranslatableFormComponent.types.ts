export type TranslatableFormData = {
  firstName: string;
  lastName: string;
  contact: {
    email: string;
    phone: string;
  };
  address: {
    street: string;
    city: string;
    zip: string;
  };
};

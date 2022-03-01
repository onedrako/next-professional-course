const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/auth/${VERSION}/auth/login`,
    profile: `${API}/auth/${VERSION}/auth/profile`,
  },
  products: {
    getProducts: (id) => `${API}/products/${VERSION}/products/${id}`,
  },
};

export const normalizeUser = ({ firstname, name, company_name, ...user }) => ({
  firstname: firstname.toLowerCase(),
  name: name.toLowerCase(),
  company_name: company_name.toLowerCase(),
  ...user,
});
export const getBusiness = /* GraphQL */ `
  query GetBusiness($customURL: String!) {
    getBusiness(customURL: $customURL) {
      id
      customURL
`;
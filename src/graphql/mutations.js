/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
      id
      name
      customURL
      about
      instructions
      hours {
        MondayOpen
        MondayClose
        TuesdayOpen
        TuesdayClose
        WednesdayOpen
        WednesdayClose
        ThursdayOpen
        ThursdayClose
        FridayOpen
        FridayClose
        SaturdayOpen
        SaturdayClose
        SundayOpen
        SundayClose
      }
      guestLimit
      coverImage
      logoImage
      qrCode
      managerID
      manager {
        id
        name
        phoneNumber
        emailAddress
        role
        stripeID
        cognitoID
        employees {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      employees {
        items {
          id
          cognitoID
          managerID
          storeID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      customers {
        items {
          id
          name
          businessID
          phone
          email
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
      id
      name
      customURL
      about
      instructions
      hours {
        MondayOpen
        MondayClose
        TuesdayOpen
        TuesdayClose
        WednesdayOpen
        WednesdayClose
        ThursdayOpen
        ThursdayClose
        FridayOpen
        FridayClose
        SaturdayOpen
        SaturdayClose
        SundayOpen
        SundayClose
      }
      guestLimit
      coverImage
      logoImage
      qrCode
      managerID
      manager {
        id
        name
        phoneNumber
        emailAddress
        role
        stripeID
        cognitoID
        employees {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      employees {
        items {
          id
          cognitoID
          managerID
          storeID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      customers {
        items {
          id
          name
          businessID
          phone
          email
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
      id
      name
      customURL
      about
      instructions
      hours {
        MondayOpen
        MondayClose
        TuesdayOpen
        TuesdayClose
        WednesdayOpen
        WednesdayClose
        ThursdayOpen
        ThursdayClose
        FridayOpen
        FridayClose
        SaturdayOpen
        SaturdayClose
        SundayOpen
        SundayClose
      }
      guestLimit
      coverImage
      logoImage
      qrCode
      managerID
      manager {
        id
        name
        phoneNumber
        emailAddress
        role
        stripeID
        cognitoID
        employees {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      employees {
        items {
          id
          cognitoID
          managerID
          storeID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      customers {
        items {
          id
          name
          businessID
          phone
          email
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createManager = /* GraphQL */ `
  mutation CreateManager(
    $input: CreateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    createManager(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      emailAddress
      role
      stripeID
      cognitoID
      employees {
        items {
          id
          cognitoID
          managerID
          storeID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateManager = /* GraphQL */ `
  mutation UpdateManager(
    $input: UpdateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    updateManager(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      emailAddress
      role
      stripeID
      cognitoID
      employees {
        items {
          id
          cognitoID
          managerID
          storeID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteManager = /* GraphQL */ `
  mutation DeleteManager(
    $input: DeleteManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    deleteManager(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      emailAddress
      role
      stripeID
      cognitoID
      employees {
        items {
          id
          cognitoID
          managerID
          storeID
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      cognitoID
      managerID
      storeID
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      cognitoID
      managerID
      storeID
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      cognitoID
      managerID
      storeID
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      name
      businessID
      phone
      email
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      name
      businessID
      phone
      email
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      name
      businessID
      phone
      email
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;

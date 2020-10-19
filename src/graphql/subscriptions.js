/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness($owner: String) {
    onCreateBusiness(owner: $owner) {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness($owner: String) {
    onUpdateBusiness(owner: $owner) {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness($owner: String) {
    onDeleteBusiness(owner: $owner) {
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
export const onCreateManager = /* GraphQL */ `
  subscription OnCreateManager($owner: String) {
    onCreateManager(owner: $owner) {
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
export const onUpdateManager = /* GraphQL */ `
  subscription OnUpdateManager($owner: String) {
    onUpdateManager(owner: $owner) {
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
export const onDeleteManager = /* GraphQL */ `
  subscription OnDeleteManager($owner: String) {
    onDeleteManager(owner: $owner) {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($owner: String) {
    onCreateEmployee(owner: $owner) {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($owner: String) {
    onUpdateEmployee(owner: $owner) {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($owner: String) {
    onDeleteEmployee(owner: $owner) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($owner: String) {
    onCreateCustomer(owner: $owner) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($owner: String) {
    onUpdateCustomer(owner: $owner) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($owner: String!) {
    onDeleteCustomer(owner: $owner) {
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

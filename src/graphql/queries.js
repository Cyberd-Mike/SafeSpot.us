/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncManagers = /* GraphQL */ `
  query SyncManagers(
    $filter: ModelManagerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncManagers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getManager = /* GraphQL */ `
  query GetManager($id: ID!) {
    getManager(id: $id) {
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
export const listManagers = /* GraphQL */ `
  query ListManagers(
    $filter: ModelManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEmployees = /* GraphQL */ `
  query SyncEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmployees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
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
export const listBusinesss = /* GraphQL */ `
  query ListBusinesss(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          owner
        }
        employees {
          nextToken
          startedAt
        }
        customers {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const businessByName = /* GraphQL */ `
  query BusinessByName(
    $name: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BusinessByName(
      name: $name
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          owner
        }
        employees {
          nextToken
          startedAt
        }
        customers {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const businessbyUrl = /* GraphQL */ `
  query BusinessbyUrl(
    $customURL: String
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BusinessbyURL(
      customURL: $customURL
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          owner
        }
        employees {
          nextToken
          startedAt
        }
        customers {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBusinesses = /* GraphQL */ `
  query SyncBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusinesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          owner
        }
        employees {
          nextToken
          startedAt
        }
        customers {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;

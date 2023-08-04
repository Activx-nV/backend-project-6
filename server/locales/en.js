// @ts-check

export default {
  translation: {
    appName: 'Task manager',
    flash: {
      session: {
        create: {
          success: 'You are logged in',
          error: 'Wrong email or password',
        },
        delete: {
          success: 'You are logged out',
        },
      },
      users: {
        create: {
          error: 'Failed to register the user',
          success: 'User registered successfully',
        },
        update: {
          error: 'Failed to update the user',
          success: 'User updated successfully',
        },
        delete: {
          error: 'Failed to delete the user',
          success: 'User deleted successfully',
          noAccess: 'You have no access to delete this user',
        },
      },
      statuses: {
        create: {
          error: 'Failed to create the status',
          success: 'Status created successfully',
        },
        update: {
          error: 'Failed to update the status',
          update: 'Status updated successfully',
        },
        delete: {
          error: 'Failed to delete the status',
          success: 'Status deleted successfully',
        },
      },
      authError: 'Access denied! Please login',
      accessError: 'You have no access to delete or edit another user.',
    },
    layouts: {
      application: {
        users: 'Users',
        signIn: 'Login',
        signUp: 'Register',
        signOut: 'Logout',
        edit: 'Edit',
        statuses: 'Statuses',
        createStatus: 'Create status',
        statusEdit: 'Status update',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Login',
          submit: 'Login',
        },
      },
      users: {
        id: 'ID',
        email: 'Email',
        createdAt: 'Created at',
        new: {
          submit: 'Register',
          signUp: 'Register',
        },
        actions: 'Actions',
        update: 'Update',
        delete: 'Delete',
      },
      welcome: {
        index: {
          hello: 'Hello from Hexlet!',
          description: 'Online programming school',
          more: 'Learn more',
        },
      },
      statuses: {
        id: 'ID',
        name: 'Name',
        createdAt: 'Created at',
        createStatus: 'Create status',
        create: 'Create',
        delete: 'Delete',
        update: 'Update',
      },
    },
  },
};

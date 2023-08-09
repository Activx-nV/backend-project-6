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
      tasks: {
        update: {
          error: 'Failed to update the task',
          success: 'Task updated successfully',
        },
        create: {
          error: 'Failed to create the task',
          success: 'Task created successfully',
        },
        delete: {
          error: 'A task can only be deleted by its author.',
          success: 'Task deleted successfully',
        },
      },
      labels: {
        update: {
          error: 'Failed to update the label',
          success: 'Label updated successfully',
        },
        create: {
          error: 'Failed to create the label',
          success: 'Label successfully created',
        },
        delete: {
          error: 'Failed to delete the label',
          success: 'Label successfully deleted',
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
        createStatus: 'Creation of a status',
        statusEdit: 'Status update',
        tasks: 'Tasks',
        createTask: 'Creation of a task',
        updateTask: 'Task update',
        labels: 'Labels',
        createLabel: 'Create a label',
        labelEdit: 'Label update',
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
        firstName: 'First name',
        lastName: 'Last name',
        password: 'Password',
        fullName: 'Full name',
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
        createStatus: 'Create a status',
        create: 'Create',
        delete: 'Delete',
        update: 'Update',
      },
      tasks: {
        id: 'ID',
        name: 'Name',
        status: 'Status',
        author: 'Author',
        executor: 'Executor',
        createdAt: 'Created at',
        create: 'Create a task',
        delete: 'Delete',
        update: 'Update',
        actions: 'Actions',
        description: 'Description',
        label: 'Label',
        labels: 'Labels',
        show: 'Show',
        onlyMyTasks: 'Only my tasks',
        new: {
          create: 'Create',
        },
      },
      labels: {
        id: 'ID',
        name: 'Name',
        createdAt: 'Creation date',
        actions: 'Actions',
        create: 'Create',
        update: 'Update',
        delete: 'Delete',
        createLabel: 'Create a label',
      },
    },
  },
};
